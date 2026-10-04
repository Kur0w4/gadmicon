import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronRight,
  PhoneCall
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

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsTypingComplete(false);
    let index = 0;

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 85);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="text-blue-600 font-extrabold inline-block">
      {displayedText}
      <span
        className={`inline-block w-[3px] h-[0.8em] bg-blue-600 ml-1.5 align-middle transition-opacity ${
          isTypingComplete ? 'animate-pulse' : 'opacity-100'
        }`}
      />
    </span>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  t,
  onNavigateToQuote,
  onNavigateToProjects,
  onNavigateToContact,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50/60 via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden border-b border-slate-100">

      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50/40 to-transparent pointer-events-none" />
      <div className="absolute top-10 left-10 -z-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid Container: 2-column layout (Text left, Decorative image right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Text Content & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">

            {/* Main Headline with Typewriter Effect & Proper Spacing */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              <span>{t.hero.headline}</span>{' '}
              <TypewriterText text={t.hero.headlineHighlight} />
            </h1>

            {/* Short & Simple Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              {t.hero.subheadline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                id="hero-primary-cta"
                onClick={() => onNavigateToQuote()}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-blue-500/15 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onNavigateToProjects}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Direct Contact Text Link below buttons */}
            <div className="pt-1">
              <button
                onClick={onNavigateToContact}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer group"
              >
                <PhoneCall className="w-3.5 h-3.5 text-blue-600 group-hover:scale-110 transition-transform" />
                <span>{t.hero.contactQuestion} <strong className="underline underline-offset-4 decoration-blue-300 group-hover:decoration-blue-600">{t.hero.contactAction}</strong></span>
              </button>
            </div>

          </div>

          {/* Right Column: Purely Decorative Clean Image */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">

              {/* Image Frame - Sleek, clean and decorative without clutter */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80">
                <img
                  src="/images/gadmicon_hero_building.png"
                  alt="Gestión Profesional de Condominios y Torres Residenciales Gadmicon"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85';
                  }}
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};



