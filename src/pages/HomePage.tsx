import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Coins,
  ArrowRight,
  Sparkles,
  Smartphone,
  GraduationCap,
  HeartHandshake,
  TrendingUp,
} from 'lucide-react';
import { HeroEnergyAccessSchematic } from '../components/common/HeroEnergyAccessSchematic';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* ======================================================== */}
      {/* 1. HERO SECTION                                          */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-cream via-brand-light/30 to-brand-cream pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                <span>Clean Energy-Tech Startup</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.1]">
                Making Reliable Energy More Accessible.
              </h1>

              <p className="text-base sm:text-lg text-brand-charcoal/80 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Renerr combines clean energy solutions, innovative co-financing and digital
                technology to help individuals, communities and businesses access reliable
                electricity.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/how-it-works"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <span>Explore RENERR</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/partner"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold text-brand-dark bg-white border border-brand-dark/15 hover:border-brand-primary hover:bg-brand-light/50 transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Partner With Us</span>
                </Link>
              </div>

              {/* Quick Feature Badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-brand-charcoal/80 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Shared Community Investment
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-primary" />
                  Flexible Co-Financing
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Digital Coordination Platform
                </span>
              </div>
            </div>

            {/* RENERR clean-energy access ecosystem */}
            <div className="lg:col-span-5">
              <HeroEnergyAccessSchematic />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SECTION: THE CHALLENGE                                */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
            <span>The Energy Access Barrier</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Energy Access Should Not Be Limited by Financial Barriers.
          </h2>

          <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            For many households and businesses, the cost of accessing reliable electricity remains a
            major challenge. Renerr is developing more accessible ways for people to participate in
            energy solutions through shared investment, flexible financing and technology.
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. SECTION: OUR APPROACH                                 */}
      {/* ======================================================== */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              A Smarter Way to Access Energy.
            </h2>
            <p className="text-sm sm:text-base text-brand-muted">
              We replace high upfront financial friction with practical co-financing models and
              digital coordination.
            </p>
          </div>

          {/* Three Simple Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Shared Investment */}
            <div className="p-8 rounded-3xl bg-white border border-brand-dark/10 shadow-sm hover:border-brand-primary/40 transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-primary flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">Shared Investment</h3>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                  We enable people within suitable communities to participate in shared energy
                  projects rather than placing the entire financial burden on one household.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-primary flex items-center gap-1">
                <span>Community Clusters</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 2: Flexible Co-financing */}
            <div className="p-8 rounded-3xl bg-white border border-brand-dark/10 shadow-sm hover:border-brand-primary/40 transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-primary flex items-center justify-center">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">Flexible Co-financing</h3>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                  We explore structured payment arrangements that make energy projects more
                  financially accessible to businesses, organisations and other customers.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-primary flex items-center gap-1">
                <span>Commercial & Institutional</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 3: Technology-Enabled Access */}
            <div className="p-8 rounded-3xl bg-white border border-brand-dark/10 shadow-sm hover:border-brand-primary/40 transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-primary flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">Technology-Enabled Access</h3>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                  Our digital platform is being developed to simplify customer participation,
                  coordinate contributions and help users manage their electricity services.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-primary flex items-center gap-1">
                <span>The RENERR Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. SECTION: OUR IMPACT                                   */}
      {/* ======================================================== */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Social & Community Responsibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Beyond Energy Access.
            </h2>
            <p className="text-base text-brand-charcoal/80 max-w-2xl mx-auto leading-relaxed">
              We believe expanding energy access goes hand in hand with empowering communities,
              supporting education and creating opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pt-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-brand-dark/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">
                RENERR Energy Awareness Initiative
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Our educational outreach engages secondary school students on renewable energy
                technologies, sustainability principles, and future clean tech opportunities.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-brand-dark/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">
                Community Inclusion & Clean Growth
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Committed to supporting initiatives that improve electricity access in underserved
                areas, creating practical economic opportunity and reducing local fossil fuel dependency.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-white border border-brand-dark/15 text-brand-dark hover:border-brand-primary hover:bg-brand-light/50 transition-all shadow-sm"
            >
              <span>Explore Our Impact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. SECTION: PARTNER WITH US                              */}
      {/* ======================================================== */}
      <section className="py-20 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/30 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Collaboration & Scale</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's Expand Energy Access Together.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We welcome collaboration with investors, technology providers, development organisations,
            institutions and partners who share our vision.
          </p>

          <div className="pt-4">
            <Link
              to="/partner"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] transition-all shadow-md hover:scale-[1.02]"
            >
              <span>Partner With Renerr</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
