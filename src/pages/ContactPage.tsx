import React, { useState } from 'react';
import {
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { handleFormSubmission, FormSubmissionResult } from '../utils/formHandler';

export const ContactPage: React.FC = () => {
  const enquiryCategories = [
    'Household and community energy access',
    'Business and organisational projects',
    'Partnerships and investment',
    'Technology and development',
    'General enquiries',
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryCategory: enquiryCategories[0],
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<FormSubmissionResult | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write your message or enquiry.';
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
      siteConfig.forms.contactFormEndpoint,
      formData,
      `Contact Enquiry: ${formData.enquiryCategory} from ${formData.name}`
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

  const hasWhatsapp = Boolean(siteConfig.contact.whatsappNumber);
  const whatsappUrl = hasWhatsapp
    ? `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
        'Hello Renerr Energies, I would like to get in touch with your team.'
      )}`
    : null;

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
              <span>Contact Us</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let's Talk About Energy Access.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Whether you are interested in accessing energy, exploring a project, partnering with us
              or learning more about Renerr, we would be pleased to hear from you.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* ======================================================== */}
      {/* 2. MAIN CONTACT SECTION                                  */}
      {/* ======================================================== */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                  Official Channels
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                  Communication Details
                </h2>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Connect directly with our team regarding projects, partnerships, or community
                  initiatives.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-brand-dark/10 shadow-sm space-y-6">
                {/* Email Channel */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                      Official Email
                    </h3>
                    <p className="text-sm font-semibold text-brand-dark mt-0.5">
                      <a
                        href={`mailto:${siteConfig.contact.email || 'notifications@renerrenergies.com'}`}
                        className="hover:text-brand-primary transition-colors break-all"
                      >
                        {siteConfig.contact.email || 'notifications@renerrenergies.com'}
                      </a>
                    </p>
                    <p className="text-xs text-brand-muted mt-0.5">Monitored during business hours</p>
                  </div>
                </div>

                {/* WhatsApp Channel (If configured) */}
                {whatsappUrl && (
                  <div className="flex items-start gap-4 pt-4 border-t border-brand-dark/10">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                        WhatsApp Fast Track
                      </h3>
                      <p className="text-sm font-semibold text-brand-dark mt-0.5">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-primary inline-flex items-center gap-1 text-emerald-700"
                        >
                          Chat with our team <ExternalLink className="w-3 h-3" />
                        </a>
                      </p>
                      <p className="text-xs text-brand-muted mt-0.5">Direct mobile messaging</p>
                    </div>
                  </div>
                )}

                {/* Location */}
                <div className="flex items-start gap-4 pt-4 border-t border-brand-dark/10">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                      Headquarters
                    </h3>
                    <p className="text-sm font-semibold text-brand-dark mt-0.5">
                      {siteConfig.contact.addressDisplay}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 pt-4 border-t border-brand-dark/10">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                      Operating Hours
                    </h3>
                    <p className="text-sm font-semibold text-brand-dark mt-0.5">
                      {siteConfig.contact.officeHours}
                    </p>
                    <p className="text-xs text-brand-muted mt-0.5">West Africa Time (WAT)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: General Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-dark/10 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">Send an Enquiry</h3>
                  <p className="text-xs sm:text-sm text-brand-muted mt-1">
                    Fill out the form below to transmit your message directly to our team.
                  </p>
                </div>

                {/* Submission Feedback alert */}
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
                      <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold">Message Details Formatted</h4>
                        <p className="mt-1 text-xs">{submissionResult.message}</p>
                      </div>
                    </div>

                    {submissionResult.status === 'email_fallback_ready' && (
                      <div className="pt-3 border-t border-brand-primary/20 space-y-3">
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
                            <span>{copiedSummary ? 'Copied!' : 'Copy Summary'}</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contactName" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                        Your Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Chinwe Obi"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                          errors.name ? 'border-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contactEmail" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="contactEmail"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                          errors.email ? 'border-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contactPhone" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="contactPhone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +234 802 345 6789"
                        className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 text-sm text-brand-dark bg-brand-cream/40 focus:bg-white focus:border-brand-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="enquiryCategory" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                        Enquiry Relating To
                      </label>
                      <select
                        id="enquiryCategory"
                        value={formData.enquiryCategory}
                        onChange={(e) => setFormData({ ...formData, enquiryCategory: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 text-sm text-brand-dark bg-brand-cream/40 focus:bg-white focus:border-brand-primary transition-colors"
                      >
                        {enquiryCategories.map((cat, i) => (
                          <option key={i} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contactMessage" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Message / Enquiry Details <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your interest, community, or project requirements..."
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
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
