import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Search,
  FileCheck,
  Coins,
  Layers,
  Wrench,
  TrendingUp,
  ArrowRight,
  Building2,
  Users,
  CheckCircle2,
} from 'lucide-react';

export const HowWeWorkPage: React.FC = () => {
  const stages = [
    {
      num: '01',
      title: 'UNDERSTAND',
      subtitle: 'Energy Needs Identification',
      description:
        'We identify the specific electricity requirements, operational hours, and power challenges of the customer, facility, or residential community cluster. Rather than assuming standard formulas, we listen to how electricity is used and the impact of existing outages.',
      focus: [
        'Daily and peak electrical load profiling',
        'Assessment of critical equipment and operational priorities',
        'Review of existing generator or grid expenditures',
        'Community and institutional stakeholder consultations',
      ],
      icon: Search,
    },
    {
      num: '02',
      title: 'ASSESS',
      subtitle: 'Technical & Feasibility Evaluation',
      description:
        'Our engineering and commercial team evaluates the technical, financial, and geographical feasibility of the site. We analyze physical structures, solar irradiation, distribution layout, and economic viability to confirm project practicality.',
      focus: [
        'Rooftop integrity and ground space evaluation',
        'Solar irradiation and shading analysis',
        'Electrical wiring, metering, and distribution readiness',
        'Financial feasibility and baseline cost comparison',
      ],
      icon: FileCheck,
    },
    {
      num: '03',
      title: 'STRUCTURE',
      subtitle: 'Commercial & Governance Structuring',
      description:
        'We design a tailored commercial arrangement that matches the customer’s financial capacity. For commercial customers, this includes structured payment arrangements (e.g. an initial contribution with deferred balance instalments). For community clusters, it includes joint participation agreements and pooled contribution rules.',
      focus: [
        'Bespoke commercial payment terms & installment milestones',
        'Community cluster governance and contribution pooling',
        'Transparent service-level definitions and uptime commitments',
        'Formal bilateral contract execution',
      ],
      icon: Coins,
    },
    {
      num: '04',
      title: 'DEVELOP',
      subtitle: 'Engineering, Procurement & Implementation',
      description:
        'We coordinate detailed system design, hardware procurement from reputable manufacturers, logistics, physical installation, and rigorous safety commissioning. Every system is built to international engineering standards.',
      focus: [
        'Tier-1 clean energy hardware and battery selection',
        'Certified electrical contractor coordination',
        'Quality assurance, inverter calibration, and protection',
        'Pre-commissioning performance testing and verification',
      ],
      icon: Layers,
    },
    {
      num: '05',
      title: 'OPERATE',
      subtitle: 'Operations, Monitoring & Maintenance',
      description:
        'Long-term energy access depends on reliable day-to-day operation. Renerr provides agreed operational oversight, remote telemetry monitoring, preventative servicing, panel cleaning, and prompt troubleshooting.',
      focus: [
        'Real-time system telemetry and performance tracking',
        'Preventative maintenance and battery health checks',
        'Rapid response for fault resolution and repairs',
        'Customer support and transparent usage reporting',
      ],
      icon: Wrench,
    },
    {
      num: '06',
      title: 'IMPROVE',
      subtitle: 'Performance Optimization & Expansion',
      description:
        'We continuously evaluate generation data to optimize system efficiency and support future growth. As a business expands its operations or as more households join a community cluster, we identify opportunities to expand energy capacity.',
      focus: [
        'Ongoing yield analysis and operational benchmarking',
        'Modular system capacity expansion planning',
        'Community cluster growth and additional connection intake',
        'Long-term developmental and economic impact tracking',
      ],
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-brand-dark text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>Project Development Methodology</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              How We Work
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We apply a disciplined 6-stage methodology to design, structure, deploy, and operate
              practical energy solutions that deliver dependable electricity over the long term.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Methodology Introduction */}
      <section className="py-16 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Disciplined Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
              A Structured Approach to Every Project
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Whether developing a tailored energy system for a commercial facility or structuring a
              joint shared-energy cluster for a residential community, we follow a rigorous
              six-stage lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* The 6 Stages Deep Dive */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {stages.map((stage) => {
            const IconComp = stage.icon;

            return (
              <div
                key={stage.num}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-dark/10 shadow-sm transition-all hover:border-brand-primary/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Stage Index & Visual Badge */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl sm:text-4xl font-black text-brand-primary font-sans">
                        {stage.num}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                        Stage {stage.num}
                      </span>
                      <h3 className="text-2xl font-extrabold text-brand-dark mt-0.5">
                        {stage.title}
                      </h3>
                      <p className="text-sm font-semibold text-brand-muted mt-1">{stage.subtitle}</p>
                    </div>
                  </div>

                  {/* Right: Detailed Description & Focus Areas */}
                  <div className="lg:col-span-8 space-y-5">
                    <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="p-5 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                        Key Activities & Focus Areas:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-brand-charcoal">
                        {stage.focus.map((item, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Model-Specific Process Variations */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Flexibility By Design
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
              How the Process Differs by Project Type
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              While our overarching lifecycle remains consistent, specific stages are customized to
              the governance and operational needs of each model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Commercial Variations */}
            <div className="p-8 rounded-3xl bg-brand-cream border border-brand-dark/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Commercial Projects</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Emphasis is placed on specific single-facility load schedules, capital budgeting,
                structured installment agreements (such as initial deposits with deferred balances),
                and bilateral service level commitments tailored to business continuity.
              </p>
              <div className="pt-2">
                <Link
                  to="/energy-solutions#commercial"
                  className="text-xs font-bold text-brand-primary hover:underline inline-flex items-center gap-1"
                >
                  View Commercial Solutions <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Community Variations */}
            <div className="p-8 rounded-3xl bg-brand-cream border border-brand-dark/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Community Shared Energy</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Emphasis is placed on community cluster mapping, collective participation
                agreements, pooled financial contribution structures, smart sub-metering, and digital
                coordination platforms that enable multiple households to co-manage a shared asset.
              </p>
              <div className="pt-2">
                <Link
                  to="/energy-solutions#community"
                  className="text-xs font-bold text-brand-primary hover:underline inline-flex items-center gap-1"
                >
                  View Community Solutions <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Let's start stage 1 for your project
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Reach out to our project team to discuss your electricity requirements and explore
            practical energy solutions.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] transition-colors"
            >
              <span>Start a Project Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
