import React, { useState, useEffect } from 'react';
import {
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  Target,
  Eye,
  ShieldCheck
} from 'lucide-react';
import { Translations } from '../i18n/translations';

interface AboutSectionProps {
  t: Translations;
  onContactClick?: () => void;
  onNavigateToContact?: () => void;
}

const CARD_ICONS = [Target, Eye, ShieldCheck];

const companyPhotos = [
  {
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    caption: 'Torre de Apartamentos Administrada'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Áreas Sociales y Mantenimiento'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Lobby y Conserjería 24/7'
  },
  {
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    caption: 'Gestión Residencial & Condominios'
  }
];

export const AboutSection: React.FC<AboutSectionProps> = ({
  t,
  onContactClick,
  onNavigateToContact
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleContact = onNavigateToContact || onContactClick;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % companyPhotos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + companyPhotos.length) % companyPhotos.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % companyPhotos.length);
  };

  return (
    <>
      {/* Sección Principal: Sobre Nosotros */}
      <section id="nosotros" className="py-20 bg-white relative border-t border-slate-200 overflow-hidden">
        {/* Background soft ambient */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-100/50 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Narrative & Company Overview */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {t.about.heading}
              </h2>

              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed font-medium">
                {t.about.paragraph1}
              </p>

              <p className="text-slate-500 text-base leading-relaxed">
                {t.about.paragraph2}
              </p>

              <p className="text-slate-500 text-base leading-relaxed">
                {t.about.paragraph3}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  id="about-contact-btn"
                  onClick={handleContact}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-base transition-colors shadow-sm cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5 text-sky-400" />
                  <span>{t.about.ctaButton}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Company Photo Carousel */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-100">
                {companyPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                      <p className="text-white font-medium text-sm sm:text-base drop-shadow-md">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Navigation Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Indicators / Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {companyPhotos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                        }`}
                      aria-label={`Ir a foto ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sección Secundaria: Misión, Visión y Valores */}
      <section className="py-20 border-t border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header del bloque secundario */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.about.mvvTitle}
            </h3>
            <p className="text-slate-500 text-base mt-2 leading-relaxed">
              {t.about.mvvSubtitle}
            </p>
          </div>

          {/* Tarjetas con protagonismo y espacio propio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {t.about.cards.map((card, index) => {
              const Icon = CARD_ICONS[index % CARD_ICONS.length];
              return (
                <div
                  key={card.title}
                  className="group rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs hover:shadow-md hover:border-sky-200 transition-all duration-200 flex flex-col justify-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-sky-700 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section >
    </>
  );
};
