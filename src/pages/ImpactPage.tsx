import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Users,
  Lightbulb,
  ArrowRight,
  Sparkles,
  TreePine,
  Target,
  AlertCircle,
  Globe2,
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
              <Sparkles className="w-3.5 h-3.5" />
              <span>Beyond Commercial Activities</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Our Impact & Educational Outreach
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We believe in contributing to African communities beyond our commercial operations
              through renewable energy education, student mentorship, and sustainable community
              development.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Our Social Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
                Empowering People and Communities Through Energy Literacy
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/85 leading-relaxed">
                <p>
                  At Renerr Energies, expanding electricity access is our commercial focus, but our
                  ultimate objective is to unlock human development. We recognize that sustainable
                  clean energy transition in Africa requires not only physical infrastructure, but
                  also widespread energy awareness, youth engagement, and grassroots community
                  participation.
                </p>
                <p>
                  We aim to contribute to a future where more people understand the economic and
                  developmental potential of renewable energy, and where young Africans are inspired
                  to pursue skills and careers in clean technology.
                </p>
              </div>

              <div className="pt-2">
                <div className="p-4 rounded-xl bg-brand-cream border border-brand-dark/10 text-xs text-brand-charcoal flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Honest Reporting Policy:</strong> We do not publish fabricated counters,
                    invented beneficiary statistics, or unsubstantiated impact metrics. Our impact
                    programmes are presented as ongoing commitments and clearly labelled future
                    objectives as we deploy projects across Africa.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-brand-dark/10 shadow-lg bg-white p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
                  alt="African secondary school students participating in classroom learning"
                  fallbackText="Youth Energy Education Outreach"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section: RENERR Energy Awareness Initiative */}
      <section className="py-20 bg-brand-cream border-b border-brand-dark/5" id="awareness">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-dark/10 shadow-sm space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-primary text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Flagship Educational Outreach</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                The RENERR Energy Awareness Initiative
              </h2>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed max-w-3xl">
                An educational outreach programme through which we intend to engage secondary school
                students on renewable energy technologies, energy sustainability, electricity
                access, and future clean energy opportunities.
              </p>
            </div>

            {/* Clear Distinguishing Notice */}
            <div className="p-4 rounded-xl bg-brand-cream border border-brand-dark/10 text-xs text-brand-charcoal">
              <strong>Programme Distinction: </strong>
              The RENERR Energy Awareness Initiative is an educational and community-impact outreach
              programme, <em>not our principal commercial business</em>. It represents our proactive
              effort to build energy literacy among the continent’s next generation of scientists,
              engineers, entrepreneurs, and policy leaders.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h4 className="text-sm font-bold text-brand-dark">Renewable Technology Workshops</h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Interactive workshops teaching students the scientific principles of solar
                  photovoltaic conversion, battery storage, and clean electrical circuits.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h4 className="text-sm font-bold text-brand-dark">Energy Sustainability Literacy</h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Seminars examining the environmental cost of fossil-fueled generators, air
                  pollution, and the importance of sustainable natural resource management.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <h4 className="text-sm font-bold text-brand-dark">African Energy Access Context</h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Educating students on the broader socioeconomic challenges of energy poverty and how
                  decentralized clean energy empowers schools, clinics, and local enterprise.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center font-bold text-xs">
                  04
                </div>
                <h4 className="text-sm font-bold text-brand-dark">Future Career Pathways</h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Introducing students to career opportunities in electrical engineering, clean tech
                  software, project management, and climate finance across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Core Impact Commitments */}
      <section className="py-20 bg-white border-b border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Broad Impact Domains
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
              Where We Aim to Create Meaningful Impact
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              Our broader impact ambition spans five strategic areas of community development,
              environmental responsibility, and economic enablement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">
                Renewable Energy Education & Awareness
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Demystifying clean energy technologies through community seminars, workshops, and
                educational materials that empower individuals to make informed energy decisions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">
                School Outreach & Student Engagement
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Direct engagement with secondary school students through the RENERR Energy Awareness
                Initiative to inspire scientific inquiry and clean technology leadership.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">Community Engagement & Cohesion</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Fostering local cooperation through shared community energy models, enabling
                neighborhoods to collaborate and improve their collective living conditions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">
                Energy Access & Local Development
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Supporting economic productivity, local healthcare clinics, small commercial
                enterprises, and domestic comfort by replacing erratic power with dependable supply.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <TreePine className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">Environmental Sustainability</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Displacing polluting petrol and diesel generation, cutting local noise and particulate
                emissions, and advancing Africa's contribution to global climate mitigation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-dark/10 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-dark">
                Future Measurable Project Outcomes
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Committing to transparent reporting as projects are installed—tracking kilowatt-hours
                delivered, hours of dependable uptime provided, and institutional milestones reached.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Collaborate With Us on Community Impact
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Are you a school administrator, youth organization, or development partner interested in
            our energy awareness initiatives?
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] transition-colors"
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
