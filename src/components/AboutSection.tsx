import React, { useState, useEffect } from 'react';
import {
  PhoneCall,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Translations } from '../i18n/translations';

interface AboutSectionProps {
  t: Translations;
  onContactClick: () => void;
}

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

export const AboutSection: React.FC<AboutSectionProps> = ({ t, onContactClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
                onClick={onContactClick}
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
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
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
                    className={`h-2 rounded-full transition-all ${
                      idx === currentSlide ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
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
  );
};

