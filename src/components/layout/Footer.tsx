import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  ArrowUp,
  ShieldCheck,
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
        'Hello Renerr Energies, I would like to inquire about your solar energy services.'
      )}`
    : null;

  return (
    <footer className="bg-brand-dark text-white border-t border-brand-primary/20">
      {/* Top CTA Band */}
      <div className="border-b border-white/10 bg-brand-dark/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-brand-accent text-xs uppercase tracking-widest font-semibold mb-1">
                Collaborative Energy Access
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Let's make reliable electricity accessible to more people.
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl">
                Partner with us to deploy sustainable, zero-upfront-cost solar energy projects for schools and communities across Nigeria.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <Link
                to="/partner"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-semibold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] transition-colors text-center shadow-sm"
              >
                Partner With Us
              </Link>
              <Link
                to="/schools"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors text-center"
              >
                Register School
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm mt-3">
              Renerr Energies Ltd is a Nigerian renewable energy company developing accessible solar
              solutions for schools and underserved communities using an energy-as-a-service model.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-accent bg-white/5 border border-white/10 rounded-lg p-3 max-w-sm">
              <ShieldCheck className="w-5 h-5 flex-shrink-0 text-brand-accent" />
              <span>
                Energy-as-a-service model designed to remove upfront cost barriers for schools.
              </span>
            </div>
          </div>

          {/* Column 3: Solutions & Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-brand-accent uppercase tracking-widest">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/solution" className="hover:text-white transition-colors">
                  Energy-as-a-Service
                </Link>
              </li>
              <li>
                <Link to="/schools" className="hover:text-white transition-colors">
                  School Electrification
                </Link>
              </li>
              <li>
                <Link to="/solution#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/solution#faq" className="hover:text-white transition-colors">
                  Model & FAQs
                </Link>
              </li>
              <li>
                <Link to="/who-we-serve" className="hover:text-white transition-colors">
                  Who We Serve
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Partnerships */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-brand-accent uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us & Story
                </Link>
              </li>
              <li>
                <Link to="/partner" className="hover:text-white transition-colors">
                  Partner Pathways
                </Link>
              </li>
              <li>
                <Link to="/about#mission" className="hover:text-white transition-colors">
                  Mission & Values
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-brand-accent uppercase tracking-widest">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.addressDisplay}</span>
              </li>

              {siteConfig.contact.email && (
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-white transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              )}

              {siteConfig.contact.phone && (
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
              )}

              {whatsappUrl && (
                <li className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white inline-flex items-center gap-1 transition-colors text-brand-accent"
                  >
                    Chat on WhatsApp <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              )}

              <li className="text-xs text-gray-400 pt-1">
                {siteConfig.contact.officeHours}
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-gray-400 leading-relaxed">
          <p className="max-w-4xl">
            <span className="text-gray-300 font-semibold">Important Notice: </span>
            {siteConfig.disclaimers.schoolsZeroUpfront} {siteConfig.disclaimers.prospectivePartnerships}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {currentYear} {siteConfig.companyName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-brand-accent transition-colors"
              aria-label="Scroll back to top"
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
