import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Building2,
  Users,
  Coins,
  ArrowRight,
  Smartphone,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do structured payment arrangements work for commercial projects?',
    answer:
      'We work with businesses and organisations to break down high upfront capital barriers into manageable financial milestones. Payment arrangements typically involve an initial contribution followed by agreed instalments over a defined project period. For example, an illustrative arrangement might include a 50% initial contribution upon project structuring, with the remaining 50% paid over 3 to 12 months. This is an illustrative example: actual terms depend on the technical scale, hardware specifications, customer credit evaluation, and formal bilateral contracts.',
  },
  {
    question: 'Does Renerr Energies manufacture solar panels or equipment?',
    answer:
      'No. We are an energy-access and energy-solutions development company. We engineer custom energy projects, select premium Tier-1 hardware suited to local conditions, manage procurement and implementation, and coordinate long-term service agreements.',
  },
  {
    question: 'What is community-based shared energy, and is it currently operational?',
    answer:
      'Community-based shared energy is an evolving model under active development. Rather than each household investing independently in individual, costly small systems, clusters of residential households within a suitable locality come together to access shared clean energy infrastructure. Renerr coordinates the community agreements, pools contributions, manages engineering and oversees ongoing power delivery.',
  },
  {
    question: 'What is the role of digital tools or mobile applications in community energy?',
    answer:
      'Digital tools and future mobile applications are designed as enabling platforms to coordinate household registration, cluster management, contribution tracking, electricity allocation, and customer communication. Digital software supports our operational energy services; it is not a standalone product we sell.',
  },
  {
    question: 'Is there an arbitrary maximum radius for community energy clusters?',
    answer:
      'No. The geographic coverage, cluster boundary, and distribution layout of each community shared-energy project are determined individually by technical distribution limits, household density, topography, and economic feasibility.',
  },
  {
    question: 'Do you offer operations and maintenance (O&M) for completed projects?',
    answer:
      'Yes. For both commercial and community energy projects, ongoing monitoring, preventative maintenance, battery telemetry, and service support are structured directly into the agreed project scope to ensure dependable power over decades.',
  },
];

