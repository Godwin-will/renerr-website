import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Users,
  TreePine,
  Sparkles,
  ArrowRight,
  Lightbulb,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const ImpactPage: React.FC = () => {
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
              <span>Social & Community Initiatives</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Creating Impact Beyond Electricity.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              At Renerr, we believe expanding energy access is about more than infrastructure. It is
              also about education, opportunity, sustainability and stronger communities.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* ======================================================== */}
      {/* 2. THE THREE IMPACT PILLARS                              */}
      {/* ======================================================== */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Pillar 1: Energy Education & Awareness (RENERR Energy Awareness Initiative) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-primary text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Educational Outreach</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
                Energy Education and Awareness
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                <p>
                  Through the <strong>RENERR Energy Awareness Initiative</strong>, we intend to engage
                  secondary school students through interactive educational sessions focused on
                  renewable energy technologies, energy sustainability, electricity access, and future
                  opportunities in the clean tech sector.
                </p>
                <p>
                  By inspiring young minds early, we aim to build local technical interest, foster
                  environmental stewardship, and prepare the next generation of African clean-energy
                  innovators and leaders.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-2 text-xs text-brand-charcoal">
                <div className="flex items-center gap-2 font-bold text-brand-dark">
                  <Lightbulb className="w-4 h-4 text-brand-primary" />
                  <span>Curriculum Highlights</span>
                </div>
                <p className="text-brand-muted">
                  Basics of solar photovoltaics and battery storage &bull; The socio-economic value of
                  reliable electricity &bull; Career pathways in renewable engineering.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-brand-dark/10 shadow-lg bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
                  alt="Young students in Africa engaged in modern learning and STEM education"
                  fallbackText="Secondary School Energy Awareness Sessions"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Pillar 2: Community Energy Access */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-brand-dark/10">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-brand-dark/10 shadow-lg bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80"
                  alt="Community collaboration and shared infrastructure in Africa"
                  fallbackText="Community Energy Access"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-primary text-xs font-bold uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Community Equity</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
                Community Energy Access
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                <p>
                  We are deeply committed to supporting initiatives that improve access to reliable
                  electricity, particularly in underserved communities where centralized grid power is
                  infrequent or absent.
                </p>
                <p>
                  By enabling shared micro-systems and localized clean energy infrastructure, we work
                  to lower entry costs so that entire neighborhoods, clinics, and local artisan
                  clusters can thrive.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Sustainable Development */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-brand-dark/10">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-primary text-xs font-bold uppercase tracking-wider">
                <TreePine className="w-4 h-4" />
                <span>Environmental Sustainability</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
                Sustainable Development
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                <p>
                  We prioritize projects that support clean energy adoption, environmental
                  sustainability, and long-term community development.
                </p>
                <p>
                  Replacing noisy, polluting petrol and diesel generator sets with clean, quiet, and
                  reliable renewable solutions directly cuts local emissions and improves public health
                  across the continent.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-brand-dark/10 shadow-lg bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=80"
                  alt="Sustainable clean energy installation powering African communities"
                  fallbackText="Sustainable Development"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. FUTURE IMPACT PROJECTS                                */}
      {/* ======================================================== */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5" id="future-projects">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Pipelines & Evolution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Future Impact Projects
            </h2>
            <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
              As we progress, this section will showcase planned initiatives, grant-funded projects,
              rural electrification programmes, and community partnerships as they become available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-brand-dark/10 shadow-sm space-y-4">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-light text-brand-primary">
                Planned Initiative
              </span>
              <h3 className="text-lg font-bold text-brand-dark">
                Secondary School Solar Awareness Tour
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                Workshops designed for secondary school students in Nigeria to introduce clean energy
                basics, hands-on solar demonstrations, and energy conservation skills.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-brand-dark/10 shadow-sm space-y-4">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-light text-brand-primary">
                Partnership Pipeline
              </span>
              <h3 className="text-lg font-bold text-brand-dark">
                Community Mini-Grid Grant Collaborations
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                Exploring collaborative engagements with development finance institutions and donors
                to co-fund energy access infrastructure for peri-urban clusters.
              </p>
            </div>
          </div>

          {/* Distinction & Transparency Notice */}
          <div className="p-5 rounded-2xl bg-white border border-brand-dark/10 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
            <p className="text-xs text-brand-muted leading-relaxed">
              <strong>Integrity Notice: </strong> Renerr Energies maintains strict transparency.
              Initiatives described here represent planned or pipeline programmes. We do not invent
              completed installations, artificial beneficiary figures, or unverified grants.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. BOTTOM CTA                                            */}
      {/* ======================================================== */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
            Collaborate on Community & Educational Impact
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal/80 max-w-xl mx-auto leading-relaxed">
            Interested in supporting our educational outreach or partnering on rural electrification
            and community initiatives?
          </p>
          <div className="pt-2">
            <Link
              to="/partner"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] shadow-sm transition-all"
            >
              <span>Partner on Social Impact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
