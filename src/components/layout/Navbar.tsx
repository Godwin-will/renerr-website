import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Mail, Zap } from 'lucide-react';
import { Logo } from '../common/Logo';
import { siteConfig } from '../../config/siteConfig';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Track scroll position for header shadow / backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Energy Solutions', path: '/energy-solutions' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Impact', path: '/impact' },
    { name: 'Partner With Us', path: '/partner' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Banner Notice: Positioning & Solutions */}
      <div className="bg-brand-dark text-brand-cream text-xs py-2 px-4 border-b border-brand-primary/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-primary text-brand-accent">
              <Zap className="w-3 h-3" />
              African Energy Solutions
            </span>
            <span className="text-gray-300">
              Commercial projects & community-based shared energy across Africa.
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link
              to="/energy-solutions"
              className="text-brand-accent hover:underline font-medium inline-flex items-center gap-1"
            >
              Explore Solutions <ArrowRight className="w-3 h-3" />
            </Link>
            {siteConfig.contact.email && (
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hidden md:inline-flex items-center gap-1 text-gray-300 hover:text-white"
              >
                <Mail className="w-3 h-3 text-brand-accent" /> {siteConfig.contact.email}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm border-b border-brand-dark/10 py-3.5'
            : 'bg-brand-cream py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant="dark" size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                      isActive
                        ? 'text-brand-primary font-semibold bg-brand-light/70'
                        : 'text-brand-charcoal hover:text-brand-primary hover:bg-brand-light/40'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden xl:flex items-center gap-3">
              <Link
                to="/partner"
                className="px-4 py-2 text-sm font-semibold text-brand-dark bg-brand-accent hover:bg-[#a6dc70] rounded-lg shadow-sm transition-all duration-200 hover:shadow-md flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="xl:hidden flex items-center gap-2">
              <Link
                to="/energy-solutions"
                className="px-3 py-1.5 text-xs font-semibold text-brand-dark bg-brand-accent rounded-md sm:hidden"
              >
                Solutions
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-brand-charcoal hover:text-brand-primary hover:bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {isOpen && (
          <div className="xl:hidden fixed inset-x-0 top-full bg-white border-b border-brand-dark/10 shadow-xl animate-fadeIn max-h-[calc(100vh-110px)] overflow-y-auto">
            <div className="px-4 pt-3 pb-6 space-y-2 max-w-md mx-auto">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-brand-primary text-white font-semibold'
                          : 'text-brand-charcoal hover:bg-brand-light hover:text-brand-primary'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <div className="pt-4 border-t border-brand-light space-y-2">
                <Link
                  to="/energy-solutions"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-brand-primary border border-brand-primary/40 bg-brand-light/30 hover:bg-brand-light"
                >
                  <span>Explore Energy Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/partner"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-brand-dark bg-brand-accent hover:bg-[#a6dc70] shadow-sm"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-brand-charcoal hover:bg-brand-cream"
                >
                  <span>Contact Us</span>
                </Link>
              </div>

              {/* Mobile Quick Contact */}
              <div className="pt-3 text-xs text-brand-muted text-center space-y-1">
                <p>Commercial energy projects & community-based shared energy.</p>
                {siteConfig.contact.email && (
                  <p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-brand-primary hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
