import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ImpactPage } from './pages/ImpactPage';
import { PartnerPage } from './pages/PartnerPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main 6 Navigation Pages */}
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="partner" element={<PartnerPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Privacy & Legal */}
          <Route path="privacy" element={<PrivacyPage />} />

          {/* Backward-Compatible Route Aliases */}
          <Route path="how-we-work" element={<Navigate to="/how-it-works" replace />} />
          <Route path="energy-solutions" element={<Navigate to="/how-it-works" replace />} />
          <Route path="solutions" element={<Navigate to="/how-it-works" replace />} />
          <Route path="solution" element={<Navigate to="/how-it-works" replace />} />
          <Route path="approach" element={<Navigate to="/how-it-works" replace />} />
          <Route path="who-we-serve" element={<Navigate to="/impact" replace />} />
          <Route path="projects" element={<Navigate to="/contact" replace />} />
          <Route path="schools" element={<Navigate to="/contact" replace />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
