import React from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const PrivacyPage: React.FC = () => {
  const lastUpdated = 'November 2026';

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-brand-dark text-white py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Transparency & Data Responsibility</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-gray-300">
            Last Updated: {lastUpdated} &bull; Renerr Energies Ltd
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-dark/10 shadow-sm space-y-8 text-sm text-brand-charcoal/85 leading-relaxed">
            {/* Legal Notice */}
            <div className="p-4 rounded-xl bg-brand-light/70 border border-brand-primary/20 text-xs text-brand-charcoal flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
              <p>
                <strong>Notice:</strong> This policy describes how Renerr Energies Ltd collects,
                uses, and safeguards information submitted through our website. As a developing
                business in Nigeria, we are committed to respecting your privacy, protecting
                enquiry data, and complying with the Nigeria Data Protection Act (NDPA) and applicable
                standards.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-brand-dark">1. Information We Collect</h2>
              <p>
                We collect personal and organisational information only when you voluntarily submit
                it to us through our website contact channels, project questionnaire, or
                partnership enquiry form. This may include:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-brand-muted text-xs sm:text-sm">
                <li>
                  <strong>Contact details:</strong> Your full name, work email address, telephone
                  number, and professional job title.
                </li>
                <li>
                  <strong>Institutional or facility information:</strong> Organisation or facility name,
                  sector category, location (State, Town/LGA or country), and existing power
                  supply status.
                </li>
                <li>
                  <strong>Technical context:</strong> Energy challenges, priority equipment or loads to be
                  powered, and brief project notes.
                </li>
              </ul>
              <p className="text-xs text-brand-muted italic">
                * We do not collect student records, sensitive personal financial numbers, or
                unnecessary identification documents through this public website.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-brand-dark">2. Why We Collect Information</h2>
              <p>We use the submitted information strictly for legitimate business purposes:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-brand-muted text-xs sm:text-sm">
                <li>To evaluate potential feasibility for energy access and renewable power projects.</li>
                <li>To respond to your partnership, financing, or engineering inquiries.</li>
                <li>
                  To schedule follow-up technical discussions and preliminary energy audits where
                  viable.
                </li>
                <li>To maintain business records related to ongoing pipeline discussions.</li>
              </ul>
              <p>
                We do not sell, rent, trade, or monetize your contact information with third-party
                advertisers or data brokers.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-brand-dark">3. How Enquiries Are Handled & Stored</h2>
              <p>
                Enquiries submitted via email or direct form gateways are delivered to authorized
                Renerr Energies personnel. If a third-party form submission provider (such as Formspree
                or Formsubmit) is configured to deliver email messages, data is transmitted
                securely via encrypted HTTPS connections.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-brand-dark">4. Data Retention</h2>
              <p>
                We retain enquiry information only for as long as necessary to review project
                feasibility, maintain ongoing partnership communications, or fulfill legitimate
                administrative obligations. If an institution does not proceed with a project, you may
                request removal of your details from our active outreach records at any time.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-brand-dark">5. Your Rights</h2>
              <p>Under applicable Nigerian data protection regulations, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-brand-muted text-xs sm:text-sm">
                <li>Request confirmation of whether we hold your submitted enquiry details.</li>
                <li>Request correction of inaccurate or outdated institutional information.</li>
                <li>Request that we delete your submitted contact records from our active database.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-brand-dark">6. Cookies & Tracking</h2>
              <p>
                This website is built with a lightweight, privacy-respecting architecture. We do not
                deploy intrusive third-party cross-site advertising cookies, behavioral tracking
                pixels, or fingerprinting scripts.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3 pt-4 border-t border-brand-dark/10">
              <h2 className="text-lg font-bold text-brand-dark">7. Contact Us Regarding Privacy</h2>
              <p>
                If you have questions regarding this privacy policy or wish to request data correction
                or deletion, please reach out to us:
              </p>
              <div className="p-4 rounded-xl bg-brand-cream border border-brand-dark/10 space-y-2 text-xs">
                <p className="font-semibold text-brand-dark">{siteConfig.companyName}</p>
                <p className="text-brand-muted">
                  Email:{' '}
                  <a
                    href={`mailto:${siteConfig.contact.email || 'notifications@renerrenergies.com'}`}
                    className="text-brand-primary underline"
                  >
                    {siteConfig.contact.email || 'notifications@renerrenergies.com'}
                  </a>
                </p>
                <p className="text-brand-muted">Jurisdiction: {siteConfig.country}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
