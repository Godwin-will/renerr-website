import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BriefcaseBusiness } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const areas = ['Renewable energy and engineering', 'Community engagement and education', 'Project development and operations', 'Technology, digital solutions and data', 'Partnerships and business development'];
  return <div>
    <section className="bg-brand-dark text-white py-16 lg:py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4"><p className="text-xs font-bold uppercase tracking-widest text-brand-accent">Careers</p><h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Careers at Renerr</h1><h2 className="text-xl sm:text-2xl font-semibold text-brand-accent">Be Part of a More Energy-Accessible Future.</h2></div></section>
    <section className="py-16 sm:py-20 bg-white"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-4 text-brand-charcoal/80 leading-relaxed"><p>At Renerr Energies, we believe expanding access to reliable and affordable electricity requires committed people, innovative thinking and collaboration.</p><p>We are building towards a future where households and communities across Africa can access better energy solutions.</p><p>We are not currently recruiting for any specific positions. As Renerr grows, opportunities may emerge across areas such as:</p></div>
      <ul className="grid sm:grid-cols-2 gap-3">{areas.map(area=><li key={area} className="rounded-xl bg-brand-cream border border-brand-dark/10 px-4 py-3 text-sm text-brand-dark">{area}</li>)}</ul>
      <div className="rounded-3xl bg-brand-light p-6 sm:p-8 space-y-3"><BriefcaseBusiness className="text-brand-primary"/><h2 className="text-xl font-bold text-brand-dark">No Open Positions at the Moment</h2><p className="text-sm leading-relaxed text-brand-charcoal/80">There are currently no advertised vacancies at Renerr Energies. Please check this page for future opportunities as our organisation and activities develop.</p></div>
      <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-brand-dark px-5 py-3 text-sm font-bold text-white">Contact Renerr <ArrowRight size={16}/></Link>
    </div></section>
  </div>;
};
