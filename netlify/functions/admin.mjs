import {
  envReady,
  json,
  requiredText,
  safeError,
  serviceRequest,
  signedFileUrl,
  unavailable,
  uploadPrivateFiles,
} from './_shared.mjs';

const stages = new Set(['under_assessment', 'in_development', 'open_for_investment', 'funding_target_reached', 'installation_in_progress', 'operational', 'completed']);
const enquiryStatuses = new Set(['new', 'under_review', 'contacted', 'further_information_requested', 'in_discussion', 'converted', 'completed', 'closed']);

async function assertAdmin(request) {
  const token = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  const url = process.env.SUPABASE_URL?.replace(/\/$/, '');
  const anon = process.env.SUPABASE_ANON_KEY;
  if (!token || !url || !anon) throw new Error('Sign in with an administrator account.');
  const userResponse = await fetch(`${url}/auth/v1/user`, { headers: { apikey: anon, authorization: `Bearer ${token}` } });
  if (!userResponse.ok) throw new Error('Your administrator session has expired. Please sign in again.');
  const user = await userResponse.json();
  const admins = await serviceRequest(`/rest/v1/admin_users?select=user_id&user_id=eq.${encodeURIComponent(user.id)}&limit=1`);
  if (!admins.length) {
    const error = new Error('This account is not approved for Renerr administration.');
    error.status = 403;
    throw error;
  }
  return user;
}

async function dashboardData() {
  const paths = {
    projects: '/rest/v1/energy_projects?select=id,slug,title,country,state,city,category,description,energy_problem,proposed_solution,capacity_kw,beneficiaries_households,beneficiaries_businesses,beneficiaries_institutions,total_cost,capital_required,capital_committed,currency_code,financial_details,technical_details,investment_terms,impact_details,milestones,public_documents,cover_image_path,development_stage,funding_status,is_published,created_at&order=created_at.desc',
    applications: '/rest/v1/professional_applications?select=id,reference,full_name,email,phone,country,state,city,experience_years,title,biography,expertise,services,qualifications,previous_experience,attachment_paths,status,created_at&order=created_at.desc',
    professionals: '/rest/v1/solar_professionals?select=id,slug,full_name,title,country,state,city,service_coverage,biography,experience_years,expertise,services,qualifications,public_portfolio_paths,verified,status,created_at&order=created_at.desc',
    serviceRequests: '/rest/v1/service_requests?select=id,reference,professional_id,full_name,email,phone,location,service_type,description,preferred_date,attachment_paths,status,created_at&order=created_at.desc',
    investmentEnquiries: '/rest/v1/investment_enquiries?select=id,reference,project_id,full_name,email,country_of_residence,phone,intended_amount,participation,comments,status,created_at&order=created_at.desc',
    reviews: '/rest/v1/professional_reviews?select=id,professional_id,service_request_id,rating,feedback,review_date,approved_at,created_at&order=created_at.desc',
  };
  const entries = await Promise.all(Object.entries(paths).map(async ([key, path]) => [key, await serviceRequest(path)]));
  const data = Object.fromEntries(entries);
  data.applications = await Promise.all(data.applications.map(async (row) => ({
    ...row,
    attachments: await Promise.all((row.attachment_paths || []).map(async (file) => ({ ...file, url: await signedFileUrl(file.path) }))),
  })));
  data.serviceRequests = await Promise.all(data.serviceRequests.map(async (row) => ({
    ...row,
    attachments: await Promise.all((row.attachment_paths || []).map(async (file) => ({ ...file, url: await signedFileUrl(file.path) }))),
  })));
  return data;
}

