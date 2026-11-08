import React, { useState } from 'react';
import {
  Handshake,
  TrendingUp,
  Landmark,
  Building2,
  CheckCircle2,
  AlertCircle,
  Mail,
  Copy,
  ArrowRight,
  ShieldCheck,
  Users,
  Cpu,
  Wrench,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { handleFormSubmission, FormSubmissionResult } from '../utils/formHandler';

export const PartnerPage: React.FC = () => {
  const partnershipTypes = [
    'Investors and financiers',
    'Clean energy technology providers',
    'Energy project developers',
    'Development organisations and funding institutions',
    'Government and public-sector institutions',
    'Businesses and commercial customers',
    'Community organisations',
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    email: '',
    phone: '',
    partnershipType: partnershipTypes[0],
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<FormSubmissionResult | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.organisation.trim()) errs.organisation = 'Please enter your organisation name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your proposed partnership.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionResult(null);

    const result = await handleFormSubmission(
      siteConfig.forms.partnerFormEndpoint,
      formData,
      `Strategic Partnership Enquiry: ${formData.partnershipType} from ${formData.organisation}`
    );

    setIsSubmitting(false);
    setSubmissionResult(result);
  };

  const handleCopySummary = () => {
    if (submissionResult?.formattedSummary) {
      navigator.clipboard.writeText(submissionResult.formattedSummary);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 3000);
    }
  };

  const categories = [
    {
      title: 'Investors & Financiers',
      desc: 'Impact investors, venture funds, and clean-energy financiers interested in co-financing pipelines and scalable energy-access models.',
      icon: TrendingUp,
    },
    {
      title: 'Clean Energy Technology Providers',
      desc: 'Hardware and smart-metering manufacturers, battery technology providers, and IoT monitoring suppliers.',
      icon: Cpu,
    },
    {
      title: 'Energy Project Developers',
      desc: 'Qualified EPCs, solar installation engineers, and local technical teams collaborating on system design and maintenance.',
      icon: Wrench,
    },
    {
      title: 'Development Organisations & Funds',
      desc: 'DFIs, philanthropic foundations, and international development agencies expanding energy access in underserved regions.',
      icon: Landmark,
    },
    {
      title: 'Government & Public-Sector Institutions',
      desc: 'Rural electrification authorities, state ministries, and public agencies supporting decentralized energy programmes.',
      icon: ShieldCheck,
    },
    {
      title: 'Businesses & Commercial Customers',
      desc: 'Enterprises, private schools, clinics, and industrial facilities seeking tailored, reliable electricity solutions.',
      icon: Building2,
    },
    {
      title: 'Community Organisations',
      desc: 'Local residential associations, cooperatives, and market unions interested in establishing shared energy infrastructure.',
      icon: Users,
    },
  ];

  return (
    <div className="space-y-0">
      {/* ======================================================== */}
      {/* 1. HERO BANNER                                           */}
      {/* ======================================================== */}
      <section className="bg-brand-dark text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Collaboration & Scale</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Building Partnerships for a More Energy-Accessible Africa.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Expanding energy access requires collaboration. We work towards building relationships
              with organisations and individuals who share our commitment to affordable, reliable and
              sustainable electricity.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* ======================================================== */}
      {/* 2. PARTNERSHIP CATEGORIES                                */}
      {/* ======================================================== */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Collaboration Pathways
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Who We Work With
            </h2>
            <p className="text-sm sm:text-base text-brand-muted">
              We welcome partnerships across the energy value chain to accelerate clean electrification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-brand-cream/60 border border-brand-dark/10 hover:border-brand-primary/40 transition-all shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-white text-brand-primary border border-brand-dark/10 flex items-center justify-center shadow-xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark">{cat.title}</h3>
                    <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-brand-dark/10 text-xs font-bold text-brand-primary flex items-center gap-1">
                    <span>Partner with us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. ENQUIRY FORM SECTION                                  */}
      {/* ======================================================== */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5" id="partner-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-dark/10 shadow-sm space-y-8">
            <div className="space-y-2 border-b border-brand-dark/10 pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-primary text-xs font-bold uppercase tracking-wider">
                <Handshake className="w-3.5 h-3.5" />
                <span>Partnership Intake</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                Submit a Partnership Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted">
                Complete the form below to connect directly with our leadership and project team.
              </p>
            </div>

            {/* Submission Status Alert */}
            {submissionResult && (
              <div
                className={`p-6 rounded-2xl border text-sm leading-relaxed space-y-4 ${
                  submissionResult.status === 'sent_via_api'
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : submissionResult.status === 'email_fallback_ready'
                    ? 'bg-brand-light border-brand-primary/40 text-brand-dark'
                    : 'bg-red-50 border-red-200 text-red-900'
                }`}
              >
                <div className="flex items-start gap-3">
                  {submissionResult.status === 'sent_via_api' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  ) : submissionResult.status === 'email_fallback_ready' ? (
                    <ShieldCheck className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h4 className="font-bold">
                      {submissionResult.status === 'sent_via_api'
                        ? 'Enquiry Sent Successfully'
                        : submissionResult.status === 'email_fallback_ready'
                        ? 'Partnership Enquiry Formatted'
                        : 'Notice'}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm">{submissionResult.message}</p>
                  </div>
                </div>

                {submissionResult.status === 'email_fallback_ready' && (
                  <div className="pt-3 border-t border-brand-primary/20 space-y-3">
                    <p className="text-xs text-brand-charcoal font-medium">
                      Select how you would like to dispatch these details to our team:
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      {submissionResult.mailtoUrl && (
                        <a
                          href={submissionResult.mailtoUrl}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-brand-primary text-white hover:bg-brand-dark transition-colors shadow-sm"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open in Email App</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-brand-dark/20 text-brand-charcoal hover:bg-white transition-colors"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copiedSummary ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Dr. Amina Bello"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="organisation" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Organisation / Company <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="organisation"
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    placeholder="e.g. Clean Power Fund / Metro Estate Association"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                      errors.organisation ? 'border-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                    }`}
                  />
                  {errors.organisation && <p className="text-xs text-red-600 mt-1">{errors.organisation}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organisation.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                      errors.email ? 'border-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +234 803 456 7890"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="partnershipType" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                  Type of Partnership <span className="text-red-600">*</span>
                </label>
                <select
                  id="partnershipType"
                  value={formData.partnershipType}
                  onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 text-sm text-brand-dark bg-brand-cream/40 focus:bg-white focus:border-brand-primary transition-colors"
                >
                  {partnershipTypes.map((type, i) => (
                    <option key={i} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                  Message / Partnership Proposal <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your organisation, focus area, and how you would like to collaborate..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                    errors.message ? 'border-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] shadow-sm transition-all disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Processing...' : 'Submit Partnership Enquiry'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
