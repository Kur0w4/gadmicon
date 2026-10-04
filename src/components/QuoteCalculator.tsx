import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Home, 
  Sparkles, 
  TrendingUp, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  FileSpreadsheet,
  CheckCircle2,
  Mail,
  User,
  Phone
} from 'lucide-react';
import { Currency, LeadQuote, PropertyType } from '../types';
import { Translations } from '../i18n/translations';
import { calculatePreliminaryQuote, insertLeadQuote } from '../services/storageService';

interface QuoteCalculatorProps {
  t: Translations;
  initialCurrency: Currency;
  initialPropertyType?: PropertyType;
  initialUnits?: number;
  initialServices?: string[];
  onQuoteSubmitted?: (lead: LeadQuote) => void;
  onGoToConsole?: () => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  t,
  initialCurrency,
  initialPropertyType = 'Apartamento',
  initialUnits = 4,
  initialServices,
  onQuoteSubmitted,
  onGoToConsole,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [propertyType, setPropertyType] = useState<PropertyType>(initialPropertyType);
  const [unitsCount, setUnitsCount] = useState<number>(initialUnits);
  const [preferredCurrency, setPreferredCurrency] = useState<Currency>(initialCurrency);
  const [locationArea, setLocationArea] = useState<string>('Santo Domingo (Piantini / Naco / Bella Vista)');

  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialServices && initialServices.length > 0
      ? initialServices
      : ['Gestión Integral', 'Mantenimiento Preventivo']
  );

  const [clientName, setClientName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedLead, setSubmittedLead] = useState<LeadQuote | null>(null);

  // Sync if initialCurrency changes
  useEffect(() => {
    setPreferredCurrency(initialCurrency);
  }, [initialCurrency]);

  const propertyOptions: { type: PropertyType; icon: React.ReactNode; label: string; desc: string }[] = [
    { type: 'Apartamento', icon: <Building2 className="w-5 h-5" />, label: 'Apartamento', desc: 'Residencias urbanas individuales o en bloque' },
    { type: 'Penthouse', icon: <Sparkles className="w-5 h-5" />, label: 'Penthouse', desc: 'Inmuebles de alta gama en últimos niveles' },
    { type: 'Villa', icon: <Home className="w-5 h-5" />, label: 'Villa Exclusiva', desc: 'Propiedades unifamiliares costeras o resort' },
    { type: 'Torre Residencial', icon: <TrendingUp className="w-5 h-5" />, label: 'Torre Residencial', desc: 'Edificios multifamiliares completos' },
  ];

  const availableServices = [
    { id: 'Gestión Integral', label: 'Gestión Integral de Cobranza & Arrendamiento', feeDesc: 'Cobro, contratos y reportes' },
    { id: 'Mantenimiento Preventivo', label: 'Mantenimiento Técnico Preventivo & Climatización', feeDesc: 'Inspecciones periódicas y soporte técnico' },
    { id: 'Housekeeping 5★', label: 'Limpieza y Housekeeping Hotelero 5 Estrellas', feeDesc: 'Acondicionamiento y lencería premium' },
    { id: 'Renta Corta / Airbnb Luxe', label: 'Gestión de Renta Vacacional (Airbnb Luxe / Vrbo)', feeDesc: 'Optimización de tarifas y recepción VIP' },
    { id: 'Auditoría DGII', label: 'Cumplimiento Fiscal ante DGII & Condominios', feeDesc: 'Contabilidad transparente y balances' },
  ];

  const toggleService = (svcId: string) => {
    if (selectedServices.includes(svcId)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svcId));
      }
    } else {
      setSelectedServices([...selectedServices, svcId]);
    }
  };

  // Calculation
  const calculation = calculatePreliminaryQuote(
    propertyType,
    unitsCount,
    preferredCurrency,
    selectedServices
  );

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!propertyType) newErrors.propertyType = t.quote.requiredField;
    }

    if (step === 2) {
      if (!unitsCount || unitsCount < 1) newErrors.unitsCount = 'Debe indicar al menos 1 unidad.';
      if (unitsCount > 500) newErrors.unitsCount = 'Para más de 500 unidades contacte a corporativo.';
    }

    if (step === 3) {
      if (selectedServices.length === 0) newErrors.services = 'Seleccione al menos un servicio.';
    }

    if (step === 4) {
      if (!clientName.trim()) {
        newErrors.clientName = 'El nombre del cliente o empresa es obligatorio.';
      }
      if (!email.trim()) {
        newErrors.email = 'El correo electrónico es obligatorio.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        newErrors.email = 'Ingrese un correo electrónico válido.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(4, prev + 1));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);

    // Simulate Supabase network call + n8n webhook delay
    setTimeout(() => {
      const { lead } = insertLeadQuote({
        client_name: clientName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        property_type: propertyType,
        units_count: unitsCount,
        preferred_currency: preferredCurrency,
        selected_services: selectedServices,
        notes: `Ubicación: ${locationArea}. ${notes}`.trim(),
      });

      setIsSubmitting(false);
      setSubmittedLead(lead);

      if (onQuoteSubmitted) {
        onQuoteSubmitted(lead);
      }
    }, 750);
  };

  const handleResetForm = () => {
    setSubmittedLead(null);
    setCurrentStep(1);
    setClientName('');
    setEmail('');
    setPhone('');
    setNotes('');
  };

  return (
    <section id="cotizar" className="py-16 sm:py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.quote.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            {t.quote.subtitle}
          </p>
        </div>

        {/* Main Card Container */}
        <div className="max-w-4xl mx-auto">
          
          {submittedLead ? (
            /* SUCCESS CONFIRMATION SCREEN */
            <div className="rounded-2xl bg-white border border-emerald-200 p-8 sm:p-10 shadow-md text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600 shadow-xs">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {t.quote.successTitle}
                </h3>
                <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                  {t.quote.successMessage}
                </p>
              </div>

              {/* Lead Summary Card */}
              <div className="max-w-lg mx-auto bg-white rounded-xl p-5 border border-slate-200 text-left space-y-3 shadow-xs">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200 text-xs text-slate-500">
                  <span>Referencia de Registro:</span>
                  <span className="font-mono text-blue-600 font-semibold">{submittedLead.id.substring(0, 16)}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500">Cliente:</span>
                    <p className="font-semibold text-slate-900">{submittedLead.client_name}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Correo:</span>
                    <p className="font-semibold text-slate-900">{submittedLead.email}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Propiedad:</span>
                    <p className="font-semibold text-slate-900">{submittedLead.property_type} ({submittedLead.units_count} unidades)</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Tarifa Estimada:</span>
                    <p className="font-semibold text-blue-600">
                      {submittedLead.preferred_currency === 'USD' ? '$' : 'RD$'}{submittedLead.estimated_monthly_fee?.toLocaleString()} / mes
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center gap-2 text-[11px] text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Solicitud enviada al equipo de administración Alero Real Estate</span>
                </div>
              </div>

              {/* Next Steps Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                {onGoToConsole && (
                  <button
                    id="view-in-console-btn"
                    onClick={onGoToConsole}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Ver Registro en Consola Supabase & n8n</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                <button
                  id="quote-new-btn"
                  onClick={handleResetForm}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Crear Otra Cotización
                </button>
              </div>
            </div>
          ) : (
            /* MULTI-STEP FORM */
            <div className="rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden">
              
              {/* Stepper Header */}
              <div className="bg-white border-b border-slate-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4].map((stepNum) => {
                      const isPast = currentStep > stepNum;
                      const isCurrent = currentStep === stepNum;
                      return (
                        <div key={stepNum} className="flex items-center">
                          <button
                            type="button"
                            onClick={() => {
                              if (stepNum < currentStep) setCurrentStep(stepNum);
                            }}
                            disabled={stepNum > currentStep}
                            className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                              isCurrent
                                ? 'bg-blue-600 text-white shadow-xs'
                                : isPast
                                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                : 'bg-slate-100 text-slate-500 border border-slate-200'
                            }`}
                          >
                            {isPast ? <Check className="w-3.5 h-3.5" /> : stepNum}
                          </button>
                          {stepNum < 4 && (
                            <div className={`w-6 sm:w-10 h-[2px] mx-1 ${isPast ? 'bg-blue-400' : 'bg-slate-200'}`} />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-mono text-slate-500 uppercase">
                      Paso {currentStep} de 4
                    </span>
                    <div className="text-xs font-bold text-slate-900">
                      {currentStep === 1 && t.quote.step1Title}
                      {currentStep === 2 && t.quote.step2Title}
                      {currentStep === 3 && t.quote.step3Title}
                      {currentStep === 4 && t.quote.step4Title}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-6 sm:p-8">
                
                {/* STEP 1: Tipología */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {t.quote.step1Title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        {t.quote.step1Desc}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {propertyOptions.map((opt) => {
                        const isSelected = propertyType === opt.type;
                        return (
                          <button
                            key={opt.type}
                            type="button"
                            id={`prop-opt-${opt.type.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setPropertyType(opt.type)}
                            className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-blue-50/50 border-blue-400 shadow-xs ring-1 ring-blue-400/30'
                                : 'bg-white border-slate-200 hover:border-blue-200 hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                                {opt.icon}
                              </div>
                              {isSelected && <Check className="w-4 h-4 text-blue-600" />}
                            </div>
                            <div className="font-bold text-slate-900 text-sm">
                              {opt.label}
                            </div>
                            <div className="text-xs text-slate-500 mt-1">
                              {opt.desc}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: Escala & Moneda */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {t.quote.step2Title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        {t.quote.step2Desc}
                      </p>
                    </div>

                    {/* Units Count Slider & Number Input */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                          {t.quote.unitsCount}
                        </label>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setUnitsCount((prev) => Math.max(1, prev - 1))}
                            className="w-7 h-7 rounded bg-white hover:bg-slate-50 text-slate-700 font-bold flex items-center justify-center text-sm border border-slate-300 shadow-2xs cursor-pointer"
                          >
                            -
                          </button>
                          <span className="w-14 text-center font-mono font-bold text-base text-slate-900">
                            {unitsCount}
                          </span>
                          <button
                            type="button"
                            onClick={() => setUnitsCount((prev) => prev + 1)}
                            className="w-7 h-7 rounded bg-white hover:bg-slate-50 text-slate-700 font-bold flex items-center justify-center text-sm border border-slate-300 shadow-2xs cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <input
                        type="range"
                        min="1"
                        max="80"
                        value={unitsCount}
                        onChange={(e) => setUnitsCount(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />

                      <div className="flex justify-between text-[11px] text-slate-500">
                        <span>1 unidad</span>
                        <span>Tier Portfolio (&gt; 6 unidades: -12%)</span>
                        <span>Enterprise (&gt; 20 unidades: -20%)</span>
                      </div>
                    </div>

                    {/* Preferred Currency Selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        {t.quote.currency}
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          id="currency-usd-opt"
                          onClick={() => setPreferredCurrency('USD')}
                          className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                            preferredCurrency === 'USD'
                              ? 'bg-blue-50 border-blue-400 text-slate-900'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <div className="font-bold text-sm text-slate-900">Dólares Americanos (USD $)</div>
                          <div className="text-xs text-slate-500">Estándar para inversiones internacionales</div>
                        </button>
                        <button
                          type="button"
                          id="currency-dop-opt"
                          onClick={() => setPreferredCurrency('DOP')}
                          className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                            preferredCurrency === 'DOP'
                              ? 'bg-blue-50 border-blue-400 text-slate-900'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <div className="font-bold text-sm text-slate-900">Pesos Dominicanos (DOP RD$)</div>
                          <div className="text-xs text-slate-500">Facturación fiscal local con RNC</div>
                        </button>
                      </div>
                    </div>

                    {/* Location selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Ubicación del Inmueble en República Dominicana
                      </label>
                      <select
                        value={locationArea}
                        onChange={(e) => setLocationArea(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="Santo Domingo (Piantini / Naco / Bella Vista)">
                          Santo Domingo Centro (Piantini, Naco, Bella Vista, Anacaona)
                        </option>
                        <option value="Punta Cana / Cap Cana">
                          Punta Cana / Cap Cana Marina & Golf
                        </option>
                        <option value="Las Terrenas / Samaná">
                          Las Terrenas / Samaná Costa Norte
                        </option>
                        <option value="La Romana / Casa de Campo">
                          La Romana / Casa de Campo
                        </option>
                        <option value="Otra Zona de República Dominicana">
                          Otra Zona de República Dominicana
                        </option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 3: Alcance de Servicios */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {t.quote.step3Title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        {t.quote.step3Desc}
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      {availableServices.map((svc) => {
                        const isChecked = selectedServices.includes(svc.id);
                        return (
                          <div
                            key={svc.id}
                            onClick={() => toggleService(svc.id)}
                            className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                              isChecked
                                ? 'bg-blue-50/60 border-blue-400 shadow-2xs'
                                : 'bg-white border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                                isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'
                              }`}>
                                {isChecked && <Check className="w-3.5 h-3.5" />}
                              </div>
                              <div>
                                <div className="text-xs sm:text-sm font-semibold text-slate-900">
                                  {svc.label}
                                </div>
                                <div className="text-[11px] text-slate-500">
                                  {svc.feeDesc}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 4: Datos de Contacto */}
                {currentStep === 4 && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {t.quote.step4Title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        {t.quote.step4Desc}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          <span>{t.quote.fullName} *</span>
                        </label>
                        <input
                          id="quote-client-name"
                          type="text"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Ej. Inversiones Alero SRL / Carlos Pérez"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 placeholder:text-slate-400"
                        />
                        {errors.clientName && (
                          <p className="text-xs text-rose-500">{errors.clientName}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          <span>{t.quote.emailAddress} *</span>
                        </label>
                        <input
                          id="quote-client-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="propietario@empresa.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 placeholder:text-slate-400"
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>{t.quote.phoneNumber}</span>
                      </label>
                      <input
                        id="quote-client-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (809) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 placeholder:text-slate-400"
                      />
                    </div>

                    {/* Notes */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        {t.quote.additionalNotes}
                      </label>
                      <textarea
                        id="quote-client-notes"
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Detalles sobre amenidades, contratos vigentes, fechas deseadas..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 resize-none placeholder:text-slate-400"
                      />
                    </div>
                  </form>
                )}

                {/* Instant Calculation Live Box */}
                <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {t.quote.instantCalculation}
                      </span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                        Tier {calculation.tier}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {preferredCurrency === 'USD' ? '$' : 'RD$'}{calculation.monthlyFee.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500">
                        {t.quote.perMonth} ({preferredCurrency})
                      </span>
                    </div>

                    {calculation.discountPct > 0 && (
                      <p className="text-[11px] text-emerald-600 font-medium mt-1">
                        {t.quote.volumeDiscount}: -{calculation.discountPct}%
                      </p>
                    )}
                  </div>

                  <div className="text-right sm:text-right text-xs text-slate-500 space-y-1">
                    <div>{unitsCount} {unitsCount === 1 ? t.quote.unitSingular : t.quote.unitPlural} • {propertyType}</div>
                    <div className="text-[11px] text-slate-400">{selectedServices.length} {t.quote.servicesIncludedCount}</div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-6">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      id="quote-prev-btn"
                      onClick={handlePrev}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>{t.quote.prev}</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      id="quote-next-btn"
                      onClick={handleNext}
                      className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                    >
                      <span>{t.quote.next}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      id="quote-submit-btn"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{t.quote.submitting}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.quote.submit}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
