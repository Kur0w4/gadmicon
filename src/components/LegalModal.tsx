import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Scale, Cookie, Lock, FileText, Check } from 'lucide-react';

export type LegalModalType = 'privacy' | 'terms' | 'cookies' | 'legal' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl my-8 max-h-[85vh] flex flex-col text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-100 rounded-xl text-blue-600">
              {type === 'privacy' && <Lock className="w-6 h-6" />}
              {type === 'terms' && <FileText className="w-6 h-6" />}
              {type === 'cookies' && <Cookie className="w-6 h-6" />}
              {type === 'legal' && <Scale className="w-6 h-6" />}
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {type === 'privacy' && 'Política de Privacidad y Protección de Datos'}
                {type === 'terms' && 'Términos y Condiciones de Uso'}
                {type === 'cookies' && 'Política de Cookies'}
                {type === 'legal' && 'Aviso Legal y Cumplimiento Normativo (Ley 5038)'}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                GADMICON S.R.L. • República Dominicana • Última actualización: Octubre 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' && (
            <>
              <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl text-sky-900 text-xs leading-normal">
                <strong>Cumplimiento de la Ley 172-13:</strong> GADMICON S.R.L. cumple estrictamente con la legislación de la República Dominicana sobre protección de datos personales y habeas data. Sus datos personales no serán vendidos ni compartidos sin su consentimiento previo.
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">1. Recopilación de Información</h3>
                <p>
                  Recopilamos información estrictamente necesaria cuando usted interactúa con nuestros formularios de cotización, contacto o portal de clientes. Esto incluye nombre, correo electrónico, número de teléfono, dirección física del inmueble o condominio, y detalles específicos sobre el número de unidades o servicios requeridos.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">2. Finalidad del Tratamiento de Datos</h3>
                <p>
                  La información recopilada se utiliza de forma confidencial para:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Generación y envío de propuestas comerciales de administración de condominios.</li>
                  <li>Atención a consultas sobre mantenimiento, conservación de plusvalía y asesoría jurídica.</li>
                  <li>Notificaciones administrativas y operativas dirigidas a juntas de condómines.</li>
                  <li>Mejora de la seguridad de la plataforma y cumplimiento de obligaciones legales contractuales.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">3. Seguridad y Confidencialidad</h3>
                <p>
                  Implementamos medidas organizativas y técnicas de seguridad con cifrado SSL/TLS de 256 bits y almacenamiento seguro en servidores con auditoría de acceso estricta para prevenir accesos no autorizados, alteración o divulgación de sus datos.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">4. Derechos del Titular ARCO</h3>
                <p>
                  Usted conserva el derecho de acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. Puede ejercer estos derechos enviando una solicitud formal a <strong>legal@gadmicon.com</strong> indicando el asunto "Protección de Datos Personales".
                </p>
              </section>
            </>
          )}

          {type === 'terms' && (
            <>
              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">1. Aceptación de los Términos</h3>
                <p>
                  Al acceder y navegar en el sitio web de GADMICON S.R.L., el usuario declara haber leído, comprendido y aceptado en su totalidad los presentes Términos y Condiciones. Si no está de acuerdo con estos términos, debe abstenerse de utilizar el portal.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">2. Servicios de Administración Residencial y Comercial</h3>
                <p>
                  GADMICON brinda información sobre servicios de administración profesional, mantenimiento preventivo, gestión contable y conserjería para inmuebles. Las cotizaciones o presupuestos presentados a través de las calculadoras en línea constituyen estimaciones preliminares no binding sujetas a inspección física y firma del contrato de servicios definitivo.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">3. Propiedad Intelectual</h3>
                <p>
                  Todos los contenidos, logotipos, marcas, código fuente, diseños gráficos, imágenes e íconos son propiedad exclusiva de GADMICON S.R.L. Queda terminantemente prohibida su reproducción, distribución o modificación sin autorización expresa escrita de la empresa.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">4. Limitación de Responsabilidad</h3>
                <p>
                  GADMICON S.R.L. no se hace responsable por interrupciones temporales del servicio web debidas a mantenimiento técnico, fallos de proveedores de internet o causas de fuerza mayor. El usuario es responsable del uso adecuado de la plataforma.
                </p>
              </section>
            </>
          )}

          {type === 'cookies' && (
            <>
              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">1. ¿Qué son las Cookies?</h3>
                <p>
                  Una cookie es un pequeño archivo de texto almacenado en el navegador del usuario para recordar sus preferencias, idioma, moneda de visualización y optimizar la experiencia de navegación en la plataforma.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">2. Tipos de Cookies Utilizadas</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Cookies Estrictamente Necesarias:</strong> Esenciales para el funcionamiento básico del portal, la selección de idioma (Español, Inglés, Francés) y la persistencia de moneda (USD/DOP).
                  </li>
                  <li>
                    <strong>Cookies Rendimiento y Analíticas:</strong> Nos ayudan a comprender de manera anónima cómo los usuarios interactúan con la plataforma para optimizar la velocidad y usabilidad.
                  </li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">3. Gestión y Configuración</h3>
                <p>
                  Usted puede ajustar o deshabilitar el uso de cookies directamente a través del menú de configuración de su navegador web en cualquier momento. Tenga en cuenta que deshabilitar cookies técnicas puede afectar ciertas funciones del portal.
                </p>
              </section>
            </>
          )}

          {type === 'legal' && (
            <>
              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">1. Identificación del Titular</h3>
                <p>
                  En cumplimiento del régimen normativo comercial de la República Dominicana, se informa que la propiedad de este portal corresponde a <strong>GADMICON S.R.L.</strong>, sociedad comercial constituida con Registro Mercantil y RNC autorizados, con domicilio en Gral. Eusebio Manzueta F23, República Dominicana.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">2. Marcas y Marco de Propiedad Horizontal (Ley No. 5038)</h3>
                <p>
                  GADMICON S.R.L. opera bajo estricto cumplimiento del régimen de propiedad en condominio regulado por la Ley No. 5038 de República Dominicana y sus reglamentos complementarios. Los servicios jurídicos y de administración contable respetan los estatutos de cada junta de condómines y actas de asamblea legalmente constituidas.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">3. Canal de Notificaciones Oficiales</h3>
                <p>
                  Cualquier comunicación o notificación judicial o extrajudicial deberá enviarse a la sede social corporativa o al correo institucional <strong>legal@gadmicon.com</strong>.
                </p>
              </section>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50 rounded-b-2xl flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors cursor-pointer"
          >
            Entendido y Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export const CookieBanner: React.FC<{ onOpenPolicy: () => void }> = ({ onOpenPolicy }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gadmicon_cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gadmicon_cookie_consent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-40 bg-slate-900/95 backdrop-blur-md text-white p-5 rounded-2xl shadow-2xl border border-slate-800 flex flex-col gap-3 transition-all">
      <div className="flex items-start gap-3">
        <Cookie className="w-6 h-6 text-sky-400 shrink-0 mt-0.5" />
        <div className="text-xs leading-relaxed text-slate-300">
          <p className="font-semibold text-white mb-1 text-sm">Aviso sobre Uso de Cookies</p>
          Utilizamos cookies propias y de análisis para garantizar la seguridad, personalizar idioma y moneda, y mejorar la experiencia de uso del portal según los estándares legales.
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 pt-1">
        <button
          onClick={onOpenPolicy}
          className="text-xs text-sky-400 hover:text-sky-300 font-medium underline cursor-pointer"
        >
          Más información
        </button>
        <button
          onClick={handleAccept}
          className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
        >
          <Check className="w-4 h-4" />
          Aceptar todas
        </button>
      </div>
    </div>
  );
};
