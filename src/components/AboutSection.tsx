import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  FileText, 
  PhoneCall, 
  TrendingUp, 
  MapPin, 
  Phone, 
  HeartHandshake
} from 'lucide-react';
import { Translations } from '../i18n/translations';

interface AboutSectionProps {
  t: Translations;
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ t, onContactClick }) => {


  return (
    <section id="nosotros" className="py-20 bg-white relative border-t border-slate-200">
      {/* Background soft ambient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Label */}
        <div className="flex justify-center sm:justify-start mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100">
            {t.about.badge}
          </span>
        </div>

        {/* Narrative & Company Overview */}
        <div className="max-w-4xl mb-16 space-y-6">
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

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {t.about.pillars.map((p, idx) => {
            const icons = [
              <ShieldCheck key="1" className="w-5 h-5 text-blue-600" />,
              <Users key="2" className="w-5 h-5 text-blue-600" />,
              <FileText key="3" className="w-5 h-5 text-blue-600" />,
              <TrendingUp key="4" className="w-5 h-5 text-blue-600" />,
            ];
            return (
              <div
                key={idx}
                className="rounded-xl bg-white border border-slate-200 p-5 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center mb-3 text-blue-600">
                  {icons[idx % icons.length]}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
