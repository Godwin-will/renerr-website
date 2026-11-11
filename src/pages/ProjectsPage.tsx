import React from 'react';
import { CalendarDays, FolderOpen } from 'lucide-react';

const plannedProjects = [
  {
    title: 'Energy Education and Community Outreach',
    status: 'Planned / In Development',
    description: 'A planned educational outreach initiative focused on improving awareness and understanding of energy access, renewable energy, electricity use and energy efficiency among young people and local communities. The initiative is intended to encourage greater awareness of energy challenges and the opportunities offered by renewable energy.',
  },
];

export const ProjectsPage: React.FC = () => {
  return <div>
    <section className="bg-brand-dark text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">Projects</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Our Projects</h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">Explore the initiatives Renerr is developing and the projects we plan to deliver as we work towards expanding access to reliable and affordable energy.</p>
      </div>
    </section>
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3"><CalendarDays className="text-brand-primary"/><h2 className="text-2xl sm:text-3xl font-bold text-brand-dark">Upcoming and In Development</h2></div>
          <div className="grid gap-6 md:grid-cols-2">
            {plannedProjects.map((project) => <article key={project.title} className="rounded-3xl border border-brand-dark/10 bg-brand-cream p-6 sm:p-8 space-y-4">
              <span className="inline-flex rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-primary">{project.status}</span>
              <h3 className="text-xl font-bold text-brand-dark">{project.title}</h3>
              <p className="text-sm sm:text-base leading-relaxed text-brand-charcoal/80">{project.description}</p>
            </article>)}
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-brand-dark/10 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-brand-dark">Ongoing Projects</h2>
            <p className="font-semibold text-brand-primary">No ongoing projects to report at the moment.</p>
            <p className="text-sm leading-relaxed text-brand-muted">As our initiatives move from planning into implementation, project updates will be published here.</p>
          </section>
          <section className="rounded-3xl border border-brand-dark/10 bg-brand-cream p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2"><FolderOpen className="text-brand-primary"/><h2 className="text-xl font-bold text-brand-dark">Completed Projects</h2></div>
            <p className="font-semibold text-brand-primary">Our completed projects will appear here.</p>
            <p className="text-sm leading-relaxed text-brand-muted">We look forward to sharing verified project stories, locations, outcomes and lessons learned as Renerr delivers its first projects.</p>
          </section>
        </div>
      </div>
    </section>
  </div>;
};
