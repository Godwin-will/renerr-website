import React from 'react';
import { Users, Zap, Coins, Sparkles } from 'lucide-react';

export const CommunityCoFinancingIllustration: React.FC = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-brand-primary/25 bg-brand-dark p-5 sm:p-7 shadow-2xl text-white">
      {/* Background Glow Accents */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brand-primary/25 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-brand-primary/40 border border-brand-accent/30 text-brand-accent flex items-center justify-center shadow-xs">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight">
              Community Co-Financing Model
            </h3>
            <p className="text-[11px] text-brand-accent">
              Collective Investment &bull; Shared Solar Access
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-accent/15 text-brand-accent border border-brand-accent/30">
          <Sparkles className="w-2.5 h-2.5" />
          How It Works
        </span>
      </div>

      {/* Main Vector SVG Diagram */}
      <div className="relative z-10 w-full">
        <svg
          viewBox="0 0 520 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          aria-label="Illustration showing households pooling financial contributions to develop and access a shared solar energy system"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B523A" />
              <stop offset="100%" stopColor="#0E2F21" />
            </linearGradient>
            <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#216447" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#143D2C" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B8E986" />
              <stop offset="100%" stopColor="#4ADE80" />
            </linearGradient>

            {/* Drop Shadows */}
            <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.4" />
            </filter>
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ============================================================ */}
          {/* FLOW CONDUITS (Drawn behind nodes)                           */}
          {/* ============================================================ */}

          {/* Capital Contribution Inflow Lines (Households -> Center Pool) */}
          <path
            d="M 74 92 C 74 135, 200 155, 230 185"
            stroke="#B8E986"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M 198 92 C 198 135, 235 155, 248 185"
            stroke="#B8E986"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M 322 92 C 322 135, 285 155, 272 185"
            stroke="#B8E986"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M 446 92 C 446 135, 320 155, 290 185"
            stroke="#B8E986"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Electricity Return Lines (Hub -> Households) */}
          <path
            d="M 220 255 C 130 255, 50 175, 58 98"
            stroke="url(#energyGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            d="M 238 255 C 180 235, 178 160, 184 98"
            stroke="url(#energyGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            d="M 282 255 C 340 235, 342 160, 336 98"
            stroke="url(#energyGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            d="M 300 255 C 390 255, 470 175, 462 98"
            stroke="url(#energyGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.75"
          />

          {/* Flow Indicator Badges */}
          {/* Pooled Fund Tag Left */}
          <g transform="translate(118, 142)">
            <rect width="68" height="18" rx="9" fill="#123B2A" stroke="#B8E986" strokeWidth="1" />
            <text x="34" y="12" fill="#B8E986" fontSize="8.5" fontWeight="bold" textAnchor="middle">
              ₦ Pool Fund
            </text>
          </g>

          {/* Pooled Fund Tag Right */}
          <g transform="translate(334, 142)">
            <rect width="68" height="18" rx="9" fill="#123B2A" stroke="#B8E986" strokeWidth="1" />
            <text x="34" y="12" fill="#B8E986" fontSize="8.5" fontWeight="bold" textAnchor="middle">
              ₦ Pool Fund
            </text>
          </g>

          {/* Clean Power Tag Left */}
          <g transform="translate(30, 182)">
            <rect width="78" height="18" rx="9" fill="#123B2A" stroke="#4ADE80" strokeWidth="1" />
            <text x="39" y="12" fill="#4ADE80" fontSize="8" fontWeight="bold" textAnchor="middle">
              ⚡ Clean Power
            </text>
          </g>

          {/* Clean Power Tag Right */}
          <g transform="translate(412, 182)">
            <rect width="78" height="18" rx="9" fill="#123B2A" stroke="#4ADE80" strokeWidth="1" />
            <text x="39" y="12" fill="#4ADE80" fontSize="8" fontWeight="bold" textAnchor="middle">
              ⚡ Clean Power
            </text>
          </g>

          {/* ============================================================ */}
          {/* 4 COMMUNITY PARTICIPANTS / HOUSEHOLDS                        */}
          {/* ============================================================ */}

          {/* HOUSEHOLD 1 */}
          <g transform="translate(24, 15)" filter="url(#shadowFilter)">
            <rect width="100" height="76" rx="14" fill="url(#nodeGrad)" stroke="#B8E986" strokeWidth="1.2" />
            {/* House Icon */}
            <path d="M 50 19 L 29 35 L 36 35 L 36 52 L 64 52 L 64 35 L 71 35 Z" fill="#B8E986" opacity="0.95" />
            <rect x="46" y="39" width="8" height="13" rx="1" fill="#123B2A" />
            <text x="50" y="63" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" textAnchor="middle">
              Household 1
            </text>
            <text x="50" y="72" fill="#B8E986" fontSize="7.5" textAnchor="middle">
              Co-Investor
            </text>
          </g>

          {/* HOUSEHOLD 2 */}
          <g transform="translate(148, 15)" filter="url(#shadowFilter)">
            <rect width="100" height="76" rx="14" fill="url(#nodeGrad)" stroke="#B8E986" strokeWidth="1.2" />
            {/* House Icon */}
            <path d="M 50 19 L 29 35 L 36 35 L 36 52 L 64 52 L 64 35 L 71 35 Z" fill="#B8E986" opacity="0.95" />
            <rect x="46" y="39" width="8" height="13" rx="1" fill="#123B2A" />
            <text x="50" y="63" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" textAnchor="middle">
              Household 2
            </text>
            <text x="50" y="72" fill="#B8E986" fontSize="7.5" textAnchor="middle">
              Co-Investor
            </text>
          </g>

          {/* LOCAL BUSINESS / HOUSEHOLD 3 */}
          <g transform="translate(272, 15)" filter="url(#shadowFilter)">
            <rect width="100" height="76" rx="14" fill="url(#nodeGrad)" stroke="#B8E986" strokeWidth="1.2" />
            {/* Small Business / Storefront Icon */}
            <path d="M 33 26 L 67 26 L 71 37 L 29 37 Z" fill="#B8E986" opacity="0.95" />
            <rect x="31" y="37" width="38" height="15" fill="#B8E986" opacity="0.8" />
            <rect x="37" y="41" width="9" height="11" fill="#123B2A" />
            <rect x="51" y="41" width="13" height="7" fill="#123B2A" />
            <text x="50" y="63" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" textAnchor="middle">
              Local Enterprise
            </text>
            <text x="50" y="72" fill="#B8E986" fontSize="7.5" textAnchor="middle">
              Co-Investor
            </text>
          </g>

          {/* HOUSEHOLD 4 */}
          <g transform="translate(396, 15)" filter="url(#shadowFilter)">
            <rect width="100" height="76" rx="14" fill="url(#nodeGrad)" stroke="#B8E986" strokeWidth="1.2" />
            {/* House Icon */}
            <path d="M 50 19 L 29 35 L 36 35 L 36 52 L 64 52 L 64 35 L 71 35 Z" fill="#B8E986" opacity="0.95" />
            <rect x="46" y="39" width="8" height="13" rx="1" fill="#123B2A" />
            <text x="50" y="63" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" textAnchor="middle">
              Household 3
            </text>
            <text x="50" y="72" fill="#B8E986" fontSize="7.5" textAnchor="middle">
              Co-Investor
            </text>
          </g>

          {/* ============================================================ */}
          {/* CENTRAL POOL & SHARED SOLAR SYSTEM HUB                       */}
          {/* ============================================================ */}
          <g transform="translate(140, 185)" filter="url(#shadowFilter)">
            {/* Outer Hub Border with glow */}
            <rect
              width="240"
              height="145"
              rx="20"
              fill="url(#hubGrad)"
              stroke="#B8E986"
              strokeWidth="1.5"
            />

            {/* Pooled Capital Header Pill */}
            <g transform="translate(25, -12)">
              <rect
                width="190"
                height="24"
                rx="12"
                fill="#123B2A"
                stroke="#B8E986"
                strokeWidth="1.2"
              />
              <circle cx="16" cy="12" r="6" fill="#B8E986" />
              <text x="16" y="15" fill="#123B2A" fontSize="9" fontWeight="black" textAnchor="middle">
                ₦
              </text>
              <text x="103" y="16" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">
                Pooled Co-Financing Fund
              </text>
            </g>

            {/* Central Solar PV Array Graphic */}
            <g transform="translate(55, 22)">
              {/* Sun rays */}
              <circle cx="65" cy="12" r="9" fill="#B8E986" opacity="0.85" filter="url(#glowFilter)" />
              <path d="M 65 -1 L 65 3 M 65 21 L 65 25 M 52 12 L 56 12 M 74 12 L 78 12" stroke="#B8E986" strokeWidth="2" strokeLinecap="round" />

              {/* Angled Solar Array (3D Perspective PV Panel) */}
              <g transform="translate(10, 24)">
                {/* Panel Frame */}
                <polygon
                  points="15,0 95,0 110,32 0,32"
                  fill="#0B2319"
                  stroke="#B8E986"
                  strokeWidth="1.2"
                />
                {/* Panel Grid Lines (PV cells) */}
                <line x1="39" y1="0" x2="27" y2="32" stroke="#218653" strokeWidth="1" />
                <line x1="63" y1="0" x2="55" y2="32" stroke="#218653" strokeWidth="1" />
                <line x1="87" y1="0" x2="83" y2="32" stroke="#218653" strokeWidth="1" />
                <line x1="8" y1="16" x2="102" y2="16" stroke="#218653" strokeWidth="1" />
              </g>

              {/* Battery Storage & Smart Inverter Micro-icons */}
              <g transform="translate(42, 62)">
                <rect width="18" height="12" rx="2" fill="#218653" stroke="#B8E986" strokeWidth="0.8" />
                <rect x="5" y="3" width="8" height="6" fill="#B8E986" />
                <rect x="18" y="4" width="2" height="4" rx="0.5" fill="#B8E986" />
              </g>
              <g transform="translate(68, 62)">
                <rect width="20" height="12" rx="2" fill="#218653" stroke="#B8E986" strokeWidth="0.8" />
                <path d="M 76 64 L 74 68 L 78 68 L 76 72" stroke="#B8E986" strokeWidth="1" strokeLinecap="round" />
              </g>
            </g>

            {/* Hub Title & Details */}
            <text x="120" y="105" fill="#FFFFFF" fontSize="12" fontWeight="extrabold" textAnchor="middle" letterSpacing="0.5">
              SHARED SOLAR & STORAGE
            </text>
            <text x="120" y="119" fill="#B8E986" fontSize="9" fontWeight="medium" textAnchor="middle">
              Centralized Clean Micro-Grid Array
            </text>

            {/* Operational Platform Tag */}
            <g transform="translate(40, 126)">
              <rect width="160" height="14" rx="7" fill="#0C251B" stroke="#218653" strokeWidth="0.8" />
              <text x="80" y="10" fill="#E8F5E9" fontSize="7.5" fontWeight="semibold" textAnchor="middle">
                Coordinated via RENERR Platform
              </text>
            </g>
          </g>

          {/* ============================================================ */}
          {/* BOTTOM SUMMARY BADGES                                        */}
          {/* ============================================================ */}
          <g transform="translate(20, 345)">
            {/* Pill 1 */}
            <g transform="translate(0, 0)">
              <rect width="150" height="26" rx="8" fill="#143D2C" stroke="#218653" strokeWidth="0.8" />
              <circle cx="16" cy="13" r="5" fill="#B8E986" />
              <text x="80" y="17" fill="#FFFFFF" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                Fractional Upfront Cost
              </text>
            </g>

            {/* Pill 2 */}
            <g transform="translate(165, 0)">
              <rect width="150" height="26" rx="8" fill="#143D2C" stroke="#218653" strokeWidth="0.8" />
              <circle cx="16" cy="13" r="5" fill="#B8E986" />
              <text x="80" y="17" fill="#FFFFFF" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                Shared Infrastructure
              </text>
            </g>

            {/* Pill 3 */}
            <g transform="translate(330, 0)">
              <rect width="150" height="26" rx="8" fill="#143D2C" stroke="#218653" strokeWidth="0.8" />
              <circle cx="16" cy="13" r="5" fill="#4ADE80" />
              <text x="80" y="17" fill="#FFFFFF" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                24/7 Reliable Power
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* Micro Caption */}
      <div className="relative z-10 mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-gray-300 gap-2">
        <span className="flex items-center gap-1.5 text-brand-accent font-medium">
          <Coins className="w-3.5 h-3.5" />
          Pooled contributions replace solo capital burden
        </span>
        <span className="flex items-center gap-1.5 text-gray-400">
          <Zap className="w-3.5 h-3.5 text-emerald-400" />
          Reliable power distributed to all participants
        </span>
      </div>
    </div>
  );
};
