import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck, Wrench } from 'lucide-react';
import { submitNetlifyForm } from '../utils/netlifyForms';

type InterestType = 'customer' | 'professional';
type Errors = Record<string, string>;

const services = [
  'Solar installation', 'Solar system design', 'Maintenance and repairs', 'Electrical works',
  'Energy assessment', 'Solar system inspection', 'Other',
];
const customerServices = [
  'Solar installation', 'Solar system inspection or assessment', 'Solar system maintenance',
  'Fault diagnosis and repairs', 'Solar system upgrade or expansion', 'Other',
];
const fieldClass = (invalid: boolean) => `mt-1 w-full rounded-xl border bg-brand-cream/40 px-4 py-3 text-sm text-brand-dark transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 ${invalid ? 'border-red-500' : 'border-brand-dark/15 focus:border-brand-primary'}`;

export const ProfessionalsPage: React.FC = () => {
  const [interestType, setInterestType] = useState<InterestType>('customer');
  const [errors, setErrors] = useState<Errors>({});
  const [busy, setBusy] = useState(false);
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validate = (form: FormData) => {
    const next: Errors = {};
    const required = ['full_name', 'email', 'phone', 'state', 'city'];
    required.forEach((name) => { if (!String(form.get(name) || '').trim()) next[name] = 'This field is required.'; });
    const email = String(form.get('email') || '').trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.';
    const phone = String(form.get('phone') || '').trim();
    if (phone && !/^[+()\d\s-]{7,25}$/.test(phone)) next.phone = 'Enter a valid phone or WhatsApp number.';
    const portfolio = String(form.get('portfolio_link') || '').trim();
    if (portfolio) {
      try { new URL(portfolio); } catch { next.portfolio_link = 'Enter a valid website or social media URL.'; }
    }
    if (interestType === 'customer') {
      if (!form.get('service_required')) next.service_required = 'Choose the service you need.';
      if (!String(form.get('service_description') || '').trim()) next.service_description = 'Briefly describe the service you need.';
    } else {
      if (!String(form.get('services_offered') || '').trim()) next.services_offered = 'Select at least one service.';
      const years = Number(form.get('experience_years'));
      if (!String(form.get('experience_years') || '').trim() || !Number.isInteger(years) || years < 0 || years > 70) next.experience_years = 'Enter a number of years from 0 to 70.';
      if (!String(form.get('professional_experience') || '').trim()) next.professional_experience = 'Briefly describe your professional experience.';
    }
    if (form.get('privacy_consent') !== 'on') next.privacy_consent = 'Please provide consent before submitting.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    if (!validate(form)) return;
    setBusy(true); setFormError('');
    const values: Record<string, string> = {
      interest_type: interestType === 'customer' ? 'Customer seeking a solar professional' : 'Solar professional joining the Renerr network',
      full_name: String(form.get('full_name') || '').trim(),
      email: String(form.get('email') || '').trim(),
      phone: String(form.get('phone') || '').trim(),
      state: String(form.get('state') || '').trim(),
      city: String(form.get('city') || '').trim(),
      service_required: String(form.get('service_required') || ''),
      service_description: String(form.get('service_description') || '').trim(),
      business_name: String(form.get('business_name') || '').trim(),
      services_offered: form.getAll('services_offered').map(String).join(', '),
      experience_years: String(form.get('experience_years') || ''),
      qualifications: String(form.get('qualifications') || '').trim(),
      portfolio_link: String(form.get('portfolio_link') || '').trim(),
      professional_experience: String(form.get('professional_experience') || '').trim(),
      privacy_consent: 'yes',
    };
    try {
      await submitNetlifyForm('solar-professional-interest', values);
      setSubmitted(true); formElement.reset(); setErrors({});
    } catch {
      setFormError('We could not submit your interest just now. Please try again. If the problem continues, contact notifications@renerrenergies.com.');
    } finally { setBusy(false); }
  };

  const changeType = (value: InterestType) => { setInterestType(value); setErrors({}); setFormError(''); };

  return <div>
    <section className="bg-brand-dark py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="space-y-5 lg:col-span-8">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">Trusted solar expertise</p>
          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">Find Trusted Solar Professionals</h1>
          <p className="max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">Finding a reliable solar professional is essential to getting a safe, efficient and dependable solar energy system. Renerr is building a trusted network of qualified solar technicians and service providers to make it easier for households and businesses to access professional solar services.</p>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-300">Our directory is currently being prepared. Register your interest below, and we will contact you as the platform becomes available.</p>
          <a href="#interest-form" className="inline-flex rounded-xl bg-brand-accent px-5 py-3 text-sm font-bold text-brand-dark">Register Your Interest</a>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 lg:col-span-4">
          <Wrench className="text-brand-accent" size={32}/>
          <h2 className="mt-4 text-lg font-bold">A trusted network is coming soon</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">Register your interest to be among the first to access the directory or join the Renerr professional network.</p>
        </div>
      </div>
    </section>

    <section id="interest-form" className="scroll-mt-20 border-b border-brand-dark/5 bg-brand-cream py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="space-y-4 lg:col-span-4">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">Coming soon</p>
          <h2 className="text-2xl font-extrabold text-brand-dark sm:text-3xl">Register Your Interest</h2>
          <p className="text-sm leading-relaxed text-brand-muted">Tell us whether you are looking for solar services or are a professional interested in joining the network.</p>
          <div className="flex items-start gap-3 rounded-2xl border border-brand-dark/10 bg-white p-4 text-sm text-brand-charcoal/80"><BadgeCheck className="mt-0.5 shrink-0 text-brand-primary" size={19}/><p>Submitting an interest form does not publish or verify a professional profile.</p></div>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-6 rounded-3xl border border-brand-dark/10 bg-white p-5 shadow-sm sm:p-8">
            {submitted ? <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm leading-relaxed text-emerald-900"><h3 className="font-bold">Thank you for registering your interest with Renerr.</h3><p className="mt-1">We have received your information and will contact you when the relevant service becomes available.</p></div> : <>
              <div><h3 className="text-xl font-bold text-brand-dark">Tell us how you’d like to connect</h3><p className="mt-1 text-sm text-brand-muted">Fields marked <span className="text-red-600">*</span> are required.</p></div>
              <form name="solar-professional-interest" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit} noValidate className="space-y-5">
                <input type="hidden" name="form-name" value="solar-professional-interest"/><input type="hidden" name="bot-field" value=""/>
                <fieldset><legend className="text-sm font-bold text-brand-dark">Which best describes you? <span className="text-red-600">*</span></legend><div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <label className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm ${interestType==='customer'?'border-brand-primary bg-brand-light/50':'border-brand-dark/15'}`}><input type="radio" name="interest-type-choice" checked={interestType==='customer'} onChange={()=>changeType('customer')} className="mt-0.5 accent-brand-primary"/><span><strong className="block text-brand-dark">I am looking for a solar professional</strong><span className="mt-1 block text-xs text-brand-muted">Tell us what service you need.</span></span></label>
                  <label className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm ${interestType==='professional'?'border-brand-primary bg-brand-light/50':'border-brand-dark/15'}`}><input type="radio" name="interest-type-choice" checked={interestType==='professional'} onChange={()=>changeType('professional')} className="mt-0.5 accent-brand-primary"/><span><strong className="block text-brand-dark">I am a solar professional</strong><span className="mt-1 block text-xs text-brand-muted">Share your experience and services.</span></span></label>
                </div><input type="hidden" name="interest_type" value={interestType}/></fieldset>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="full_name" required error={errors.full_name}/>
                  <Field label="Email address" name="email" type="email" required error={errors.email}/>
                  <Field label="Phone / WhatsApp number" name="phone" type="tel" placeholder="Include country code if outside Nigeria" required error={errors.phone}/>
                  {interestType==='professional'&&<Field label="Business or company name" name="business_name" optional/>}
                  <Field label="State" name="state" required error={errors.state}/>
                  <Field label="City or Local Government Area" name="city" required error={errors.city}/>
                </div>

                {interestType==='customer' ? <div className="space-y-4">
                  <SelectField label="Service required" name="service_required" options={customerServices} required error={errors.service_required}/>
                  <TextAreaField label="Brief description of the service required" name="service_description" rows={4} required error={errors.service_description}/>
                </div> : <div className="space-y-4">
                  <fieldset><legend className="text-xs font-bold uppercase tracking-wider text-brand-dark">Services offered <span className="text-red-600">*</span></legend>{errors.services_offered&&<p className="mt-1 text-xs text-red-700">{errors.services_offered}</p>}<div className="mt-3 grid gap-2 sm:grid-cols-2">{services.map(service=><label key={service} className="flex items-center gap-2 text-sm text-brand-charcoal"><input type="checkbox" name="services_offered" value={service} className="accent-brand-primary"/>{service}</label>)}</div></fieldset>
                  <div className="grid gap-4 sm:grid-cols-2"><Field label="Years of relevant experience" name="experience_years" type="number" min="0" max="70" required error={errors.experience_years}/><Field label="Website, portfolio or social media link" name="portfolio_link" type="url" optional error={errors.portfolio_link}/></div>
                  <TextAreaField label="Qualifications or certifications" name="qualifications" rows={2} optional/>
                  <TextAreaField label="Brief description of professional experience" name="professional_experience" rows={4} required error={errors.professional_experience}/>
                </div>}

                <Consent error={errors.privacy_consent}/>
                {formError&&<p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">{formError}</p>}
                <button type="submit" disabled={busy} className="w-full rounded-xl bg-brand-dark px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-primary disabled:cursor-wait disabled:opacity-60">{busy?'Submitting…':interestType==='customer'?'Submit Service Interest':'Join the Renerr Network'}</button>
              </form>
            </>}
          </div>
        </div>
      </div>
    </section>
  </div>;
};

