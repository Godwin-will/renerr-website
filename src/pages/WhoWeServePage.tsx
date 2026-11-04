import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Building2,
  Users,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const WhoWeServePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-brand-dark text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Target Customers & Beneficiaries</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Powering Education Today. Communities Tomorrow.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We focus our immediate project pipeline on Nigerian primary and secondary schools where
              reliable electricity creates immediate educational impact, while designing long-term
              frameworks for broader community access.
            </p>
          </div>
        </div>
      </section>

      {/* Realistic Sizing & Load Assessment Disclaimer */}
      <section className="py-6 bg-brand-light/80 border-b border-brand-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-xs text-brand-charcoal">
            <ShieldAlert className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Technical Integrity Notice:</strong> Solar power systems must be sized to
              specific electrical loads. Renerr does not promise that every high-draw appliance (such
              as heavy air conditioning, industrial electric heaters, or high-capacity pumps) can be
              powered without first conducting a rigorous site energy audit and engineering sizing
              assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Segment 1: Primary and Secondary Schools (Core Focus) */}
      <section className="py-20 bg-white border-b border-brand-dark/5" id="schools">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Primary Immediate Focus</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
                Primary & Secondary Schools
              </h2>
              <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed">
                Whether running a day primary school in a rural local government area or an urban
                secondary school, educational institutions face severe disruptions when the power
                fails.
              </p>

              {/* Challenges vs Solar Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-xl bg-brand-cream border border-brand-dark/10 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-red-700 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Common Challenges</span>
                  </h3>
                  <ul className="text-xs text-brand-muted space-y-1.5 pt-1">
                    <li>&bull; Incessant generator fuel expenses eating into school budgets.</li>
                    <li>&bull; Darkened classrooms hindering reading on cloudy days.</li>
                    <li>&bull; Computer rooms left non-operational or restricted.</li>
                    <li>&bull; Administrative paralysis during grading and exam prep.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-brand-light/70 border border-brand-primary/30 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-primary flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Potential Solar Benefits</span>
                  </h3>
                  <ul className="text-xs text-brand-charcoal space-y-1.5 pt-1">
                    <li>&bull; Predictable, quiet daytime electricity for teaching.</li>
                    <li>&bull; Dependable power for desktop computers and laptops.</li>
                    <li>&bull; Functional lighting for morning, evening, and boarding halls.</li>
                    <li>&bull; Lower overall energy volatility and operational noise.</li>
                  </ul>
                </div>
              </div>

              {/* How Renerr Helps */}
              <div className="p-4 rounded-xl bg-brand-cream border border-brand-dark/10">
                <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                  How Renerr's Proposed Model Helps
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
                  Instead of demanding millions of Naira upfront to acquire panels and battery banks,
                  qualifying schools can transition to clean solar electricity through an agreed
                  monthly service subscription, backed by technical maintenance.
                </p>
              </div>

              <div>
                <Link
                  to="/schools"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] shadow-sm transition-colors"
                >
                  <span>Register School Interest</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-brand-dark/10 shadow-lg bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80"
                  alt="Students seated in school classroom learning with good illumination"
                  fallbackText="School Learning Environment"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment 2: Educational Institutions & Training Centers */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5" id="institutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-brand-dark/10 shadow-lg bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
                  alt="Students and educator engaged in vocational and academic learning"
                  fallbackText="Educational Training Hub"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Primary Immediate Focus</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
                Vocational, Technical & Specialized Educational Hubs
              </h2>
              <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed">
                Vocational training institutions, digital learning centers, and non-profit education
                initiatives require steady daytime electricity to conduct software training, science
                experiments, and skill acquisition workshops.
              </p>

              {/* Challenges vs Benefits */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-brand-dark/10">
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                    Common Operational Hurdle
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
                    Unscheduled power cuts corrupt computer files, abort virtual training classes, and
                    damage sensitive desktop equipment through unpredictable voltage surges.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-dark/10">
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                    How Renerr's Service Model Supports Training
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
                    By designing tailored solar systems with battery backup for ICT labs, institutions
                    enjoy uninterrupted teaching sessions, stabilized power conditioning, and clear
                    monthly operating expenses.
                  </p>
                </div>
              </div>

              <div>
                <Link
                  to="/schools"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-brand-primary text-white hover:bg-brand-dark transition-colors shadow-sm"
                >
                  <span>Submit Institutional Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment 3 & 4: Future Expansion Areas (Honest representation!) */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">
              Long-Term Horizon
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Future Expansion Opportunities
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              While our current operational priority is squarely on school electrification, our
              underlying energy-as-a-service model is designed to scale into other underserved energy
              sectors across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Future: Underserved Communities */}
            <div className="p-8 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-4">
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-brand-muted/20 text-brand-charcoal">
                Potential Future Pathway
              </div>
              <div className="w-12 h-12 rounded-xl bg-brand-muted/20 text-brand-dark flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Underserved Communities & Clinics</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Rural and peri-urban communities where lack of electricity limits healthcare delivery,
                vaccine refrigeration, clean water pumping, and street illumination.
              </p>
              <div className="pt-4 border-t border-brand-dark/10 text-xs text-brand-muted">
                <strong>Status:</strong> Long-term strategic development pipeline. We welcome
                discussions with development agencies on community mini-grid concepts.
              </div>
            </div>

            {/* Future: Small Businesses */}
            <div className="p-8 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-4">
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-brand-muted/20 text-brand-charcoal">
                Potential Future Pathway
              </div>
              <div className="w-12 h-12 rounded-xl bg-brand-muted/20 text-brand-dark flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Productive-Use Small Businesses</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Local agro-processing clusters, cold chain storage facilities, and small artisanal
                businesses held back by erratic power and soaring fuel costs.
              </p>
              <div className="pt-4 border-t border-brand-dark/10 text-xs text-brand-muted">
                <strong>Status:</strong> Future commercial exploration phase.
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/partner"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-brand-dark/20 text-brand-dark hover:bg-brand-cream transition-colors"
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
