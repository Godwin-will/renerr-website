import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Sun,
  HeartHandshake,
  TrendingUp,
} from 'lucide-react';

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
                <span>Expanding Energy Access</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.1]">
                Making Reliable Energy More Accessible Across Africa.
              </h1>

              <p className="text-base sm:text-lg text-brand-charcoal/80 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Renerr connects energy needs, diaspora investment and trusted technical expertise to
                expand access to reliable electricity across Africa.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/energy-projects"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <span>Explore Energy Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/professionals"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold text-brand-dark bg-white border border-brand-dark/15 hover:border-brand-primary hover:bg-brand-light/50 transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Find a Solar Professional</span>
                </Link>
              </div>

              {/* Quick Feature Badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-brand-charcoal/80 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Residential Energy Planning
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-primary" />
                  Diaspora-Powered Projects
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Practical Project Development
                </span>
              </div>
            </div>

            {/* RENERR field representative demonstrating the mobile app */}
            <div className="lg:col-span-5">
              <div className="mx-auto w-full max-w-[430px] rounded-[1.8rem] border border-brand-dark/10 bg-white p-2 shadow-xl">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-brand-light">
                  <img
                    src="/images/renerr-field-demo-illustration.svg"
                    alt="Flat illustration of an African RENERR field representative demonstrating the app to a homeowner beside a solar-powered home"
                    width="640"
                    height="480"
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
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
            major challenge. Renerr develops viable clean-energy projects and connects them with
            diaspora investment, while helping people find trusted technical expertise.
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
              We connect energy needs, investment opportunities and trusted technical services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link to="/energy-projects" className="p-8 rounded-3xl bg-white border border-brand-dark/10 shadow-sm hover:border-brand-primary/40 transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-primary flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">Diaspora-Powered Energy Projects</h3>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                  Renerr assesses local electricity needs, develops viable clean-energy projects and
                  connects approved opportunities with diaspora investment interest.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-primary flex items-center gap-1">
                <span>Explore Energy Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Card 2: Residential energy planning */}
            <Link to="/professionals" className="p-8 rounded-3xl bg-white border border-brand-dark/10 shadow-sm hover:border-brand-primary/40 transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-primary flex items-center justify-center">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">Trusted Solar Professionals</h3>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                  Find solar installation professionals and service providers for system design,
                  installation, inspection and maintenance.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-primary flex items-center gap-1">
                <span>Find a Solar Professional</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-brand-dark/10 bg-brand-cream p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-widest text-brand-primary">Energy project marketplace</p><h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-brand-dark">Explore Energy Projects</h2><p className="mt-2 text-sm text-brand-muted">Our energy project marketplace is in development. Register your interest to hear about future opportunities.</p><Link to="/energy-projects" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-primary">Register Interest <ArrowRight size={16}/></Link></div>
          <div className="rounded-2xl border border-brand-dark/10 bg-brand-cream p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-widest text-brand-primary">Trusted technical expertise</p><h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-brand-dark">Find a Solar Professional</h2><p className="mt-2 text-sm text-brand-muted">Our trusted professional network is coming soon. Customers and qualified professionals can register their interest.</p><Link to="/professionals" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-primary">Register Interest <ArrowRight size={16}/></Link></div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. SECTION: OUR IMPACT                                   */}
      {/* ======================================================== */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Planned Initiatives
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Energy Education and Community Outreach.
            </h2>
            <p className="text-base text-brand-charcoal/80 max-w-2xl mx-auto leading-relaxed">
              Renerr is planning an educational outreach initiative focused on energy access,
              renewable energy, electricity use and energy efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pt-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-brand-dark/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">Planned Educational Outreach</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                The proposed initiative aims to improve awareness among young people and local
                communities. Details will be shared as they are confirmed.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-brand-dark/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">Developing Practical Solutions</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                We are developing energy-access projects that connect local needs with investment
                and qualified technical delivery partners.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/energy-projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-white border border-brand-dark/15 text-brand-dark hover:border-brand-primary hover:bg-brand-light/50 transition-all shadow-sm"
            >
              <span>Explore Energy Projects</span>
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
