/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import {
  Calculator,
  ChevronRight,
  Building2,
  Home,
  Palmtree,
  Crown,
  Store,
  Sparkles,
  Sliders,
  Check,
  Plus,
  Minus,
  FileText,
  Wrench,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { Translations } from '../i18n/translations';
import { Currency } from '../types';

interface QuotePreset {
  serviceId?: string;   // from ServicesSection
  category?: string;    // from ProjectsSection (torre/villa/penthouse/residence/comercial)
}

interface QuoteSectionProps {
  t: Translations;
  currency: Currency;
  onNavigateToContact: () => void;
  preset?: QuotePreset;
}

type CondoProfileId = 'torre' | 'residencial' | 'villa' | 'penthouse' | 'comercial';

interface CondoProfileConfig {
  id: CondoProfileId;
  propType: 'torre' | 'villa' | 'penthouse' | 'comercial';
  defaultUnits: number;
  defaultServices: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const CONDO_PROFILES: CondoProfileConfig[] = [
  {
    id: 'torre',
    propType: 'torre',
    defaultUnits: 36,
    defaultServices: ['contable', 'mantenimiento', 'conserjeria'],
    icon: Building2,
  },
  {
    id: 'residencial',
    propType: 'torre',
    defaultUnits: 20,
    defaultServices: ['contable', 'mantenimiento', 'conserjeria'],
    icon: Home,
  },
  {
    id: 'villa',
    propType: 'villa',
    defaultUnits: 1,
    defaultServices: ['mantenimiento', 'atencion'],
    icon: Palmtree,
  },
  {
    id: 'penthouse',
    propType: 'penthouse',
    defaultUnits: 4,
    defaultServices: ['contable', 'mantenimiento', 'legal'],
    icon: Crown,
  },
  {
    id: 'comercial',
    propType: 'comercial',
    defaultUnits: 16,
    defaultServices: ['contable', 'mantenimiento', 'legal'],
    icon: Store,
  },
];

const SERVICES_LIST = [
  { id: 'contable', icon: FileText },
  { id: 'mantenimiento', icon: Wrench },
  { id: 'conserjeria', icon: Sparkles },
  { id: 'legal', icon: ShieldCheck },
  { id: 'atencion', icon: Users },
] as const;

// Map service modal IDs → calculator service IDs
const SERVICE_ID_MAP: Record<string, string> = {
  'gestion-integral': 'contable',
  'auditoria-dgii': 'legal',
  'mantenimiento-tecnico': 'mantenimiento',
  'housekeeping-5star': 'conserjeria',
  'renta-vacacional': 'atencion',
  'tecnologia-supabase': 'contable',
};

// Map project category → profile ID
const CATEGORY_TO_PROFILE: Record<string, CondoProfileId> = {
  torre: 'torre',
  residence: 'residencial',
  villa: 'villa',
  penthouse: 'penthouse',
  comercial: 'comercial',
};

const USD_RATE = 59.5; // approx DOP/USD

// Base pricing (DOP)
const BASE_PRICE: Record<string, number> = {
  torre: 12000,
  villa: 8000,
  penthouse: 10000,
  comercial: 15000,
};
const PER_UNIT = 150;
const PER_SERVICE = 2000;
const SIZE_MULTIPLIER: Record<string, number> = {
  small: 1,
  medium: 1.3,
  large: 1.6,
};

function fmt(amount: number, curr: Currency) {
  if (curr === 'USD') {
    return `$${(amount / USD_RATE).toLocaleString('en-US', { maximumFractionDigits: 0 })} USD`;
  }
  return `RD$${amount.toLocaleString('es-DO', { maximumFractionDigits: 0 })}`;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  t,
  currency,
  onNavigateToContact,
  preset,
}) => {
  const q = t.quote;
  const [mode, setMode] = useState<'guided' | 'manual'>('guided');
  const [selectedProfile, setSelectedProfile] = useState<CondoProfileId>('torre');
  const [propType, setPropType] = useState<string>('torre');
  const [units, setUnits] = useState<number>(36);
  const [selectedServices, setSelectedServices] = useState<Set<string>>(
    new Set(['contable', 'mantenimiento', 'conserjeria'])
  );

  // Apply preset when navigating from service or project modal
  useEffect(() => {
    if (!preset) return;
    if (preset.category) {
      const profileId = CATEGORY_TO_PROFILE[preset.category] || 'torre';
      setSelectedProfile(profileId);
      const conf = CONDO_PROFILES.find((p) => p.id === profileId);
      if (conf) {
        setPropType(conf.propType);
        setUnits(conf.defaultUnits);
        if (!preset.serviceId) {
          setSelectedServices(new Set(conf.defaultServices));
        }
      }
    }
    if (preset.serviceId) {
      const mapped = SERVICE_ID_MAP[preset.serviceId];
      if (mapped) setSelectedServices(new Set([mapped]));
    }
  }, [preset]);

  const sizeKey = units < 20 ? 'small' : units <= 60 ? 'medium' : 'large';

  const { low, high } = useMemo(() => {
    const base = BASE_PRICE[propType] ?? 12000;
    const perUnit = units * PER_UNIT;
    const perSvc = selectedServices.size * PER_SERVICE;
    const mult = SIZE_MULTIPLIER[sizeKey];
    const mid = Math.round((base + perUnit + perSvc) * mult);
    return { low: Math.round(mid * 0.9), high: Math.round(mid * 1.1) };
  }, [propType, units, selectedServices, sizeKey]);

  const handleSelectProfile = (profile: CondoProfileConfig) => {
    setSelectedProfile(profile.id);
    setPropType(profile.propType);
    setUnits(profile.defaultUnits);
    setSelectedServices(new Set(profile.defaultServices));
  };

  const toggleService = (id: string) => {
    setSelectedServices((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        if (next.size > 1) {
          next.delete(id);
        }
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const manualPropTypes = [
    { id: 'torre', label: q.propertyTypes.torre },
    { id: 'villa', label: q.propertyTypes.villa },
    { id: 'penthouse', label: q.propertyTypes.penthouse },
    { id: 'comercial', label: q.propertyTypes.comercial },
  ];

  const currentPropLabel =
    q.propertyTypes[propType as keyof typeof q.propertyTypes] ||
    q.condoProfiles[selectedProfile]?.name ||
    propType;

  return (
    <section id="cotizacion" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200/80 rounded-full px-4 py-1.5 mb-3 shadow-2xs">
            <Calculator className="w-4 h-4 text-blue-600" />
            {q.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            {q.title}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {q.subtitle}
          </p>

          {/* Mode Switcher */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex p-1 bg-slate-200/80 rounded-xl border border-slate-300/70 shadow-2xs">
              <button
                type="button"
                id="quote-mode-guided-btn"
                onClick={() => setMode('guided')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  mode === 'guided'
                    ? 'bg-white text-blue-700 shadow-xs border border-slate-200 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{q.modeGuided}</span>
              </button>
              <button
                type="button"
                id="quote-mode-manual-btn"
                onClick={() => setMode('manual')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  mode === 'manual'
                    ? 'bg-white text-blue-700 shadow-xs border border-slate-200 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sliders className="w-3.5 h-3.5 text-slate-500" />
                <span>{q.modeManual}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-8">

          {mode === 'guided' ? (
            /* GUIDED SELECTION MODE (Primary) */
            <div className="space-y-8">

              {/* Step 1: Condominium profile */}
              <div>
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">1</span>
                    {q.condoSelectionTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {q.condoSelectionSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {CONDO_PROFILES.map((profile) => {
                    const isSelected = selectedProfile === profile.id;
                    const Icon = profile.icon;
                    const info = q.condoProfiles[profile.id];

                    return (
                      <button
                        key={profile.id}
                        type="button"
                        onClick={() => handleSelectProfile(profile)}
                        className={`text-left p-4 rounded-xl border-2 transition-all relative flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50/70 border-blue-600 shadow-xs ring-2 ring-blue-500/10'
                            : 'bg-white border-slate-200/90 hover:border-blue-300 hover:bg-slate-50/50'
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${
                              isSelected
                                ? 'bg-blue-100 text-blue-800 border-blue-200 font-bold'
                                : 'bg-slate-100 text-slate-600 border-slate-200'
                            }`}>
                              {info.unitsHint}
                            </span>
                          </div>

                          <div>
                            <h4 className={`text-sm font-bold ${
                              isSelected ? 'text-blue-900' : 'text-slate-900'
                            }`}>
                              {info.name}
                            </h4>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                              {info.desc}
                            </p>
                          </div>
                        </div>

                        {isSelected && (
                          <div className="mt-3 pt-2.5 border-t border-blue-200/80 flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                            <Check className="w-3.5 h-3.5" />
                            <span>{q.badge}</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Inline Unit Count Stepper (Editable for non-tech users) */}
                <div className="mt-4 bg-slate-50/90 border border-slate-200 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 block">
                      {q.adjustUnitsLabel}
                    </span>
                    <span className="text-xs text-slate-500">
                      {q.adjustUnitsHelp}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={() => setUnits((prev) => Math.max(1, prev - 1))}
                      className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 flex items-center justify-center font-bold text-slate-700 shadow-2xs cursor-pointer transition-colors"
                      title="Disminuir"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input
                      type="number"
                      min={1}
                      max={250}
                      value={units}
                      onChange={(e) =>
                        setUnits(Math.max(1, Math.min(250, Number(e.target.value) || 1)))
                      }
                      className="w-16 h-9 text-center bg-white border border-slate-200 rounded-lg font-bold text-slate-900 text-sm shadow-2xs focus:outline-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setUnits((prev) => Math.min(250, prev + 1))}
                      className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 flex items-center justify-center font-bold text-slate-700 shadow-2xs cursor-pointer transition-colors"
                      title="Aumentar"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-medium text-slate-600 pl-1">{q.unitsWord}</span>
                  </div>
                </div>
              </div>

              {/* Step 2: Gadmicon Services selection */}
              <div>
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">2</span>
                    {q.servicesSelectionTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {q.servicesSelectionSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES_LIST.map(({ id, icon: Icon }) => {
                    const checked = selectedServices.has(id);
                    const label = q.serviceOptions[id as keyof typeof q.serviceOptions];
                    const info = q.serviceDescriptions[id as keyof typeof q.serviceDescriptions];

                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => toggleService(id)}
                        className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                          checked
                            ? 'bg-blue-50/70 border-blue-400 text-slate-900 shadow-2xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-blue-200 hover:bg-slate-50/50'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-md border flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors ${
                            checked
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'bg-white border-slate-300'
                          }`}
                        >
                          {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </span>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                              <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                              {label}
                            </span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800 flex-shrink-0">
                              {info.tag}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {info.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          ) : (
            /* MANUAL MODE (Optional / Fine Tuning) */
            <div className="space-y-8">

              {/* Property type */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-3">
                  {q.propertyTypeLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {manualPropTypes.map(({ id, label }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setPropType(id)}
                      className={`py-2.5 px-3 rounded-xl text-sm font-medium border transition-all cursor-pointer ${
                        propType === id
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-semibold'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Units slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-slate-800">
                    {q.unitsLabel}
                  </label>
                  <span className="text-sm font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-0.5 rounded-full">
                    {units} {q.unitsWord}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={150}
                  value={units}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  className="w-full accent-blue-600 h-2 rounded-full cursor-pointer bg-slate-200"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>1</span>
                  <span>75</span>
                  <span>150</span>
                </div>
              </div>

              {/* Services checklist */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-3">
                  {q.servicesLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES_LIST.map(({ id }) => {
                    const checked = selectedServices.has(id);
                    const label = q.serviceOptions[id as keyof typeof q.serviceOptions];
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => toggleService(id)}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-sm text-left transition-all cursor-pointer ${
                          checked
                            ? 'bg-blue-50 border-blue-200 text-blue-900 font-semibold shadow-2xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-blue-200'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
                            checked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300'
                          }`}
                        >
                          {checked && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {/* Estimate result card */}
          <div className="bg-gradient-to-br from-blue-600 to-sky-600 rounded-2xl p-6 sm:p-7 text-white text-center shadow-md space-y-2">
            <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-blue-100">
              {q.estimateLabel}
            </p>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {fmt(low, currency)} – {fmt(high, currency)}
            </p>
            <p className="text-xs text-blue-100 font-medium">
              {q.summaryPrefix}: <span className="font-semibold">{currentPropLabel}</span> • {units} {q.unitsWord} • {selectedServices.size} {q.servicesWord}
            </p>
            <p className="text-[11px] text-blue-100/80 pt-1">
              {q.disclaimer}
            </p>
          </div>

          {/* CTA & Switch Button */}
          <div className="flex flex-col items-center gap-3 pt-2">
            <button
              type="button"
              id="quote-submit-cta-btn"
              onClick={onNavigateToContact}
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all shadow-sm hover:shadow cursor-pointer w-full sm:w-auto"
            >
              <span>{q.ctaButton}</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setMode(mode === 'guided' ? 'manual' : 'guided')}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-4 cursor-pointer pt-1"
            >
              {mode === 'guided' ? q.switchToManual : q.switchToGuided}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
