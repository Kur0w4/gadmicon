/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Currency, Language, PortfolioProject } from './types';
import { translations } from './i18n/translations';
import { getPortfolioProjects, subscribeToDatabase } from './services/storageService';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal, CookieBanner, LegalModalType } from './components/LegalModal';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);
  const [currentLang, setCurrentLang] = useState<Language>('es');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [projects, setProjects] = useState<PortfolioProject[]>(getPortfolioProjects());

  const t = translations[currentLang] || translations.es;

  useEffect(() => {
    const unsubscribe = subscribeToDatabase(() => {
      setProjects(getPortfolioProjects());
    });
    return unsubscribe;
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">

      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        currency={currency}
        onCurrencyChange={setCurrency}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        t={t}
      />

      <main className="flex-grow">
        <div id="home">
          <HeroSection
            t={t}
            onNavigateToProjects={() => handleNavigate('proyectos')}
            onNavigateToContact={() => handleNavigate('contacto')}
          />
        </div>

        <AboutSection t={t} onNavigateToContact={() => handleNavigate('contacto')} />

        <ServicesSection t={t} />

        <ProjectsSection
          projects={projects}
          currentLang={currentLang}
          t={t}
        />

        <ContactSection t={t} />
      </main>

      <Footer
        t={t}
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <CookieBanner
        onOpenPolicy={() => setLegalModalType('cookies')}
      />
    </div>
  );
}
