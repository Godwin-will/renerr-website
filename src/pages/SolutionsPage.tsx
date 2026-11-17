import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardCheck,
  FileCheck2,
  HandCoins,
  Home,
  MapPin,
  PlugZap,
  ShieldCheck,
  Star,
  Sun,
  Users,
  Wrench,
} from 'lucide-react';

const challenges = [
  {
    icon: ShieldCheck,
    title: 'Safety and trust',
    description: 'It can be difficult to identify capable solar professionals. Poor installation practices, unsuitable components or incomplete assessments can put people and property at risk.',
  },
  {
    icon: HandCoins,
    title: 'Upfront affordability',
    description: 'The initial cost of solar infrastructure can be out of reach for households, even when spread across regular contributions. Communities need ways to access investment without carrying the full cost upfront.',
  },
];

const professionalFeatures = [
  { icon: BadgeCheck, title: 'Verified professionals', text: 'Technicians will be vetted for relevant competence, experience and installation capability before joining the network.' },
  { icon: Star, title: 'Transparent reviews', text: 'Customers will be able to share reviews and ratings to help others compare service providers and make informed choices.' },
  { icon: Wrench, title: 'Better installation standards', text: 'The network is intended to encourage sound system sizing, suitable equipment selection and professional installation.' },
  { icon: ShieldCheck, title: 'Greater customer confidence', text: 'Clear information and a visible reputation history can help people choose who installs and maintains their systems.' },
];

const projectDetails = [
  'Community and households the project is designed to serve',
  'Proposed solar and battery infrastructure',
  'Estimated development and installation costs and capital required',
  'Expected electricity demand and revenue projections',
  'Proposed investor repayment structure and projected returns',
  'Expected project duration and operational considerations',
];

const stages = [
  { icon: MapPin, title: 'Identify', text: 'Find communities and households that need reliable electricity.' },
  { icon: ClipboardCheck, title: 'Assess', text: 'Evaluate energy demand, technical requirements and project feasibility.' },
  { icon: FileCheck2, title: 'Present', text: 'Prepare the system design, cost analysis and investment plan for the platform.' },
  { icon: Users, title: 'Invest', text: 'Diaspora investors review the opportunity and may invest individually or together.' },
  { icon: PlugZap, title: 'Deliver', text: 'Renerr coordinates development and installation; households pay for electricity as they use it.' },
];

