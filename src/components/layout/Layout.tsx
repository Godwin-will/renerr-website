import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../common/ScrollToTop';
import { usePageMeta } from '../../utils/usePageMeta';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'Renerr Energies | Reliable Energy Access', description: 'Renerr Energies is developing practical residential and community-based solar solutions to make reliable and affordable electricity more accessible across Africa.' },
  '/solutions': { title: 'Solutions | Renerr Energies', description: 'Learn about Renerr’s residential and community-based solar energy approaches.' },
  '/energy-projects': { title: 'Energy Projects | Renerr Energies', description: 'Explore assessed energy access projects and express interest in published opportunities.' },
  '/professionals': { title: 'Find a Solar Professional | Renerr Energies', description: 'Find verified solar energy professionals and request services.' },
  '/join-as-professional': { title: 'Join the Solar Professionals Directory | Renerr Energies', description: 'Apply to join Renerr’s solar professionals directory.' },
  '/admin': { title: 'Marketplace Administration | Renerr Energies', description: 'Manage Renerr marketplace listings and enquiries.' },
  '/energy-requirement-calculator': { title: 'Energy Requirement Calculator | Renerr Energies', description: 'Estimate daily household electricity use and preliminary solar, battery and inverter requirements.' },
  '/careers': { title: 'Careers | Renerr Energies', description: 'Learn about future career opportunities with Renerr Energies.' },
  '/contact': { title: 'Contact | Renerr Energies', description: 'Contact Renerr Energies about energy access solutions, projects and partnerships.' },
  '/about': { title: 'About Us | Renerr Energies', description: 'Learn about Renerr Energies and its mission to expand access to reliable electricity.' },
  '/how-it-works': { title: 'How It Works | Renerr Energies', description: 'Learn about Renerr’s approach to practical energy access solutions.' },
  '/partner': { title: 'Partner With Us | Renerr Energies', description: 'Explore partnership opportunities with Renerr Energies.' },
  '/privacy': { title: 'Privacy Policy | Renerr Energies', description: 'Read the Renerr Energies privacy policy.' },
};

export const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const meta = pageMeta[pathname] ?? pageMeta['/'];
  usePageMeta(meta.title, meta.description);
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow focus:outline-none" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
