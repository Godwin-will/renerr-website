import React from 'react';
import {
  Activity,
  BatteryCharging,
  Bell,
  CircleUserRound,
  Grid2X2,
  Home,
  Sun,
  Zap,
} from 'lucide-react';
import { Logo } from './Logo';

const activityBars = [36, 52, 43, 68, 56, 78, 62];

export const HeroAppPreview: React.FC = () => (
  <div className="relative mx-auto w-full max-w-[340px] lg:ml-auto lg:mr-2">
    <div className="absolute inset-x-8 top-12 bottom-8 rounded-full bg-brand-primary/20 blur-3xl" />

    <div
      role="img"
      aria-label="Conceptual RENERR mobile app preview with a clean energy dashboard and project status"
      className="relative mx-auto w-[min(100%,310px)] rounded-[2.7rem] border-[7px] border-[#17392b] bg-[#17392b] p-[5px] shadow-[0_28px_80px_-30px_rgba(18,59,42,0.7)]"
    >
      <div className="overflow-hidden rounded-[2.05rem] bg-brand-cream">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-bold text-brand-dark">
          <span>9:41</span>
          <div className="flex items-center gap-1.5 text-brand-primary" aria-hidden="true">
            <span className="flex h-3 items-end gap-0.5">
              <span className="h-1 w-0.5 rounded-full bg-current" />
              <span className="h-1.5 w-0.5 rounded-full bg-current" />
              <span className="h-2 w-0.5 rounded-full bg-current" />
            </span>
            <span className="h-2 w-3 rounded-sm border border-current p-px">
              <span className="block h-full w-2/3 rounded-[1px] bg-current" />
            </span>
          </div>
        </div>

        {/* RENERR app header */}
        <div className="flex items-center justify-between px-4 pb-3 pt-2">
          <Logo size="sm" showSubtitle={false} className="gap-2" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-dark/10 bg-white text-brand-primary">
            <Bell className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>

        <div className="space-y-3 px-4 pb-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] font-medium text-brand-muted">Concept app preview</p>
              <h2 className="mt-0.5 text-lg font-extrabold tracking-tight text-brand-dark">
                Energy overview
              </h2>
            </div>
            <span className="mb-0.5 rounded-full bg-brand-light px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-primary">
              Sample
            </span>
          </div>

          {/* Clean energy overview card */}
          <div className="relative overflow-hidden rounded-2xl bg-brand-dark p-4 text-white shadow-lg">
            <div className="absolute -right-7 -top-8 h-28 w-28 rounded-full bg-brand-primary/30 blur-2xl" />
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent">
                  <Sun className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold text-brand-accent">CLEAN ENERGY</p>
                  <p className="mt-0.5 text-[11px] text-white/80">Solar + storage</p>
                </div>
              </div>
              <BatteryCharging className="h-5 w-5 text-brand-accent" aria-hidden="true" />
            </div>

            <div className="relative mt-4 flex h-[68px] items-end gap-2 rounded-xl bg-white/5 px-3 pb-2 pt-3">
              {activityBars.map((height, index) => (
                <span
                  key={index}
                  className={`flex-1 rounded-t-sm ${index === 5 ? 'bg-brand-accent' : 'bg-brand-accent/45'}`}
                  style={{ height: `${height}%` }}
                />
              ))}
              <div className="absolute inset-x-3 top-1/2 border-t border-dashed border-white/15" />
            </div>
            <div className="relative mt-2 flex items-center justify-between text-[9px] text-white/60">
              <span>Energy activity</span>
              <span className="flex items-center gap-1 text-brand-accent">
                <Activity className="h-3 w-3" aria-hidden="true" />
                Sample view
              </span>
            </div>
          </div>

          {/* Conceptual project status */}
          <div className="rounded-2xl border border-brand-dark/10 bg-white p-3.5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-light text-brand-primary">
                  <Zap className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-brand-muted">
                    Project status
                  </p>
                  <p className="mt-0.5 text-xs font-bold text-brand-dark">Planning preview</p>
                </div>
              </div>
              <span className="rounded-full bg-brand-light px-2 py-1 text-[9px] font-semibold text-brand-primary">
                Concept
              </span>
            </div>
          </div>
        </div>

        {/* App navigation preview */}
        <div className="grid grid-cols-3 border-t border-brand-dark/10 bg-white px-3 py-2.5 text-[9px] font-semibold text-brand-muted">
          <div className="flex flex-col items-center gap-1 text-brand-primary">
            <Home className="h-4 w-4" aria-hidden="true" />
            <span>Overview</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Grid2X2 className="h-4 w-4" aria-hidden="true" />
            <span>Projects</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <CircleUserRound className="h-4 w-4" aria-hidden="true" />
            <span>Account</span>
          </div>
        </div>
      </div>

      {/* Device speaker */}
      <div className="pointer-events-none absolute left-1/2 top-[9px] h-[14px] w-[76px] -translate-x-1/2 rounded-full bg-[#17392b]" />
    </div>
  </div>
);
