import {
  deletePrivateFile,
  envReady,
  json,
  requestReference,
  requiredText,
  safeError,
  serviceRequest,
  signedFileUrl,
  unavailable,
  uploadPrivateFiles,
  validEmail,
} from './_shared.mjs';

const list = async (table, query) => serviceRequest(`/rest/v1/${table}?${query}`);
const one = async (table, query) => (await list(table, `${query}&limit=1`))[0] || null;
const stringArray = (value, label, max = 20) => {
  if (!Array.isArray(value) || value.length === 0 || value.length > max || value.some((item) => typeof item !== 'string' || item.trim().length > 120)) {
    throw new Error(`Select at least one valid ${label}.`);
  }
  return [...new Set(value.map((item) => item.trim()).filter(Boolean))];
};
const validUploads = (body) => Array.isArray(body.attachments) ? body.attachments : [];
const signAttachments = async (items = []) => Promise.all(items.map(async (item) => ({
  ...item,
  url: item.path ? await signedFileUrl(item.path) : null,
})));

async function handleGet(request) {
  const url = new URL(request.url);
  const resource = url.searchParams.get('resource');
  const slug = url.searchParams.get('slug');
  if (resource === 'projects') {
    const projects = await list('energy_projects', 'select=id,slug,title,country,state,city,category,description,capacity_kw,beneficiaries_households,beneficiaries_businesses,beneficiaries_institutions,total_cost,capital_required,capital_committed,currency_code,financial_details,development_stage,funding_status,technical_details,investment_terms,impact_details,milestones,public_documents,cover_image_path,is_published&is_published=eq.true&order=created_at.desc');
    return json(request, { projects: await Promise.all(projects.map(async (project) => ({
      ...project,
      cover_image_url: project.cover_image_path ? await signedFileUrl(project.cover_image_path) : null,
      documents: await signAttachments(project.public_documents || []),
    }))) });
  }
  if (resource === 'project' && slug) {
    const project = await one('energy_projects', `select=id,slug,title,country,state,city,category,description,energy_problem,proposed_solution,capacity_kw,beneficiaries_households,beneficiaries_businesses,beneficiaries_institutions,total_cost,capital_required,capital_committed,currency_code,financial_details,development_stage,funding_status,technical_details,investment_terms,impact_details,milestones,public_documents,cover_image_path,is_published&slug=eq.${encodeURIComponent(slug)}&is_published=eq.true`);
    if (!project) return json(request, { error: 'Project not found.' }, 404);
    return json(request, { project: {
      ...project,
      cover_image_url: project.cover_image_path ? await signedFileUrl(project.cover_image_path) : null,
      documents: await signAttachments(project.public_documents || []),
    } });
  }
  if (resource === 'professionals') {
    const professionals = await list('solar_professionals', 'select=id,slug,full_name,title,country,state,city,service_coverage,biography,experience_years,expertise,services,qualifications,public_portfolio_paths,verified,status&verified=eq.true&status=eq.published&order=created_at.desc');
    const reviews = await list('professional_reviews', 'select=professional_id,rating&approved_at=not.is.null');
    return json(request, { professionals: await Promise.all(professionals.map(async (professional) => ({
      ...professional,
      reviews_count: reviews.filter((review) => review.professional_id === professional.id).length,
      average_rating: reviews.filter((review) => review.professional_id === professional.id).length
        ? reviews.filter((review) => review.professional_id === professional.id).reduce((sum, review) => sum + review.rating, 0) / reviews.filter((review) => review.professional_id === professional.id).length
        : null,
      portfolio: await signAttachments(professional.public_portfolio_paths || []),
    }))) });
  }
  if (resource === 'professional' && slug) {
    const professional = await one('solar_professionals', 'select=id,slug,full_name,title,country,state,city,service_coverage,biography,experience_years,expertise,services,qualifications,public_portfolio_paths,verified,status&verified=eq.true&status=eq.published&slug=eq.' + encodeURIComponent(slug));
    if (!professional) return json(request, { error: 'Professional not found.' }, 404);
    const reviews = await list('professional_reviews', `select=rating,feedback,review_date&professional_id=eq.${encodeURIComponent(professional.id)}&approved_at=not.is.null&order=review_date.desc`);
    return json(request, { professional: { ...professional, reviews, portfolio: await signAttachments(professional.public_portfolio_paths || []) } });
  }
  return json(request, { error: 'Unknown marketplace resource.' }, 404);
}

