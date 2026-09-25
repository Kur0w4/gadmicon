import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  ChevronRight, 
  FileText, 
  Wrench,
  MapPin
} from 'lucide-react';
import { Currency, PropertyType } from '../types';
import { Translations } from '../i18n/translations';

interface HeroSectionProps {
  t: Translations;
  currency: Currency;
  onNavigateToQuote: (prefill?: { propertyType: PropertyType; units: number }) => void;
  onNavigateToProjects: () => void;
  onNavigateToContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  t,
  onNavigateToQuote,
  onNavigateToProjects,
  onNavigateToContact,
}) => {
  return (
    <section className="relative bg-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header Container - Centered, spacious & easy to read */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Institution Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800 shadow-2xs">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span>{t.hero.badge}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-medium">República Dominicana</span>
          </div>

          {/* Main Headline - High readability for older clients */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            {t.hero.headline.split('Gadmicon')[0]}
            <span className="text-blue-600 font-extrabold">
              {t.hero.headlineHighlight}
            </span>
          </h1>

          {/* Clear Subheadline */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
            {t.hero.subheadline}
          </p>

          {/* 3 Clear Informative Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Transparencia Financiera</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Estados de cuenta mensuales claros, facturas con NCF y conciliación bancaria.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Mantenimiento Preventivo</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Supervisión constante de generadores, bombas, ascensores y áreas comunes.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Ley 5038 & Asambleas</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Convocatorias formales, actas notariales y respaldo legal para la junta.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs - Big, comfortable touch buttons for older users */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="hero-primary-cta"
              onClick={() => onNavigateToQuote()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Solicitar Propuesta de Administración</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-secondary-cta"
              onClick={onNavigateToProjects}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ver Condominios Administrados</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>

        </div>

        {/* Informative Image Banner & Metrics Section */}
        <div className="mt-12 max-w-5xl mx-auto space-y-6">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85"
              alt="Gestión Profesional de Condominios y Torres Residenciales Gadmicon"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="text-white space-y-1">
                <div className="flex items-center gap-2 text-xs text-sky-300 font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Santo Domingo • Santiago • Samaná • Este</span>
                </div>
                <h3 className="text-base sm:text-xl font-bold">
                  Cuentas claras, mantenimiento al día y tranquilidad para su propiedad
                </h3>
              </div>

              <button
                id="hero-direct-call-btn"
                onClick={onNavigateToContact}
                className="px-4 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-blue-50 font-bold text-xs shadow-md transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Contactar Administrador</span>
              </button>
            </div>
          </div>

          {/* Clean Metric Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-2xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {t.hero.metric1Val}
              </div>
              <div className="text-xs text-slate-600 font-medium mt-1">
                {t.hero.metric1Label}
              </div>
            </div>

            <div className="bg-white border border-blue-200 rounded-xl p-4 text-center shadow-2xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                {t.hero.metric2Val}
              </div>
              <div className="text-xs text-slate-600 font-medium mt-1">
                {t.hero.metric2Label}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-2xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {t.hero.metric3Val}
              </div>
              <div className="text-xs text-slate-600 font-medium mt-1">
                {t.hero.metric3Label}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