export const EnergySolutionsPage: React.FC = () => {
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
              <Zap className="w-3.5 h-3.5" />
              <span>Two Principal Service Models</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Our Energy Solutions
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We develop practical energy solutions that help businesses, organisations and
              communities access affordable, reliable electricity through flexible commercial project
              arrangements and innovative shared-energy models.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Model Navigation Jump Bar */}
      <div className="bg-white border-b border-brand-dark/10 sticky top-[72px] z-40 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 text-xs font-semibold">
          <span className="text-brand-muted hidden sm:inline">Jump to Solution Model:</span>
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto w-full sm:w-auto">
            <a
              href="#commercial"
              className="px-3.5 py-1.5 rounded-lg bg-brand-cream border border-brand-dark/10 text-brand-dark hover:border-brand-primary whitespace-nowrap transition-colors"
            >
              1. Commercial & Organisational Projects
            </a>
            <a
              href="#community"
              className="px-3.5 py-1.5 rounded-lg bg-brand-cream border border-brand-dark/10 text-brand-dark hover:border-brand-primary whitespace-nowrap transition-colors"
            >
              2. Community-Based Shared Energy
            </a>
            <a
              href="#faq"
              className="px-3.5 py-1.5 rounded-lg text-brand-muted hover:text-brand-primary whitespace-nowrap"
            >
              Solutions FAQ
            </a>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SECTION 1: COMMERCIAL AND ORGANISATIONAL PROJECTS */}
      {/* ======================================================== */}
      <section className="py-20 bg-white border-b border-brand-dark/5" id="commercial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Service Model 1</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Commercial & Organisational Energy Projects
            </h2>
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              We work with businesses, educational institutions, healthcare centers and commercial
              enterprises to develop and implement energy projects tailored to their electricity
              requirements.
            </p>
          </div>

          {/* 5 Operational Steps for Commercial Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="w-8 h-8 rounded-lg bg-brand-primary text-white flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <h3 className="text-base font-bold text-brand-dark">Needs Assessment</h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Rigorous audits of daytime and nighttime load demands, power continuity hurdles, and
                  critical machinery requirements.
                </p>
              </div>
              <div className="pt-3 border-t border-brand-dark/5 text-[11px] font-semibold text-brand-primary">
                Load & Site Audit
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="w-8 h-8 rounded-lg bg-brand-primary text-white flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <h3 className="text-base font-bold text-brand-dark">Planning & Design</h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Bespoke technical system engineering, roof and electrical load optimization, battery
                  storage sizing, and safety integration.
                </p>
              </div>
              <div className="pt-3 border-t border-brand-dark/5 text-[11px] font-semibold text-brand-primary">
                Technical Sizing
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="w-8 h-8 rounded-lg bg-brand-primary text-white flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <h3 className="text-base font-bold text-brand-dark">Structured Payments</h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Structuring payment arrangements with an initial contribution and deferred balances
                  to avoid full upfront capital expenditure.
                </p>
              </div>
              <div className="pt-3 border-t border-brand-dark/5 text-[11px] font-semibold text-brand-primary">
                Flexible Financing
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="w-8 h-8 rounded-lg bg-brand-primary text-white flex items-center justify-center font-bold text-sm">
                  4
                </span>
                <h3 className="text-base font-bold text-brand-dark">Implementation</h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Hardware procurement, certified electrical engineering execution, safety
                  compliance, and rigorous pre-commissioning testing.
                </p>
              </div>
              <div className="pt-3 border-t border-brand-dark/5 text-[11px] font-semibold text-brand-primary">
                Turnkey Deployment
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="w-8 h-8 rounded-lg bg-brand-primary text-white flex items-center justify-center font-bold text-sm">
                  5
                </span>
                <h3 className="text-base font-bold text-brand-dark">O&M Support</h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Scheduled maintenance, remote telemetry monitoring, preventative servicing, and
                  rapid fault resolution under the agreed scope.
                </p>
              </div>
              <div className="pt-3 border-t border-brand-dark/5 text-[11px] font-semibold text-brand-primary">
                Long-Term Uptime
              </div>
            </div>
          </div>

          {/* Structured Payment Arrangement Deep Dive */}
          <div className="bg-brand-cream rounded-3xl p-8 sm:p-10 border border-brand-dark/10 space-y-5" id="financing">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-brand-light text-brand-primary">
                <Coins className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark">
                  Structured Payment Arrangements Explained
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted">
                  Designed to remove the barrier of paying 100% upfront project capital.
                </p>
              </div>
            </div>

            <p className="text-sm text-brand-charcoal/85 leading-relaxed">
              Through structured payment arrangements, we work with qualifying businesses and
              organisations to stagger capital outlays. An initial deposit helps fund procurement and
              installation, followed by scheduled instalments over an agreed project timeline.
            </p>

            {/* Illustrative Payment Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-brand-dark/10 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  Illustrative Example
                </span>
                <h4 className="text-base font-bold text-brand-dark">
                  50% Initial Contribution + 50% Deferred Balance
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  A representative commercial project may be structured with an initial 50%
                  contribution upon agreement and procurement, and the remaining 50% paid in regular
                  instalments over approximately 3 to 12 months.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-brand-dark/10 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                  Contractual Reality
                </span>
                <h4 className="text-base font-bold text-brand-dark">Bespoke Commercial Terms</h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  This 50/50 arrangement is an illustrative example only, not a universal guarantee.
                  Actual contribution ratios, installment tenors, and security terms are tailored to
                  project size, equipment specifications, and verified credit assessment.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-brand-muted">
                Have a facility or enterprise requiring reliable electricity?
              </span>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-brand-primary text-white hover:bg-brand-dark transition-colors shadow-sm"
              >
                <span>Discuss a Commercial Energy Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: COMMUNITY-BASED SHARED ENERGY */}
      {/* ======================================================== */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5" id="community">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-dark text-xs font-bold uppercase tracking-wider">
              <Users className="w-4 h-4 text-brand-primary" />
              <span>Service Model 2</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Community-Based Shared Energy Solutions
            </h2>
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              We are developing a community-based approach that enables households within a suitable
              locality to collectively access shared energy infrastructure.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-dark/10 shadow-sm space-y-8">
            <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
              <p>
                Rather than requiring one household to bear the entire investment independently—often
                leading to small, undersized, unreliable setups—participating residents can come
                together through a joint arrangement, pool their contributions and access a shared,
                professionally engineered energy system.
              </p>
              <div className="p-4 rounded-xl bg-brand-light/70 border border-brand-primary/20 text-xs text-brand-charcoal">
                <strong>Status Notice:</strong> This is an evolving business model under active
                development. Renerr is establishing the technical cluster criteria and operational
                structures to bring community shared-energy systems to life.
              </div>
            </div>

            {/* The 7 Pillars of Community Shared Energy */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-brand-dark">
                How Community-Based Shared Energy Operates
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    title: '1. Community Identification',
                    desc: 'Identifying localities, neighborhood clusters, or estates where residents experience chronic electricity deficits and express collective interest.',
                  },
                  {
                    title: '2. Household Participation',
                    desc: 'Gathering household expressions of interest to map local electrical demand, load timing, and willingness to collaborate.',
                  },
                  {
                    title: '3. Collective Agreements',
                    desc: 'Structuring clear, transparent governance arrangements that establish responsibilities, mutual obligations, and service terms.',
                  },
                  {
                    title: '4. Pooled Contributions',
                    desc: 'Participating households pool agreed financial contributions toward the capital and deployment costs of the shared energy infrastructure.',
                  },
                  {
                    title: '5. Shared Infrastructure',
                    desc: 'Deploying high-quality centralized clean energy generation and battery storage engineered specifically for the cluster.',
                  },
                  {
                    title: '6. Allocation & Metering',
                    desc: 'Distributing electricity to each home according to agreed allocations, smart sub-metering, and structured usage policies.',
                  },
                  {
                    title: '7. Operations & Management',
                    desc: 'Renerr coordinates professional operations, routine servicing, telemetry monitoring, and community support over the system lifetime.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-2 ${
                      idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    <h4 className="text-sm font-bold text-brand-dark">{item.title}</h4>
                    <p className="text-xs text-brand-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Digital Platform & Enabling Tool Role */}
            <div className="p-6 rounded-2xl bg-brand-light/80 border border-brand-primary/30 space-y-3">
              <div className="flex items-center gap-2.5">
                <Smartphone className="w-5 h-5 text-brand-primary" />
                <h4 className="text-sm font-bold text-brand-dark">
                  The Role of Digital Tools & Future Mobile Applications
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-brand-charcoal leading-relaxed">
                A future digital platform and mobile application are being designed to make community
                registration, household coordination, contribution pooling, and project management
                seamless.
              </p>
              <div className="p-3.5 rounded-xl bg-white border border-brand-primary/20 text-xs text-brand-muted space-y-1">
                <p>
                  <strong>Enabling Tool, Not the Main Product:</strong> Digital tools are enabling
                  platforms that support customer coordination and project delivery. We are an energy
                  project developer and operator, not a software company.
                </p>
                <p>
                  <strong>Geographic Feasibility:</strong> We do not publish an arbitrary maximum
                  community radius. The coverage of each cluster is determined strictly by technical
                  distribution limits, infrastructure topology, and economic viability.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-brand-muted">
                Are you a neighborhood association, estate manager, or community group?
              </span>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] transition-colors shadow-sm"
              >
                <span>Register Community Interest</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* FAQ SECTION */}
      {/* ======================================================== */}
      <section className="py-20 bg-white border-b border-brand-dark/5" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Clear Explanations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
              Frequently Asked Questions About Our Solutions
            </h2>
            <p className="text-sm text-brand-muted">
              Transparent answers regarding our commercial payment models, community approach, and
              services.
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
            <h4 className="text-base font-bold text-brand-dark">Have a project in mind?</h4>
            <p className="text-xs sm:text-sm text-brand-muted">
              We welcome dialogue with business owners, estate managers, investors, and development
              partners.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-brand-primary text-white hover:bg-brand-dark transition-colors"
              >
                <span>Connect With Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to explore an energy project?
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Whether for your organisation or a residential community cluster, let's explore how we
            can structure reliable electricity for your needs.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
