import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Handshake,
  Wrench,
  TrendingUp,
  Landmark,
  GraduationCap,
  Globe2,
  CheckCircle2,
  AlertCircle,
  Mail,
  MessageCircle,
  Copy,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { handleFormSubmission, FormSubmissionResult } from '../utils/formHandler';

export const PartnerPage: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    workEmail: '',
    phone: '',
    category: 'Technical & Implementation Partner',
    description: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<FormSubmissionResult | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const categories = [
    'Technical & Implementation Partner (EPC / Engineering)',
    'Project Development Partner',
    'Financing & Investment Partner',
    'Institutional & School Partner',
    'Development & Public-Sector Partner',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.organisation.trim()) errs.organisation = 'Organisation name is required.';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please provide a valid email address.';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please provide a brief description of the proposed collaboration.';
    } else if (formData.description.trim().length < 20) {
      errs.description = 'Description should be at least 20 characters.';
    }
    if (!formData.consent) {
      errs.consent = 'You must acknowledge the Privacy Policy to proceed.';
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
      `Partnership Enquiry: ${formData.organisation} (${formData.category})`
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

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-brand-dark text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-wider">
              <Handshake className="w-3.5 h-3.5" />
              <span>Collaborative Ecosystem</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Partner With Renerr to Expand Energy Access.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Renerr Energies is developing a scalable approach to making solar electricity more
              accessible to schools and underserved customers. We believe the strongest projects are
              built through collaboration between capable technical partners, project developers,
              financiers, institutions, and communities.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Partnership Pathways */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Collaboration Pathways
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Where Your Expertise Fits Into the Solution
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              We collaborate on project identification, feasibility analysis, innovative financing
              structures, engineering implementation, and scaling viable clean energy assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pathway 1 */}
            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 flex flex-col justify-between hover:border-brand-primary transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-brand-dark">
                  1. Technical & Implementation Partners
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  For solar EPC companies, electrical engineering firms, system integrators, and
                  certified maintenance providers seeking pipeline installation and field service
                  contracts.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-primary">
                Design &bull; Procurement &bull; EPC Delivery
              </div>
            </div>

            {/* Pathway 2 */}
            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 flex flex-col justify-between hover:border-brand-primary transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-brand-dark">
                  2. Project Development Partners
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  For clean-tech developers and advisory organisations that can contribute project
                  origination, feasibility assessment, regulatory navigation, and deployment
                  experience.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-primary">
                Feasibility &bull; Structuring &bull; Co-Development
              </div>
            </div>

            {/* Pathway 3 */}
            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 flex flex-col justify-between hover:border-brand-primary transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-brand-dark">
                  3. Financing & Investment Partners
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  For impact investors, development finance institutions (DFIs), blended finance
                  facilities, commercial lenders, and grant providers interested in supporting
                  sustainable distributed solar assets.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-primary">
                Impact Capital &bull; Concessional Debt &bull; Equity
              </div>
            </div>

            {/* Pathway 4 */}
            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 flex flex-col justify-between hover:border-brand-primary transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cream flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-brand-dark">
                  4. Institutional & School Partners
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  For school proprietors, education boards, multi-campus institutions, and education
                  advocacy bodies ready to explore reliable solar energy under a predictable
                  energy-as-a-service model.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-primary">
                Multi-Campus Portfolios &bull; Institutional Clusters
              </div>
            </div>

            {/* Pathway 5 */}
            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 flex flex-col justify-between hover:border-brand-primary transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Landmark className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-brand-dark">
                  5. Development & Public-Sector Partners
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  For international development agencies, government energy-access initiatives, and
                  civil society programmes working to expand clean electricity access and empower
                  youth across Nigeria.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-primary">
                Public Energy Transition &bull; Capacity Building
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-brand-dark text-white flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                  Direct Inquiries
                </span>
                <h3 className="text-base font-bold text-white">Prefer a Direct Conversation?</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  You can reach our leadership team directly via email or scheduled discussion to
                  review bilateral opportunities.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10">
                <a
                  href={`mailto:${siteConfig.contact.email || 'info@renerrenergies.com'}`}
                  className="text-xs font-bold text-brand-accent hover:underline inline-flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{siteConfig.contact.email || 'info@renerrenergies.com'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Enquiry Form */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5" id="form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-dark/10 shadow-sm space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Initiate a Discussion
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                Partnership Enquiry Form
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Please complete the details below. Our team reviews all partnership requests to
                identify mutual alignment and schedule an introductory briefing.
              </p>
            </div>

            {/* Submission Status Alert (Honest submission handling!) */}
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
                        ? 'Enquiry Delivered'
                        : submissionResult.status === 'email_fallback_ready'
                        ? 'Details Formatted & Ready to Send'
                        : 'Submission Notice'}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm">{submissionResult.message}</p>
                  </div>
                </div>

                {/* Direct dispatch options when using email fallback */}
                {submissionResult.status === 'email_fallback_ready' && (
                  <div className="pt-3 border-t border-brand-primary/20 space-y-3">
                    <p className="text-xs text-brand-charcoal font-medium">
                      Click below to send your pre-formatted enquiry directly using your email app,
                      or copy the formatted text:
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      {submissionResult.mailtoUrl && (
                        <a
                          href={submissionResult.mailtoUrl}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-brand-primary text-white hover:bg-brand-dark transition-colors shadow-sm"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open in Email App</span>
                        </a>
                      )}

                      {submissionResult.whatsappUrl && (
                        <a
                          href={submissionResult.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors shadow-sm"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Send via WhatsApp</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-brand-dark/20 text-brand-charcoal hover:bg-white transition-colors"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copiedSummary ? 'Copied to Clipboard!' : 'Copy Enquiry Text'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* The Form */}
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Adebayo Ogunlesi"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                      errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                {/* Organisation */}
                <div className="space-y-1.5">
                  <label htmlFor="organisation" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Organisation / Institution <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="organisation"
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    placeholder="e.g. Apex Solar Engineering Ltd"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                      errors.organisation ? 'border-red-500 ring-1 ring-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                    }`}
                  />
                  {errors.organisation && <p className="text-xs text-red-600 mt-1">{errors.organisation}</p>}
                </div>

                {/* Work Email */}
                <div className="space-y-1.5">
                  <label htmlFor="workEmail" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Work Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="name@organisation.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                      errors.workEmail ? 'border-red-500 ring-1 ring-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                    }`}
                  />
                  {errors.workEmail && <p className="text-xs text-red-600 mt-1">{errors.workEmail}</p>}
                </div>

                {/* Phone Number (Optional) */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                    Phone Number <span className="text-brand-muted font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +234 803 000 0000"
                    className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 text-sm text-brand-dark bg-brand-cream/40 focus:bg-white focus:border-brand-primary transition-colors"
                  />
                </div>
              </div>

              {/* Partnership Category */}
              <div className="space-y-1.5">
                <label htmlFor="category" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                  Partnership Category <span className="text-red-600">*</span>
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 text-sm text-brand-dark bg-brand-cream/40 focus:bg-white focus:border-brand-primary transition-colors"
                >
                  {categories.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brief Description */}
              <div className="space-y-1.5">
                <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                  Brief Description of Proposed Collaboration <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="description"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Outline your organisation's capabilities, relevant geographic presence, and how you envision collaborating with Renerr Energies..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                    errors.description ? 'border-red-500 ring-1 ring-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                  }`}
                />
                {errors.description && <p className="text-xs text-red-600 mt-1">{errors.description}</p>}
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="space-y-1.5 pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="w-4 h-4 mt-0.5 rounded border-brand-dark/30 text-brand-primary focus:ring-brand-primary"
                  />
                  <span className="text-xs text-brand-muted leading-relaxed">
                    I acknowledge that the information provided will be used by Renerr Energies Ltd
                    solely to evaluate and respond to this partnership enquiry in accordance with the{' '}
                    <Link to="/privacy" className="text-brand-primary underline hover:text-brand-dark">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-red-600 mt-1">{errors.consent}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] shadow-sm transition-all disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Verifying Details...' : 'Send Partnership Enquiry'}</span>
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
