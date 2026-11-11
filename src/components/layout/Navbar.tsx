import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '../common/Logo';

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
    { name: 'Solutions', path: '/solutions' },
    { name: 'Projects', path: '/projects' },
    { name: 'Energy Requirement Calculator', path: '/energy-requirement-calculator' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm border-b border-brand-dark/10 py-3'
            : 'bg-brand-cream py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant="dark" size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                      isActive
                        ? 'text-brand-primary font-bold bg-brand-light/80'
                        : 'text-brand-charcoal hover:text-brand-primary hover:bg-brand-light/50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Actions: Prominent Green "Explore RENERR" Button */}
            <div className="hidden xl:flex items-center gap-3">
              <Link
              to="/solutions"
                className="px-5 py-2.5 text-sm font-bold text-brand-dark bg-brand-accent hover:bg-[#a6dc70] rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] flex items-center gap-2 whitespace-nowrap"
              >
                <span>Explore RENERR</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="xl:hidden flex items-center gap-2">
              <Link
                to="/solutions"
                className="px-3.5 py-1.5 text-xs font-bold text-brand-dark bg-brand-accent rounded-lg shadow-sm"
              >
                Explore RENERR
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

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="xl:hidden absolute inset-x-0 top-full bg-white border-b border-brand-dark/10 shadow-xl animate-fadeIn max-h-[calc(100vh-110px)] overflow-y-auto">
            <div className="px-4 pt-4 pb-6 space-y-2 max-w-md mx-auto">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
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

              {/* Mobile Action Button */}
              <div className="pt-4 border-t border-brand-dark/10">
                <Link
                  to="/solutions"
                  className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold bg-brand-accent text-brand-dark hover:bg-[#a6dc70] flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Explore RENERR</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
