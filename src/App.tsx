import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { EnergySolutionsPage } from './pages/EnergySolutionsPage';
import { HowWeWorkPage } from './pages/HowWeWorkPage';
import { AboutPage } from './pages/AboutPage';
import { ImpactPage } from './pages/ImpactPage';
import { PartnerPage } from './pages/PartnerPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectEnquiryPage } from './pages/ProjectEnquiryPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="energy-solutions" element={<EnergySolutionsPage />} />
          <Route path="solutions" element={<EnergySolutionsPage />} />
          <Route path="solution" element={<EnergySolutionsPage />} />
          <Route path="how-we-work" element={<HowWeWorkPage />} />
          <Route path="approach" element={<HowWeWorkPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="who-we-serve" element={<ImpactPage />} />
          <Route path="partner" element={<PartnerPage />} />
          <Route path="projects" element={<ProjectEnquiryPage />} />
          <Route path="schools" element={<ProjectEnquiryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
