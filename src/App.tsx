import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { SolutionPage } from './pages/SolutionPage';
import { WhoWeServePage } from './pages/WhoWeServePage';
import { AboutPage } from './pages/AboutPage';
import { PartnerPage } from './pages/PartnerPage';
import { SchoolsPage } from './pages/SchoolsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="solution" element={<SolutionPage />} />
          <Route path="who-we-serve" element={<WhoWeServePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="partner" element={<PartnerPage />} />
          <Route path="schools" element={<SchoolsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
