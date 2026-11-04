import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Sparkles,
  ShieldCheck,
  Target,
  Users,
  Lightbulb,
  HeartHandshake,
  ArrowRight,
  Sun,
  UserCheck,
} from 'lucide-react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-brand-dark text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-wider">
              <Sun className="w-3.5 h-3.5" />
              <span>About Renerr Energies Ltd</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Building an Energy Future That Includes Everyone.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Founded on the belief that clean energy access should be a catalyst for education and
              economic opportunity across Africa, starting with pragmatic solar solutions for
              Nigerian schools.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Our Story & Origin */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Our Genesis & Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
                Bridging the Gap Between Abundant Sun and Real Energy Access
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                <p>
                  Across Nigeria and the wider African continent, solar irradiation is abundant, yet
                  hundreds of thousands of schools, institutions, and communities struggle with
                  persistent electricity deficits or depend on polluting, exorbitant generator
                  fuel.
                </p>
                <p>
                  <strong>Renerr Energies Ltd</strong> was established to bridge this contradiction.
                  We recognized that the primary barrier preventing widespread solar adoption is not
                  the technology itself, but the traditional requirement for massive upfront capital
                  investment.
                </p>
                <p>
                  By pioneering an <strong>energy-as-a-service model</strong>, Renerr aims to convert
                  prohibitive capital costs into manageable operational subscriptions, starting with
                  schools where dependable power immediately unlocks digital learning, administrative
                  efficiency, and youth potential.
                </p>
              </div>

              <div className="pt-2">
                <div className="p-4 rounded-xl bg-brand-cream border border-brand-dark/10 text-xs text-brand-charcoal">
                  <strong>Long-Term Ambition:</strong> To help expand access to clean electricity
                  across Nigeria and Africa through partnerships, innovative financing structures, and
                  fit-for-purpose renewable energy engineering.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-brand-dark/10 shadow-lg bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1548611716-ad383fb58cba?auto=format&fit=crop&w=900&q=80"
                  alt="Solar engineering technicians reviewing renewable energy solar array installation"
                  fallbackText="Clean Energy Engineering"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent flex items-end p-6">
                  <p className="text-xs text-white font-medium">
                    Pragmatic solar engineering designed for resilience and local environmental
                    conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Deep Dive */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5" id="mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-dark/10 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                  Our Mission
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark leading-snug">
                  To make affordable and reliable electricity accessible to everyone, starting in
                  Nigeria and expanding across Africa.
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  We measure success not by kilowatts sold in isolation, but by classrooms
                  illuminated, computer labs powered, and institutional barriers dismantled.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-dark/10 text-xs font-medium text-brand-primary">
                Action-oriented &bull; Inclusive &bull; Sustainable
              </div>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-dark/10 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                  Our Vision
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark leading-snug">
                  An Africa where energy poverty no longer limits education, economic opportunity, or
                  human potential.
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  We envision a thriving continent where every young African has the tools, light,
                  and connectivity needed to achieve their full aspirations.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-dark/10 text-xs font-medium text-brand-dark">
                Generational Impact &bull; Human Empowerment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              What Defines Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Our Core Values
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Every initiative, partnership negotiation, and engineering choice is guided by six
              foundational values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Access & Inclusion',
                desc: 'Energy is a fundamental enabler. We design models specifically to reach institutions and facilities traditionally bypassed by commercial providers.',
                icon: Target,
              },
              {
                title: 'Integrity & Transparency',
                desc: 'We communicate honestly regarding feasibility, project risks, timelines, and costs. We never promise what cannot be verified technically.',
                icon: ShieldCheck,
              },
              {
                title: 'Environmental & Economic Sustainability',
                desc: 'Clean solar electricity that protects local ecosystems while creating dependable, financially self-sustaining project operations.',
                icon: Sun,
              },
              {
                title: 'Practical Innovation',
                desc: 'We focus on pragmatic, durable, fit-for-purpose hardware and software rather than flashy gadgets that cannot survive local field conditions.',
                icon: Lightbulb,
              },
              {
                title: 'Collaboration',
                desc: 'We believe solving energy access requires uniting local contractors, institutional leaders, international financiers, and educators.',
                icon: HeartHandshake,
              },
              {
                title: 'Long-Term Impact',
                desc: 'We build for longevity. Our service commitments extend across decades of dependable operation and continuous maintenance support.',
                icon: Users,
              },
            ].map((v, i) => {
              const IconComp = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3 flex flex-col justify-between hover:border-brand-primary transition-colors"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-brand-dark">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach to Sustainable Project Development */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-brand-dark/10 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Our Approach to Sustainable Project Development
            </h2>
            <div className="space-y-4 text-sm text-brand-charcoal/85 leading-relaxed">
              <p>
                Renerr Energies rejects one-size-fits-all installations. A sustainable solar project
                requires four synchronized pillars:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-brand-cream border border-brand-dark/10">
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                    1. Rigorous Demand Sizing
                  </h4>
                  <p className="text-xs text-brand-muted mt-1">
                    Matching real-world load schedules and critical appliances to battery capacity,
                    preventing costly over-engineering and premature battery exhaustion.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-brand-cream border border-brand-dark/10">
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                    2. Blended Project Finance
                  </h4>
                  <p className="text-xs text-brand-muted mt-1">
                    Structuring capital using equity, concessional debt, and grant capital to make
                    monthly customer subscriptions truly affordable.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-brand-cream border border-brand-dark/10">
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                    3. Local Technical Alliances
                  </h4>
                  <p className="text-xs text-brand-muted mt-1">
                    Partnering with qualified domestic Nigerian solar installers and technicians to
                    ensure swift on-site maintenance and support local job creation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-brand-cream border border-brand-dark/10">
                  <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                    4. Performance-Linked Contracts
                  </h4>
                  <p className="text-xs text-brand-muted mt-1">
                    Tying school payments to system uptime and energy delivery, ensuring our
                    incentives are completely aligned with institutional success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Placeholder Section (Tasteful, editable in code, honest!) */}
      {/* 
        NOTE TO FOUNDER:
        When ready to display your personal founder profile and portrait, you can configure your details 
        below or in siteConfig.ts. This section is crafted to maintain high credibility without inventing
        unverified claims.
      */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-primary text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Leadership & Mission Stewardship</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
            Founded With Purpose in Nigeria
          </h2>

          <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Renerr Energies Ltd is led by founder initiative focused on catalytic energy access.
            Our team collaborates directly with clean tech advisors, solar engineers, and financing
            partners across Nigeria and internationally to build a scalable clean energy enterprise.
          </p>

          <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 max-w-xl mx-auto text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-1">
              Interested in speaking with the founder?
            </h4>
            <p className="text-xs text-brand-muted leading-relaxed">
              We welcome prospective technical partners, impact investors, and education
              proprietors to connect directly for strategic dialogue.
            </p>
            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:underline"
              >
                <span>Initiate a Conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Join us on this mission.
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Discover how your organisation can collaborate with Renerr Energies as an EPC partner,
            investor, or institutional ally.
          </p>
          <div className="pt-2">
            <Link
              to="/partner"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] transition-colors"
            >
              <span>Explore Partnership Pathways</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
