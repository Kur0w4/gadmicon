import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { Translations } from '../i18n/translations';

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  details?: {
    scope: string[];
    benefit: string;
    modality: string;
  };
}

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  imageUrl: string;
  onClose: () => void;
  onQuoteClick: (serviceId: string) => void;
  t: Translations;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  imageUrl,
  onClose,
  onQuoteClick,
  t,
}) => {
  useEffect(() => {
    if (!service) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="service-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      >
        <motion.div
          key="service-modal-card"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            id="close-service-modal-btn"
            onClick={onClose}
            aria-label={t.services.modalClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image Header */}
          <div className="relative h-52 sm:h-64 bg-slate-900 overflow-hidden shrink-0">
            <img
              src={imageUrl}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />

            {/* Badge on top left */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wider shadow-xs">
                {t.services.badge}
              </span>
            </div>

            {/* Title & Tag bar on bottom of image */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
                {service.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-sm text-[11px] font-medium text-white border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-white">
            {/* Overview Narrative */}
            <div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {service.desc}
              </p>
            </div>

            {/* Scope of Service - What's Included */}
            {service.details?.scope && (
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
                  {t.services.scopeTitle}
                </h4>
                <ul className="space-y-2.5">
                  {service.details.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Metadata Summary Cards */}
            {service.details && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Benefit Card */}
                <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>{t.services.benefitTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    {service.details.benefit}
                  </p>
                </div>

                {/* Modality Card */}
                <div className="p-4 rounded-xl border border-slate-200/90 bg-white shadow-2xs flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    <Clock className="w-4 h-4 text-sky-600" />
                    <span>{t.services.modalityTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    {service.details.modality}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <span className="text-xs text-slate-500 hidden sm:inline">
              Gadmicon • Administración de Condominios
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-200/60 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                {t.services.modalClose}
              </button>

              <button
                onClick={() => onQuoteClick(service.id)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm transition-colors shadow-sm cursor-pointer"
              >
                <span>{t.services.modalCta}</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

