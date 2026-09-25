import React, { useState } from 'react';
import { 
  MapPin, 
  Images, 
  ChevronRight, 
  Sparkles
} from 'lucide-react';
import { PortfolioProject, Language } from '../types';
import { Translations } from '../i18n/translations';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsSectionProps {
  projects: PortfolioProject[];
  currentLang: Language;
  t: Translations;
  onSelectProjectForQuote?: (project: PortfolioProject) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  currentLang,
  t,
  onSelectProjectForQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const categories = [
    { id: 'all', label: t.projects.all },
    { id: 'torre', label: 'Torres Residenciales' },
    { id: 'villa', label: 'Villas de Lujo' },
    { id: 'penthouse', label: 'Penthouses Colección' },
    { id: 'residence', label: 'Residencias de Playa' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="proyectos" className="py-16 sm:py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.projects.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.projects.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-white p-1.5 rounded-xl border border-slate-200 shadow-2xs self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-50 text-blue-700 font-semibold shadow-xs border border-blue-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => {
            const localizedDesc =
              currentLang === 'en'
                ? proj.description_en
                : currentLang === 'fr'
                ? proj.description_fr
                : proj.description_es;

            return (
              <div
                key={proj.id}
                id={`project-card-${proj.id}`}
                className="group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between shadow-xs"
              >
                {/* Image Container with Hover Zoom */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                  onClick={() => setActiveModalProject(proj)}
                >
                  <img
                    src={proj.main_image_url}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-900 uppercase tracking-wider shadow-xs">
                      {proj.category}
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] text-white font-medium border border-white/10">
                      <Images className="w-3 h-3 text-sky-400" />
                      <span>{proj.gallery_urls?.length || 1} fotos</span>
                    </span>
                  </div>

                  {/* Location Pin overlay */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white font-medium drop-shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                    <span className="truncate max-w-[240px]">{proj.location}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 
                        onClick={() => setActiveModalProject(proj)}
                        className="text-lg font-bold text-slate-900 tracking-tight cursor-pointer hover:text-blue-600 transition-colors"
                      >
                        {proj.title}
                      </h3>
                      {proj.units_count && (
                        <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 whitespace-nowrap">
                          {proj.units_count} {proj.units_count === 1 ? 'Unidad' : 'Unidades'}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {localizedDesc}
                    </p>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      id={`view-gallery-btn-${proj.id}`}
                      onClick={() => setActiveModalProject(proj)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>{t.projects.viewGallery}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    {onSelectProjectForQuote && (
                      <button
                        type="button"
                        onClick={() => onSelectProjectForQuote(proj)}
                        className="px-3 py-1 rounded-lg bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-semibold transition-colors border border-slate-200 hover:border-blue-200 shadow-xs cursor-pointer"
                      >
                        Cotizar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Gallery Modal */}
      {activeModalProject && (
        <ProjectDetailModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          currentLang={currentLang}
          t={t}
          onQuoteThisProject={onSelectProjectForQuote}
        />
      )}
    </section>
  );
};
