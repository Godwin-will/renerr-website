import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun } from 'lucide-react';
import { submitNetlifyForm } from '../utils/netlifyForms';

type Interest = 'investor' | 'energy-user' | 'partner';
type Errors = Record<string, string>;
const inputClass = 'mt-1 w-full rounded-xl border border-brand-dark/15 bg-brand-cream/40 px-4 py-3 text-sm text-brand-dark focus:border-brand-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20';
const roles: Record<Interest, string> = {
  investor: 'Interested in financing future energy projects',
  'energy-user': 'Need a reliable energy solution',
  partner: 'Interested in partnering with Renerr',
};

export const EnergyProjectsPage: React.FC = () => {
  const [interest, setInterest] = useState<Interest>('investor');
  const [errors, setErrors] = useState<Errors>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const element = event.currentTarget;
    const form = new FormData(element);
    const next: Errors = {};
    ['full_name', 'email', 'phone'].forEach((key) => { if (!String(form.get(key) || '').trim()) next[key] = 'This field is required.'; });
    const email = String(form.get('email') || '').trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.';
    const phone = String(form.get('phone') || '').trim();
    if (phone && !/^[+()\d\s-]{7,25}$/.test(phone)) next.phone = 'Enter a valid phone or WhatsApp number.';
    if (interest === 'investor') {
      if (!String(form.get('country') || '').trim()) next.country = 'This field is required.';
      if (!form.get('project_interest')) next.project_interest = 'Choose an area of interest.';
    }
    if (interest === 'energy-user') {
      ['state', 'city', 'energy_user_type', 'energy_challenge'].forEach((key) => { if (!String(form.get(key) || '').trim()) next[key] = 'This field is required.'; });
    }
    if (interest === 'partner') {
      ['country', 'partnership_location', 'collaboration_area', 'partnership_description'].forEach((key) => { if (!String(form.get(key) || '').trim()) next[key] = 'This field is required.'; });
    }
    if (form.get('privacy_consent') !== 'on') next.privacy_consent = 'Please provide consent before submitting.';
    setErrors(next);
    if (Object.keys(next).length) return;

    const values: Record<string, string> = {
      interest_type: roles[interest], full_name: String(form.get('full_name') || '').trim(),
      email, phone, country: String(form.get('country') || '').trim(), city: String(form.get('city') || '').trim(),
      additional_message: interest === 'investor' ? String(form.get('additional_message') || '').trim() : '',
      project_interest: String(form.get('project_interest') || ''), state: String(form.get('state') || '').trim(),
      business_name: String(form.get('business_name') || '').trim(), energy_user_type: String(form.get('energy_user_type') || ''),
      energy_challenge: String(form.get('energy_challenge') || '').trim(), energy_requirement: String(form.get('energy_requirement') || '').trim(),
      organisation_name: String(form.get('organisation_name') || '').trim(), partnership_location: String(form.get('partnership_location') || '').trim(),
      collaboration_area: String(form.get('collaboration_area') || ''), partnership_description: String(form.get('partnership_description') || '').trim(),
      privacy_consent: 'yes',
    };
    setBusy(true); setError('');
    try {
      await submitNetlifyForm('energy-project-interest', values);
      setSubmitted(true); element.reset(); setErrors({});
    } catch {
      setError('We could not submit your interest just now. Please try again. If the problem continues, contact notifications@renerrenergies.com.');
    } finally { setBusy(false); }
  };

  const field = (label: string, name: string, options: { required?: boolean; type?: string; placeholder?: string; optional?: boolean } = {}) => <label key={name} className="block text-xs font-bold uppercase tracking-wider text-brand-dark">{label} {options.required && <span className="text-red-600">*</span>}{options.optional && <span className="font-medium normal-case tracking-normal text-brand-muted"> (optional)</span>}<input name={name} type={options.type || 'text'} required={options.required} placeholder={options.placeholder} aria-invalid={Boolean(errors[name])} className={`${inputClass} ${errors[name] ? 'border-red-500' : ''}`}/>{errors[name] && <span role="alert" className="mt-1 block font-medium normal-case tracking-normal text-red-700">{errors[name]}</span>}</label>;
  const select = (label: string, name: string, options: string[], required = true) => <label key={name} className="block text-xs font-bold uppercase tracking-wider text-brand-dark">{label} {required && <span className="text-red-600">*</span>}<select name={name} defaultValue="" required={required} aria-invalid={Boolean(errors[name])} className={`${inputClass} ${errors[name] ? 'border-red-500' : ''}`}><option value="" disabled>Select an option</option>{options.map((option) => <option key={option}>{option}</option>)}</select>{errors[name] && <span role="alert" className="mt-1 block font-medium normal-case tracking-normal text-red-700">{errors[name]}</span>}</label>;
  const area = (label: string, name: string, required = true) => <label key={name} className="block text-xs font-bold uppercase tracking-wider text-brand-dark">{label} {required ? <span className="text-red-600">*</span> : <span className="font-medium normal-case tracking-normal text-brand-muted"> (optional)</span>}<textarea name={name} rows={3} maxLength={3000} required={required} aria-invalid={Boolean(errors[name])} className={`${inputClass} ${errors[name] ? 'border-red-500' : ''}`}/>{errors[name] && <span role="alert" className="mt-1 block font-medium normal-case tracking-normal text-red-700">{errors[name]}</span>}</label>;

  return <div>
    <section className="bg-brand-dark py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="space-y-5 lg:col-span-7"><p className="text-xs font-bold uppercase tracking-widest text-brand-accent">Renerr Energy Projects</p><h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">Explore Energy Projects</h1><p className="text-base leading-relaxed text-gray-300 sm:text-lg">Renerr is developing a platform that connects energy needs across Africa with diaspora investment and trusted technical expertise. We identify electricity needs, assess potential projects and develop suitable solutions with interested partners.</p><p className="text-sm leading-relaxed text-gray-300">Our energy project marketplace is currently in development. Register your interest to receive updates as new opportunities become available.</p><a href="#interest-form" className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-bold text-brand-dark">Register Your Interest <ArrowRight size={16}/></a></div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 lg:col-span-5"><Sun className="text-brand-accent" size={32}/><h2 className="mt-4 text-lg font-bold">A platform for energy access</h2><p className="mt-2 text-sm leading-relaxed text-gray-300">We are preparing a way for energy users, prospective investors and partners to connect with future project opportunities.</p></div>
      </div>
    </section>
    <section id="interest-form" className="scroll-mt-20 bg-brand-cream py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="space-y-4 lg:col-span-4"><p className="text-xs font-bold uppercase tracking-widest text-brand-primary">Coming soon</p><h2 className="text-2xl font-extrabold text-brand-dark sm:text-3xl">Register Your Interest in Renerr Energy Projects</h2><p className="text-sm leading-relaxed text-brand-muted">Choose how you would like to engage. We will use your details to follow up about relevant developments.</p></div>
        <div className="lg:col-span-8"><div className="rounded-3xl border border-brand-dark/10 bg-white p-5 shadow-sm sm:p-8">
          {submitted ? <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm leading-relaxed text-emerald-900"><h3 className="font-bold">Thank you for your interest in Renerr Energies.</h3><p className="mt-1">We have received your details and will contact you as relevant energy projects and partnership opportunities become available.</p>{interest === 'investor' && <p className="mt-2">This expression of interest is not an investment commitment and does not guarantee an investment opportunity.</p>}</div> : <form name="energy-project-interest" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit} noValidate className="space-y-5">
            <input type="hidden" name="form-name" value="energy-project-interest"/><input type="hidden" name="bot-field" value=""/><input type="hidden" name="interest_type" value={roles[interest]}/>
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">How would you like to engage with Renerr? <span className="text-red-600">*</span><select aria-label="How would you like to engage with Renerr?" value={interest} onChange={(event) => { setInterest(event.target.value as Interest); setErrors({}); setError(''); }} className={inputClass}><option value="investor">I am interested in financing future energy projects</option><option value="energy-user">I need a reliable energy solution for my home, business or community</option><option value="partner">I am interested in partnering with Renerr</option></select></label>
            <div className="grid gap-4 sm:grid-cols-2">{field('Full name', 'full_name', { required: true })}{field('Email address', 'email', { required: true, type: 'email' })}{field('Phone / WhatsApp number', 'phone', { required: true, type: 'tel', placeholder: 'Include country code if outside Nigeria' })}
              {interest === 'investor' && <>{field('Country of residence', 'country', { required: true })}{field('City of residence', 'city', { optional: true })}</>}
              {interest === 'energy-user' && <>{field('State', 'state', { required: true })}{field('City or Local Government Area', 'city', { required: true })}{field('Organisation or business name', 'business_name', { optional: true })}{select('Type of energy user', 'energy_user_type', ['Household', 'Small business', 'Medium or large business', 'Community', 'School or educational institution', 'Healthcare institution', 'Other'])}</>}
              {interest === 'partner' && <>{field('Organisation or company name', 'organisation_name', { optional: true })}{field('Country', 'country', { required: true })}{field('City, state or region', 'partnership_location', { required: true })}{select('Area of potential collaboration', 'collaboration_area', ['Project development', 'Technical delivery', 'Technology', 'Research and policy', 'Community engagement', 'Financing', 'Other'])}</>}
            </div>
            {interest === 'investor' && <>{select('Preferred area of interest', 'project_interest', ['Residential energy projects', 'Commercial energy projects', 'Community energy projects', 'Institutional energy projects', 'Open to different project types'])}{area('Message or additional information', 'additional_message', false)}</>}
            {interest === 'energy-user' && <>{area('Describe your electricity challenges or energy requirements', 'energy_challenge')}{field('Estimated energy requirement or preferred system capacity', 'energy_requirement', { optional: true, placeholder: 'Optional' })}</>}
            {interest === 'partner' && area('Brief description of the proposed partnership', 'partnership_description')}
            <div><label className="flex items-start gap-2 text-xs leading-relaxed text-brand-muted"><input type="checkbox" name="privacy_consent" required aria-invalid={Boolean(errors.privacy_consent)} className="mt-0.5 accent-brand-primary"/><span>By submitting this form, you agree that Renerr Energies may contact you regarding your enquiry and relevant services or opportunities. Your information will be handled in accordance with our <Link to="/privacy" className="font-semibold text-brand-primary underline">Privacy Policy</Link>. <span className="text-red-600">*</span></span></label>{errors.privacy_consent && <p role="alert" className="mt-1 text-xs text-red-700">{errors.privacy_consent}</p>}</div>
            {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">{error}</p>}
            <button type="submit" disabled={busy} className="w-full rounded-xl bg-brand-dark px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-primary disabled:cursor-wait disabled:opacity-60">{busy ? 'Submitting…' : 'Submit Expression of Interest'}</button>
          </form>}</div></div>
      </div>
    </section>
  </div>;
};
