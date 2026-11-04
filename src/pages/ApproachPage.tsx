import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Layers,
  Settings,
  Coins,
  Wrench,
  AlertCircle,
  Cpu,
  Globe2,
  Users,
  Building2,
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Renerr Energies' core mission and focus?",
    answer:
      'Renerr Energies Ltd is an African energy-access company working to reduce energy poverty and expand access to affordable, reliable electricity across Africa through practical solutions, innovation, and strategic partnerships. We see electricity as a fundamental enabler of human development, education, healthcare, and economic opportunity.',
  },
  {
    question: 'Is Renerr limited to solar energy or a single technology?',
    answer:
      'No. While solar energy and battery storage are essential components of the opportunity in Africa, Renerr is technology-flexible. We explore renewable energy systems, distributed energy solutions, hybrid setups, and appropriate technologies best matched to local energy demand, geography, and resources.',
  },
  {
    question: 'Does Renerr only work with schools or educational institutions?',
    answer:
      'No. While educational facilities represent a critical high-impact area where electricity directly enables digital learning and administration, Renerr’s mission encompasses individuals, households, businesses, healthcare facilities, and underserved communities. Our mission is permanent, while our specific programmes and customer segments evolve over time.',
  },
  {
    question: 'What types of commercial and financing models does Renerr develop?',
    answer:
      'We explore diverse, sustainable commercial structures depending on customer needs and project economics. These may include energy-as-a-service models, subscription-based electricity delivery, direct project procurement, blended finance structures, and infrastructure partnerships designed to overcome high upfront capital hurdles.',
  },
  {
    question: 'How does Renerr evaluate new project opportunities?',
    answer:
      'Every project is evaluated through disciplined criteria: rigorous energy demand profiling, site suitability and physical safety, economic viability, long-term operational maintenance arrangements, and partner alignment. We do not apply rigid templates where custom engineering is required.',
  },
  {
    question: 'How can technical companies, financiers, and institutions partner with Renerr?',
    answer:
      'We actively welcome collaboration with solar EPC contractors, electrical engineers, impact investors, development finance institutions, public agencies, and commercial customers. You can initiate a conversation through our Partner With Us page or contact our team directly.',
  },
];

export const ApproachPage: React.FC = () => {
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
              <Layers className="w-3.5 h-3.5" />
              <span>Our Strategy & Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Practical Solutions for a Complex Energy Challenge.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              There is no single solution to Africa's energy-access challenge. Different customers,
              communities, and locations have different needs, resources, infrastructure, and
              financial circumstances.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Opening Core Philosophy */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Needs-Driven & Adaptive
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Matching Solutions to Realities on the Ground
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-brand-muted leading-relaxed">
              <p>
                Renerr seeks to identify and develop approaches suited to these different realities.
                Depending on the context, this may involve renewable energy technologies, distributed
                energy systems, innovative financing arrangements, energy services, infrastructure
                partnerships, or other appropriate approaches.
              </p>
              <p className="text-brand-charcoal font-medium">
                Our focus is on identifying solutions that are technically suitable, economically
                viable, and capable of improving access to reliable electricity.
              </p>
            </div>
          </div>

          {/* 4 Pillars of Delivery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="pillars">
            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-accent flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">1. Understanding Needs</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Identifying the specific electricity challenges faced by people, businesses,
                institutions, and communities rather than imposing pre-packaged assumptions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-primary text-white flex items-center justify-center">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">2. Practical Solutions</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Exploring appropriate technologies, delivery models, and system designs engineered
                specifically for local environmental conditions and load requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-accent text-brand-dark flex items-center justify-center">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">3. Strategic Partnerships</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Collaborating with technical specialists, institutional investors, development
                organisations, public bodies, and community partners to assemble viable projects.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">4. Sustainable Impact</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Supporting commercial and operational approaches that remain viable, scale
                responsibly, and deliver dependable power over decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Broad Solution Themes */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Areas of Focus & Exploration
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Flexible Energy Solution Themes
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Our capability framework spans six complementary areas consistent with our mission to
              expand energy access across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-brand-dark/10 shadow-sm space-y-3 hover:border-brand-primary transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">Renewable & Clean Energy</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Harnessing solar photovoltaic systems, battery energy storage systems (BESS), and
                hybrid architectures to provide clean, dependable alternatives to volatile fossil
                fuels.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-brand-dark/10 shadow-sm space-y-3 hover:border-brand-primary transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">Distributed Energy Access</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Deploying modular, decentralized power systems closer to where people live, learn,
                and work, reducing transmission losses and circumventing grid bottlenecks.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-brand-dark/10 shadow-sm space-y-3 hover:border-brand-primary transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">Innovative Business Models</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Developing service-based models, subscription mechanisms, and blended capital
                structures that reduce prohibitive upfront costs and align payments with customer
                cash flows.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-brand-dark/10 shadow-sm space-y-3 hover:border-brand-primary transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">Project Development & Delivery</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Managing end-to-end project structuring: from demand audits and feasibility
                assessments to engineering oversight, commissioning, and continuous monitoring.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-brand-dark/10 shadow-sm space-y-3 hover:border-brand-primary transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">Strategic Partnerships</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Uniting specialized engineering contractors, institutional property owners,
                financiers, and development programmes to accelerate project origination and
                pipeline delivery.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-brand-dark/10 shadow-sm space-y-3 hover:border-brand-primary transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">Scalable Energy Infrastructure</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Designing flexible, modular systems that can scale in capacity over time as community
                and commercial power demands expand.
              </p>
            </div>
          </div>

          {/* Realistic Governance Banner */}
          <div className="mt-12 p-5 rounded-2xl bg-white border border-brand-dark/10 max-w-4xl mx-auto flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
            <p className="text-xs text-brand-charcoal leading-relaxed">
              <strong>Technical Integrity Note:</strong> The themes above describe areas of strategic
              focus and ongoing pipeline development. Renerr Energies does not promise immediate
              universal access, guaranteed tariff rates, or unverified performance figures. Every
              project proceeds based on bespoke technical assessments and agreed bilateral contracts.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-b border-brand-dark/5" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-brand-muted">
              Clear, transparent explanations regarding our company focus, technologies, and
              partnership approach.
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
            <h4 className="text-base font-bold text-brand-dark">Have an inquiry regarding a project?</h4>
            <p className="text-xs sm:text-sm text-brand-muted">
              We welcome dialogue with project developers, property owners, and funding partners.
            </p>
            <div className="pt-2">
              <Link
                to="/partner"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-brand-primary text-white hover:bg-brand-dark transition-colors"
              >
                <span>Initiate a Conversation</span>
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
            Let's Collaborate on Energy Access
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Discover how your organisation can partner with Renerr Energies to identify needs, develop
            viable clean energy projects, and expand reliable electricity.
          </p>
          <div className="pt-2">
            <Link
              to="/partner"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] transition-colors"
            >
              <span>Explore Partnership Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
