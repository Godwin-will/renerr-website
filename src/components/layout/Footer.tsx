import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  ArrowUp,
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
                <span>Energy Access</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Making Reliable Energy More Accessible.
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl leading-relaxed">
                Renerr Energies is developing practical residential and community-based solar
                solutions to make reliable and affordable electricity more accessible.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <Link
                to="/solutions"
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
              Renerr Energies is working to expand access to reliable and affordable electricity
              through practical energy solutions designed around local needs.
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
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/energy-requirement-calculator" className="hover:text-white transition-colors">Energy Requirement Calculator</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
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
          <p>Renerr is developing energy-access solutions. Availability and project details will be shared as they are confirmed.</p>
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
