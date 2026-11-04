import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  ShieldCheck,
  Zap,
  GraduationCap,
  Users,
  Building2,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Compass,
  Layers,
  Sparkles,
  FileCheck,
} from 'lucide-react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* ======================================================== */}
      {/* A2. HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-cream via-brand-light/30 to-brand-cream pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline and Messaging */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold tracking-wide uppercase">
                <Sun className="w-3.5 h-3.5 text-brand-primary" />
                <span>Distributed Renewable Energy &bull; Nigeria</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
                Powering a Brighter Future for Africa.
              </h1>

              <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed max-w-2xl font-normal">
                We are building a future where access to reliable electricity is not determined by
                income or location. Renerr Energies develops affordable solar energy solutions
                designed to help schools and underserved communities access the power they need to
                thrive.
              </p>

              {/* Callouts & Key Pillars */}
              <div className="pt-2 pb-1 border-y border-brand-dark/10 max-w-xl">
                <p className="text-xs sm:text-sm font-medium text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                  Affordable solar energy. Sustainable financing. Greater opportunity.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/partner"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] shadow-sm hover:shadow transition-all group"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/solution"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-brand-dark bg-white border border-brand-dark/15 hover:border-brand-primary hover:text-brand-primary transition-all shadow-sm"
                >
                  <span>Explore Our Solution</span>
                </Link>

                <Link
                  to="/schools"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-medium text-brand-primary hover:bg-brand-light/60 transition-colors sm:hidden"
                >
                  <span>Register School Interest</span>
                </Link>
              </div>

              {/* Honest Notice */}
              <p className="text-xs text-brand-muted italic pt-2">
                * Initial focus on primary and secondary schools in Nigeria. Subject to site
                assessment, project financing, and contract terms.
              </p>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border card */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-dark/10 bg-white p-2">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80"
                    alt="Solar photovoltaic panels under bright sunlight powering education"
                    fallbackText="Clean Solar Energy Infrastructure"
                    className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  />
                  {/* Floating Metric / Focus Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-brand-dark/95 backdrop-blur-sm text-white border border-white/10 shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-brand-accent/20 text-brand-accent">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-brand-accent font-semibold">
                          Our Current Focus
                        </p>
                        <p className="text-sm font-medium text-white mt-0.5">
                          Solar Electricity for Schools
                        </p>
                        <p className="text-xs text-gray-300 mt-1">
                          Zero-upfront-cost model with monthly service payments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Backing Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl pointer-events-none -z-10" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-brand-primary/15 rounded-full blur-2xl pointer-events-none -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* A3. PROBLEM SECTION */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              The Challenge We Are Addressing
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Electricity Should Never Be a Barrier to Opportunity.
            </h2>
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              In Nigeria, unreliable or unaffordable electricity limits teaching, digital learning,
              school administration, access to modern technology, and the ability of communities to
              participate in an increasingly digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Theme 1 */}
            <div className="p-8 rounded-2xl bg-brand-cream border border-brand-dark/10 hover:border-brand-primary/40 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">
                  Limited Access to Reliable Power
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Frequent grid outages and prolonged blackouts force institutions to rely on costly,
                  polluting petrol and diesel generators, or go without electricity altogether. This
                  disrupts class schedules, laboratories, and basic school operations.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-dark/10 text-xs font-medium text-brand-primary">
                Unpredictable supply slows progress
              </div>
            </div>

            {/* Theme 2 */}
            <div className="p-8 rounded-2xl bg-brand-cream border border-brand-dark/10 hover:border-brand-primary/40 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">
                  High Upfront Solar Capital Cost
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  While solar energy offers clean, long-term power, purchasing solar panels,
                  inverters, and battery storage requires significant upfront capital that most
                  schools, small businesses, and community facilities simply cannot mobilize at
                  once.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-dark/10 text-xs font-medium text-brand-primary">
                Capital constraints block adoption
              </div>
            </div>

            {/* Theme 3 */}
            <div className="p-8 rounded-2xl bg-brand-cream border border-brand-dark/10 hover:border-brand-primary/40 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent text-brand-dark flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">
                  Lost Educational & Economic Opportunities
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Without electricity, computer laboratories sit idle, internet connectivity cannot be
                  maintained, evening study is compromised, and students miss out on vital digital
                  skills required for the modern knowledge economy.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-dark/10 text-xs font-medium text-brand-primary">
                Students and young Africans fall behind
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* A4. OUR SOLUTION SECTION */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Our Proposed Model
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
                Making Solar Energy More Accessible.
              </h2>
              <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                Renerr Energies is pioneering an <strong>energy-as-a-service</strong> model to enable
                qualifying institutions to access solar electricity without bearing the entire capital
                cost of panels, batteries, and inverters upfront.
              </p>
              <div className="p-4 rounded-xl bg-brand-light border border-brand-primary/20 text-xs text-brand-charcoal space-y-1">
                <span className="font-semibold text-brand-primary block">
                  Transparency & Project Integrity:
                </span>
                <p>
                  This proposed model depends on project financing, detailed technical site
                  assessments, customer eligibility, and mutually agreed contractual service terms.
                </p>
              </div>
              <div>
                <Link
                  to="/partner"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-brand-primary text-white hover:bg-brand-dark transition-colors shadow-sm"
                >
                  <span>Discuss a Project With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 5-Step Model Cards */}
            <div className="lg:col-span-7 space-y-3.5">
              {[
                {
                  step: '01',
                  title: 'Identify Needs',
                  desc: 'We identify schools and facilities facing chronic power deficits that require reliable electricity for learning and administration.',
                },
                {
                  step: '02',
                  title: 'Assess & Design',
                  desc: 'We evaluate actual energy demand, roof suitability, and solar irradiation to specify a right-sized, technically sound solar solution.',
                },
                {
                  step: '03',
                  title: 'Structure & Fund',
                  desc: 'We collaborate with financing institutions, development funds, and qualified technical partners to fund and implement the installation.',
                },
                {
                  step: '04',
                  title: 'Service Subscription',
                  desc: 'Instead of paying upfront capital, qualifying schools pay an agreed monthly electricity service fee tied to reliability.',
                },
                {
                  step: '05',
                  title: 'Maintain & Support',
                  desc: 'We structure ongoing operations and maintenance through qualified technical partners so the system delivers dependable power over its lifetime.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-4 sm:p-5 rounded-xl bg-white border border-brand-dark/10 shadow-sm flex items-start gap-4 hover:border-brand-primary/40 transition-colors"
                >
                  <span className="text-sm font-extrabold text-brand-primary bg-brand-light px-2.5 py-1 rounded-md">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-brand-dark">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* A5. SCHOOL ELECTRIFICATION FEATURE */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-brand-dark text-white p-8 sm:p-12 lg:p-16 border border-brand-primary/30 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  <span>Strategic Initial Market</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Starting With Schools. Building for Generations.
                </h2>

                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Education is the foundation of economic progress. When a school gains reliable
                  electricity, teachers can deliver lessons effectively, computer laboratories
                  become functional, and students prepare for a modern digital world.
                </p>

                {/* Benefits List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {[
                    'Reliable lighting for classrooms and evening prep',
                    'Power for desktop computers, laptops & internet routers',
                    'Administrative continuity for grading, printing & records',
                    'Reduced dependence on costly, noisy petrol generators',
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Prominent Callout Card */}
                <div className="mt-6 p-5 rounded-2xl bg-white/10 border border-brand-accent/30 space-y-2">
                  <h4 className="text-base sm:text-lg font-bold text-brand-accent">
                    Solar Electricity for Schools, Without the Full Upfront Installation Cost.
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Subject to site assessment, project financing, eligibility, and agreed service
                    terms.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/schools"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] shadow-md transition-colors"
                  >
                    <span>Register School Interest</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
                    alt="African students in classroom learning with reliable lighting and books"
                    fallbackText="School Learning Powered by Solar"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent flex items-end p-6">
                    <p className="text-xs text-brand-cream/90 font-medium">
                      Enabling modern learning and technology adoption for Nigerian students.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* A6. HOW IT WORKS */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-brand-cream border-b border-brand-dark/5" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Clear & Disciplined Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              How the Project Process Works
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              We apply a structured four-stage evaluation methodology to ensure technical
              soundness, high safety standards, and financial viability for every proposed site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Connect',
                sub: 'Expression of Interest',
                desc: 'Schools and institutions fill out our initial questionnaire outlining their facility type, location, and existing power setup.',
                icon: Users,
              },
              {
                num: '02',
                title: 'Assess',
                sub: 'Technical & Economic Review',
                desc: 'We review load profiles, rooftop structure, solar irradiance, and operational economics to evaluate project feasibility.',
                icon: FileCheck,
              },
              {
                num: '03',
                title: 'Develop',
                sub: 'Financing & EPC Structuring',
                desc: 'Renerr collaborates with qualified solar engineering partners and financing entities to package a viable project.',
                icon: Layers,
              },
              {
                num: '04',
                title: 'Deliver',
                sub: 'Installation & Operation',
                desc: 'Approved projects proceed to professional installation, commissioning, and continuous monitoring under a service contract.',
                icon: ShieldCheck,
              },
            ].map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 rounded-2xl bg-white border border-brand-dark/10 hover:border-brand-primary/50 transition-all flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-brand-primary font-sans">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center text-brand-primary">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark">{step.title}</h3>
                    <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider mt-0.5">
                      {step.sub}
                    </p>
                    <p className="text-xs sm:text-sm text-brand-muted mt-3 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-brand-light/70 border border-brand-primary/20 text-center max-w-2xl mx-auto">
            <p className="text-xs text-brand-charcoal">
              <strong>Please Note:</strong> Submitting an enquiry expresses interest only. It does not
              guarantee project approval, financing, installation, or service availability.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* A7. WHO WE SERVE */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Target Beneficiaries & Markets
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Focused on Impact, Designed for Scale.
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              We concentrate our immediate project pipeline on primary and secondary schools, while
              preparing long-term models for broader community electrification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Primary Focus */}
            <div className="relative p-6 rounded-2xl bg-brand-cream border-2 border-brand-primary flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-primary text-white">
                  Immediate Focus
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">
                  Primary & Secondary Schools
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Day and boarding schools seeking reliable power for classrooms, ICT suites, basic
                  lighting, and administrative tasks without prohibitive upfront costs.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-dark/10">
                <Link
                  to="/schools"
                  className="text-xs font-bold text-brand-primary hover:underline inline-flex items-center gap-1"
                >
                  Register School <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Primary Focus */}
            <div className="relative p-6 rounded-2xl bg-brand-cream border-2 border-brand-primary flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-primary text-white">
                  Immediate Focus
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">
                  Educational Institutions
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Vocational centers, technical training hubs, and specialized education centers
                  requiring stable daytime power to conduct practical training and digital coursework.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-dark/10">
                <Link
                  to="/who-we-serve"
                  className="text-xs font-bold text-brand-primary hover:underline inline-flex items-center gap-1"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Potential Future Market */}
            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 flex flex-col justify-between opacity-90">
              <div className="space-y-4">
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-brand-muted/20 text-brand-charcoal">
                  Future Expansion
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-muted/20 text-brand-dark flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">
                  Underserved Communities
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Potential future development pathways for rural and peri-urban communities,
                  including health posts and community water pumping facilities.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-dark/10 text-xs text-brand-muted">
                Pipeline exploration phase
              </div>
            </div>

            {/* Card 4: Potential Future Market */}
            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 flex flex-col justify-between opacity-90">
              <div className="space-y-4">
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-brand-muted/20 text-brand-charcoal">
                  Future Expansion
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-muted/20 text-brand-dark flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">
                  Productive-Use Small Businesses
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Future models tailored to small enterprises, agro-processing clusters, and local
                  artisans seeking productive energy solutions to expand income.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-dark/10 text-xs text-brand-muted">
                Pipeline exploration phase
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* A8. PARTNERSHIP SECTION */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Collaborative Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Big Challenges Require Strong Partnerships.
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Expanding electricity access across Nigeria cannot be solved in isolation. We actively
              seek collaboration with experienced technical developers, financial partners,
              education advocates, and institutional leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 hover:border-brand-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-dark">
                    Solar Engineering & Implementation Partners
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
                    Qualified solar EPC contractors, electrical engineers, and service technicians
                    seeking pipeline collaboration on design, installation, and field maintenance.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 hover:border-brand-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-dark">
                    Project Finance & Investment Partners
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
                    Impact investors, blended finance funds, and commercial lenders looking to back
                    high-impact, decentralized clean energy assets in African education.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 hover:border-brand-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-dark">
                    Development Organisations & Funders
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
                    Donors, philanthropic trusts, and public development programmes advancing energy
                    transition, digital learning, and youth empowerment in sub-Saharan Africa.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 hover:border-brand-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-dark">
                    Schools & Institutional Customers
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
                    School associations, education proprietors, and community leaders ready to
                    evaluate reliable solar power for their institutions under a service model.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/partner"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-brand-primary text-white hover:bg-brand-dark transition-colors shadow-sm"
            >
              <span>Explore a Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* A9. MISSION AND VISION SECTION */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-dark text-white flex flex-col justify-between border border-brand-primary/20 shadow-md">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary text-brand-accent flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                  Our Mission
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  &ldquo;To make affordable and reliable electricity accessible to everyone, starting
                  in Nigeria and expanding across Africa.&rdquo;
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 mt-6 border-t border-white/10 pt-6">
                Rooted in pragmatic engineering, sustainable project finance, and community-level
                focus.
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-cream border border-brand-dark/10 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent text-brand-dark flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                  Our Long-Term Vision
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark leading-tight">
                  &ldquo;An Africa where energy poverty no longer limits education, economic
                  opportunity, or human potential.&rdquo;
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-brand-muted mt-6 border-t border-brand-dark/10 pt-6">
                Envisioning resilient schools, connected classrooms, and productive local
                economies.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-brand-primary mb-8">
              Guiding Principles & Values
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Access & Inclusion', desc: 'Leaving no school or community behind' },
                { name: 'Integrity & Transparency', desc: 'Rigorous project standards & clarity' },
                { name: 'Sustainability', desc: 'Environmentally clean & financially viable' },
                { name: 'Practical Innovation', desc: 'Fit-for-purpose engineering' },
                { name: 'Collaboration', desc: 'Building long-term partner ecosystems' },
                { name: 'Long-Term Impact', desc: 'Focusing on generational transformation' },
              ].map((val) => (
                <div
                  key={val.name}
                  className="p-4 rounded-xl bg-brand-cream border border-brand-dark/5 text-center flex flex-col justify-center"
                >
                  <p className="text-xs sm:text-sm font-bold text-brand-dark">{val.name}</p>
                  <p className="text-[11px] text-brand-muted mt-1 leading-snug">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* A10. CLOSING CTA */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
            Begin the Conversation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Let's Make Reliable Electricity Accessible to More People.
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Whether you represent a school seeking reliable electricity, a company with technical
            expertise, or an organisation interested in supporting energy access, we would welcome a
            conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/partner"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] shadow-lg transition-colors"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <span>Contact Renerr</span>
            </Link>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none -z-0" />
      </section>
    </div>
  );
};
