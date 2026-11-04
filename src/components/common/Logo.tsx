import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[10px] tracking-[0.25em]',
    lg: 'text-xs tracking-[0.3em]',
  };

  return (
    <Link
      to="/"
      aria-label="Renerr Energies Ltd Homepage"
      className={`inline-flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-brand-primary rounded-lg transition-transform duration-200 active:scale-95 ${className}`}
    >
      {/* Original Renewable Energy Mark */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-xl p-1.5 transition-all duration-300 ${
          isLight
            ? 'bg-white/10 group-hover:bg-white/20 text-brand-accent border border-white/15'
            : 'bg-brand-dark group-hover:bg-brand-primary text-brand-accent shadow-sm'
        }`}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform duration-500 group-hover:rotate-45"
        >
          {/* Subtle Outer Energy Orbit Ring */}
          <circle
            cx="18"
            cy="18"
            r="15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="2 3"
            className="opacity-75"
          />
          {/* Central Solar Core */}
          <circle cx="18" cy="18" r="5" fill="currentColor" />
          {/* Energy Leaf / Ray Geometry */}
          <path
            d="M18 4C18 4 23 11 23 18C23 20.76 20.76 23 18 23C15.24 23 13 20.76 13 18C13 11 18 4 18 4Z"
            fill={isLight ? '#B8E986' : '#218653'}
            className="mix-blend-screen opacity-90"
          />
          <path
            d="M32 18C32 18 25 23 18 23C15.24 23 13 20.76 13 18C13 15.24 15.24 13 18 13C25 13 32 18 32 18Z"
            fill="currentColor"
            className="opacity-60"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`font-extrabold uppercase leading-none font-sans tracking-tight transition-colors ${
            titleSizes[size]
          } ${isLight ? 'text-white' : 'text-brand-dark group-hover:text-brand-primary'}`}
        >
          RENERR
        </span>
        {showSubtitle && (
          <span
            className={`font-semibold uppercase font-sans mt-0.5 transition-colors ${
              subtitleSizes[size]
            } ${isLight ? 'text-brand-accent' : 'text-brand-primary'}`}
          >
            ENERGIES
          </span>
        )}
      </div>
    </Link>
  );
};
