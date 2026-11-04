import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Calculator,
  Settings,
  Coins,
  Wrench,
  AlertCircle,
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Does Renerr install solar systems for free?',
    answer:
      'No. Renerr is developing a model intended to remove the need for schools to pay the full installation cost upfront. Instead of bearing large capital expenditures at the start, qualifying schools pay an agreed monthly subscription or electricity service fee. Access to this model depends on project financing, technical assessment, institutional eligibility, and agreed contractual terms.',
  },
  {
    question: 'Will every school qualify?',
    answer:
      'No. Not every school will qualify immediately. Each potential project must be rigorously evaluated for energy demand, physical roof and ground suitability, technical feasibility, and financial viability to ensure the system is sustainable over the long term.',
  },
  {
    question: 'Who owns the equipment?',
    answer:
      'Equipment ownership arrangements depend on the specific financing and contractual structure agreed for each project. In some models, the project financing entity retains ownership during the service agreement period; in others, alternative lease-to-own or special-purpose vehicle structures may apply.',
  },
  {
    question: 'Does Renerr provide maintenance and servicing?',
    answer:
      'Yes, maintenance and support are central to the energy-as-a-service model. Ongoing service and preventative maintenance arrangements will be formally defined for each project and supported through qualified technical implementation partners to ensure continuous, reliable power.',
  },
  {
    question: 'Can an organisation partner with Renerr?',
    answer:
      'Yes. Renerr actively welcomes discussions with qualified solar engineering and EPC companies, project financiers, impact investors, education authorities, and international development programmes interested in co-developing scalable energy-access projects.',
  },
  {
    question: 'What happens when grid power or sunlight is unavailable?',
    answer:
      'Systems are engineered with battery storage capacity tailored to the specific daytime and evening needs of the facility. The system can operate as an autonomous off-grid solution or complement existing grid connections and backup generators where appropriate.',
  },
];

