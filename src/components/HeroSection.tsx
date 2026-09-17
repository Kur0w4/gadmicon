import React, { useState } from 'react';
import { 
  Building, 
  Home, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Award,
  ChevronRight,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { Currency, Language, PropertyType } from '../types';
import { Translations } from '../i18n/translations';
import { calculatePreliminaryQuote } from '../services/storageService';

interface HeroSectionProps {
  t: Translations;
  currency: Currency;
  onNavigateToQuote: (prefill?: { propertyType: PropertyType; units: number }) => void;
  onNavigateToProjects: () => void;
  onNavigateToContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  t,
  currency,
  onNavigateToQuote,
  onNavigateToProjects,
  onNavigateToContact,
}) => {
  const [selectedType, setSelectedType] = useState<PropertyType>('Apartamento');
  const [units, setUnits] = useState<number>(12);

  const calc = calculatePreliminaryQuote(selectedType, units, currency, ['Gestión Integral', 'Mantenimiento Preventivo']);

  const propertyTypes: { type: PropertyType; icon: React.ReactNode; label: string }[] = [
    { type: 'Apartamento', icon: <Building className="w-4 h-4" />, label: 'Apartamento' },
    { type: 'Torre Residencial', icon: <TrendingUp className="w-4 h-4" />, label: 'Torre / Edificio' },
    { type: 'Villa', icon: <Home className="w-4 h-4" />, label: 'Residencial / Villa' },
    { type: 'Edificio Comercial', icon: <Sparkles className="w-4 h-4" />, label: 'Plaza Comercial' },
  ];

  const handleStartQuote = () => {
    onNavigateToQuote({ propertyType: selectedType, units });
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-white">
      {/* Subtle ambient light shapes */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-sky-100/40 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 left-10 w-96 h-96 bg-blue-50/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Institutional Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-blue-700 font-bold">{t.hero.badge}</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500">República Dominicana</span>
        </div>

        {/* Split Layout: Left Imagery & Value Proposition, Right Practical Estimator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Bold elegant typography & clear presentation */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              {t.hero.headline.split('Gadmicon')[0]}
              <span className="text-blue-600">
                {t.hero.headlineHighlight}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* Metric Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-white border border-slate-200/90 rounded-xl p-3 sm:p-4 shadow-xs">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {t.hero.metric1Val}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-tight font-medium">
                  {t.hero.metric1Label}
                </div>
              </div>

              <div className="bg-white border border-blue-200/80 rounded-xl p-3 sm:p-4 shadow-xs">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 tracking-tight">
                  {t.hero.metric2Val}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-tight font-medium">
                  {t.hero.metric2Label}
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-xl p-3 sm:p-4 shadow-xs">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {t.hero.metric3Val}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-tight font-medium">
                  {t.hero.metric3Label}
                </div>
              </div>
            </div>

            {/* Immersive Architectural Card Preview */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg group mt-4">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85"
                alt="Administración Profesional de Condominios Gadmicon"
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-sky-300 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Santo Domingo • Santiago • Samaná • Cap Cana</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white">
                    Condominios organizados, cuentas claras y mantenimiento continuo
                  </h3>
                </div>

                <button
                  id="hero-contact-btn"
                  onClick={onNavigateToContact}
                  className="px-3.5 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-md text-xs font-semibold border border-white/30 transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer"
                >
                  <span>Contactar Equipo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Clean, friendly estimator card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <h2 className="text-base font-bold text-slate-900 tracking-tight">
                      {t.hero.quickCalcTitle}
                    </h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {t.hero.quickCalcDesc}
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {currency}
                </span>
              </div>

              {/* Step: Property Type */}
              <div className="space-y-3 mb-5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                  <span>1. {t.quote.propertyType}</span>
                  <span className="text-xs text-blue-600 font-semibold lowercase">Inmueble</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {propertyTypes.map((pt) => {
                    const isSelected = selectedType === pt.type;
                    return (
                      <button
                        key={pt.type}
                        type="button"
                        id={`quick-prop-${pt.type.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setSelectedType(pt.type)}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50/80 text-blue-900 border-blue-400 font-semibold shadow-xs ring-1 ring-blue-400/40'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-blue-50/30 hover:border-slate-300 hover:text-slate-900'
                        }`}
                      >
                        <span className={isSelected ? 'text-blue-600' : 'text-slate-400'}>
                          {pt.icon}
                        </span>
                        <span className="truncate">{pt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step: Units Count */}
              <div className="space-y-3 mb-5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    2. {t.quote.unitsCount}
                  </label>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    {units} {units === 1 ? 'unidad' : 'unidades'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    id="hero-units-slider"
                    type="range"
                    min="2"
                    max="60"
                    value={units}
                    onChange={(e) => setUnits(parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>2 unidades</span>
                  <span>15 residencias</span>
                  <span>30+ (Torre o Plaza)</span>
                </div>
              </div>

              {/* Calculated Rate Box */}
              <div className="rounded-xl bg-white border border-slate-200 p-4 mb-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-600 font-medium">
                    {t.quote.estimatedMonthly}
                  </div>
                  {calc.discountPct > 0 && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      -{calc.discountPct}% volumen
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {currency === 'USD' ? '$' : 'RD$'}{calc.monthlyFee.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    / mes estimado ({currency})
                  </span>
                </div>

                <div className="text-[11px] text-slate-600 mt-2 flex items-center gap-1.5 pt-2 border-t border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Gestión administrativa, contabilidad y soporte técnico continuo</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                id="hero-quote-submit-btn"
                type="button"
                onClick={handleStartQuote}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-3 text-center">
                <p className="text-[11px] text-slate-500">
                  Respuesta y asesoría personalizada por el equipo de Alero Real Estate
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
