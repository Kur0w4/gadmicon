import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MapPin, Check } from 'lucide-react';
import { PortfolioProject, Language } from '../types';
import { Translations } from '../i18n/translations';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  currentLang: Language;
  t: Translations;
  onQuoteThisProject?: (project: PortfolioProject) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  currentLang,
  t,
  onQuoteThisProject,
}) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

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
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto"
        >
          {/* Close Button */}
          <button
            id="close-gallery-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Photo Gallery Viewer */}
          <div className="relative aspect-video sm:aspect-[16/9] bg-slate-900 overflow-hidden group">
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
            <div className="flex gap-2 p-3 bg-slate-50 border-b border-slate-200 overflow-x-auto">
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

          {/* Project Details Content */}
          <div className="p-6 sm:p-8 space-y-5 bg-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold self-start sm:self-auto">
                <Check className="w-3.5 h-3.5" />
                <span>{t.projects.activeStatus}</span>
              </div>
            </div>

            {/* Metadata Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-[11px] text-slate-500 font-medium">Unidades</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  {project.units_count ?? 1} Residencias
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-[11px] text-slate-500 font-medium">Desarrollador</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">Alero Real Estate</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-[11px] text-slate-500 font-medium">Año de Entrega</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  {project.year_completed ?? 2024}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-[11px] text-slate-500 font-medium">Gestión Gadmicon</div>
                <div className="text-xs font-semibold text-blue-600 mt-0.5">
                  Activa & Continua
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Memoria Descriptiva
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {localizedDesc}
              </p>
            </div>

            {/* Footer Modal Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <span className="text-xs text-slate-500">
                Portafolio Oficial Alero Real Estate
              </span>

              {onQuoteThisProject && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onQuoteThisProject(project);
                  }}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                >
                  Cotizar Modelo Similar
                </button>
              )}
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
