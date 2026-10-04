import React from 'react';
import { Building2, Globe, ChevronRight, Menu, X } from 'lucide-react';
import { Currency, Language } from '../types';
import { Translations } from '../i18n/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currency: Currency;
  onCurrencyChange: (curr: Currency) => void;
  activeSection: string;
  onNavigate: (section: string) => void;
  t: Translations;
  pendingLeadsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  currency,
  onCurrencyChange,
  activeSection,
  onNavigate,
  t,
  pendingLeadsCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'servicios', label: t.nav.services },
    { id: 'proyectos', label: t.nav.projects },
    { id: 'cotizar', label: t.nav.quote },
    { id: 'contacto', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Brand */}
          <button
            id="brand-logo-btn"
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 p-[1px] shadow-sm">
              <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <Building2 className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-wider text-slate-900 font-sans">
                  GADMICON
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${isActive
                    ? 'text-blue-700 bg-blue-50/80 shadow-xs border border-blue-200/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Controls: Currency + Language + CTA */}

          {/* Controls: Currency + Language + CTA */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Currency Selector */}
            <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 text-xs font-semibold shadow-2xs">
              <button
                id="curr-usd-btn"
                onClick={() => onCurrencyChange('USD')}
                className={`px-2.5 py-1 rounded transition-colors ${currency === 'USD'
                  ? 'bg-blue-50 text-blue-700 shadow-xs border border-blue-200'
                  : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                USD $
              </button>
              <button
                id="curr-dop-btn"
                onClick={() => onCurrencyChange('DOP')}
                className={`px-2.5 py-1 rounded transition-colors ${currency === 'DOP'
                  ? 'bg-blue-50 text-blue-700 shadow-xs border border-blue-200'
                  : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                DOP RD$
              </button>
            </div>

            {/* Language Selector */}
            <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 text-xs font-medium text-slate-600 shadow-2xs">
              <Globe className="w-3.5 h-3.5 ml-2 mr-1 text-slate-400" />
              {(['es', 'en', 'fr'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  id={`lang-${lang}-btn`}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2 py-1 uppercase rounded text-xs transition-colors ${currentLang === lang
                    ? 'bg-blue-50 text-blue-700 font-semibold shadow-xs border border-blue-200'
                    : 'text-slate-500 hover:text-slate-900'
                    }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Direct CTA */}
            <button
              id="navbar-cta-quote-btn"
              onClick={() => onNavigate('cotizar')}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide transition-all shadow-sm hover:shadow flex items-center gap-1.5 cursor-pointer"
            >
              <span>{t.nav.ctaQuote}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 bg-white border border-slate-200 shadow-2xs"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-md text-sm font-medium ${activeSection === item.id ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Controls */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-1 bg-white rounded p-1 border border-slate-200 shadow-2xs">
              {(['es', 'en', 'fr'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2.5 py-1 text-xs uppercase rounded ${currentLang === lang ? 'bg-blue-50 text-blue-700 font-bold shadow-xs border border-blue-200' : 'text-slate-500'
                    }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 bg-white rounded p-1 border border-slate-200 text-xs shadow-2xs">
              <button
                onClick={() => onCurrencyChange('USD')}
                className={`px-2 py-1 rounded ${currency === 'USD' ? 'bg-blue-50 text-blue-700 font-semibold shadow-xs border border-blue-200' : 'text-slate-500'}`}
              >
                USD
              </button>
              <button
                onClick={() => onCurrencyChange('DOP')}
                className={`px-2 py-1 rounded ${currency === 'DOP' ? 'bg-blue-50 text-blue-700 font-semibold shadow-xs border border-blue-200' : 'text-slate-500'}`}
              >
                DOP
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
