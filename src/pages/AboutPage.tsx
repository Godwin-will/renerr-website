import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Sparkles,
  Target,
  ArrowRight,
  Users,
  Coins,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* ======================================================== */}
      {/* 1. HEADER BANNER                                         */}
      {/* ======================================================== */}
      <section className="bg-brand-dark text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Renerr Energies Ltd</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Rethinking How People Access Energy.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We are a clean energy-tech startup committed to breaking down financial barriers and
              expanding access to reliable electricity across Africa.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* ======================================================== */}
      {/* 2. INTRODUCTION & PURPOSE                                */}
      {/* ======================================================== */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Our Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
                Rethinking How People Access Energy.
              </h2>
              <div className="space-y-4 text-base text-brand-charcoal/85 leading-relaxed">
                <p>
                  Renerr is a clean energy-tech startup working to make reliable electricity more
                  accessible through innovative co-financing approaches and digital technology.
                </p>
                <p>
                  We believe that access to energy should not be determined solely by an individual's
                  ability to finance an entire energy system independently.
                </p>
                <p>
                  By bringing people, resources and technology together, we are developing more
                  inclusive approaches to energy access.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] shadow-sm transition-all"
                >
                  <span>See How RENERR Works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-brand-dark/10 shadow-xl bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768839727824-28d6f0dcd1d1?auto=format&fit=crop&w=1200&q=85"
                  alt="Solar panels in a field capturing sunlight to expand access to clean electricity"
                  fallbackText="Clean Energy Engineering & Field Development"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-transparent to-transparent flex items-end p-6 rounded-2xl">
                  <p className="text-xs text-white font-medium">
                    Advancing sustainable energy infrastructure tailored to African realities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. OUR CO-FINANCING APPROACH                             */}
      {/* ======================================================== */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5" id="co-financing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Making Energy Investment More Accessible.
            </h2>
            <p className="text-base text-brand-charcoal/80 leading-relaxed">
              High upfront equipment costs keep clean electricity out of reach for too many. We
              structure cooperative and flexible models that distribute investment sensibly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Households & Communities */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-dark/10 shadow-sm space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-primary flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
                  For Households and Communities
                </h3>
                <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                  Through our community-based approach, residents within suitable localities can come
                  together to participate in shared energy projects. Instead of one household
                  carrying the entire investment alone, participating residents can pool their
                  contributions towards accessing shared energy infrastructure.
                </p>
              </div>

              <div className="pt-4 border-t border-brand-dark/10 space-y-2 text-xs text-brand-muted">
                <div className="flex items-center gap-2 text-brand-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  <span>Reduces individual capital burden</span>
                </div>
                <div className="flex items-center gap-2 text-brand-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  <span>Enables localized shared micro-grids</span>
                </div>
              </div>
            </div>

            {/* For Businesses & Organisations */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-dark/10 shadow-sm space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-primary flex items-center justify-center">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
                  For Businesses and Organisations
                </h3>
                <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                  We also work towards making energy projects more accessible to businesses and
                  organisations through structured co-financing and flexible payment arrangements.
                  Depending on the project, customers may make an initial contribution and settle the
                  remaining balance over an agreed period.
                </p>
              </div>

              <div className="pt-4 border-t border-brand-dark/10 space-y-2 text-xs text-brand-muted">
                <div className="flex items-center gap-2 text-brand-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  <span>Preserves vital operating cash flows</span>
                </div>
                <div className="flex items-center gap-2 text-brand-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  <span>Bespoke payment periods based on feasibility</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transparent Notice */}
          <div className="p-6 rounded-2xl bg-brand-light/70 border border-brand-primary/20 flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
            <p className="text-xs text-brand-charcoal leading-relaxed">
              <strong>Important Notice: </strong> Co-financing arrangements are evaluated individually
              and are subject to project requirements, technical audit, site feasibility, and mutually
              agreed terms. Renerr does not offer universal or guaranteed financing terms.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. MISSION, VISION & GUIDING BELIEF                      */}
      {/* ======================================================== */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Our Core Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Mission, Vision & Guiding Belief
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="p-8 rounded-3xl bg-brand-dark text-white border border-brand-primary/30 shadow-md flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary text-brand-accent flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent block">
                  Our Mission
                </span>
                <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
                  To reduce energy poverty and expand access to affordable, reliable electricity across
                  Africa through innovation, practical solutions and strategic partnerships.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-gray-400">
                Action-Oriented &bull; Sustainable Impact
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-8 rounded-3xl bg-brand-cream border border-brand-dark/10 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-accent text-brand-dark flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block">
                  Our Vision
                </span>
                <p className="text-base sm:text-lg font-bold text-brand-dark leading-relaxed">
                  An Africa where access to reliable electricity enables every individual, household,
                  business and community to realise its full potential.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-dark/10 text-xs text-brand-muted">
                Pan-African Reach &bull; Unlocked Potential
              </div>
            </div>

            {/* Belief Card */}
            <div className="p-8 rounded-3xl bg-brand-cream border border-brand-dark/10 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary block">
                  Our Guiding Belief
                </span>
                <p className="text-base sm:text-lg font-bold text-brand-dark leading-relaxed">
                  Reliable electricity is a foundation for opportunity, productivity and human
                  development. We believe access to energy should not be limited by income or
                  geography.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-dark/10 text-xs text-brand-muted">
                Fundamental Enabler &bull; Energy Equity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. BOTTOM CTA                                            */}
      {/* ======================================================== */}
      <section className="py-16 bg-brand-cream text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
            Join Us in Expanding Clean Energy Access
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal/80 max-w-xl mx-auto leading-relaxed">
            Discover how our digital platform coordinates shared energy or explore strategic
            collaboration with Renerr Energies.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/how-it-works"
              className="px-6 py-3 rounded-xl text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] transition-colors shadow-sm"
            >
              Explore RENERR Platform
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
