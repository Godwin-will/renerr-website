import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Mail,
  MessageCircle,
  Copy,
  ArrowRight,
  Info,
  Building,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { handleFormSubmission, FormSubmissionResult } from '../utils/formHandler';

export const SchoolsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    schoolType: 'Secondary School',
    state: '',
    town: '',
    contactPerson: '',
    rolePosition: '',
    email: '',
    phone: '',
    currentSource: 'Grid and Generator',
    electricityChallenges: '',
    majorEquipment: '',
    additionalNotes: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<FormSubmissionResult | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const schoolTypes = [
    'Primary School',
    'Secondary School',
    'Combined Primary & Secondary',
    'Vocational / Technical Institution',
    'Other Educational Facility',
  ];

  const currentSources = [
    'Grid only (Frequent outages)',
    'Generator only (No grid)',
    'Grid and Generator',
    'Partial Solar (Inadequate capacity)',
    'No Electricity Source Currently',
    'Other',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.schoolName.trim()) errs.schoolName = 'School name is required.';
    if (!formData.state.trim()) errs.state = 'State is required (e.g., Lagos, Kaduna, Enugu).';
    if (!formData.town.trim()) errs.town = 'Town or LGA is required.';
    if (!formData.contactPerson.trim()) errs.contactPerson = "Contact person's name is required.";
    if (!formData.rolePosition.trim()) errs.rolePosition = 'Role or position is required.';
    
    // Email is optional IF phone is supplied, and vice versa
    if (!formData.phone.trim() && !formData.email.trim()) {
      errs.phone = 'Please provide at least a phone number or an email address.';
      errs.email = 'Please provide at least an email address or a phone number.';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!formData.electricityChallenges.trim()) {
      errs.electricityChallenges = 'Please describe your main electricity challenges.';
    }

    if (!formData.consent) {
      errs.consent = 'You must confirm acknowledgement of the submission disclaimer.';
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
      siteConfig.forms.schoolFormEndpoint,
      formData,
      `School Interest: ${formData.schoolName} (${formData.state})`
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
              <GraduationCap className="w-3.5 h-3.5" />
              <span>School Solar Electrification Pipeline</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let's Explore Solar Electricity for Your School.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Tell us a little about your school and its electricity needs. Our team can review your
              enquiry and determine whether a potential project assessment may be appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* Crucial Eligibility & Honesty Notice */}
      <section className="py-6 bg-brand-light/80 border-b border-brand-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-xs text-brand-charcoal">
            <Info className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-brand-dark">Important Clarification: </strong>
              Submitting this form expresses interest only. It does not guarantee project approval,
              financing, installation, or service availability. All projects are subject to technical
              load verification, structural site assessment, institutional eligibility, and agreed
              bilateral service terms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Registration Form */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-dark/10 shadow-sm space-y-8">
            <div className="border-b border-brand-dark/10 pb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-dark">
                School Interest Questionnaire
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted mt-1">
                Please complete as many details as possible to help us assess your facility's
                preliminary requirements.
              </p>
            </div>

            {/* Submission Result / Feedback Alert */}
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
                        ? 'Interest Questionnaire Delivered'
                        : submissionResult.status === 'email_fallback_ready'
                        ? 'School Interest Details Prepared for Dispatch'
                        : 'Submission Notice'}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm">{submissionResult.message}</p>
                  </div>
                </div>

                {submissionResult.status === 'email_fallback_ready' && (
                  <div className="pt-3 border-t border-brand-primary/20 space-y-3">
                    <p className="text-xs text-brand-charcoal font-medium">
                      Select how you would like to dispatch these details to our project team:
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
                        <span>{copiedSummary ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Section 1: School Identity */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-primary flex items-center gap-1.5">
                  <Building className="w-4 h-4" />
                  <span>1. School Profile & Location</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* School Name */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label htmlFor="schoolName" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                      School Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      placeholder="e.g. St. Anthony's Comprehensive College"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                        errors.schoolName ? 'border-red-500 ring-1 ring-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                      }`}
                    />
                    {errors.schoolName && <p className="text-xs text-red-600 mt-1">{errors.schoolName}</p>}
                  </div>

                  {/* School Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="schoolType" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                      School Type <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="schoolType"
                      value={formData.schoolType}
                      onChange={(e) => setFormData({ ...formData, schoolType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 text-sm text-brand-dark bg-brand-cream/40 focus:bg-white focus:border-brand-primary transition-colors"
                    >
                      {schoolTypes.map((st, i) => (
                        <option key={i} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* State */}
                  <div className="space-y-1.5">
                    <label htmlFor="state" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                      State in Nigeria <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="e.g. Lagos, Ogun, Oyo, Kaduna, Enugu"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                        errors.state ? 'border-red-500 ring-1 ring-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                      }`}
                    />
                    {errors.state && <p className="text-xs text-red-600 mt-1">{errors.state}</p>}
                  </div>

                  {/* Town / City / LGA */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label htmlFor="town" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Town, District or LGA <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="town"
                      value={formData.town}
                      onChange={(e) => setFormData({ ...formData, town: e.target.value })}
                      placeholder="e.g. Ikorodu, Epe, Nsukka, Zaria"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                        errors.town ? 'border-red-500 ring-1 ring-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                      }`}
                    />
                    {errors.town && <p className="text-xs text-red-600 mt-1">{errors.town}</p>}
                  </div>
                </div>
              </div>

              {/* Section 2: Contact Person */}
              <div className="space-y-4 pt-4 border-t border-brand-dark/10">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  2. School Representative Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Contact Person Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="contactPerson" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Contact Person's Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="e.g. Mr. Emmanuel Okafor"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                        errors.contactPerson ? 'border-red-500 ring-1 ring-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                      }`}
                    />
                    {errors.contactPerson && <p className="text-xs text-red-600 mt-1">{errors.contactPerson}</p>}
                  </div>

                  {/* Role or Position */}
                  <div className="space-y-1.5">
                    <label htmlFor="rolePosition" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Role / Position <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="rolePosition"
                      value={formData.rolePosition}
                      onChange={(e) => setFormData({ ...formData, rolePosition: e.target.value })}
                      placeholder="e.g. Principal, Proprietor, Bursar, Administrator"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                        errors.rolePosition ? 'border-red-500 ring-1 ring-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                      }`}
                    />
                    {errors.rolePosition && <p className="text-xs text-red-600 mt-1">{errors.rolePosition}</p>}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Phone Number <span className="text-brand-muted font-normal">(Required if no email)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0803 123 4567"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                        errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Email Address <span className="text-brand-muted font-normal">(Optional if phone supplied)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="schooladmin@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                        errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>

              {/* Section 3: Power Context */}
              <div className="space-y-4 pt-4 border-t border-brand-dark/10">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  3. Electricity Profile & Challenges
                </h3>

                <div className="space-y-4">
                  {/* Current Source */}
                  <div className="space-y-1.5">
                    <label htmlFor="currentSource" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Current Primary Electricity Source <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="currentSource"
                      value={formData.currentSource}
                      onChange={(e) => setFormData({ ...formData, currentSource: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 text-sm text-brand-dark bg-brand-cream/40 focus:bg-white focus:border-brand-primary transition-colors"
                    >
                      {currentSources.map((cs, i) => (
                        <option key={i} value={cs}>
                          {cs}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Main Challenges */}
                  <div className="space-y-1.5">
                    <label htmlFor="electricityChallenges" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Main Electricity Challenges Faced <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="electricityChallenges"
                      rows={3}
                      value={formData.electricityChallenges}
                      onChange={(e) => setFormData({ ...formData, electricityChallenges: e.target.value })}
                      placeholder="e.g. Grid power is only available 2 hours a day; generator fuel costs exceed N300,000 monthly; computer lab cannot run during regular class periods..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-dark bg-brand-cream/40 focus:bg-white transition-colors ${
                        errors.electricityChallenges ? 'border-red-500 ring-1 ring-red-500' : 'border-brand-dark/15 focus:border-brand-primary'
                      }`}
                    />
                    {errors.electricityChallenges && (
                      <p className="text-xs text-red-600 mt-1">{errors.electricityChallenges}</p>
                    )}
                  </div>

                  {/* Major Equipment to Power */}
                  <div className="space-y-1.5">
                    <label htmlFor="majorEquipment" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Priority Equipment to Power
                    </label>
                    <input
                      type="text"
                      id="majorEquipment"
                      value={formData.majorEquipment}
                      onChange={(e) => setFormData({ ...formData, majorEquipment: e.target.value })}
                      placeholder="e.g. 20 desktop computers, classroom ceiling fans, administration printers, water pump"
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 text-sm text-brand-dark bg-brand-cream/40 focus:bg-white focus:border-brand-primary transition-colors"
                    />
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-1.5">
                    <label htmlFor="additionalNotes" className="block text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Additional Information <span className="text-brand-muted font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="additionalNotes"
                      rows={2}
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      placeholder="Any roof details, student boarding capacity, or specific timeline constraints..."
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark/15 text-sm text-brand-dark bg-brand-cream/40 focus:bg-white focus:border-brand-primary transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Disclaimer & Privacy Consent */}
              <div className="space-y-2 pt-4 border-t border-brand-dark/10">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="w-4 h-4 mt-0.5 rounded border-brand-dark/30 text-brand-primary focus:ring-brand-primary"
                  />
                  <span className="text-xs text-brand-muted leading-relaxed">
                    I understand that submitting this enquiry expresses interest only and does not
                    guarantee project approval, financing, or installation. I consent to Renerr
                    Energies using this information to evaluate potential feasibility in accordance
                    with the{' '}
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
                  <span>{isSubmitting ? 'Evaluating Form...' : 'Express Interest'}</span>
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
