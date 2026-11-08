import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  ArrowUp,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { siteConfig } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasWhatsapp = Boolean(siteConfig.contact.whatsappNumber);
  const whatsappUrl = hasWhatsapp
    ? `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
        'Hello Renerr Energies, I would like to inquire about your energy solutions.'
      )}`
    : null;

  return (
    <footer className="bg-brand-dark text-white border-t border-brand-primary/20">
      {/* Top CTA Band */}
      <div className="border-b border-white/10 bg-brand-dark/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-primary/40 text-brand-accent mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Clean Energy-Tech Startup</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Making Reliable Energy More Accessible.
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl leading-relaxed">
                Renerr combines clean energy solutions, innovative co-financing and digital technology
                to help individuals, communities and businesses access reliable electricity.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <Link
                to="/how-it-works"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] transition-colors text-center shadow-sm"
              >
                Explore RENERR
              </Link>
              <Link
                to="/partner"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors text-center"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Information */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Renerr is a clean energy-tech startup committed to making affordable and reliable
              electricity more accessible across Africa through innovative co-financing and digital
              technology.
            </p>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 max-w-sm">
              <span className="font-semibold text-brand-accent">Platform in development: </span>
              RENERR is being designed to connect people to energy opportunities and simplify
              participation in shared energy services.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-brand-accent uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-white transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/partner" className="hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-brand-accent uppercase tracking-widest">
              Connect With Us
            </h4>
            <div className="space-y-2.5 text-sm text-gray-300">
              {siteConfig.contact.email && (
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-white transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              )}
              {siteConfig.contact.phone && (
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              )}
              {whatsappUrl && (
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3 h-3 text-gray-400" />
                  </a>
                </div>
              )}
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-400">
                  {siteConfig.contact.addressDisplay}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimers & Legal Notice Band */}
      <div className="border-t border-white/10 bg-brand-dark/80 text-[11px] text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <p>
            <strong className="text-gray-300">Platform Notice: </strong>
            RENERR is currently under development. Availability and features will be announced as we
            progress. The website does not provide direct application downloads.
          </p>
          <p>
            <strong className="text-gray-300">Co-financing & Terms: </strong>
            Co-financing and payment arrangements are subject to project requirements, technical
            feasibility, and mutually agreed terms. Terms vary by project and do not represent a
            guaranteed offer. Community eligibility and geographical coverage depend on technical and
            economic feasibility.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/30 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>&copy; {currentYear} Renerr Energies Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors ml-2"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
