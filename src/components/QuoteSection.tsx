/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Calculator, ChevronRight } from 'lucide-react';
import { Translations } from '../i18n/translations';
import { Currency } from '../types';

interface QuoteSectionProps {
  t: Translations;
  currency: Currency;
  onNavigateToContact: () => void;
}

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

export const QuoteSection: React.FC<QuoteSectionProps> = ({ t, currency, onNavigateToContact }) => {
  const q = t.quote;
  const [propType, setPropType] = useState('torre');
  const [units, setUnits] = useState(20);
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set(['contable']));

  const sizeKey = units < 20 ? 'small' : units <= 60 ? 'medium' : 'large';

  const { low, high } = useMemo(() => {
    const base = BASE_PRICE[propType] ?? 12000;
    const perUnit = units * PER_UNIT;
    const perSvc = selectedServices.size * PER_SERVICE;
    const mult = SIZE_MULTIPLIER[sizeKey];
    const mid = Math.round((base + perUnit + perSvc) * mult);
    return { low: Math.round(mid * 0.9), high: Math.round(mid * 1.1) };
  }, [propType, units, selectedServices, sizeKey]);

  const toggleService = (id: string) =>
    setSelectedServices(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const propTypes = [
    { id: 'torre', label: q.propertyTypes.torre },
    { id: 'villa', label: q.propertyTypes.villa },
    { id: 'penthouse', label: q.propertyTypes.penthouse },
    { id: 'comercial', label: q.propertyTypes.comercial },
  ];

  const serviceOptions = [
    { id: 'contable', label: q.serviceOptions.contable },
    { id: 'mantenimiento', label: q.serviceOptions.mantenimiento },
    { id: 'conserjeria', label: q.serviceOptions.conserjeria },
    { id: 'legal', label: q.serviceOptions.legal },
    { id: 'atencion', label: q.serviceOptions.atencion },
  ];

  return (
    <section id="cotizacion" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <Calculator className="w-4 h-4" />
            {q.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">{q.title}</h2>
          <p className="text-slate-500 max-w-xl mx-auto">{q.subtitle}</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">

          {/* Property type */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">{q.propertyTypeLabel}</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {propTypes.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setPropType(id)}
                  className={`py-2.5 px-3 rounded-xl text-sm font-medium border transition-all ${
                    propType === id
                      ? 'bg-blue-600 text-white border-blue-600'
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
              <label className="text-sm font-semibold text-slate-700">{q.unitsLabel}</label>
              <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">{units}</span>
            </div>
            <input
              type="range"
              min={1}
              max={120}
              value={units}
              onChange={e => setUnits(Number(e.target.value))}
              className="w-full accent-blue-600 h-2 rounded-full cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>1</span>
              <span>60</span>
              <span>120</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">{q.servicesLabel}</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {serviceOptions.map(({ id, label }) => {
                const checked = selectedServices.has(id);
                return (
                  <button
                    key={id}
                    onClick={() => toggleService(id)}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-sm text-left transition-all ${
                      checked
                        ? 'bg-blue-50 border-blue-200 text-blue-800 font-medium'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-blue-200'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
                      checked ? 'bg-blue-600 border-blue-600' : 'border-slate-300'
                    }`}>
                      {checked && <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </span>
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Estimate result */}
          <div className="bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl p-6 text-white text-center space-y-1">
            <p className="text-sm font-medium opacity-80">{q.estimateLabel}</p>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight">
              {fmt(low, currency)} – {fmt(high, currency)}
            </p>
            <p className="text-xs opacity-70">{q.disclaimer}</p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={onNavigateToContact}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              {q.ctaButton}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

