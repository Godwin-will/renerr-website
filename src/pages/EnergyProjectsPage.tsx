import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Sun } from 'lucide-react';
import { getMarketplace } from '../utils/marketplaceApi';

type EnergyProject = {
  id: string; slug: string; title: string; country: string; state?: string; city?: string;
  category: string; description: string; capacity_kw?: number | null; beneficiaries_households?: number | null;
  total_cost?: number | null; capital_required?: number | null; capital_committed?: number | null;
  currency_code?: string | null; development_stage: string; funding_status: string; cover_image_url?: string | null;
};

const statusLabels: Record<string, string> = {
  under_assessment: 'Under Assessment', in_development: 'In Development', open_for_investment: 'Open for Investment',
  funding_target_reached: 'Funding Target Reached', installation_in_progress: 'Installation in Progress', operational: 'Operational', completed: 'Completed',
};

const amount = (value?: number | null, currency?: string | null) => value == null || !currency
  ? 'Not published'
  : new Intl.NumberFormat('en', { style: 'currency', currency, maximumFractionDigits: 0 }).format(value);

export const EnergyProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<EnergyProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  const [stage, setStage] = useState('');
  const [fundingStatus, setFundingStatus] = useState('');
  const [maxCapital, setMaxCapital] = useState('');
  const [maxCapacity, setMaxCapacity] = useState('');

  useEffect(() => {
    getMarketplace<{ projects: EnergyProject[] }>('projects')
      .then((data) => setProjects(data.projects || []))
      .catch((cause: Error) => setError(cause.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => projects.filter((project) => {
    const haystack = `${project.title} ${project.description} ${project.country} ${project.state || ''} ${project.city || ''} ${project.category}`.toLowerCase();
    return (!search || haystack.includes(search.toLowerCase()))
      && (!country || project.country === country)
      && (!category || project.category === category)
      && (!stage || project.development_stage === stage)
      && (!fundingStatus || project.funding_status === fundingStatus)
      && (!maxCapital || Number(project.capital_required || 0) <= Number(maxCapital))
      && (!maxCapacity || Number(project.capacity_kw || 0) <= Number(maxCapacity));
  }), [projects, search, country, category, stage, fundingStatus, maxCapital, maxCapacity]);
  const countries = [...new Set(projects.map((project) => project.country))].sort();
  const categories = [...new Set(projects.map((project) => project.category))].sort();

  return <div>
    <section className="bg-brand-dark text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 items-center gap-10">
        <div className="lg:col-span-7 space-y-5"><p className="text-xs font-bold uppercase tracking-widest text-brand-accent">Renerr Energy Projects</p><h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Invest in Energy. Power Communities.</h1><p className="text-base sm:text-lg leading-relaxed text-gray-300">Discover renewable energy projects across Africa and explore opportunities to finance the infrastructure that brings reliable electricity to households, businesses and communities.</p><div className="flex flex-col sm:flex-row gap-3 pt-2"><a href="#available-projects" className="rounded-xl bg-brand-accent px-5 py-3 text-center text-sm font-bold text-brand-dark">Explore Available Projects</a><a href="#how-investment-works" className="rounded-xl border border-white/30 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10">How It Works</a></div></div>
        <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-white/5 p-7"><div className="grid grid-cols-3 items-center gap-3 text-center"><div className="rounded-2xl bg-white p-4 text-brand-dark"><Sun className="mx-auto text-brand-primary"/><p className="mt-2 text-xs font-bold">Energy needs</p></div><ArrowRight className="mx-auto text-brand-accent"/><div className="rounded-2xl bg-brand-accent p-4 text-brand-dark"><Sun className="mx-auto"/><p className="mt-2 text-xs font-bold">Infrastructure</p></div></div><p className="mt-4 text-center text-xs text-gray-300">Diaspora capital can help develop energy infrastructure; household electricity payments support project operations.</p></div>
      </div>
    </section>

    <section id="how-investment-works" className="scroll-mt-20 bg-brand-cream py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7"><div className="max-w-3xl space-y-2"><p className="text-xs font-bold uppercase tracking-widest text-brand-primary">How diaspora investment works</p><h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">From local need to project opportunity.</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          ['01', 'Identify Energy Needs', 'Renerr identifies communities and businesses that need reliable electricity and assesses their energy requirements.'],
          ['02', 'Develop Viable Projects', 'We conduct technical assessments, determine appropriate system sizes, estimate costs and develop suitable energy projects.'],
          ['03', 'Connect Projects with Investors', 'Opportunities are presented for Africans in the diaspora to discover and express individual or collective investment interest.'],
          ['04', 'Deliver Reliable Electricity', 'Renerr coordinates development, procurement and installation. Households and businesses access electricity through pay-as-you-go arrangements.'],
        ].map(([step, title, text])=><article key={step} className="rounded-2xl border border-brand-dark/10 bg-white p-5"><p className="text-xs font-bold text-brand-primary">{step}</p><h3 className="mt-2 font-bold text-brand-dark">{title}</h3><p className="mt-2 text-sm leading-relaxed text-brand-muted">{text}</p></article>)}
      </div></div>
    </section>

    <section id="available-projects" className="scroll-mt-20 bg-white py-14 sm:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"><div className="space-y-2"><p className="text-xs font-bold uppercase tracking-widest text-brand-primary">Project marketplace</p><h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">Explore Energy Projects</h2><p className="max-w-2xl text-sm sm:text-base text-brand-muted">Only projects approved for publication appear here. No funding commitments or returns are implied by an expression of interest.</p></div>{!loading && projects.length > 0 && <label className="relative"><span className="sr-only">Search projects</span><Search className="absolute left-3 top-3 text-brand-muted" size={17}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search projects" className="w-full sm:w-64 rounded-xl border border-brand-dark/20 py-2.5 pl-10 pr-3 text-sm"/></label>}</div>

        {!loading && projects.length > 0 && <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3"><label className="text-xs font-semibold text-brand-charcoal">Country<select value={country} onChange={e=>setCountry(e.target.value)} className="mt-1 block w-full rounded-lg border border-brand-dark/20 bg-white p-2.5 text-sm"><option value="">All countries</option>{countries.map(value=><option key={value}>{value}</option>)}</select></label><label className="text-xs font-semibold text-brand-charcoal">Category<select value={category} onChange={e=>setCategory(e.target.value)} className="mt-1 block w-full rounded-lg border border-brand-dark/20 bg-white p-2.5 text-sm"><option value="">All categories</option>{categories.map(value=><option key={value}>{value}</option>)}</select></label><label className="text-xs font-semibold text-brand-charcoal">Development stage<select value={stage} onChange={e=>setStage(e.target.value)} className="mt-1 block w-full rounded-lg border border-brand-dark/20 bg-white p-2.5 text-sm"><option value="">All stages</option>{Object.entries(statusLabels).map(([key,value])=><option value={key} key={key}>{value}</option>)}</select></label><label className="text-xs font-semibold text-brand-charcoal">Funding status<select value={fundingStatus} onChange={e=>setFundingStatus(e.target.value)} className="mt-1 block w-full rounded-lg border border-brand-dark/20 bg-white p-2.5 text-sm"><option value="">All statuses</option><option value="open_for_investment">Open for Investment</option><option value="not_open">Not Open</option></select></label><label className="text-xs font-semibold text-brand-charcoal">Maximum capital required<input type="number" min="0" value={maxCapital} onChange={e=>setMaxCapital(e.target.value)} className="mt-1 block w-full rounded-lg border border-brand-dark/20 bg-white p-2.5 text-sm" placeholder="Any amount"/></label><label className="text-xs font-semibold text-brand-charcoal">Maximum capacity (kW)<input type="number" min="0" value={maxCapacity} onChange={e=>setMaxCapacity(e.target.value)} className="mt-1 block w-full rounded-lg border border-brand-dark/20 bg-white p-2.5 text-sm" placeholder="Any size"/></label></div>}

        {loading && <p className="rounded-2xl bg-brand-cream p-7 text-center text-sm text-brand-muted">Loading published projects…</p>}
        {!loading && error && <div role="status" className="rounded-2xl border border-amber-200 bg-amber-50 p-6"><h3 className="font-bold text-brand-dark">Project listings are not connected yet</h3><p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">{error}</p></div>}
        {!loading && !error && projects.length === 0 && <div className="rounded-3xl border border-dashed border-brand-dark/20 bg-brand-cream px-6 py-12 text-center"><Sun className="mx-auto text-brand-primary"/><h3 className="mt-3 text-lg font-bold text-brand-dark">No projects are published at the moment</h3><p className="mt-2 text-sm text-brand-muted">Project opportunities will appear here when Renerr has assessed and approved them for publication.</p><Link to="/contact" className="mt-5 inline-flex rounded-xl bg-brand-dark px-5 py-3 text-sm font-bold text-white">Contact Renerr</Link></div>}
        {!loading && !error && projects.length > 0 && filtered.length === 0 && <p className="rounded-2xl bg-brand-cream p-7 text-center text-sm text-brand-muted">No published projects match these filters.</p>}
        {!loading && !error && filtered.length > 0 && <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">{filtered.map(project=>{const remaining=project.capital_required!=null&&project.capital_committed!=null?Math.max(project.capital_required-project.capital_committed,0):null;const progress=project.capital_required&&project.capital_required>0&&project.capital_committed!=null?Math.min(100,Math.round(project.capital_committed/project.capital_required*100)):null;return <article key={project.id} className="overflow-hidden rounded-2xl border border-brand-dark/10 bg-white shadow-sm"><div className="h-44 bg-brand-light">{project.cover_image_url ? <img src={project.cover_image_url} alt="" className="h-full w-full object-cover"/> : <div className="grid h-full place-items-center"><Sun className="text-brand-primary" size={38}/></div>}</div><div className="p-5 space-y-3"><div className="flex flex-wrap justify-between gap-2"><span className="text-[11px] font-semibold text-brand-primary">{project.category}</span><span className="rounded-full bg-brand-light px-2.5 py-1 text-[10px] font-semibold text-brand-dark">{statusLabels[project.development_stage] || 'In Development'}</span></div><h3 className="text-lg font-bold text-brand-dark">{project.title}</h3><p className="text-xs text-brand-muted">{[project.city,project.state,project.country].filter(Boolean).join(', ')}</p><p className="text-sm leading-relaxed text-brand-charcoal/80 line-clamp-3">{project.description}</p><div className="grid grid-cols-2 gap-3 border-t border-brand-dark/10 pt-3 text-xs"><div><p className="text-brand-muted">Proposed capacity</p><p className="mt-1 font-semibold text-brand-dark">{project.capacity_kw != null ? `${project.capacity_kw} kW` : 'Not published'}</p></div><div><p className="text-brand-muted">Capital required</p><p className="mt-1 font-semibold text-brand-dark">{amount(project.capital_required, project.currency_code)}</p></div><div><p className="text-brand-muted">Expected households</p><p className="mt-1 font-semibold text-brand-dark">{project.beneficiaries_households ?? 'Not published'}</p></div><div><p className="text-brand-muted">Capital committed</p><p className="mt-1 font-semibold text-brand-dark">{project.capital_committed != null ? amount(project.capital_committed, project.currency_code) : 'Not reported'}</p></div>{remaining!=null&&<div className="col-span-2"><p className="text-brand-muted">Remaining capital requirement</p><p className="mt-1 font-semibold text-brand-dark">{amount(remaining,project.currency_code)}</p></div>}</div>{progress!=null&&<div><div className="flex justify-between text-[11px] text-brand-muted"><span>Funding progress</span><span>{progress}%</span></div><div className="mt-1 h-2 overflow-hidden rounded-full bg-brand-light"><div className="h-full bg-brand-primary" style={{width:`${progress}%`}}/></div></div>}<Link to={`/energy-projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary">View Project Details <ArrowRight size={16}/></Link></div></article>})}</div>}
      </div>
    </section>

    <section className="border-t border-brand-dark/10 bg-brand-cream py-7"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs leading-relaxed text-brand-muted">Project information and financial projections are provided for information purposes and are subject to technical, financial and legal due diligence. Investment opportunities are subject to applicable regulatory requirements and formal agreements. Projected returns, where displayed, are indicative and are not guaranteed. Expressions of interest are not investment commitments or transactions.</div></section>
  </div>;
};
