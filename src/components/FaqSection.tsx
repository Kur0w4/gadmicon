import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Translations } from '../i18n/translations';

interface FaqSectionProps {
  t: Translations;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Qué tipo de inmuebles administra Gadmicon en República Dominicana?',
      a: 'Administramos condominios residenciales de apartamentos, torres multifamiliares, residenciales cerrados de villas y plazas comerciales. Operamos en Santiago, Santo Domingo y las principales zonas turísticas y urbanas de República Dominicana.',
    },
    {
      q: '¿Cómo se maneja la recaudación de cuotas de mantenimiento y la contabilidad?',
      a: 'Establecemos cuentas bancarias exclusivas a nombre del condominio o asociación con doble firma autorizada. Los propietarios reciben estados de cuenta mensuales detallados, avisos de cobro por correo y WhatsApp, y acceso a informes de ingresos y egresos soportados con facturas con NCF.',
    },
    {
      q: '¿Qué ocurre con el mantenimiento técnico y las emergencias en el edificio?',
      a: 'Mantenemos un programa de mantenimiento preventivo calendarizado (bombas de agua, plantas eléctricas, generadores, ascensores, áreas comunes y jardinería). Contamos con guardias técnicas de emergencia disponibles los 365 días del año para contingencias críticas.',
    },
    {
      q: '¿Cómo apoya Gadmicon en la convocatoria y manejo de asambleas de condómines?',
      a: 'Organizamos, convocamos y moderamos las asambleas ordinarias y extraordinarias conforme a la Ley 5038 sobre Condominios. Levantamos las actas notariales correspondientes, presentamos el presupuesto anual y velamos por el cumplimiento de los acuerdos aprobados por la mayoría.',
    },
    {
      q: '¿Cómo iniciar una transición de administración con Gadmicon?',
      a: 'Realizamos un levantamiento y diagnóstico técnico-financiero preliminar sin compromiso. Al aprobarse nuestra propuesta, asumimos la transición ordenada de libros contables, inventarios físicos de maquinarias y contratos de servicios básicos de manera transparente y sin interrupción de los servicios.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Claridad y respuestas para propietarios y juntas
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Resolvemos las inquietudes más comunes sobre la gestión y el modelo operativo de Gadmicon.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900">
                    {faq.q}
                  </span>
                  <span className="text-slate-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-blue-600" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
