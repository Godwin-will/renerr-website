import React from 'react';
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  House,
  Sun,
  Users,
  Zap,
} from 'lucide-react';

const renerrFunctions = [
  'Energy assessment',
  'Solution design',
  'Project coordination',
  'Technology',
];

export const HeroEnergyAccessSchematic: React.FC = () => (
  <div className="relative mx-auto w-full max-w-[430px] lg:ml-auto lg:mr-1">
    <div className="absolute inset-x-6 top-8 bottom-8 rounded-full bg-brand-primary/15 blur-3xl" />

    <div
      role="img"
      aria-label="Concept-stage clean-energy access pathway: households, communities and businesses connect through RENERR's project development to integrated solar and storage systems, with the intended outcome of affordable, reliable electricity."
      className="relative rounded-[1.8rem] border border-brand-dark/10 bg-white/95 p-4 shadow-[0_24px_64px_-32px_rgba(18,59,42,0.45)] sm:p-5"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand-primary">
            Energy access ecosystem
          </p>
          <p className="mt-1 text-xs text-brand-muted">Project-led · technology-enabled</p>
        </div>
        <span className="inline-flex flex-shrink-0 items-center gap-1 rounded-full bg-brand-light px-2.5 py-1 text-[9px] font-bold text-brand-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          Concept stage
        </span>
      </div>

      <div className="grid grid-cols-[1fr_14px_1.3fr_14px_1fr] items-center gap-0">
        {/* People and organisations */}
        <div className="flex min-w-0 flex-col items-center text-center">
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-light text-brand-primary sm:h-11 sm:w-11">
            <Users className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="text-[10px] font-bold leading-tight text-brand-dark sm:text-[11px]">
            People &amp;
            <br />
            organisations
          </p>
          <div className="mt-2 flex items-center gap-1 text-brand-primary" aria-hidden="true">
            <House className="h-3 w-3" />
            <Users className="h-3 w-3" />
            <Building2 className="h-3 w-3" />
          </div>
          <p className="mt-1 text-[8px] leading-snug text-brand-muted sm:text-[9px]">
            Households
            <br />
            Communities
            <br />
            Businesses
          </p>
        </div>

        <ArrowRight className="mx-auto h-3.5 w-3.5 text-brand-primary/70" aria-hidden="true" />

        {/* RENERR's project development role */}
        <div className="rounded-2xl bg-brand-dark p-2.5 text-center text-white shadow-md sm:p-3">
          <div className="mb-2 flex items-center justify-center gap-1.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-brand-accent">
              <svg viewBox="0 0 36 36" fill="none" className="h-4 w-4" aria-hidden="true">
                <circle cx="18" cy="18" r="15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
                <circle cx="18" cy="18" r="5" fill="currentColor" />
                <path d="M18 4c0 0 5 7 5 14a5 5 0 1 1-10 0c0-7 5-14 5-14Z" fill="currentColor" />
                <path d="M32 18s-7 5-14 5a5 5 0 1 1 0-10c7 0 14 5 14 5Z" fill="currentColor" opacity=".62" />
              </svg>
            </span>
            <span className="text-[11px] font-extrabold tracking-wide">RENERR</span>
          </div>
          <p className="text-[9px] font-bold leading-tight text-brand-accent sm:text-[10px]">
            Energy project development
          </p>
          <div className="mt-2 space-y-0.5 text-[7px] leading-tight text-white/90 sm:text-[8px]">
            {renerrFunctions.map((item) => (
              <p key={item} className="whitespace-nowrap">
                {item}
              </p>
            ))}
          </div>
        </div>

        <ArrowRight className="mx-auto h-3.5 w-3.5 text-brand-primary/70" aria-hidden="true" />

        {/* Integrated clean-energy infrastructure */}
        <div className="flex min-w-0 flex-col items-center text-center">
          <div className="mb-2 flex h-10 w-10 items-center justify-center gap-0.5 rounded-2xl bg-brand-light text-brand-primary sm:h-11 sm:w-11">
            <Sun className="h-4 w-4" aria-hidden="true" />
            <BatteryCharging className="h-4 w-4" aria-hidden="true" />
          </div>
          <p className="text-[10px] font-bold leading-tight text-brand-dark sm:text-[11px]">
            Clean energy
            <br />
            infrastructure
          </p>
          <p className="mt-2 text-[8px] leading-snug text-brand-muted sm:text-[9px]">
            Solar panels · battery storage
            <br />
            Integrated systems
          </p>
        </div>
      </div>

      <div className="my-4 h-px bg-brand-dark/10" />

      {/* Intended outcome, not an operational project claim */}
      <div className="flex items-center gap-3 rounded-2xl border border-brand-primary/15 bg-brand-light/70 px-3 py-2.5">
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-primary text-brand-accent">
          <Zap className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-bold uppercase tracking-wider text-brand-primary">
            Intended outcome
          </p>
          <p className="mt-0.5 text-xs font-extrabold leading-tight text-brand-dark sm:text-sm">
            Affordable, reliable electricity
          </p>
        </div>
        <ArrowRight className="h-4 w-4 flex-shrink-0 text-brand-primary" aria-hidden="true" />
      </div>

      <p className="mt-3 text-center text-[9px] text-brand-muted">
        Illustrative pathway · planning and development
      </p>
    </div>
  </div>
);
