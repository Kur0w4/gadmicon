import React from 'react';
import { Building2, MapPin, Mail, Phone, Shield, ArrowUp } from 'lucide-react';
import { Translations } from '../i18n/translations';

interface FooterProps {
  t: Translations;
  onNavigate: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-xs">
                <Building2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-wider">
                GADMICON
              </span>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                Alero Real Estate
              </span>
            </div>
            
            <p className="text-slate-600 max-w-md leading-relaxed text-sm">
              {t.footer.tagline}
            </p>

            <div className="flex items-center gap-2 text-slate-700 pt-1 text-xs">
              <Shield className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="font-semibold text-slate-900">{t.footer.partnerDesc}</span>
            </div>

            <div className="flex items-start gap-2 text-slate-500 pt-1 text-xs">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Gral. Eusebio Manzueta F23 • Santiago & Santo Domingo, Rep. Dominicana</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('nosotros')} 
                  className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Sobre Gadmicon
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('servicios')} 
                  className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('proyectos')} 
                  className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {t.nav.projects}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('cotizar')} 
                  className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {t.nav.quote}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contacto')} 
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer"
                >
                  Contacto & Asesoría
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Atención al Cliente
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <a href="tel:+18494680001" className="text-slate-900 hover:text-blue-600 font-semibold">
                  +1 (849) 468-0001
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href="mailto:contacto@gadmicon.com" className="text-slate-600 hover:text-blue-600">
                  contacto@gadmicon.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href="mailto:operaciones@alerorealestate.com" className="text-slate-600 hover:text-blue-600">
                  operaciones@alerorealestate.com
                </a>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 transition-colors cursor-pointer text-xs shadow-2xs"
              >
                <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
                <span>Volver al inicio</span>
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} GADMICON • Alero Real Estate, SRL. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Administración de Condominios • Plazas • Apartamentos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
