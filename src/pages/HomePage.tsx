import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Sun,
  ShieldCheck,
  Zap,
  Users,
  TrendingUp,
  ArrowRight,
  Compass,
  Layers,
  Sparkles,
  HeartHandshake,
  Lightbulb,
  Stethoscope,
  GraduationCap,
  Cpu,
} from 'lucide-react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* ======================================================== */}
      {/* HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-cream via-brand-light/30 to-brand-cream pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Core Positioning & Ambition */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold tracking-wide uppercase">
                <Globe className="w-3.5 h-3.5 text-brand-primary" />
                <span>African Energy Access Company</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
                Powering a Brighter Energy Future for Africa.
              </h1>

              <p className="text-base sm:text-lg text-brand-charcoal/85 leading-relaxed max-w-2xl font-normal">
                Renerr Energies is working to reduce energy poverty and expand access to affordable,
                reliable electricity across Africa. We believe that access to energy creates
                opportunities, strengthens communities, and unlocks human potential.
              </p>

              {/* Guiding Brand Proposition */}
              <div className="pt-2 pb-1 border-y border-brand-dark/10 max-w-xl">
                <p className="text-xs sm:text-sm font-medium text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                  Practical energy solutions. Innovative business models. Strategic partnerships.
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
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-brand-dark bg-white border border-brand-dark/15 hover:border-brand-primary hover:text-brand-primary transition-all shadow-sm"
                >
                  <span>Discover Our Mission</span>
                </Link>
              </div>

              <p className="text-xs text-brand-muted pt-2">
                Advancing energy access across households, businesses, institutions, and communities.
              </p>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-dark/10 bg-white p-2">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=80"
                    alt="Clean solar photovoltaic energy infrastructure under expansive clear sky"
                    fallbackText="Clean Energy Infrastructure for Africa"
                    className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  />
                  {/* Floating Brand Promise Badge */}
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
                          Closing Africa's Energy Access Gap
                        </p>
                        <p className="text-xs text-gray-300 mt-1">
                          Developing practical, sustainable solutions that unlock human potential.
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
      {/* THE CHALLENGE WE ARE ADDRESSING */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              The Reality of Energy Poverty
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Reliable Electricity Should Not Be a Privilege.
            </h2>
            <div className="space-y-3 text-base sm:text-lg text-brand-muted leading-relaxed">
              <p>
                Across Africa, unreliable and insufficient access to electricity continues to
                constrain economic opportunity, education, healthcare, productivity, and quality of
                life. For many households, businesses, and communities, the challenge is not simply
                the availability of energy resources. It is the ability to access electricity that
                is reliable, affordable, and suited to their needs.
              </p>
              <p className="text-sm sm:text-base text-brand-charcoal/80 font-medium">
                We believe that addressing energy poverty requires more than a single solution. It
                requires new approaches to project development, financing, technology deployment,
                and collaboration between the public and private sectors.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-brand-cream border border-brand-dark/10 hover:border-brand-primary/40 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">Constrained Human Development</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  When health clinics cannot refrigerate vaccines, schools lack lighting and digital
                  tools, and homes rely on hazardous lighting sources, human development and social
                  mobility are severely stifled.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-dark/10 text-xs font-medium text-brand-primary">
                Energy access is essential to human progress
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-brand-cream border border-brand-dark/10 hover:border-brand-primary/40 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">Economic & Productive Limits</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Small enterprises, industrial operations, and agricultural processors spend
                  outsized shares of their revenue on volatile, noisy fuel generation, eroding
                  profitability and stunting regional job creation.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-dark/10 text-xs font-medium text-brand-primary">
                Reliable power drives economic productivity
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-brand-cream border border-brand-dark/10 hover:border-brand-primary/40 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent text-brand-dark flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">The Delivery & Capital Barrier</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Clean energy solutions exist, but deploying them at scale demands fit-for-purpose
                  commercial structures, flexible financing, rigorous engineering, and long-term
                  operational stewardship.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-dark/10 text-xs font-medium text-brand-primary">
                Bridging resources with practical execution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* OUR MISSION SECTION */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Our Core Purpose</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
                Expanding Energy Access. Unlocking Human Potential.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                <p>
                  Our mission is to help make affordable, reliable electricity accessible to more
                  people and communities across Africa.
                </p>
                <p>
                  We see electricity as more than a utility. It is an enabler of education,
                  healthcare, entrepreneurship, industrial development, digital inclusion, and
                  economic opportunity.
                </p>
                <p>
                  By developing practical energy solutions and collaborating with organisations that
                  share our ambition, we aim to contribute to a future where more people can access
                  the power they need to live, work, learn, and thrive.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-brand-primary text-white hover:bg-brand-dark transition-colors shadow-sm"
                >
                  <span>Learn About Our Purpose</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-brand-dark text-white space-y-6 shadow-xl border border-brand-primary/20">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                  Our Guiding Belief
                </span>
                <blockquote className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  &ldquo;We believe that reliable electricity is fundamental to human progress and
                  that access to energy should not be determined solely by income or
                  geography.&rdquo;
                </blockquote>
                <div className="pt-6 border-t border-white/10 space-y-2">
                  <p className="text-xs text-brand-accent font-semibold uppercase tracking-wider">
                    Our Long-Term Vision
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    An Africa where access to reliable electricity enables every individual,
                    household, business, and community to realise its full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* OUR APPROACH SECTION (4 PILLARS) */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-brand-dark/5" id="approach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Needs-Driven & Flexible
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Different Challenges Require Different Solutions.
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-brand-muted leading-relaxed">
              <p>
                We recognise that energy-access challenges differ across locations, communities,
                institutions, and industries. Solutions that work in one setting may not be
                appropriate in another.
              </p>
              <p>
                Renerr takes a flexible, needs-driven approach to energy access. We seek to
                understand the challenges people face, identify technically and commercially
                appropriate solutions, develop viable projects, and build partnerships that can help
                bring those solutions to life.
              </p>
              <p className="text-brand-charcoal font-medium">
                Our approach is grounded in practicality, innovation, collaboration, and long-term
                impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Understanding Energy Needs',
                desc: 'Identifying the real-world electricity challenges faced by people, businesses, institutions, and communities through rigorous local engagement and demand analysis.',
                icon: Users,
              },
              {
                num: '02',
                title: 'Developing Practical Solutions',
                desc: 'Exploring appropriate technologies, delivery models, and project structures tailored to local environments, load profiles, and economic conditions.',
                icon: Lightbulb,
              },
              {
                num: '03',
                title: 'Building Strategic Partnerships',
                desc: 'Collaborating with technical specialists, investors, development finance institutions, public agencies, and community leaders to assemble viable initiatives.',
                icon: HeartHandshake,
              },
              {
                num: '04',
                title: 'Enabling Sustainable Impact',
                desc: 'Supporting operational approaches that remain commercially viable, scale responsibly, and provide dependable electricity over the long term.',
                icon: ShieldCheck,
              },
            ].map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 hover:border-brand-primary/50 transition-all flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-brand-primary font-sans">
                        {pillar.num}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center text-brand-primary">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/approach"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-brand-dark/20 text-brand-dark hover:bg-brand-cream transition-colors"
            >
              <span>Explore Our Full Approach</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* OUR IMPACT AMBITION */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Catalytic Transformation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Energy Access That Creates Opportunity.
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              We look beyond kilowatt-hours to the catalytic progress reliable electricity makes
              possible across society, the economy, and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 space-y-3 shadow-sm hover:border-brand-primary transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">Education & Digital Inclusion</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Enabling classroom illumination, computer laboratories, internet connectivity, and
                continuous evening study to prepare Africa's youth for a digital economy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 space-y-3 shadow-sm hover:border-brand-primary transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">Healthcare & Essential Services</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Powering cold chains for vaccine preservation, surgical lighting, maternity care, and
                clean water pumping across community health facilities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 space-y-3 shadow-sm hover:border-brand-primary transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">Productive Enterprise & Jobs</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Supplying dependable electricity to local businesses, agricultural processors, and
                workshops, replacing costly fuel and boosting local employment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 space-y-3 shadow-sm hover:border-brand-primary transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">Stronger, Resilient Communities</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Fostering social inclusion, safer public spaces, and communal resilience through
                reliable distributed power systems that serve collective welfare.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 space-y-3 shadow-sm hover:border-brand-primary transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">Technology Adoption & Industry</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Providing the stable electrical foundation necessary for modern manufacturing,
                data connectivity, agro-industrial automation, and commercial enterprise.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-dark/10 space-y-3 shadow-sm hover:border-brand-primary transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">Sustainable Energy Systems</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Accelerating Africa's clean energy transition by replacing polluting fossil-fueled
                generators with sustainable, low-emission renewable alternatives.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-brand-primary hover:underline"
            >
              <span>Read Our Full Impact Ambition</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* OUR COMMITMENT TO AFRICA */}
      {/* ======================================================== */}
      <section className="py-20 lg:py-24 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-3xl bg-brand-cream p-8 sm:p-12 border border-brand-dark/10 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark text-brand-accent text-xs font-semibold uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5" />
                <span>Pan-African Commitment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
                Rooted in Africa. Focused on a Better Energy Future.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
              <p>
                Renerr Energies was established around a simple conviction: Africa's energy future
                must create opportunities for the people and communities who need them most.
              </p>
              <p>
                We are focused on helping close the gap between the continent's enormous potential
                and the everyday reality of energy access for many people.
              </p>
              <p>
                Our ambition is to contribute to a future in which reliable electricity supports
                opportunity across households, businesses, institutions, and communities throughout
                Africa.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-primary hover:underline"
              >
                <span>Read more about our origins and principles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* PARTNERSHIP CTA */}
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
            We believe meaningful progress on energy access depends on collaboration. We welcome
            conversations with organisations, institutions, investors, technical experts, and
            communities that share our ambition to reduce energy poverty and expand access to
            reliable electricity.
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
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none -z-0" />
      </section>
    </div>
  );
};
