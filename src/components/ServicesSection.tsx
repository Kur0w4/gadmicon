import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Translations } from '../i18n/translations';
import { ServiceDetailModal, ServiceItem } from './ServiceDetailModal';

interface ServicesSectionProps {
  t: Translations;
  onNavigateToContact?: () => void;
}

// Map service IDs to local images and fallback Unsplash URLs
const SERVICE_IMAGES: Record<string, string> = {
  'gestion-integral':
    '/images/services/service_gestion_integral_1791104752657.png',
  'mantenimiento-tecnico':
    '/images/services/service_mantenimiento_1791104773304.png',
  'housekeeping-5star':
    '/images/services/service_housekeeping_1791104802539.png',
  'renta-vacacional':
    '/images/services/service_renta_vacacional_1791104832844.png',
  'auditoria-dgii':
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
  'tecnologia-supabase':
    'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80',
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ t, onNavigateToContact }) => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  return (
    <section id="servicios" className="py-20 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100 mb-3">
            {t.services.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mt-3 max-w-2xl leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {t.services.items.map((item) => (
            <div
              key={item.id}
              id={`service-card-${item.id}`}
              onClick={() => setActiveService(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveService(item);
                }
              }}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col cursor-pointer text-left focus:outline-hidden focus:ring-2 focus:ring-blue-500/50"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={SERVICE_IMAGES[item.id]}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/15 to-transparent" />

                {/* Hover Quick Action Pill */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-blue-700 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>{t.services.viewDetails}</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                {/* Card Footer Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-blue-600 font-semibold text-xs sm:text-sm group-hover:text-blue-700 transition-colors">
                  <span>{t.services.viewDetails}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal View for Service Details */}
      <ServiceDetailModal
        service={activeService}
        imageUrl={activeService ? SERVICE_IMAGES[activeService.id] : ''}
        onClose={() => setActiveService(null)}
        onContactClick={() => {
          setActiveService(null);
          if (onNavigateToContact) onNavigateToContact();
        }}
        t={t}
      />
    </section>
  );
};
