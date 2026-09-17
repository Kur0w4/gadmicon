/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Currency, Language, LeadQuote, PortfolioProject, PropertyType } from './types';
import { translations } from './i18n/translations';
import { 
  getPortfolioProjects, 
  getLeadQuotes, 
  getN8nWebhookEvents, 
  subscribeToDatabase 
} from './services/storageService';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { DatabaseAndWebhookConsole } from './components/DatabaseAndWebhookConsole';
import { Footer } from './components/Footer';

export default function App() {
  // 1. Language auto-detection fallback (Section 4: i18n guidelines)
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const browserLang = navigator.language?.toLowerCase() || 'es';
      if (browserLang.startsWith('fr')) return 'fr';
      if (browserLang.startsWith('en')) return 'en';
      return 'es';
    } catch {
      return 'es';
    }
  });

  const [currency, setCurrency] = useState<Currency>('USD');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Database reactive states
  const [projects, setProjects] = useState<PortfolioProject[]>(getPortfolioProjects());
  const [leads, setLeads] = useState<LeadQuote[]>(getLeadQuotes());
  const [webhooks, setWebhooks] = useState(getN8nWebhookEvents());

  // Prefill state for the quote calculator
  const [quotePrefill, setQuotePrefill] = useState<{
    propertyType: PropertyType;
    units: number;
    services?: string[];
  }>({
    propertyType: 'Apartamento',
    units: 4,
    services: ['Gestión Integral', 'Mantenimiento Preventivo'],
  });

  const t = translations[currentLang] || translations.es;

  // Subscribe to database changes
  useEffect(() => {
    const unsubscribe = subscribeToDatabase(() => {
      setProjects(getPortfolioProjects());
      setLeads(getLeadQuotes());
      setWebhooks(getN8nWebhookEvents());
    });
    return unsubscribe;
  }, []);

  const [showConsoleModal, setShowConsoleModal] = useState<boolean>(false);

  // Navigation handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'consola') {
      setShowConsoleModal(true);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStartQuoteFromHero = (prefill?: { propertyType: PropertyType; units: number }) => {
    if (prefill) {
      setQuotePrefill((prev) => ({
        ...prev,
        propertyType: prefill.propertyType,
        units: prefill.units,
      }));
    }
    handleNavigate('cotizar');
  };

  const handleSelectProjectForQuote = (project: PortfolioProject) => {
    let mappedType: PropertyType = 'Apartamento';
    if (project.category === 'villa') mappedType = 'Villa';
    else if (project.category === 'penthouse') mappedType = 'Penthouse';
    else if (project.category === 'torre') mappedType = 'Torre Residencial';

    setQuotePrefill({
      propertyType: mappedType,
      units: project.units_count || 1,
      services: ['Gestión Integral', 'Mantenimiento Preventivo', 'Limpieza y Conserjería'],
    });
    handleNavigate('cotizar');
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setQuotePrefill((prev) => ({
      ...prev,
      services: Array.from(new Set([...(prev.services || []), serviceTitle])),
    }));
    handleNavigate('cotizar');
  };

  const pendingLeads = leads.filter((l) => l.status === 'pending').length;

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      
      {/* Top Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        currency={currency}
        onCurrencyChange={setCurrency}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        t={t}
        pendingLeadsCount={pendingLeads}
      />

      <main className="flex-grow">
        {/* / (Hero Section Split Layout with value proposition & quote calculator) */}
        <div id="home">
          <HeroSection
            t={t}
            currency={currency}
            onNavigateToQuote={handleStartQuoteFromHero}
            onNavigateToProjects={() => handleNavigate('proyectos')}
            onNavigateToContact={() => handleNavigate('contacto')}
          />
        </div>

        {/* Sobre Nosotros: Alero Real Estate + Gadmicon */}
        <AboutSection t={t} onNavigateToContact={() => handleNavigate('contacto')} />

        {/* /servicios (CSS Grid of Minimalist Service Cards) */}
        <ServicesSection
          t={t}
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* /proyectos (Extraction from portfolio_projects + Framer Motion Lightbox) */}
        <ProjectsSection
          projects={projects}
          currentLang={currentLang}
          t={t}
          onSelectProjectForQuote={handleSelectProjectForQuote}
        />

        {/* /cotizar (Interactive Multi-Step Form with validation & Supabase insert) */}
        <QuoteCalculator
          t={t}
          initialCurrency={currency}
          initialPropertyType={quotePrefill.propertyType}
          initialUnits={quotePrefill.units}
          initialServices={quotePrefill.services}
          onQuoteSubmitted={() => {
            setLeads(getLeadQuotes());
            setWebhooks(getN8nWebhookEvents());
          }}
          onGoToConsole={() => setShowConsoleModal(true)}
        />

        {/* Preguntas Frecuentes */}
        <FaqSection t={t} />

        {/* Contacto Directo */}
        <ContactSection t={t} />
      </main>

      {/* Footer */}
      <Footer t={t} onNavigate={handleNavigate} />

      {/* Architecture & Verification Console Modal (Non-intrusive, for testing & audit) */}
      {showConsoleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-6xl bg-[#0A192F] border border-slate-700 rounded-2xl shadow-2xl p-6 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Panel de Verificación Técnica (Supabase & n8n)
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Permite auditar el esquema de base de datos relacional y las pruebas de webhook.
                </p>
              </div>
              <button
                onClick={() => setShowConsoleModal(false)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold cursor-pointer"
              >
                Cerrar Panel
              </button>
            </div>

            <DatabaseAndWebhookConsole
              t={t}
              leads={leads}
              projects={projects}
              webhooks={webhooks}
              onRefresh={() => {
                setProjects(getPortfolioProjects());
                setLeads(getLeadQuotes());
                setWebhooks(getN8nWebhookEvents());
              }}
            />
          </div>
        </div>
      )}

    </div>
  );
}