export const SolutionPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-brand-dark text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-wider">
              <Sun className="w-3.5 h-3.5" />
              <span>Energy-as-a-Service Model</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              A New Approach to Affordable Clean Electricity.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We are restructuring how educational institutions in Nigeria access solar energy. By
              removing the barrier of prohibitive upfront capital, we make clean, reliable power
              viable through a predictable monthly service fee.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* The Core Challenge & Our Model Comparison */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Rethinking Capital Deployment
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Overcoming the High Upfront Cost Barrier
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Conventional solar procurement places the entire financial burden on the customer on
              day one. Renerr’s energy-as-a-service model transforms upfront capital expense into a
              manageable operating subscription.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Traditional Solar Model */}
            <div className="p-8 rounded-2xl bg-brand-cream/80 border border-brand-dark/15 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-brand-charcoal">
                  Conventional Solar Purchase
                </div>
                <h3 className="text-xl font-bold text-brand-dark">High Upfront Capital Purchase</h3>
                <ul className="space-y-3 text-sm text-brand-muted">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Requires 100% upfront capital for solar panels, inverters, and battery storage.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>The school bears the full risk of component failures, battery degradation, and repairs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Lacks dedicated ongoing technical support or performance guarantees.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Unaffordable for most budget-conscious Nigerian schools.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-muted">
                Result: Institutions remain reliant on expensive petrol/diesel fuel.
              </div>
            </div>

            {/* Renerr Energy-as-a-Service Model */}
            <div className="p-8 rounded-2xl bg-brand-cream border-2 border-brand-primary shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-brand-primary text-white">
                  Renerr Energy-as-a-Service
                </div>
                <h3 className="text-xl font-bold text-brand-dark">
                  Predictable Monthly Subscription
                </h3>
                <ul className="space-y-3 text-sm text-brand-charcoal">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Zero Full Upfront Cost:</strong> Qualifying schools avoid large initial equipment purchase fees.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Manageable Monthly Fee:</strong> Schools pay a regular, budget-friendly electricity service fee.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Ongoing Maintenance Included:</strong> Regular servicing and monitoring are built into the agreement.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Subject to Financing & Viability:</strong> Delivered through structured collaboration with verified partners.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-brand-primary/20 text-xs font-semibold text-brand-primary">
                Result: Reliable clean power aligned with institutional cash flows.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Illustrative Concept Example */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-brand-dark/10 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-brand-light text-brand-primary">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-primary">
                  Illustrative Conceptual Walkthrough
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
                  How the Monthly Service Model Operates in Practice
                </h3>
              </div>
            </div>

            {/* Crucial Integrity Banner */}
            <div className="p-4 rounded-xl bg-brand-light/70 border border-brand-primary/30 text-xs text-brand-charcoal flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
              <p>
                <strong>Important Clarification:</strong> The figures below represent a simplified,
                conceptual comparison to explain the operational structure. Renerr does not publish
                fixed tariffs, uniform prices, or guaranteed savings percentages, as every project is
                custom-engineered according to site load profiles, solar irradiance, and agreed
                contract terms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-brand-cream border border-brand-dark/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                  Stage 1: Upfront Phase
                </h4>
                <p className="text-lg font-bold text-brand-dark mt-1">No Heavy Purchase</p>
                <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                  Rather than paying millions of Naira upfront to acquire panels and batteries, the
                  school enters a long-term service agreement once project financing is secured.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-brand-cream border border-brand-dark/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                  Stage 2: Ongoing Usage
                </h4>
                <p className="text-lg font-bold text-brand-dark mt-1">Predictable Subscription</p>
                <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                  The school pays an agreed monthly electricity service fee, making operational
                  budgeting consistent and shielding the school from volatile generator fuel prices.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-brand-cream border border-brand-dark/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                  Stage 3: Lifetime Care
                </h4>
                <p className="text-lg font-bold text-brand-dark mt-1">Technical Assurance</p>
                <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                  Engineering partners monitor output and handle equipment servicing so teachers and
                  students focus on learning, not maintenance headaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical and Financing Ecosystem Breakdown */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Structured Project Delivery
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              The Architecture of Every Project
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Each solar installation brings together specialized partners to manage technical
              precision, financial compliance, and long-term operational health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-accent flex items-center justify-center">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">Site Assessment & Sizing</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Detailed energy audits assess actual load requirements (lighting, computers, pumps)
                and roof structural integrity to prevent over- or under-sizing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-primary text-white flex items-center justify-center">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">Role of Financing Partners</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Impact investors and development funds provide project capital against contracted
                cash flows, removing the upfront burden from local schools.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-accent text-brand-dark flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">Engineering & EPC Partners</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Certified solar engineers and local contractors execute procurement, electrical
                integration, and quality commissioning according to international safety codes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-cream flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">Operations & Maintenance</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Scheduled panel cleaning, battery diagnostic checks, inverter telemetry, and rapid
                fault resolution ensure maximum system availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Eligibility & Financing Conditions */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-3xl bg-white p-8 sm:p-12 border border-brand-dark/10 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Prudent Project Governance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                Risks, Eligibility Criteria & Financing Conditions
              </h2>
              <p className="text-sm text-brand-muted leading-relaxed">
                To protect institutional partners and investors, every project must satisfy strict
                viability gates before advancing to implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                {
                  title: 'Physical & Structural Feasibility',
                  desc: 'Roofs must have adequate structural integrity, minimal shading from trees or adjacent structures, and secure premises for battery storage.',
                },
                {
                  title: 'Institutional Stability',
                  desc: 'Schools must demonstrate continuous operational history, stable enrolment, and the administrative capacity to maintain service agreements.',
                },
                {
                  title: 'Project Financing Approval',
                  desc: 'Implementation is dependent on securing matching capital from project finance partners or dedicated energy-access funds.',
                },
                {
                  title: 'Agreed Service Contracts',
                  desc: 'Clear legal terms defining monthly payment obligations, equipment security, and service levels must be ratified prior to deployment.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-brand-cream/80 border border-brand-dark/10">
                  <h4 className="text-sm font-bold text-brand-dark">{item.title}</h4>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-b border-brand-dark/5" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-brand-muted">
              Clear, transparent answers about our proposed model, eligibility, and partnership
              pathways.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-brand-dark/10 overflow-hidden bg-brand-cream transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-brand-dark hover:text-brand-primary transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <span className="p-1 rounded-md bg-white border border-brand-dark/10 text-brand-primary flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-brand-charcoal/85 leading-relaxed border-t border-brand-dark/5 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3">
            <h4 className="text-base font-bold text-brand-dark">Have an unanswered question?</h4>
            <p className="text-xs sm:text-sm text-brand-muted">
              We welcome open dialogue with school administrators, project developers, and funding
              organisations.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-brand-primary text-white hover:bg-brand-dark transition-colors"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to explore a solar project for your school?
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Tell us about your school facility, location, and power needs so we can evaluate
            feasibility.
          </p>
          <div className="pt-2">
            <Link
              to="/schools"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] transition-colors"
            >
              <span>Register School Interest</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