export const SolutionsPage: React.FC = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-brand-dark text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">Our Solutions</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">Practical Energy Solutions. Built Around People.</h1>
              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-gray-300">We combine trusted solar service delivery with innovative energy investment to make reliable electricity safer and more accessible across Africa.</p>
              <a href="#solutions" className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-bold text-brand-dark hover:bg-[#a6dc70] transition-colors">
                Explore Our Solutions <ArrowDown size={17} />
              </a>
            </div>
            <div className="lg:col-span-5">
              <div className="mx-auto max-w-md rounded-3xl border border-white/15 bg-white/5 p-5 sm:p-7">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-brand-cream p-4 text-brand-dark">
                    <ShieldCheck className="mb-3 text-brand-primary" size={28} />
                    <p className="text-sm font-bold">Trusted professionals</p>
                    <p className="mt-1 text-xs text-brand-muted">Vetting · Reviews · Quality</p>
                  </div>
                  <div className="rounded-2xl bg-brand-accent p-4 text-brand-dark">
                    <Sun className="mb-3 text-brand-primary" size={28} />
                    <p className="text-sm font-bold">Energy access</p>
                    <p className="mt-1 text-xs text-brand-dark/70">Investment · Infrastructure · Service</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-center gap-3 rounded-2xl border border-white/15 px-4 py-3 text-xs text-gray-200">
                  <Home size={17} className="text-brand-accent" />
                  <span>Households and communities</span>
                  <ArrowRight size={15} className="text-brand-accent" />
                  <PlugZap size={17} className="text-brand-accent" />
                  <span>Reliable electricity</span>
                </div>
                <p className="mt-3 text-center text-[11px] text-gray-400">Solutions and platform features in development</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-28 -top-36 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl" />
      </section>

      <section className="bg-white py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">The challenges we address</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">Solar access needs trust and a way to fund infrastructure.</h2>
            <p className="text-sm sm:text-base leading-relaxed text-brand-muted">We are developing two complementary solutions around the barriers people tell us matter: safe, dependable service and access to the capital needed to build energy systems.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {challenges.map(({ icon: Icon, title, description }) => (
              <article key={title} className="flex gap-4 rounded-2xl border border-brand-dark/10 bg-brand-cream p-5 sm:p-6">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-light text-brand-primary"><Icon size={22} /></div>
                <div><h3 className="font-bold text-brand-dark">{title}</h3><p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-24 bg-brand-cream py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <article className="overflow-hidden rounded-3xl border border-brand-dark/10 bg-white shadow-sm">
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-7 p-6 sm:p-9 lg:p-10 space-y-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand-primary"><Wrench size={23} /></div>
                <div><p className="text-xs font-bold uppercase tracking-widest text-brand-primary">Solution One · Trusted Solar Professionals</p><h2 className="mt-2 text-2xl sm:text-3xl font-extrabold leading-tight text-brand-dark">Reliable Solar Solutions Start with the Right Professionals.</h2></div>
                <p className="text-sm sm:text-base leading-relaxed text-brand-charcoal/80">We are building a trusted network of vetted solar professionals to help individuals and communities find qualified technicians and make more informed decisions when installing solar energy systems.</p>
                <p className="text-sm leading-relaxed text-brand-muted">Before onboarding, technicians will undergo a vetting process to assess their technical competence, experience and installation capabilities. Customers will be able to review and rate technicians based on their experiences, supporting a transparent reputation system that encourages quality workmanship and accountability.</p>
                <p className="text-sm font-medium leading-relaxed text-brand-dark">Our goal is to make it easier to find reliable solar professionals while encouraging higher standards of safety, quality and accountability across the renewable energy market.</p>
              </div>
              <div className="lg:col-span-5 bg-brand-dark p-6 sm:p-9 lg:p-10 text-white flex flex-col justify-center gap-5">
                <div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-accent text-brand-dark"><BadgeCheck size={22}/></div><div><p className="text-xs font-bold uppercase tracking-wider text-brand-accent">Professional network</p><p className="font-semibold">Quality and accountability by design</p></div></div>
                <div className="space-y-3">
                  {professionalFeatures.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                      <Icon className="mt-0.5 shrink-0 text-brand-accent" size={18}/><div><h3 className="text-sm font-semibold">{title}</h3><p className="mt-1 text-xs leading-relaxed text-gray-300">{text}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">Solution Two · Diaspora-Powered Energy Investment</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-brand-dark">Connecting Diaspora Investment to Communities That Need Electricity.</h2>
            <p className="text-sm sm:text-base leading-relaxed text-brand-charcoal/80">For many households, the main barrier to solar electricity is the initial cost of infrastructure. Regular monthly contributions towards buying a system may still be unrealistic for low-income households. We believe households should not have to carry the entire upfront investment before they can access reliable electricity.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 rounded-3xl border border-brand-dark/10 bg-brand-cream p-5 sm:p-7 space-y-5">
              <h3 className="text-lg font-bold text-brand-dark">A project investment pathway</h3>
              <div className="grid sm:grid-cols-3 gap-3 items-stretch">
                <div className="rounded-2xl bg-white p-4 text-center border border-brand-dark/10"><Users className="mx-auto text-brand-primary"/><p className="mt-2 text-sm font-bold text-brand-dark">Diaspora investors</p><p className="mt-1 text-xs leading-relaxed text-brand-muted">Review opportunities and invest individually or alongside other investors.</p></div>
                <div className="rounded-2xl bg-brand-dark p-4 text-center text-white"><div className="mx-auto grid h-9 w-9 place-items-center rounded-xl bg-brand-accent text-brand-dark"><Sun size={20}/></div><p className="mt-2 text-sm font-bold">Renerr develops</p><p className="mt-1 text-xs leading-relaxed text-gray-300">Assesses needs, designs projects, presents plans and coordinates delivery.</p></div>
                <div className="rounded-2xl bg-white p-4 text-center border border-brand-dark/10"><Home className="mx-auto text-brand-primary"/><p className="mt-2 text-sm font-bold text-brand-dark">Local households</p><p className="mt-1 text-xs leading-relaxed text-brand-muted">Access electricity through a pay-as-you-go arrangement.</p></div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs font-semibold text-brand-primary">
                <span className="rounded-full bg-white px-3 py-2">Project capital</span><ArrowRight className="hidden sm:block" size={16}/><ArrowDown className="sm:hidden" size={16}/><span className="rounded-full bg-white px-3 py-2">Solar + battery infrastructure</span><ArrowRight className="hidden sm:block" size={16}/><ArrowDown className="sm:hidden" size={16}/><span className="rounded-full bg-white px-3 py-2">Electricity access</span>
              </div>
              <div className="rounded-xl border border-brand-primary/20 bg-white p-4 text-xs sm:text-sm leading-relaxed text-brand-charcoal/80"><strong className="text-brand-dark">Project revenue:</strong> Electricity payments are intended to support recovery of the initial investment, system operation and maintenance, and project sustainability. Financial projections and expected returns are estimates, not guaranteed outcomes.</div>
            </div>

            <aside className="lg:col-span-5 rounded-3xl bg-brand-dark p-5 sm:p-7 text-white space-y-4">
              <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-accent text-brand-dark"><FileCheck2 size={21}/></div><h3 className="text-lg font-bold">What each opportunity will show</h3></div>
              <p className="text-sm leading-relaxed text-gray-300">Projects presented on the Renerr platform are intended to include information investors need to assess an opportunity:</p>
              <ul className="space-y-2.5">{projectDetails.map(item=><li key={item} className="flex gap-2 text-xs sm:text-sm leading-relaxed text-gray-200"><Check size={16} className="mt-0.5 shrink-0 text-brand-accent"/>{item}</li>)}</ul>
              <p className="border-t border-white/10 pt-4 text-xs leading-relaxed text-gray-400">Investors may fund a project individually or participate alongside others. Project information, forecasts and projected returns are subject to due diligence and are not guarantees.</p>
            </aside>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              ['Households and communities', 'Access electricity without financing the full infrastructure upfront, pay for electricity as it is used, and benefit from professionally assessed project infrastructure.'],
              ['Diaspora investors', 'Explore structured energy investment opportunities, review project information and choose whether to invest individually or collectively.'],
              ['Local communities', 'Attract investment into energy infrastructure, improve electricity access and support local economic activity.'],
            ].map(([title, text])=><article key={title} className="rounded-2xl border border-brand-dark/10 p-5"><h3 className="font-bold text-brand-dark">{title}</h3><p className="mt-2 text-sm leading-relaxed text-brand-muted">{text}</p></article>)}
          </div>
          <p className="rounded-xl bg-amber-50 px-4 py-3 text-xs sm:text-sm leading-relaxed text-amber-950">This investment and service model is under development. Project availability, technical feasibility, commercial terms and financial outcomes will depend on each project's assessment. No investor returns are guaranteed.</p>
        </div>
      </section>

      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3"><p className="text-xs font-bold uppercase tracking-widest text-brand-primary">How it works</p><h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">From community need to electricity access.</h2><p className="text-sm sm:text-base leading-relaxed text-brand-muted">A five-stage view of the project pathway Renerr is developing.</p></div>
          <ol className="grid gap-4 md:grid-cols-5">
            {stages.map(({ icon: Icon, title, text }, index)=><li key={title} className="relative rounded-2xl border border-brand-dark/10 bg-white p-5">
              <div className="flex items-center justify-between"><span className="grid h-9 w-9 place-items-center rounded-full bg-brand-primary text-sm font-bold text-white">{index+1}</span><Icon className="text-brand-primary" size={21}/></div>
              <h3 className="mt-4 font-bold text-brand-dark">{title}</h3><p className="mt-2 text-sm leading-relaxed text-brand-muted">{text}</p>
            </li>)}
          </ol>
        </div>
      </section>

      <section className="bg-brand-dark py-16 sm:py-20 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">Get involved</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Let's Make Reliable Electricity Accessible to More Communities.</h2>
          <p className="mx-auto max-w-3xl text-sm sm:text-base leading-relaxed text-gray-300">Whether you are a household seeking reliable electricity, a solar professional interested in joining our network, or an African in the diaspora interested in investing in energy access, there is a place for you in the Renerr ecosystem.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-bold text-brand-dark hover:bg-[#a6dc70]">Contact Renerr <ArrowRight size={16}/></Link>
            <Link to="/partner" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Partner With Us <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
