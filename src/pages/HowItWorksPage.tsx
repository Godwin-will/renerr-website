import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Building2,
  Smartphone,
  ShieldCheck,
  Sparkles,
  Zap,
  Coins,
  Activity,
  Layers,
  Search,
  FileCheck,
  CreditCard,
  BarChart3,
  Info,
} from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'households' | 'businesses'>('households');

  // Customer Journey A: Households & Communities
  const communitySteps = [
    {
      step: '01',
      title: 'Join or Create a Community',
      desc: 'Residents can discover an existing community or express interest in forming a new one with other households in their locality.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Connect With Your Neighbours',
      desc: 'Interested residents come together to establish a suitable community energy arrangement.',
      icon: Users,
    },
    {
      step: '03',
      title: 'Pool Contributions',
      desc: 'Participating households contribute towards the development of shared energy infrastructure according to agreed terms.',
      icon: Coins,
    },
    {
      step: '04',
      title: 'Renerr Develops the Energy Project',
      desc: 'Renerr coordinates the assessment, planning and implementation of a suitable energy solution.',
      icon: Layers,
    },
    {
      step: '05',
      title: 'Access and Manage Electricity',
      desc: 'Once the project becomes operational, participating customers can use the Renerr platform to manage their electricity services, monitor energy balances and access relevant account information.',
      icon: Zap,
    },
  ];

  // Customer Journey B: Businesses & Organisations
  const businessSteps = [
    {
      step: '01',
      title: 'Tell Us What You Need',
      desc: 'Businesses and organisations submit their electricity requirements through the Renerr platform or contact channels.',
      icon: FileCheck,
    },
    {
      step: '02',
      title: 'We Assess Your Requirements',
      desc: 'Renerr evaluates the energy needs and technical and financial feasibility of the proposed project.',
      icon: Activity,
    },
    {
      step: '03',
      title: 'Agree on a Project Structure',
      desc: 'We develop an appropriate project proposal, including the scope, cost and mutually agreed payment arrangement.',
      icon: Coins,
    },
    {
      step: '04',
      title: 'Project Implementation',
      desc: 'Renerr coordinates the development and implementation of the agreed energy solution.',
      icon: Layers,
    },
    {
      step: '05',
      title: 'Ongoing Energy Services',
      desc: 'Where included in the project agreement, customers can access operational support and manage relevant energy-service information through the platform.',
      icon: Zap,
    },
  ];

  // Conceptual app features
  const appFeatures = [
    {
      title: 'Discover & Join Communities',
      desc: 'Locate local clusters or register interest in initiating an energy group with nearby residents.',
      icon: Search,
    },
    {
      title: 'Manage Community Participation',
      desc: 'Track cluster formation status, neighbour sign-ups, and joint capacity milestones.',
      icon: Users,
    },
    {
      title: 'View Pooled Contributions',
      desc: 'Transparent accounting of individual deposits and aggregate milestone funding progress.',
      icon: Coins,
    },
    {
      title: 'Monitor Electricity Balances',
      desc: 'Real-time visibility into account balances, daily usage metrics, and current system draw.',
      icon: Activity,
    },
    {
      title: 'Purchase Electricity',
      desc: 'Simple and flexible digital recharge to maintain continuous power without administrative hassle.',
      icon: CreditCard,
    },
    {
      title: 'Track Energy Consumption',
      desc: 'Actionable graphs highlighting daily, weekly, and seasonal electricity demand trends.',
      icon: BarChart3,
    },
    {
      title: 'Manage Project Information',
      desc: 'Direct access to equipment specs, maintenance logs, warranties, and dedicated support channels.',
      icon: ShieldCheck,
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
              <span>Customer Journey & Experience</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Accessing Energy, Made Simpler.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              RENERR is being developed to make it easier for individuals, households, communities and
              organisations to participate in energy solutions and manage their electricity services.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* ======================================================== */}
      {/* 2. JOURNEY SELECTOR TABS                                 */}
      {/* ======================================================== */}
      <section className="py-8 bg-brand-light/60 border-b border-brand-dark/5 sticky top-[73px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('households')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-sm ${
                activeTab === 'households'
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'bg-white text-brand-dark hover:bg-brand-cream border border-brand-dark/10'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>For Households & Communities</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('businesses')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-sm ${
                activeTab === 'businesses'
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'bg-white text-brand-dark hover:bg-brand-cream border border-brand-dark/10'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>For Businesses & Organisations</span>
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. CUSTOMER JOURNEY SECTIONS                             */}
      {/* ======================================================== */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {activeTab === 'households' ? (
            /* Journey A: Households & Communities */
            <div className="space-y-10 animate-fadeIn">
              <div className="text-center space-y-3 max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                  Shared Community Model
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
                  Access Energy Together.
                </h2>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  How residents collaborate to bring shared, reliable clean electricity to their
                  neighbourhood.
                </p>
              </div>

              {/* 5-Step Process Sequence */}
              <div className="space-y-4">
                {communitySteps.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="p-6 sm:p-7 rounded-2xl bg-brand-cream/60 border border-brand-dark/10 hover:border-brand-primary/40 transition-all flex flex-col sm:flex-row items-start gap-5 shadow-sm"
                    >
                      <div className="flex items-center gap-4 flex-shrink-0">
                        <span className="text-2xl sm:text-3xl font-black text-brand-primary font-mono">
                          {item.step}
                        </span>
                        <div className="w-11 h-11 rounded-xl bg-white border border-brand-dark/10 text-brand-primary flex items-center justify-center shadow-xs">
                          <IconComp className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-brand-dark">
                          {item.title}
                        </h3>
                        <p className="text-sm text-brand-charcoal/85 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Feasibility Notice */}
              <div className="p-5 rounded-2xl bg-brand-light/70 border border-brand-primary/20 flex items-start gap-3">
                <Info className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs text-brand-charcoal leading-relaxed">
                  <strong>Feasibility Criteria: </strong> Community eligibility, participant cluster
                  size, and infrastructure requirements depend on technical, geographic, and economic
                  feasibility assessments.
                </p>
              </div>
            </div>
          ) : (
            /* Journey B: Businesses & Organisations */
            <div className="space-y-10 animate-fadeIn">
              <div className="text-center space-y-3 max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                  Commercial Co-Financing
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
                  Energy Solutions With Flexible Payment Arrangements.
                </h2>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  How enterprises, health facilities, and institutions acquire bespoke energy setups
                  with manageable cash flow terms.
                </p>
              </div>

              {/* 5-Step Process Sequence */}
              <div className="space-y-4">
                {businessSteps.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="p-6 sm:p-7 rounded-2xl bg-brand-cream/60 border border-brand-dark/10 hover:border-brand-primary/40 transition-all flex flex-col sm:flex-row items-start gap-5 shadow-sm"
                    >
                      <div className="flex items-center gap-4 flex-shrink-0">
                        <span className="text-2xl sm:text-3xl font-black text-brand-primary font-mono">
                          {item.step}
                        </span>
                        <div className="w-11 h-11 rounded-xl bg-white border border-brand-dark/10 text-brand-primary flex items-center justify-center shadow-xs">
                          <IconComp className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-brand-dark">
                          {item.title}
                        </h3>
                        <p className="text-sm text-brand-charcoal/85 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Terms Notice */}
              <div className="p-5 rounded-2xl bg-brand-light/70 border border-brand-primary/20 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs text-brand-charcoal leading-relaxed">
                  <strong>Agreement Notice: </strong> Project payment structures, initial
                  contributions, and term durations are structured individually based on technical
                  assessments, load profiles, and mutually agreed contractual arrangements.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. INTRODUCING THE RENERR APP                            */}
      {/* ======================================================== */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5" id="app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-dark text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5 text-brand-primary" />
              <span>Platform Preview</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight">
              Your Energy Journey, Connected.
            </h2>
            <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed">
              RENERR is being developed as a digital platform that brings energy access and customer
              management together.
            </p>
          </div>

          {/* Conceptual Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appFeatures.map((feat, i) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-white border border-brand-dark/10 hover:border-brand-primary/40 transition-all shadow-sm space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-brand-dark">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{feat.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-brand-dark/10 flex items-center justify-between text-[11px] text-brand-muted">
                    <span>Feature Preview</span>
                    <span className="text-brand-primary font-semibold">Planned Feature</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Conceptual Mobile UI Screen Preview */}
          <div className="max-w-4xl mx-auto bg-brand-dark text-white rounded-3xl p-6 sm:p-10 border border-brand-primary/30 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
                  Concept Interface
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Simplified Energy Management in One Place
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-brand-accent border border-white/20 self-start sm:self-center">
                Conceptual Design
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs text-gray-400">Community Cluster</span>
                <p className="text-base font-bold text-white">Lakeside Residents</p>
                <p className="text-xs text-emerald-400 font-medium">12 Households Active</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs text-gray-400">Contribution Target</span>
                <p className="text-base font-bold text-white">Pooled Milestone</p>
                <p className="text-xs text-brand-accent font-medium">Fully Subscribed</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs text-gray-400">Power Availability</span>
                <p className="text-base font-bold text-white">24/7 Clean Energy</p>
                <p className="text-xs text-emerald-400 font-medium">Operational Status</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. BOTTOM CTA                                            */}
      {/* ======================================================== */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
            Ready to Explore an Energy Project?
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal/80 max-w-xl mx-auto leading-relaxed">
            Connect with our team to discuss community opportunities or structured arrangements for
            your enterprise.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] transition-colors shadow-sm"
            >
              Contact Our Team
            </Link>
            <Link
              to="/partner"
              className="px-6 py-3 rounded-xl text-sm font-bold bg-white border border-brand-dark/15 text-brand-dark hover:border-brand-primary hover:bg-brand-light/50 transition-colors shadow-sm"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
