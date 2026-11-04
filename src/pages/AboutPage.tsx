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
  Globe2,
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
              <Globe2 className="w-3.5 h-3.5" />
              <span>About Renerr Energies Ltd</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Building a Future Where Energy Access Creates Opportunity.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Renerr Energies Ltd is an African energy-access company committed to reducing energy
              poverty and expanding access to affordable, reliable electricity.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Opening & Purpose */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Our Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
                Energy Access as the Foundation of Progress
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                <p>
                  We believe energy access is fundamental to progress. When people have access to
                  reliable electricity, they have greater opportunities to learn, work, build
                  businesses, access essential services, and improve their quality of life.
                </p>
                <p>
                  Our purpose is to help expand those opportunities by developing practical energy
                  solutions, exploring innovative approaches, and working with partners who share our
                  commitment to a more inclusive energy future.
                </p>
                <p>
                  Electricity should not be a privilege available only to people who can afford
                  expensive infrastructure. Everyone deserves the opportunity to access reliable
                  electricity, regardless of where they live or their economic circumstances. Renerr
                  exists to help make that future possible.
                </p>
              </div>

              <div className="pt-2">
                <div className="p-4 rounded-xl bg-brand-cream border border-brand-dark/10 text-xs text-brand-charcoal">
                  <strong>Permanent Mission, Flexible Execution:</strong> Our mission to reduce energy
                  poverty remains constant, while our specific programmes, technologies, and
                  commercial models evolve to match real-world needs.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-brand-dark/10 shadow-lg bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1548611716-ad383fb58cba?auto=format&fit=crop&w=900&q=80"
                  alt="Clean energy engineers inspecting modern renewable energy equipment"
                  fallbackText="Clean Energy Engineering & Field Development"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent flex items-end p-6">
                  <p className="text-xs text-white font-medium">
                    Advancing sustainable energy infrastructure tailored to African realities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5" id="story">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Our Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
              Why Renerr Energies Was Founded
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/85 leading-relaxed bg-white p-8 sm:p-10 rounded-3xl border border-brand-dark/10 shadow-sm">
            <p>
              Renerr Energies was founded around a simple observation: across Africa, extraordinary
              human and economic potential is held back by the lack of affordable, dependable
              electricity. Despite abundant renewable natural resources, millions of homes,
              enterprises, health centers, and learning institutions are constrained by erratic power
              or forced to rely on expensive, polluting fossil fuel alternatives.
            </p>
            <p>
              We established Renerr to bridge this gap. We recognized that closing Africa's energy
              deficit requires moving beyond rigid, one-size-fits-all models. It demands practical
              problem-solving, scalable business structures, and a willingness to collaborate with
              local communities, engineering specialists, financiers, and public institutions.
            </p>
            <p>
              As an African energy-access company, Renerr is building an enduring platform designed to
              originate, develop, and support viable clean energy solutions that create measurable
              opportunity across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white border-b border-brand-dark/5" id="mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-dark text-white border border-brand-primary/20 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                  Our Mission
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  To reduce energy poverty and expand access to affordable, reliable electricity
                  across Africa through practical solutions, innovation, and strategic partnerships.
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Working systematically to lower access barriers and deploy dependable power where it
                  creates the greatest social and economic value.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 text-xs font-medium text-brand-accent">
                Permanent Mission &bull; Pan-African Scope
              </div>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-cream border border-brand-dark/10 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent text-brand-dark flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                  Our Vision
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark leading-snug">
                  An Africa where access to reliable electricity enables every individual, household,
                  business, and community to realise its full potential.
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Envisioning a continent where no young mind, entrepreneur, or community is
                  disadvantaged by a lack of access to clean power.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-dark/10 text-xs font-medium text-brand-primary">
                Generational Transformation &bull; Human Potential
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5" id="beliefs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Guiding Convictions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
              What We Believe
            </h2>
            <p className="text-sm text-brand-muted max-w-2xl mx-auto">
              Our work across Africa is anchored in five fundamental beliefs that shape every project
              and partnership decision.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Electricity is an enabler, not a luxury',
                desc: 'Access to stable power is indispensable for modern healthcare, quality education, digital connectivity, and dignified livelihoods.',
              },
              {
                title: 'Geography and income must not dictate access',
                desc: 'People living in peri-urban, rural, or low-income settings have the right to reliable energy services tailored to their economic realities.',
              },
              {
                title: 'Different challenges demand different solutions',
                desc: 'No single technology, financing model, or delivery mechanism works everywhere. Flexibility, humility, and context-specific engineering are vital.',
              },
              {
                title: 'Commercial viability ensures lasting impact',
                desc: 'Projects must be financially and technically sustainable so they can reliably deliver energy and endure for decades without premature failure.',
              },
              {
                title: 'Progress requires collective action',
                desc: 'Closing the continent’s electricity gap demands deep, respectful collaboration across private enterprise, capital markets, governments, and local leaders.',
              },
            ].map((belief, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-brand-dark/10 shadow-sm flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-brand-light text-brand-primary flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-dark">{belief.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
                    {belief.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white border-b border-brand-dark/5" id="values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Our Core Values
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              These six values guide our character, our strategic partnerships, and our long-term
              commitments across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '1. Access and Inclusion',
                desc: 'We believe energy access should create opportunities for more people, not just those who are already well served.',
                icon: Target,
              },
              {
                title: '2. Integrity',
                desc: 'We value honesty, transparency, accountability, and responsible business practices in every interaction.',
                icon: ShieldCheck,
              },
              {
                title: '3. Innovation',
                desc: 'We remain open to new technologies, ideas, financing models, and ways of delivering energy services.',
                icon: Lightbulb,
              },
              {
                title: '4. Collaboration',
                desc: 'We believe progress requires capable partners working together toward shared, measurable objectives.',
                icon: HeartHandshake,
              },
              {
                title: '5. Sustainability',
                desc: 'We seek solutions that are environmentally responsible and commercially viable over the long term.',
                icon: Sun,
              },
              {
                title: '6. Impact',
                desc: 'We focus on practical progress that improves energy access and creates meaningful opportunities for people.',
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

      {/* Our Approach to Energy Access */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Strategic Discipline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Our Approach to Energy Access
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              We explore and develop practical energy solutions, innovative business models, and
              strategic partnerships that can help close Africa's electricity access gap and support
              long-term development.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-dark/10 space-y-6 shadow-sm">
            <p className="text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
              Rather than attempting to apply rigid templates across diverse settings, Renerr
              approaches every opportunity with technical rigor and commercial discipline:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-brand-cream border border-brand-dark/10">
                <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                  Needs-Driven Design
                </h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                  Thorough assessment of load profiles, user habits, and energy requirements before
                  specifying any hardware or system topology.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-cream border border-brand-dark/10">
                <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                  Technology Agnostic
                </h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                  Selecting the right clean energy technologies—solar, battery storage, hybrid
                  systems, or mini-grids—best suited to the specific location.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-cream border border-brand-dark/10">
                <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                  Viable Business Structures
                </h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                  Structuring innovative financing, energy service agreements, and risk-sharing
                  mechanisms that align institutional cash flows with energy delivery.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-cream border border-brand-dark/10">
                <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                  Long-Term Partnerships
                </h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                  Uniting verified EPC engineers, institutional operators, and financiers for
                  reliable ongoing operation and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Dialogue Section */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-primary text-xs font-semibold uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>African Energy Leadership</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
            Founded With Purpose. Driven by Impact.
          </h2>

          <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Renerr Energies Ltd is governed by leadership deeply committed to sustainable African
            development. We work directly with experienced clean-tech practitioners, project
            developers, and financing specialists to build an enduring clean energy institution.
          </p>

          <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 max-w-xl mx-auto text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-1">
              Interested in strategic dialogue?
            </h4>
            <p className="text-xs text-brand-muted leading-relaxed">
              We welcome prospective technical partners, impact investors, development
              organisations, and institutional leaders to connect with our leadership team.
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
            Join Us in Expanding Energy Access
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Discover how your organisation can collaborate with Renerr Energies as an engineering
            ally, investor, development partner, or customer.
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
