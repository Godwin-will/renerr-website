import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { CareersPage } from './pages/CareersPage';
import { EnergyCalculatorPage } from './pages/EnergyCalculatorPage';
import { PartnerPage } from './pages/PartnerPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main navigation pages */}
          <Route index element={<HomePage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="energy-requirement-calculator" element={<EnergyCalculatorPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="impact" element={<Navigate to="/projects" replace />} />
          <Route path="partner" element={<PartnerPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Privacy & Legal */}
          <Route path="privacy" element={<PrivacyPage />} />

          {/* Backward-Compatible Route Aliases */}
          <Route path="how-we-work" element={<Navigate to="/how-it-works" replace />} />
          <Route path="energy-solutions" element={<Navigate to="/solutions" replace />} />
          <Route path="solution" element={<Navigate to="/solutions" replace />} />
          <Route path="approach" element={<Navigate to="/how-it-works" replace />} />
          <Route path="who-we-serve" element={<Navigate to="/projects" replace />} />
          <Route path="schools" element={<Navigate to="/contact" replace />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
