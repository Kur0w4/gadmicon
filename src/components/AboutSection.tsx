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
  const pillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      title: 'Transparencia & Rendición de Cuentas',
      desc: 'Informes contables mensuales claros, conciliaciones bancarias y libros de cuentas abiertos para cada junta de condómines y propietario.',
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: 'Equipo Humano Cercano & Profesional',
      desc: 'Supervisores de campo, técnicos certificados y personal de conserjería capacitado con vocación de servicio y resolución rápida.',
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      title: 'Cumplimiento Legal y Ley 5038',
      desc: 'Asesoría jurídica y aplicación estricta del régimen de condominio en República Dominicana, actas de asamblea y cobranza extrajudicial preventiva.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
      title: 'Preservación de la Plusvalía',
      desc: 'Cuidamos cada detalle arquitectónico y las áreas comunes para que el valor de mercado de cada inmueble crezca consistentemente año tras año.',
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white relative border-t border-slate-200">
      {/* Background soft ambient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split: Narrative & Alero Real Estate Affiliation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Gestión profesional con visión humana, orden y tranquilidad para su comunidad.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              En <span className="font-semibold text-slate-900">Gadmicon</span> nos dedicamos a la administración profesional, mantenimiento preventivo y dirección operativa de condominios residenciales, torres de apartamentos y plazas comerciales.
            </p>

            <p className="text-slate-500 text-sm leading-relaxed">
              Trabajamos de la mano con las juntas de vecinos y propietarios para transformar la convivencia y asegurar que el patrimonio común funcione a la perfección: desde la cobranza puntual del mantenimiento hasta el funcionamiento impecable de ascensores, plantas eléctricas, seguridad y áreas sociales.
            </p>

            {/* Credibility badges */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Régimen Ley 5038 y DGII</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Auditorías transparentes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Gestión Integral Certificada</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                id="about-contact-btn"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-sky-400" />
                <span>Hablar con un asesor de Gadmicon</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Feature Card representing the Company */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                    Empresa Especializada
                  </div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">
                    Gadmicon Condominios
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
                  <HeartHandshake className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Gadmicon nace para brindar una administración patrimonial profesional y transparente, asegurando que cada residencial, torre y plaza comercial mantenga el más alto estándar de servicio continuo, plusvalía y armonía entre propietarios.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Presencia Nacional</span>
                    <span>Santo Domingo (Distrito Nacional), Santiago, Samaná y Polo Turístico del Este.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-600">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Atención al Condómino</span>
                    <span>+1 (849) 468-0001 • Horario continuo</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-blue-50/40 border border-blue-100 p-3.5 text-center shadow-2xs">
                <span className="text-xs text-slate-700 font-medium">
                  Comprometidos con el bienestar de cada familia e inversionista.
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white border border-slate-200 p-5 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center mb-3 text-blue-600">
                {p.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                {p.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