async function handlePost(request) {
  const body = await request.json();
  const action = body.action;
  if (action === 'professional-application') {
    const fullName = requiredText(body, 'fullName', 160);
    const email = requiredText(body, 'email', 254).toLowerCase();
    if (!validEmail(email)) throw new Error('Enter a valid email address.');
    const experience = Number(body.experienceYears);
    if (!Number.isInteger(experience) || experience < 0 || experience > 70) throw new Error('Enter professional experience from 0 to 70 years.');
    if (body.consent !== true) throw new Error('Please confirm the privacy notice before submitting.');
    const files = await uploadPrivateFiles(validUploads(body), `applications/${crypto.randomUUID()}`);
    const reference = requestReference('PRO');
    try {
      const [application] = await serviceRequest('/rest/v1/professional_applications', {
        method: 'POST',
        body: {
          reference,
          full_name: fullName,
          email,
          phone: requiredText(body, 'phone', 50),
          country: requiredText(body, 'country', 100),
          state: typeof body.state === 'string' ? body.state.trim().slice(0, 100) : null,
          city: typeof body.city === 'string' ? body.city.trim().slice(0, 100) : null,
          experience_years: experience,
          title: requiredText(body, 'title', 160),
          biography: requiredText(body, 'biography', 2500),
          expertise: stringArray(body.expertise, 'specialisations'),
          services: stringArray(body.services, 'services'),
          qualifications: stringArray(body.qualifications, 'qualifications'),
          previous_experience: typeof body.previousExperience === 'string' ? body.previousExperience.trim().slice(0, 2500) : null,
          attachment_paths: files,
          consent_at: new Date().toISOString(),
        },
      });
      return json(request, { reference: application.reference, status: 'pending', message: 'Your professional application has been received for review.' }, 201);
    } catch (error) {
      await Promise.all(files.map((file) => deletePrivateFile(file.path)));
      throw error;
    }
  }

  if (action === 'service-request') {
    const professionalId = requiredText(body, 'professionalId', 64);
    const professional = await one('solar_professionals', `select=id&status=eq.published&verified=eq.true&id=eq.${encodeURIComponent(professionalId)}`);
    if (!professional) return json(request, { error: 'This professional is not available for service requests.' }, 404);
    const email = requiredText(body, 'email', 254).toLowerCase();
    if (!validEmail(email)) throw new Error('Enter a valid email address.');
    if (body.consent !== true) throw new Error('Please confirm the privacy notice before submitting.');
    const files = await uploadPrivateFiles(validUploads(body), `service-requests/${crypto.randomUUID()}`);
    const reference = requestReference('SR');
    try {
      const [record] = await serviceRequest('/rest/v1/service_requests', {
        method: 'POST',
        body: {
          reference,
          professional_id: professionalId,
          full_name: requiredText(body, 'fullName', 160),
          email,
          phone: requiredText(body, 'phone', 50),
          location: requiredText(body, 'location', 250),
          service_type: requiredText(body, 'serviceType', 160),
          description: requiredText(body, 'description', 3000),
          preferred_date: body.preferredDate || null,
          attachment_paths: files,
          consent_at: new Date().toISOString(),
        },
      });
      return json(request, { reference: record.reference, message: 'Your service request has been submitted to Renerr for coordination.' }, 201);
    } catch (error) {
      await Promise.all(files.map((file) => deletePrivateFile(file.path)));
      throw error;
    }
  }

  if (action === 'investment-interest') {
    const projectId = requiredText(body, 'projectId', 64);
    const project = await one('energy_projects', `select=id&is_published=eq.true&funding_status=eq.open_for_investment&id=eq.${encodeURIComponent(projectId)}`);
    if (!project) return json(request, { error: 'This project is not currently open for investment enquiries.' }, 404);
    const email = requiredText(body, 'email', 254).toLowerCase();
    if (!validEmail(email)) throw new Error('Enter a valid email address.');
    const amount = body.intendedAmount === '' || body.intendedAmount == null ? null : Number(body.intendedAmount);
    if (amount != null && (!Number.isFinite(amount) || amount < 0)) throw new Error('Enter a non-negative intended amount or leave it blank.');
    if (!['individual', 'collective'].includes(body.participation)) throw new Error('Choose individual or collective participation.');
    if (body.consent !== true) throw new Error('Please confirm the privacy notice before submitting.');
    const reference = requestReference('EI');
    const [record] = await serviceRequest('/rest/v1/investment_enquiries', {
      method: 'POST',
      body: {
        reference,
        project_id: projectId,
        full_name: requiredText(body, 'fullName', 160),
        email,
        country_of_residence: requiredText(body, 'countryOfResidence', 100),
        phone: typeof body.phone === 'string' ? body.phone.trim().slice(0, 50) : null,
        intended_amount: amount,
        participation: body.participation,
        comments: typeof body.comments === 'string' ? body.comments.trim().slice(0, 2500) : null,
        consent_at: new Date().toISOString(),
      },
    });
    return json(request, { reference: record.reference, message: 'Thank you for your interest in this energy project. Our investment team will review your enquiry and contact you with further information.' }, 201);
  }
  if (action === 'professional-review') {
    const reference = requiredText(body, 'reference', 60).toUpperCase();
    const email = requiredText(body, 'email', 254).toLowerCase();
    if (!validEmail(email)) throw new Error('Enter a valid email address.');
    const [requestRecord] = await serviceRequest(`/rest/v1/service_requests?select=id,professional_id&reference=eq.${encodeURIComponent(reference)}&email=eq.${encodeURIComponent(email)}&status=eq.completed&limit=1`);
    if (!requestRecord) return json(request, { error: 'A completed service request matching those details was not found.' }, 404);
    const rating = Number(body.rating);
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) throw new Error('Choose a rating from 1 to 5.');
    const [review] = await serviceRequest('/rest/v1/professional_reviews', { method: 'POST', body: {
      professional_id: requestRecord.professional_id,
      service_request_id: requestRecord.id,
      rating,
      feedback: requiredText(body, 'feedback', 2000),
    } });
    return json(request, { message: 'Your review has been received and will be published after Renerr review.', reviewId: review.id }, 201);
  }
  return json(request, { error: 'Unknown marketplace action.' }, 400);
}

export default async (request) => {
  if (request.method === 'OPTIONS') return json(request, {}, 204);
  if (!envReady()) return unavailable(request);
  try {
    if (request.method === 'GET') return await handleGet(request);
    if (request.method === 'POST') return await handlePost(request);
    return json(request, { error: 'Method not allowed.' }, 405);
  } catch (error) {
    return safeError(request, error);
  }
};
