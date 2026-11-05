import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  MessageSquare,
  Building2
} from 'lucide-react';
import { PortfolioProject, Language } from '../types';
import { Translations } from '../i18n/translations';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  currentLang: Language;
  t: Translations;
}

const DEFAULT_SERVICES_BY_CATEGORY: Record<string, string[]> = {
  torre: [
    'Administración Contable y Cobranzas Mensuales',
    'Mantenimiento Técnico de Planta Eléctrica y Bombas',
    'Conserjería 24/7 y Control de Acceso Riguroso',
    'Cumplimiento Legal y Asambleas Ordinarias (Ley 5038)'
  ],
  villa: [
    'Gestión Operativa de Renta Corta y Estadías',
    'Supervisión de Muelle Privado, Piscina y Jardines',
    'Mantenimiento Técnico Preventivo Continuo',
    'Rendición Contable Mensual y Reportes al Propietario'
  ],
  penthouse: [
    'Mantenimiento de Climatización Central y Bombas de Alta Presión',
    'Supervisión de Helipuerto y Accesos Exclusivos',
    'Protocolo de Seguridad Discreta y Conserjería Premium',
    'Auditoría de Gastos Comunes y Gestión de Proveedores'
  ],
  residence: [
    'Protocolos de Convivencia y Registro de Huéspedes',
    'Mantenimiento de Cisternas e Infraestructura Costera',
    'Housekeeping Especializado y Cuidado de Áreas Verdes',
    'Canal Continuo de Atención Directa a Propietarios'
  ]
};

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  currentLang,
  t,
}) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  useEffect(() => {
    if (!project) return;
    setActivePhotoIdx(0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const photos = project.gallery_urls?.length > 0 ? project.gallery_urls : [project.main_image_url];

  const nextPhoto = () => {
    setActivePhotoIdx((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIdx((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const localizedDesc = 
    currentLang === 'en'
      ? project.description_en
      : currentLang === 'fr'
      ? project.description_fr
      : project.description_es;

  const servicesList = 
    project.services_provided && project.services_provided.length > 0
      ? project.services_provided
      : (DEFAULT_SERVICES_BY_CATEGORY[project.category] || DEFAULT_SERVICES_BY_CATEGORY.torre);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${project.title}, ${project.location}`
  )}`;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      >
        <motion.div
          key="modal-card"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            id="close-gallery-modal-btn"
            onClick={onClose}
            aria-label={t.projects.modalClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Photo Gallery Viewer - Constrained height so it leaves space for content and scrolling */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full shrink-0 bg-slate-900 overflow-hidden group">
            <motion.img
              key={activePhotoIdx}
              src={photos[activePhotoIdx]}
              alt={`${project.title} - ${activePhotoIdx + 1}`}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            {photos.length > 1 && (
              <>
                <button
                  id="gallery-prev-btn"
                  onClick={prevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/15 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  id="gallery-next-btn"
                  onClick={nextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/15 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Photo Counter */}
            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/70 text-white text-xs font-mono font-medium backdrop-blur-sm border border-white/10">
              {activePhotoIdx + 1} / {photos.length}
            </div>

            {/* Project Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wider shadow-xs">
              {project.category}
            </div>
          </div>

          {/* Thumbnail Strip */}
          {photos.length > 1 && (
            <div className="flex gap-2 p-3 bg-slate-50 border-b border-slate-200 overflow-x-auto shrink-0">
              {photos.map((url, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`relative shrink-0 w-16 h-12 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                    activePhotoIdx === idx
                      ? 'border-blue-500 ring-2 ring-blue-400/40 scale-105'
                      : 'border-slate-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={url} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Project Details Content - Scrollable on PC and Mobile */}
          <div className="p-6 sm:p-8 space-y-6 bg-white overflow-y-auto flex-1">
            
            {/* Header: Title, Location and Maps redirection link */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {project.title}
                </h3>
                
                {/* Location with Google Maps subtext redirect */}
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-1.5 text-sm text-slate-700">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-medium">{project.location}</span>
                  </div>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline pl-5.5 transition-colors cursor-pointer"
                  >
                    <span>{t.projects.viewOnMap}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold self-start shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>{t.projects.activeStatus}</span>
              </div>
            </div>

            {/* Metadata Badges: Focused on Gadmicon's Service */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{t.projects.unitsLabel}</span>
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  {project.units_count ?? 1} {project.units_count === 1 ? t.projects.unitSingular : t.projects.unitPlural}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.projects.managementLabel}</span>
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  {t.projects.activeStatus}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
                  <span>{t.projects.technicalInspection}</span>
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  Preventiva & 24/7
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                  <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{t.projects.residentSupport}</span>
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  WhatsApp & Portal
                </div>
              </div>
            </div>

            {/* Gadmicon Services Delivered in this Condominium */}
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>{t.projects.servicesTitle}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {servicesList.map((srv, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="font-medium">{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope / Management Overview Description */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {t.projects.scopeTitle}
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {localizedDesc}
              </p>
            </div>

            {/* Footer Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <span className="text-xs text-slate-500 text-center sm:text-left">
                {t.projects.footerOfficial}
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer w-full sm:w-auto"
              >
                {t.projects.modalClose}
              </button>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
