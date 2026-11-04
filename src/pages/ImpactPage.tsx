import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe2,
  Users,
  Building2,
  GraduationCap,
  Stethoscope,
  TrendingUp,
  Sun,
  ShieldCheck,
  ArrowRight,
  Activity,
} from 'lucide-react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const ImpactPage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-brand-dark text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Impact Ambition & Framework</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Measuring Progress by the Opportunities Energy Creates.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              For Renerr Energies, success is ultimately about helping more people access the reliable
              electricity they need to realise their potential.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Philosophy of Impact */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Aspirational Impact Framework
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
                Authentic, Outcome-Oriented Measurement
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                <p>
                  As we develop projects and partnerships, we aim to assess our progress through
                  meaningful indicators such as improved electricity access, reliability,
                  affordability, the number of people and institutions reached, and the opportunities
                  supported by better energy access.
                </p>
                <p>
                  We believe impact should be measured honestly, transparently, and in a way that
                  reflects real outcomes rather than theoretical models.
                </p>
                <p>
                  Rather than publishing unverified statistics, we define the qualitative and
                  structural benchmarks against which our long-term contributions to Africa will be
                  evaluated.
                </p>
              </div>

              <div className="pt-2">
                <div className="p-4 rounded-xl bg-brand-cream border border-brand-dark/10 text-xs text-brand-charcoal">
                  <strong>Integrity First:</strong> We do not publish simulated counters or
                  exaggerated impact claims. Real, verified metrics will be published transparently as
                  our project pipeline is deployed in the field.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-brand-dark/10 shadow-lg bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
                  alt="Young Africans engaged in learning and community development"
                  fallbackText="Youth and Community Opportunity"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Core Impact Categories */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Core Impact Dimensions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Where Our Work Aims to Make a Difference
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Our long-term impact ambition focuses on five critical dimensions of African human and
              economic development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category 1 */}
            <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">People & Communities Reached</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Expanding access to reliable energy in underserved households, rural settlements,
                  and peri-urban districts where energy poverty most severely constrains everyday
                  living standards and social inclusion.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-primary">
                Human Dignity &bull; Community Inclusion
              </div>
            </div>

            {/* Category 2 */}
            <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">Improved Electricity Access</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Replacing erratic, intermittent grid power and hazardous fuel sources with
                  predictable, high-quality electricity that powers vital communication, lighting, and
                  modern domestic appliances.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-primary">
                Quality of Service &bull; Availability
              </div>
            </div>

            {/* Category 3 */}
            <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">
                  Institutions & Businesses Supported
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Empowering primary and secondary schools, vocational hubs, healthcare clinics, and
                  small commercial enterprises to operate continuously without crippling power
                  disruptions.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-primary">
                Productive Use &bull; Educational Continuity
              </div>
            </div>

            {/* Category 4 */}
            <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">Reliability & Affordability</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Structuring innovative delivery models that lower barriers to adoption, cushion
                  customers from volatile fossil fuel spikes, and ensure dependable system uptime
                  through proactive maintenance.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-primary">
                Price Stability &bull; Operational Resilience
              </div>
            </div>

            {/* Category 5 */}
            <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 shadow-sm space-y-3 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Sun className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">
                  Environmental & Development Benefits
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Accelerating local decarbonisation by displacing noisy petrol and diesel generators,
                  improving indoor and outdoor air quality, and supporting sustainable economic
                  growth aligned with Africa's climate and industrial goals.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-dark/10 text-xs font-semibold text-brand-primary">
                Emissions Reduction &bull; Sustainable Ecosystems
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Sectors Detailed Breakdown */}
      <section className="py-20 bg-white border-b border-brand-dark/5" id="sectors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Broad Beneficiary Sectors
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
              Sectors and Communities We Aim to Support
            </h2>
            <p className="text-sm text-brand-muted">
              Energy access unlocks distinct advantages across diverse segments of African society.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-light text-brand-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">Education & Schools</h3>
              </div>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Classroom illumination, functional computer laboratories, reliable internet routers,
                administrative efficiency for examinations, and evening study environments.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-light text-brand-primary">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">Healthcare Facilities</h3>
              </div>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Cold storage for vaccines and essential medicines, dependable lighting for emergency
                maternity procedures, laboratory diagnostics, and clean water pumping.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-light text-brand-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">Businesses & Productive Enterprise</h3>
              </div>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Commercial workshops, food processing centers, cold-storage facilities, and small
                enterprises seeking to lower energy costs and expand production hours.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-light text-brand-primary">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">Households & Communities</h3>
              </div>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Clean domestic power, public lighting for security, communal water purification, and
                communication connectivity that enhances safety and collective quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Partner With Us to Create Lasting Impact
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            We collaborate with developers, financiers, development agencies, and institutions to turn
            energy potential into human progress.
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
