import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  Handshake,
  Building2,
  Globe2,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { handleFormSubmission, FormSubmissionResult } from '../utils/formHandler';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'General Enquiries',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<FormSubmissionResult | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const enquiryTypes = [
    'Partnership Opportunities',
    'Project and Energy Solutions',
    'Investment and Financing',
    'Institutional Enquiries',
    'General Enquiries',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email.';
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
      `Contact Enquiry: ${formData.enquiryType} from ${formData.name}`
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
      {/* Header Banner */}
      <section className="bg-brand-dark text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let's Start a Conversation.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Whether you are exploring an energy project, seeking a technical or financing partner,
              representing an institution, or interested in contributing to improved electricity
              access, we would welcome the opportunity to hear from you.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Pathways Grid */}
      <section className="py-16 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Handshake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-brand-dark">Partnership & Financing</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  For solar EPCs, impact funds, DFIs, and development programmes seeking
                  collaboration on energy access pipelines.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/partner"
                  className="text-xs font-bold text-brand-primary hover:underline inline-flex items-center gap-1"
                >
                  Explore Partnership Pathways &rarr;
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-brand-dark">Projects & Institutions</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  For schools, healthcare facilities, commercial businesses, and communities
                  exploring reliable electricity solutions.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/approach"
                  className="text-xs font-bold text-brand-primary hover:underline inline-flex items-center gap-1"
                >
                  Learn About Our Approach &rarr;
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-brand-dark">Direct General Inquiries</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Reach out directly to our leadership and project development team regarding any
                  general inquiries.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={`mailto:${siteConfig.contact.email || 'info@renerrenergies.com'}`}
                  className="text-xs font-bold text-brand-primary hover:underline inline-flex items-center gap-1"
                >
                  Send Direct Email &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                  Official Channels
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                  Communication Details
                </h2>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  We are actively building our team, initiatives, and pipeline across Africa. All
                  enquiries are promptly reviewed by company leadership.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 space-y-6">
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
                        href={`mailto:${siteConfig.contact.email || 'info@renerrenergies.com'}`}
                        className="hover:text-brand-primary transition-colors break-all"
                      >
                        {siteConfig.contact.email || 'info@renerrenergies.com'}
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

                {/* Operating Geography */}
                <div className="flex items-start gap-4 pt-4 border-t border-brand-dark/10">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                      Location & Jurisdiction
                    </h3>
                    <p className="text-sm font-semibold text-brand-dark mt-0.5">
                      {siteConfig.contact.addressDisplay}
                    </p>
                    <p className="text-xs text-brand-muted mt-0.5">Headquartered in Nigeria</p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4 pt-4 border-t border-brand-dark/10">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                      Business Hours
                    </h3>
                    <p className="text-sm font-semibold text-brand-dark mt-0.5">
                      {siteConfig.contact.officeHours}
                    </p>
                    <p className="text-xs text-brand-muted mt-0.5">West Africa Time (WAT)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-dark/10 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-dark">Send an Enquiry</h3>
                  <p className="text-xs text-brand-muted mt-1">
                    Fill out the form below to transmit your message directly to our team.
                  </p>
                </div>

                {/* Feedback status */}
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
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-brand-primary text-white hover:bg-brand-dark transition-colors shadow-sm"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              <span>Open in Email App</span>
                            </a>
                          )}

                          <button
                            type="button"
                            onClick={handleCopySummary}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-brand-dark/20 text-brand-charcoal hover:bg-white transition-colors"
                          >
                            <Copy className="w-3.5 h-3.5" />
                            <span>{copiedSummary ? 'Copied!' : 'Copy Text'}</span>
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
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
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
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
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
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-dark/15 text-sm text-brand-dark bg-brand-cream/40 focus:bg-white focus:border-brand-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="enquiryType" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                        Enquiry Category
                      </label>
                      <select
                        id="enquiryType"
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-dark/15 text-sm text-brand-dark bg-brand-cream/40 focus:bg-white focus:border-brand-primary transition-colors"
                      >
                        {enquiryTypes.map((et, i) => (
                          <option key={i} value={et}>
                            {et}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contactMessage" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Your Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share the details of your inquiry, prospective project, or proposed collaboration..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                        errors.message ? 'border-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] shadow-sm transition-all disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Preparing...' : 'Send Message'}</span>
                      <Send className="w-4 h-4" />
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