const Field:React.FC<{label:string;name:string;type?:string;placeholder?:string;required?:boolean;optional?:boolean;error?:string;min?:string;max?:string}>=({label,name,type='text',placeholder,required,optional,error,min,max})=><label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">{label} {required&&<span className="text-red-600">*</span>}{optional&&<span className="font-medium normal-case tracking-normal text-brand-muted"> (optional)</span>}<input name={name} type={type} placeholder={placeholder} required={required} min={min} max={max} aria-invalid={Boolean(error)} aria-describedby={error?`${name}-error`:undefined} className={fieldClass(Boolean(error))}/>{error&&<span id={`${name}-error`} role="alert" className="mt-1 block text-xs font-medium normal-case tracking-normal text-red-700">{error}</span>}</label>;

const SelectField:React.FC<{label:string;name:string;options:string[];required?:boolean;error?:string}>=({label,name,options,required,error})=><label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">{label} {required&&<span className="text-red-600">*</span>}<select name={name} required={required} aria-invalid={Boolean(error)} aria-describedby={error?`${name}-error`:undefined} defaultValue="" className={fieldClass(Boolean(error))}><option value="" disabled>Select an option</option>{options.map(option=><option key={option}>{option}</option>)}</select>{error&&<span id={`${name}-error`} role="alert" className="mt-1 block text-xs font-medium normal-case tracking-normal text-red-700">{error}</span>}</label>;