async function saveProject(body) {
  const slug = requiredText(body, 'slug', 120).toLowerCase().replace(/[^a-z0-9-]/g, '-');
  const stage = body.developmentStage;
  if (!stages.has(stage)) throw new Error('Choose a valid project development stage.');
  const category = requiredText(body, 'category', 100);
  const capacity = body.capacityKw === '' || body.capacityKw == null ? null : Number(body.capacityKw);
  const totalCost = body.totalCost === '' || body.totalCost == null ? null : Number(body.totalCost);
  const capitalRequired = body.capitalRequired === '' || body.capitalRequired == null ? null : Number(body.capitalRequired);
  const capitalCommitted = body.capitalCommitted === '' || body.capitalCommitted == null ? 0 : Number(body.capitalCommitted);
  for (const [label, value] of [['Capacity', capacity], ['Total project cost', totalCost], ['Capital required', capitalRequired], ['Committed capital', capitalCommitted]]) {
    if (value != null && (!Number.isFinite(value) || value < 0)) throw new Error(`${label} must be a non-negative number.`);
  }
  const project = {
    slug,
    title: requiredText(body, 'title', 200),
    country: requiredText(body, 'country', 100),
    state: typeof body.state === 'string' ? body.state.trim().slice(0, 100) : null,
    city: typeof body.city === 'string' ? body.city.trim().slice(0, 100) : null,
    category,
    description: requiredText(body, 'description', 5000),
    energy_problem: typeof body.energyProblem === 'string' ? body.energyProblem.trim().slice(0, 3000) : null,
    proposed_solution: typeof body.proposedSolution === 'string' ? body.proposedSolution.trim().slice(0, 3000) : null,
    capacity_kw: capacity,
    beneficiaries_households: Number.isInteger(Number(body.households)) && body.households !== '' ? Number(body.households) : null,
    beneficiaries_businesses: Number.isInteger(Number(body.businesses)) && body.businesses !== '' ? Number(body.businesses) : null,
    beneficiaries_institutions: Number.isInteger(Number(body.institutions)) && body.institutions !== '' ? Number(body.institutions) : null,
    total_cost: totalCost,
    capital_required: capitalRequired,
    capital_committed: capitalCommitted,
    currency_code: typeof body.currencyCode === 'string' ? body.currencyCode.trim().toUpperCase().slice(0,3) || null : null,
    financial_details: body.financialDetails && typeof body.financialDetails === 'object' ? body.financialDetails : {},
    development_stage: stage,
    funding_status: stage === 'open_for_investment' ? 'open_for_investment' : (body.fundingStatus || 'not_open'),
    investment_terms: body.investmentTerms && typeof body.investmentTerms === 'object' ? body.investmentTerms : {},
    technical_details: body.technicalDetails && typeof body.technicalDetails === 'object' ? body.technicalDetails : {},
    impact_details: body.impactDetails && typeof body.impactDetails === 'object' ? body.impactDetails : {},
    milestones: Array.isArray(body.milestones) ? body.milestones : [],
    public_documents: Array.isArray(body.publicDocuments) ? body.publicDocuments : [],
    cover_image_path: typeof body.coverImagePath === 'string' ? body.coverImagePath : null,
    is_published: body.isPublished === true,
    updated_at: new Date().toISOString(),
  };
  const id = typeof body.id === 'string' ? body.id : null;
  if (id) {
    const [updated] = await serviceRequest(`/rest/v1/energy_projects?id=eq.${encodeURIComponent(id)}`, { method: 'PATCH', body: project });
    return updated;
  }
  const [created] = await serviceRequest('/rest/v1/energy_projects', { method: 'POST', body: project });
  return created;
}

