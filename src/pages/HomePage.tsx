import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Building2,
  Users,
  ArrowRight,
  Coins,
  CheckCircle2,
  Sparkles,
  Smartphone,
  GraduationCap,
  AlertCircle,
} from 'lucide-react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* ======================================================== */}
      {/* 1. HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-cream via-brand-light/30 to-brand-cream pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Heading and Core Proposition */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold tracking-wide uppercase">
                <Zap className="w-3.5 h-3.5 text-brand-primary" />
                <span>African Energy Solutions & Project Development</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
                Making Reliable Energy More Accessible.
              </h1>

              <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed max-w-2xl font-normal">
                Renerr Energies develops practical energy solutions that help businesses, organisations
                and communities access affordable, reliable electricity through flexible project
                arrangements and innovative shared-energy models.
              </p>

              {/* Two Business Models Callout Banner */}
              <div className="pt-2 pb-1 border-y border-brand-dark/10 max-w-xl">
                <p className="text-xs sm:text-sm font-medium text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0"></span>
                  Commercial & Organisational Projects &bull; Community-Based Shared Energy
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/energy-solutions"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] shadow-sm hover:shadow transition-all group"
                >
                  <span>Explore Our Energy Solutions</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/partner"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-brand-dark bg-white border border-brand-dark/15 hover:border-brand-primary hover:text-brand-primary transition-all shadow-sm"
                >
                  <span>Partner With Us</span>
                </Link>
              </div>

              <p className="text-xs text-brand-muted pt-2">
                Developing energy projects across Africa &bull; Tailored commercial terms &bull; Shared infrastructure models
              </p>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-dark/10 bg-white p-2">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=80"
                    alt="Commercial and community clean energy generation infrastructure"
                    fallbackText="Clean Energy Infrastructure & Solutions"
                    className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  />
                  {/* Floating Model Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-brand-dark/95 backdrop-blur-sm text-white border border-white/10 shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-brand-accent/20 text-brand-accent">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-brand-accent font-semibold">
                          Our Mission
                        </p>
                        <p className="text-sm font-medium text-white mt-0.5">
                          Practical Energy Solutions for Africa
                        </p>
                        <p className="text-xs text-gray-300 mt-1">
                          Bridging the electricity gap for businesses, institutions and residential clusters.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ambient glow */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl pointer-events-none -z-10" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-brand-primary/15 rounded-full blur-2xl pointer-events-none -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. WHAT WE DO SECTION */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Expanding Energy Access Through Practical Solutions.
            </h2>
            <div className="space-y-3 text-base sm:text-lg text-brand-muted leading-relaxed">
              <p>
                Renerr Energies is an energy-solutions and project development company. We work with
                different customer groups to develop energy projects that respond to their financial
                circumstances, electricity requirements, and local conditions.
              </p>
              <p className="text-sm sm:text-base text-brand-charcoal/80 font-medium">
                We are not primarily a solar hardware retailer or software provider. We develop
                viable energy projects and deliver reliable energy services through two primary
                service models:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Quick Preview Card: Model 1 */}
            <div className="p-8 rounded-2xl bg-brand-cream border border-brand-dark/10 hover:border-brand-primary/40 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-primary/15 text-brand-primary">
                  Model 1
                </div>
                <h3 className="text-xl font-bold text-brand-dark">Commercial & Organisational Projects</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Tailored energy installations for businesses, educational institutions, health
                  centers and facilities, supported by structured payment arrangements that remove
                  the need for 100% upfront capital.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-dark/10 flex items-center justify-between">
                <span className="text-xs font-medium text-brand-primary">Initial deposit + installments</span>
                <Link
                  to="/energy-solutions#commercial"
                  className="text-xs font-bold text-brand-dark hover:text-brand-primary inline-flex items-center gap-1"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Quick Preview Card: Model 2 */}
            <div className="p-8 rounded-2xl bg-brand-cream border border-brand-dark/10 hover:border-brand-primary/40 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-primary/15 text-brand-primary">
                  Model 2
                </div>
                <h3 className="text-xl font-bold text-brand-dark">Community-Based Shared Energy</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  A collective cluster approach enabling residential households within a suitable
                  locality to pool contributions and co-access shared energy infrastructure rather
                  than each buying expensive standalone systems.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-dark/10 flex items-center justify-between">
                <span className="text-xs font-medium text-brand-primary">Joint community clusters</span>
                <Link
                  to="/energy-solutions#community"
                  className="text-xs font-bold text-brand-dark hover:text-brand-primary inline-flex items-center gap-1"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. OUR TWO ENERGY MODELS (IN-DEPTH HOMEPAGE BREAKDOWN) */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-brand-cream border-b border-brand-dark/5" id="models">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Our Service Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Two Practical Delivery Pathways
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              How we structure, finance, and operate electricity solutions for commercial entities and
              residential community clusters.
            </p>
          </div>

          {/* Model 1 In-Depth: Commercial & Organisational */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-dark/10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Model 1 &bull; Businesses & Institutions</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                  Energy Solutions for Businesses and Organisations.
                </h3>

                <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                  We work with businesses, institutions and organisations to develop and implement
                  energy projects tailored to their electricity requirements. Through structured
                  payment arrangements, we aim to make energy infrastructure more accessible without
                  requiring every customer to finance the entire project cost upfront.
                </p>

                {/* Structured Payment Arrangements Box */}
                <div className="p-5 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3">
                  <div className="flex items-center gap-2">
                    <Coins className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    <h4 className="text-sm font-bold text-brand-dark">
                      Flexible Payment Arrangements (Illustrative Example)
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    Payment arrangements may include an initial contribution followed by agreed
                    instalments over a defined period (for example, an illustrative{' '}
                    <strong>50% initial contribution</strong> and{' '}
                    <strong>50% deferred balance over approximately 3–12 months</strong>).
                  </p>
                  <div className="p-3 rounded-xl bg-white border border-brand-dark/5 text-xs text-brand-charcoal flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Note:</strong> This is shown as an illustrative example, NOT a guaranteed
                      or universal arrangement. Actual terms depend on project size, technical design,
                      customer credit assessment, and mutually agreed contractual terms.
                    </p>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-brand-charcoal">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>Comprehensive load & demand audit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>Bespoke engineering & hardware sizing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>Professional procurement & installation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>Ongoing operations & maintenance support</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold bg-brand-primary text-white hover:bg-brand-dark transition-colors shadow-sm"
                  >
                    <span>Discuss a Commercial Energy Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-brand-dark/10 shadow-md bg-white p-2">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1548611716-ad383fb58cba?auto=format&fit=crop&w=900&q=80"
                    alt="Engineers planning commercial energy infrastructure project"
                    fallbackText="Commercial Energy Engineering"
                    className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Model 2 In-Depth: Community-Based Shared Energy */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-dark/10 shadow-sm" id="community">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5 order-1 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-dark text-xs font-bold uppercase tracking-wider">
                  <Users className="w-4 h-4 text-brand-primary" />
                  <span>Model 2 &bull; Residential Clusters</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                  Bringing Communities Together to Access Reliable Electricity.
                </h3>

                <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                  We are developing a community-based approach that enables households within a
                  suitable locality to collectively access shared energy infrastructure. Rather than
                  requiring one household to bear the entire investment independently, participating
                  residents can come together through a joint arrangement, pool their contributions and
                  access a shared energy solution.
                </p>

                {/* 6 Steps Workflow */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-brand-primary uppercase tracking-wider">
                    How Community Shared Energy Works (6 Simple Steps)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-brand-charcoal">
                    {[
                      { step: '01', title: 'Expression of Interest', desc: 'Residents within a locality express interest in reliable power.' },
                      { step: '02', title: 'Cluster Assessment', desc: 'Renerr assesses electricity requirements and identifies a suitable cluster.' },
                      { step: '03', title: 'Collective Agreement', desc: 'Interested households agree on participation and financial terms.' },
                      { step: '04', title: 'Pooled Contributions', desc: 'Contributions are pooled to support shared energy infrastructure.' },
                      { step: '05', title: 'Project Coordination', desc: 'Renerr coordinates engineering, installation and ongoing service.' },
                      { step: '06', title: 'Shared Power Delivery', desc: 'Households access electricity according to agreed allocation & metering.' },
                    ].map((s) => (
                      <div key={s.step} className="p-3.5 rounded-xl bg-brand-cream border border-brand-dark/5 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-brand-primary">{s.step}.</span>
                          <span className="font-bold text-brand-dark">{s.title}</span>
                        </div>
                        <p className="text-brand-muted leading-relaxed">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Digital Platform Role & Geographic Feasibility Note */}
                <div className="p-4 rounded-xl bg-brand-light/80 border border-brand-primary/20 text-xs text-brand-charcoal space-y-2">
                  <div className="flex items-start gap-2">
                    <Smartphone className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Role of Digital Tools:</strong> A future digital platform or mobile
                      application is intended to make registration, community coordination,
                      contributions and project management easier. The platform serves as an enabling
                      tool to coordinate customers and support delivery, not as a standalone software
                      product.
                    </div>
                  </div>
                  <p className="text-brand-muted pl-6">
                    * Geographical coverage and cluster boundaries are determined individually by
                    technical, economic, and infrastructure feasibility rather than an arbitrary radius.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/energy-solutions#community"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] transition-colors shadow-sm"
                  >
                    <span>Explore Community Energy Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 order-2 lg:order-2">
                <div className="rounded-2xl overflow-hidden border border-brand-dark/10 shadow-md bg-white p-2">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=900&q=80"
                    alt="Community distributed clean energy array"
                    fallbackText="Community Shared Energy Infrastructure"
                    className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. HOW WE WORK (PREVIEW OF 6-STAGE PROCESS) */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Disciplined Execution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Our Project Development Process
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              We apply a structured 6-stage methodology to ensure every energy project is technically
              suitable, economically viable, and reliably maintained.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '1',
                title: 'UNDERSTAND',
                desc: 'Identify customer and community electricity requirements, daily load habits, and operational objectives.',
              },
              {
                num: '2',
                title: 'ASSESS',
                desc: 'Evaluate technical feasibility, solar irradiation, electrical infrastructure, structural roofs, and economics.',
              },
              {
                num: '3',
                title: 'STRUCTURE',
                desc: 'Develop an appropriate project structure and tailored payment arrangement or community participation agreement.',
              },
              {
                num: '4',
                title: 'DEVELOP',
                desc: 'Coordinate detailed system engineering, hardware procurement, logistics, installation, and rigorous testing.',
              },
              {
                num: '5',
                title: 'OPERATE',
                desc: 'Provide agreed operational, telemetry monitoring, preventative maintenance, and rapid fault resolution services.',
              },
              {
                num: '6',
                title: 'IMPROVE',
                desc: 'Monitor performance data to optimize energy yields and identify opportunities to expand power access over time.',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 hover:border-brand-primary/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-brand-primary">{step.num}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-brand-light text-brand-primary">
                      Stage {step.num}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-brand-dark">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/how-we-work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-brand-dark/20 text-brand-dark hover:bg-brand-cream transition-colors"
            >
              <span>Explore Our Full Process & Methodology</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. COMMUNITY & IMPACT INITIATIVES (RENERR AWARENESS) */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-3xl bg-white p-8 sm:p-12 border border-brand-dark/10 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Community & Educational Outreach
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                Beyond Commercial Activities: The RENERR Energy Awareness Initiative
              </h2>
              <p className="text-sm text-brand-muted leading-relaxed">
                We believe our responsibility extends to educating and empowering the next generation
                of African leaders and clean energy advocates.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-light/60 border border-brand-primary/20 space-y-3 text-sm text-brand-charcoal leading-relaxed">
              <div className="flex items-center gap-2 font-bold text-brand-primary">
                <GraduationCap className="w-5 h-5 text-brand-primary" />
                <span>Secondary School Educational Engagement</span>
              </div>
              <p>
                The <strong>RENERR Energy Awareness Initiative</strong> is an educational outreach
                programme through which we engage secondary school students on renewable energy
                technologies, energy sustainability, electricity access, and future clean energy career
                opportunities.
              </p>
              <p className="text-xs text-brand-muted italic">
                * Note: This is an educational and community-impact initiative, not our principal
                commercial business. It reflects our broader commitment to human development and
                energy literacy across Africa.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-brand-muted">
                Learn how we measure long-term development, education, and environmental outcomes.
              </p>
              <Link
                to="/impact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:underline whitespace-nowrap"
              >
                <span>Read Our Impact Commitments</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. PARTNERSHIP CALLOUT */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            Collaboration & Progress
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Building a Better Energy Future Takes All of Us.
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We welcome conversations with commercial customers, technical specialists, investors,
            development finance institutions, government bodies, and communities who share our
            ambition to expand access to reliable electricity across Africa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/partner"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] shadow-lg transition-colors"
            >
              <span>Explore Partnership Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none -z-0" />
      </section>
    </div>
  );
};