const TextAreaField:React.FC<{label:string;name:string;rows:number;required?:boolean;optional?:boolean;error?:string}>=({label,name,rows,required,optional,error})=><label className="block text-xs font-bold uppercase tracking-wider text-brand-dark">{label} {required&&<span className="text-red-600">*</span>}{optional&&<span className="font-medium normal-case tracking-normal text-brand-muted"> (optional)</span>}<textarea name={name} rows={rows} required={required} maxLength={3000} aria-invalid={Boolean(error)} aria-describedby={error?`${name}-error`:undefined} className={fieldClass(Boolean(error))}/>{error&&<span id={`${name}-error`} role="alert" className="mt-1 block text-xs font-medium normal-case tracking-normal text-red-700">{error}</span>}</label>;

const Consent:React.FC<{error?:string}>=({error})=><div><label className="flex items-start gap-2 text-xs leading-relaxed text-brand-muted"><input type="checkbox" name="privacy_consent" required aria-invalid={Boolean(error)} aria-describedby={error?'privacy_consent-error':undefined} className="mt-0.5 accent-brand-primary"/><span>By submitting this form, you agree that Renerr Energies may contact you regarding your enquiry and relevant services. Your information will be handled in accordance with our <Link to="/privacy" className="font-semibold text-brand-primary underline">Privacy Policy</Link>. <span className="text-red-600">*</span></span></label>{error&&<p id="privacy_consent-error" role="alert" className="mt-1 text-xs text-red-700">{error}</p>}</div>;