async function handlePost(body, user) {
  if (body.action === 'project-save') return { project: await saveProject(body.project || {}) };
  if (body.action === 'project-status') {
    const id = requiredText(body, 'id', 64);
    const isPublished = body.isPublished === true;
    const stage = body.developmentStage;
    if (!stages.has(stage)) throw new Error('Choose a valid project development stage.');
    const [project] = await serviceRequest(`/rest/v1/energy_projects?id=eq.${encodeURIComponent(id)}`, { method: 'PATCH', body: { is_published: isPublished, development_stage: stage, funding_status: stage === 'open_for_investment' ? 'open_for_investment' : 'not_open', updated_at: new Date().toISOString() } });
    return { project };
  }
  if (body.action === 'project-archive') {
    const [project] = await serviceRequest(`/rest/v1/energy_projects?id=eq.${encodeURIComponent(requiredText(body, 'id', 64))}`, { method: 'PATCH', body: { is_published: false, funding_status: 'not_open', updated_at: new Date().toISOString() } });
    return { project };
  }
  if (body.action === 'project-upload') {
    const files = await uploadPrivateFiles([body.file], `projects/${crypto.randomUUID()}`);
    return { file: files[0] };
  }
  if (body.action === 'application-review') {
    const id = requiredText(body, 'id', 64);
    const decision = body.decision;
    if (!['approve', 'reject', 'request_information'].includes(decision)) throw new Error('Choose a supported review decision.');
    const [application] = await serviceRequest(`/rest/v1/professional_applications?id=eq.${encodeURIComponent(id)}&select=*`);
    if (!application) return { error: 'Application not found.' };
    if (decision === 'approve') {
      const slug = `${application.full_name.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-')}-${crypto.randomUUID().slice(0, 6)}`;
      const [profile] = await serviceRequest('/rest/v1/solar_professionals', { method: 'POST', body: {
        application_id: id,
        slug,
        full_name: application.full_name,
        title: application.title,
        country: application.country,
        state: application.state,
        city: application.city,
        service_coverage: [application.city, application.state].filter(Boolean),
        biography: application.biography,
        experience_years: application.experience_years,
        expertise: application.expertise,
        services: application.services,
        qualifications: application.qualifications,
        private_document_paths: application.attachment_paths,
        verified: true,
        status: body.publish === true ? 'published' : 'approved',
      } });
      const [updated] = await serviceRequest(`/rest/v1/professional_applications?id=eq.${encodeURIComponent(id)}`, { method: 'PATCH', body: { status: 'approved', internal_notes: String(body.notes || '').slice(0, 3000) } });
      return { professional: profile, application: updated };
    }
    const status = decision === 'reject' ? 'rejected' : 'information_requested';
    const [updated] = await serviceRequest(`/rest/v1/professional_applications?id=eq.${encodeURIComponent(id)}`, { method: 'PATCH', body: { status, internal_notes: String(body.notes || '').slice(0, 3000) } });
    return { application: updated };
  }
  if (body.action === 'professional-update') {
    const changes = {};
    if (typeof body.verified === 'boolean') changes.verified = body.verified;
    if (['approved', 'published', 'suspended', 'unpublished'].includes(body.status)) changes.status = body.status;
    if (Array.isArray(body.publicPortfolioPaths)) changes.public_portfolio_paths = body.publicPortfolioPaths;
    for (const [input, column, max] of [['fullName','full_name',160],['title','title',160],['country','country',100],['state','state',100],['city','city',100],['biography','biography',2500]]) {
      if (typeof body[input] === 'string') changes[column] = body[input].trim().slice(0, max);
    }
    if (Number.isInteger(Number(body.experienceYears)) && body.experienceYears !== '') changes.experience_years = Number(body.experienceYears);
    for (const [input, column] of [['expertise','expertise'],['services','services'],['qualifications','qualifications'],['serviceCoverage','service_coverage']]) {
      if (Array.isArray(body[input])) changes[column] = body[input].filter((item) => typeof item === 'string').map((item) => item.trim().slice(0, 120)).filter(Boolean);
    }
    changes.updated_at = new Date().toISOString();
    const [professional] = await serviceRequest(`/rest/v1/solar_professionals?id=eq.${encodeURIComponent(requiredText(body, 'id', 64))}`, { method: 'PATCH', body: changes });
    return { professional };
  }
  if (body.action === 'enquiry-update') {
    if (!enquiryStatuses.has(body.status)) throw new Error('Choose a valid enquiry status.');
    const table = body.kind === 'investment' ? 'investment_enquiries' : body.kind === 'service' ? 'service_requests' : null;
    if (!table) throw new Error('Choose a valid enquiry type.');
    const [enquiry] = await serviceRequest(`/rest/v1/${table}?id=eq.${encodeURIComponent(requiredText(body, 'id', 64))}`, { method: 'PATCH', body: { status: body.status, internal_notes: String(body.notes || '').slice(0, 3000) } });
    return { enquiry };
  }
  if (body.action === 'review-moderation') {
    const id = requiredText(body, 'id', 64);
    if (!['approve', 'reject'].includes(body.decision)) throw new Error('Choose approve or reject for the review.');
    const changes = body.decision === 'approve' ? { approved_by: user.id, approved_at: new Date().toISOString() } : { approved_by: null, approved_at: null };
    const [review] = await serviceRequest(`/rest/v1/professional_reviews?id=eq.${encodeURIComponent(id)}`, { method: 'PATCH', body: changes });
    return { review };
  }
  return { error: 'Unknown admin action.' };
}

export default async (request) => {
  if (request.method === 'OPTIONS') return json(request, {}, 204);
  if (!envReady()) return unavailable(request);
  try {
    const user = await assertAdmin(request);
    if (request.method === 'GET') return json(request, await dashboardData());
    if (request.method === 'POST') return json(request, await handlePost(await request.json(), user));
    return json(request, { error: 'Method not allowed.' }, 405);
  } catch (error) {
    return safeError(request, error);
  }
};
