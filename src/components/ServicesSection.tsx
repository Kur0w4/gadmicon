import React, { useState } from 'react';
import { 
  Building2, 
  Wrench, 
  Sparkles, 
  Key, 
  FileCheck2, 
  Cpu, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Clock
} from 'lucide-react';
import { Translations } from '../i18n/translations';

interface ServicesSectionProps {
  t: Translations;
  onSelectServiceForQuote?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  t,
  onSelectServiceForQuote,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Map icons to the 6 services
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'gestion-integral':
        return <Building2 className="w-6 h-6 text-blue-600" />;
      case 'mantenimiento-tecnico':
        return <Wrench className="w-6 h-6 text-sky-500" />;
      case 'housekeeping-5star':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'renta-vacacional':
        return <Key className="w-6 h-6 text-emerald-600" />;
      case 'auditoria-dgii':
        return <FileCheck2 className="w-6 h-6 text-indigo-600" />;
      case 'tecnologia-supabase':
      default:
        return <Cpu className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* CSS Grid of Minimalist Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((item) => {
            const isSelected = selectedServiceId === item.id;
            return (
              <div
                key={item.id}
                id={`service-card-${item.id}`}
                onClick={() => setSelectedServiceId(isSelected ? null : item.id)}
                className={`group relative rounded-2xl p-6 sm:p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-blue-400 shadow-md ring-1 ring-blue-400/30'
                    : 'bg-white border-slate-200 hover:border-blue-200 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs">
                    {getServiceIcon(item.id)}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-700 mb-2.5 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div>
                  {/* Pills / Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white text-slate-700 border border-slate-200 shadow-2xs whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  {onSelectServiceForQuote && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectServiceForQuote(item.title);
                      }}
                      className="mt-4 w-full py-2 px-3 rounded-lg bg-white hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5 transition-all border border-slate-200 shadow-2xs cursor-pointer"
                    >
                      <span>Incluir en Cotización</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational SLA Trust Banner */}
        <div className="mt-12 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Respaldo y Presencia Operativa Garantizada
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Supervisión presencial en edificios y atención técnica de emergencia en el Gran Santo Domingo, Santiago y Este.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Personal Asegurado & Depurado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Contabilidad con Comprobantes Fiscales</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
