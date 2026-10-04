import { Language } from '../types';

export interface Translations {
  nav: {
    home: string;
    services: string;
    projects: string;
    quote: string;
    contact: string;
    console: string;
    ctaQuote: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    contactQuestion: string;
    contactAction: string;
    metric1Val: string;
    metric1Label: string;
    metric2Val: string;
    metric2Label: string;
    metric3Val: string;
    metric3Label: string;
    quickCalcTitle: string;
    quickCalcDesc: string;
  };
  services: {
    title: string;
    subtitle: string;
    badge: string;
    items: {
      id: string;
      title: string;
      desc: string;
      tags: string[];
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    badge: string;
    all: string;
    viewGallery: string;
    photosCount: string;
    locationLabel: string;
    unitsLabel: string;
    statusLabel: string;
    activeStatus: string;
    modalClose: string;
    unitSingular: string;
    unitPlural: string;
    categories: {
      all: string;
      torres: string;
      villas: string;
      penthouses: string;
      playa: string;
    };
  };
  about: {
    badge: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    ctaButton: string;
    pillars: {
      title: string;
      desc: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    teamTitle: string;
    officeTitle: string;
    officeAddress: string;
    phoneTitle: string;
    phoneDesc: string;
    emailTitle: string;
    hoursTitle: string;
    hoursText: string;
    hoursEmergency: string;
    visitQuestion: string;
    successTitle: string;
    successMessage: string;
    sendAnother: string;
    formTitle: string;
    formSubtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    propertyLabel: string;
    propertyPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitting: string;
    submit: string;
    privacyNote: string;
  };
  quote: {
    title: string;
    subtitle: string;
    badge: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    step4Title: string;
    step1Desc: string;
    step2Desc: string;
    step3Desc: string;
    step4Desc: string;
    propertyType: string;
    unitsCount: string;
    currency: string;
    servicesIncluded: string;
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    additionalNotes: string;
    next: string;
    prev: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    instantCalculation: string;
    estimatedMonthly: string;
    disclaimer: string;
    requiredField: string;
    perMonth: string;
    volumeDiscount: string;
    unitSingular: string;
    unitPlural: string;
    servicesIncludedCount: string;
    options: {
      properties: { id: string; label: string; desc: string }[];
      services: { id: string; label: string; desc: string }[];
    };
  };
  console: {
    title: string;
    subtitle: string;
    supabaseTab: string;
    n8nTab: string;
    sqlTab: string;
    leadsCount: string;
    projectsCount: string;
    n8nStatus: string;
    simulateWebhook: string;
    resetData: string;
    refreshData: string;
  };
  footer: {
    tagline: string;
    rights: string;
    location: string;
    navTitle: string;
    aboutLink: string;
    contactLink: string;
    customerService: string;
    backToTop: string;
    footerTaglineBottom: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      projects: 'Condominios',
      quote: 'Cotizar',
      contact: 'Contacto',
      console: 'Portal Clientes',
      ctaQuote: 'Solicitar Propuesta',
    },
    hero: {
      badge: 'Administración de Condominios, Plazas y Residencias',
      headline: 'Tranquilidad, orden y valor para su comunidad condominal',
      headlineHighlight: 'con Gadmicon',
      subheadline: 'Administramos su condominio o torre residencial con total transparencia contable, mantenimiento técnico continuo y atención cercana para juntas de vecinos y propietarios en República Dominicana.',
      ctaPrimary: 'Solicitar Propuesta de Administración',
      ctaSecondary: 'Ver Condominios',
      contactQuestion: '¿Prefieres hablar directamente con nosotros?',
      contactAction: 'Contactar aquí',
      metric1Val: '+45',
      metric1Label: 'Comunidades y Torres Administradas',
      metric2Val: '99.2%',
      metric2Label: 'Cobranza y Cumplimiento Mensual',
      metric3Val: '24/7',
      metric3Label: 'Atención a Emergencias Técnicas',
      quickCalcTitle: 'Estimador Rápido de Cuota de Gestión',
      quickCalcDesc: 'Conozca un valor referencial para la administración integral de su condominio o torre.',
    },
    services: {
      badge: 'Nuestros Servicios',
      title: 'Nuestros Servicios',
      subtitle: 'Nos encargamos de todos los aspectos operativos, financieros y legales para que vivir o invertir en su inmueble sea una experiencia grata y sin fricciones.',
      items: [
        {
          id: 'gestion-integral',
          title: 'Administración Contable & Cobranzas',
          desc: 'Emisión de recibos de cuotas, cobranza preventiva, conciliación bancaria mensual, pago a suplidores y estados financieros transparentes para la asamblea.',
          tags: ['Cuentas Claras', 'Reporte Mensual', 'Gestión de Mora'],
        },
        {
          id: 'mantenimiento-tecnico',
          title: 'Mantenimiento Preventivo & Correctivo',
          desc: 'Supervisión de generadores eléctricos, bombas sumergibles, cisternas, ascensores, portones eléctricos y pintura de áreas comunes.',
          tags: ['Inspección Semanal', 'Plantas Eléctricas', 'Proveedores Calificados'],
        },
        {
          id: 'housekeeping-5star',
          title: 'Limpieza, Conserjería y Jardinería',
          desc: 'Personal debidamente depurado y uniformado, protocolos rigurosos de aseo en lobbies y pasillos, y embellecimiento de áreas verdes.',
          tags: ['Personal Depurado', 'Lobbies Impecables', 'Jardines Cuidados'],
        },
        {
          id: 'renta-vacacional',
          title: 'Gestión de Alquileres y Renta Corta',
          desc: 'Supervisión de reglas de convivencia para huéspedes, recepción, control de accesos y cuidado de las áreas comunes del edificio.',
          tags: ['Control de Huéspedes', 'Reglamento Interno', 'Seguridad de Acceso'],
        },
        {
          id: 'auditoria-dgii',
          title: 'Asesoría Legal y Cumplimiento Ley 5038',
          desc: 'Convocatoria formal de asambleas ordinarias y extraordinarias, redacción de actas, registro ante la DGII y cumplimiento normativo.',
          tags: ['Ley de Condominios', 'Asambleas Formales', 'DGII al Día'],
        },
        {
          id: 'tecnologia-supabase',
          title: 'Atención y Comunicación Continua',
          desc: 'Canal directo de atención para condómines vía WhatsApp y correo, recepción de reportes técnicos y resolución rápida de incidencias.',
          tags: ['Atención Directa', 'Resolución Rápida', 'Vía WhatsApp'],
        },
      ],
    },
    projects: {
      badge: 'Portafolio Administrado',
      title: 'Condominios y Residenciales en Nuestra Gestión',
      subtitle: 'Ejemplos de torres y comunidades gestionadas con los altos estándares de Gadmicon.',
      all: 'Todos los Inmuebles',
      viewGallery: 'Ver Detalles del Inmueble',
      photosCount: 'fotografías del condominio',
      locationLabel: 'Ubicación',
      unitsLabel: 'Unidades',
      statusLabel: 'Estado',
      activeStatus: 'En Administración Activa',
      modalClose: 'Cerrar Ficha',
      unitSingular: 'unidad',
      unitPlural: 'unidades',
      categories: {
        all: 'Todos los Inmuebles',
        torres: 'Torres Residenciales',
        villas: 'Villas de Lujo',
        penthouses: 'Penthouses Colección',
        playa: 'Residencias de Playa',
      },
    },
    about: {
      badge: 'Sobre nosotros',
      heading: 'Gestión profesional con visión humana, orden y tranquilidad para su comunidad.',
      paragraph1: 'En Gadmicon nos dedicamos a la administración profesional, mantenimiento preventivo y dirección operativa de condominios residenciales, torres de apartamentos y plazas comerciales.',
      paragraph2: 'Trabajamos de la mano con las juntas de vecinos y propietarios para transformar la convivencia y asegurar que el patrimonio común funcione a la perfección: desde la cobranza puntual del mantenimiento hasta el funcionamiento impecable de ascensores, plantas eléctricas, seguridad y áreas sociales.',
      paragraph3: 'Gadmicon nace para brindar una administración patrimonial profesional y transparente, asegurando que cada residencial, torre y plaza comercial mantenga el más alto estándar de servicio continuo, plusvalía y armonía entre propietarios.',
      ctaButton: 'Hablar con un asesor de Gadmicon',
      pillars: [
        {
          title: 'Transparencia & Rendición de Cuentas',
          desc: 'Informes contables mensuales claros, conciliaciones bancarias y libros de cuentas abiertos para cada junta de condómines y propietario.',
        },
        {
          title: 'Equipo Humano Cercano & Profesional',
          desc: 'Supervisores de campo, técnicos certificados y personal de conserjería capacitado con vocación de servicio y resolución rápida.',
        },
        {
          title: 'Cumplimiento Legal y Ley 5038',
          desc: 'Asesoría jurídica y aplicación estricta del régimen de condominio en República Dominicana, actas de asamblea y cobranza extrajudicial preventiva.',
        },
        {
          title: 'Preservación de la Plusvalía',
          desc: 'Cuidamos cada detalle arquitectónico y las áreas comunes para que el valor de mercado de cada inmueble crezca consistentemente año tras año.',
        },
      ],
    },
    contact: {
      title: 'Conversemos sobre las necesidades de su condominio',
      subtitle: 'Nuestro equipo de administradores y técnicos está disponible para realizar una evaluación presencial de su propiedad sin ningún compromiso.',
      teamTitle: 'Equipo de Administración • Gadmicon',
      officeTitle: 'Sede Operativa',
      officeAddress: 'Oficina corporativa Gadmicon, Gral. Eusebio Manzueta F23, Santiago & Santo Domingo, Rep. Dominicana',
      phoneTitle: 'Teléfono / WhatsApp',
      phoneDesc: 'Atención inmediata a juntas de vecinos y emergencias técnicas',
      emailTitle: 'Correo Electrónico',
      hoursTitle: 'Horario de Oficina',
      hoursText: 'Lunes a Viernes: 8:00 AM – 6:00 PM',
      hoursEmergency: 'Guardias de emergencia técnica 24/7 para condominios bajo contrato active',
      visitQuestion: '¿Desea que visitemos su edificio para presentar nuestra propuesta a la Junta de Condómines?',
      successTitle: '¡Mensaje Recibido!',
      successMessage: 'Gracias por comunicarse con Gadmicon. Un administrador asignado revisará su mensaje y le contactará a la brevedad.',
      sendAnother: 'Enviar otro mensaje',
      formTitle: 'Envíenos una consulta',
      formSubtitle: 'Respuesta garantizada en menos de 24 horas laborables.',
      fullNameLabel: 'Nombre completo *',
      fullNamePlaceholder: 'Ej. Ing. Carlos Mendoza',
      phoneLabel: 'Teléfono / WhatsApp *',
      phonePlaceholder: '+1 (809) 000-0000',
      emailLabel: 'Correo electrónico *',
      emailPlaceholder: 'carlos@condominio.com',
      propertyLabel: 'Condominio, Plaza o Inmueble',
      propertyPlaceholder: 'Ej. Torre Bellas Artes / Residencial Los Cerezos',
      messageLabel: '¿En qué podemos ayudarle?',
      messagePlaceholder: 'Detalle las necesidades de su condominio (ej. cobranza de cuotas, mantenimiento de planta eléctrica, conserjería...)',
      submitting: 'Enviando consulta...',
      submit: 'Enviar Mensaje',
      privacyNote: 'Sus datos son tratados con estricta confidencialidad profesional y no serán compartidos con terceros.',
    },
    quote: {
      badge: 'Cotizador para su Edificio',
      title: 'Solicite una Propuesta de Administración',
      subtitle: 'Complete los datos básicos de su condominio para estimar la inversión y coordinar una visita técnica de levantamiento sin costo.',
      step1Title: 'Tipo de Inmueble',
      step1Desc: 'Indique las características principales de la propiedad a administrar.',
      step2Title: 'Unidades y Moneda',
      step2Desc: 'Cantidad aproximada de apartamentos o locales en el condominio.',
      step3Title: 'Alcance de Servicios',
      step3Desc: 'Seleccione las áreas en las que su condominio requiere apoyo.',
      step4Title: 'Datos de Contacto',
      step4Desc: 'Información para enviarle la propuesta formal o coordinar asamblea.',
      propertyType: 'Tipo de Propiedad',
      unitsCount: 'Número de Unidades / Apartamentos',
      currency: 'Moneda Preferida',
      servicesIncluded: 'Servicios Requeridos',
      fullName: 'Nombre del Solicitante o Miembro de Junta',
      emailAddress: 'Correo Electrónico',
      phoneNumber: 'Teléfono / WhatsApp de Contacto',
      additionalNotes: 'Nombre del condominio, ubicación o comentarios',
      next: 'Siguiente Paso',
      prev: 'Atrás',
      submit: 'Solicitar Propuesta para mi Condominio',
      submitting: 'Enviando solicitud...',
      successTitle: '¡Propuesta Solicitada Exitosamente!',
      successMessage: 'Hemos recibido la información de su condominio. Un administrador del equipo de Gadmicon le contactará para presentarle la propuesta formal.',
      instantCalculation: 'Estimado Referencial de Administración',
      estimatedMonthly: 'Cuota Mensual Estimada',
      disclaimer: '*Tarifa referencial sujeta a evaluación presencial de las maquinarias, áreas sociales y necesidades específicas del condominio.',
      requiredField: 'Este campo es requerido.',
      perMonth: '/ mes',
      volumeDiscount: 'Descuento institucional por volumen aplicado',
      unitSingular: 'unidad',
      unitPlural: 'unidades',
      servicesIncludedCount: 'servicios incluidos',
      options: {
        properties: [
          { id: 'torre_residencial', label: 'Torre Residencial', desc: 'Edificios en altura con áreas comunes, ascensores y planta' },
          { id: 'residencial_horizontal', label: 'Residencial Horizontal', desc: 'Conjuntos de apartamentos o casas cerradas' },
          { id: 'plaza_comercial', label: 'Plaza Comercial / Mixta', desc: 'Locales comerciales, oficinas y parqueos comunes' },
          { id: 'villa_lujo', label: 'Villas o Complejo Privado', desc: 'Propiedades exclusivas con jardines y piscinas' },
        ],
        services: [
          { id: 'gestion_contable', label: 'Gestión Contable & Cobranzas', desc: 'Emisión de recibos, cobranza y reporte mensual' },
          { id: 'mantenimiento_tecnico', label: 'Mantenimiento Técnico', desc: 'Supervisión de plantas, bombas y equipos' },
          { id: 'limpieza_conserjeria', label: 'Limpieza & Conserjería', desc: 'Personal capacitado para aseo de áreas comunes' },
          { id: 'asesoria_legal', label: 'Asesoría Legal Ley 5038', desc: 'Asambleas, actas y régimen de condominio' },
        ],
      },
    },
    console: {
      title: 'Portal Informativo de Clientes',
      subtitle: 'Supervisión de solicitudes y registros del sistema.',
      supabaseTab: 'Base de Datos',
      n8nTab: 'Automatización',
      sqlTab: 'Estructura Técnica',
      leadsCount: 'Solicitudes Recibidas',
      projectsCount: 'Condominios Registrados',
      n8nStatus: 'Notificaciones Activas',
      simulateWebhook: 'Enviar Registro de Prueba',
      resetData: 'Restablecer',
      refreshData: 'Actualizar',
    },
    footer: {
      tagline: 'Administración profesional de condominios, residenciales y plazas comerciales en República Dominicana.',
      rights: 'Todos los derechos reservados.',
      location: 'Gral. Eusebio Manzueta F23 • Santiago & Santo Domingo, República Dominicana',
      navTitle: 'Navegación',
      aboutLink: 'Sobre Gadmicon',
      contactLink: 'Contacto & Asesoría',
      customerService: 'Atención al Cliente',
      backToTop: 'Volver al inicio',
      footerTaglineBottom: 'Administración de Condominios • Plazas • Apartamentos',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Managed Properties',
      quote: 'Management Quote',
      contact: 'Contact',
      console: 'Client Portal',
      ctaQuote: 'Request Proposal',
    },
    hero: {
      badge: 'Professional Condominium, Plaza & Residence Management',
      headline: 'Peace of mind, transparency, and value for your residential community',
      headlineHighlight: 'with Gadmicon',
      subheadline: 'We manage your condominium, tower, or commercial plaza with full financial accountability, preventive technical upkeep, and dedicated care for homeowner boards and owners across the Dominican Republic.',
      ctaPrimary: 'Request Management Proposal',
      ctaSecondary: 'View Condominiums',
      contactQuestion: 'Prefer to speak with us directly?',
      contactAction: 'Contact us here',
      metric1Val: '+45',
      metric1Label: 'Communities & Towers Managed',
      metric2Val: '99.2%',
      metric2Label: 'Monthly HOA Collection Rate',
      metric3Val: '24/7',
      metric3Label: 'Technical Emergency Support',
      quickCalcTitle: 'Quick Management Fee Estimator',
      quickCalcDesc: 'Get a benchmark estimate for the full professional management of your condominium or building.',
    },
    services: {
      badge: 'Our Services',
      title: 'Our Services',
      subtitle: 'We handle all operational, financial, and legal aspects so living or investing in your property is a pleasant, hassle-free experience.',
      items: [
        {
          id: 'gestion-integral',
          title: 'Accounting & Collection Management',
          desc: 'Monthly HOA fee billing, proactive collection, bank reconciliation, vendor payments, and transparent financial statements for general assemblies.',
          tags: ['Clear Accounting', 'Monthly Reports', 'Arrears Management'],
        },
        {
          id: 'mantenimiento-tecnico',
          title: 'Preventive & Corrective Maintenance',
          desc: 'Supervision of power generators, submersible pumps, water cisterns, elevators, electric gates, and common area maintenance.',
          tags: ['Weekly Inspection', 'Power Generators', 'Vetted Vendors'],
        },
        {
          id: 'housekeeping-5star',
          title: 'Janitorial & Gardening Services',
          desc: 'Vetted, uniformed staff following strict cleaning protocols for lobbies and hallways, along with landscape maintenance.',
          tags: ['Vetted Staff', 'Spotless Lobbies', 'Landscaping'],
        },
        {
          id: 'renta-vacacional',
          title: 'Short-Term Rental & Access Oversight',
          desc: 'Community guideline enforcement for guest stays, front desk reception, access control, and protection of shared amenities.',
          tags: ['Guest Control', 'House Rules', 'Access Security'],
        },
        {
          id: 'auditoria-dgii',
          title: 'Legal & Condominium Law Compliance',
          desc: 'Formal assembly convocations, meeting minutes drafting, DGII tax registration, and regulatory compliance under Law 5038.',
          tags: ['Condo Law 5038', 'Formal Assemblies', 'DGII Tax Status'],
        },
        {
          id: 'tecnologia-supabase',
          title: 'Direct Resident Support & Communication',
          desc: 'Direct WhatsApp and email support channel for owners and board members, rapid ticket response, and incident resolution.',
          tags: ['Direct Support', 'Rapid Resolution', 'WhatsApp Channel'],
        },
      ],
    },
    projects: {
      badge: 'Managed Portfolio',
      title: 'Condominiums & Communities Under Management',
      subtitle: 'Real examples of residential towers and complexes operated to Gadmicon high standards.',
      all: 'All Properties',
      viewGallery: 'View Property Details',
      photosCount: 'property photos',
      locationLabel: 'Location',
      unitsLabel: 'Units',
      statusLabel: 'Status',
      activeStatus: 'Active Management',
      modalClose: 'Close Details',
      unitSingular: 'unit',
      unitPlural: 'units',
      categories: {
        all: 'All Properties',
        torres: 'Residential Towers',
        villas: 'Luxury Villas',
        penthouses: 'Penthouse Collection',
        playa: 'Beachfront Residences',
      },
    },
    about: {
      badge: 'About Us',
      heading: 'Professional management with a human vision, order, and peace of mind for your community.',
      paragraph1: 'At Gadmicon, we specialize in the professional management, preventive upkeep, and operational direction of residential condominiums, apartment towers, and commercial plazas.',
      paragraph2: 'We work hand in hand with condo boards and property owners to foster harmony and ensure shared assets run perfectly: from timely fee collection to flawless operation of elevators, generators, security, and amenities.',
      paragraph3: 'Gadmicon was created to deliver transparent, professional asset administration, ensuring every residential tower and commercial complex maintains the highest standards of service, property value, and community harmony.',
      ctaButton: 'Speak with a Gadmicon Advisor',
      pillars: [
        {
          title: 'Transparency & Accountability',
          desc: 'Clear monthly accounting reports, bank reconciliations, and open financial books accessible to every condo board and owner.',
        },
        {
          title: 'Accessible & Professional Team',
          desc: 'Field supervisors, certified technicians, and trained janitorial staff committed to quick resolution and dedicated service.',
        },
        {
          title: 'Legal Compliance & Law 5038',
          desc: 'Legal guidance and strict enforcement of the Dominican Republic Condominium Law, assembly minutes, and preventive collection.',
        },
        {
          title: 'Property Value Preservation',
          desc: 'We care for every architectural detail and common area so your property value consistently grows year after year.',
        },
      ],
    },
    contact: {
      title: 'Let’s discuss your condominium’s needs',
      subtitle: 'Our management and technical teams are available to conduct an on-site evaluation of your property with no obligation.',
      teamTitle: 'Management Team • Gadmicon',
      officeTitle: 'Operating Headquarters',
      officeAddress: 'Gadmicon Corporate Office, Gral. Eusebio Manzueta F23, Santiago & Santo Domingo, Dominican Republic',
      phoneTitle: 'Phone / WhatsApp',
      phoneDesc: 'Immediate response for condo boards and emergency technical needs',
      emailTitle: 'Email Address',
      hoursTitle: 'Office Hours',
      hoursText: 'Monday to Friday: 8:00 AM – 6:00 PM',
      hoursEmergency: '24/7 technical emergency response for active contract properties',
      visitQuestion: 'Would you like us to visit your building and present a proposal to your Board of Directors?',
      successTitle: 'Message Received!',
      successMessage: 'Thank you for reaching out to Gadmicon. An assigned manager will review your inquiry and contact you promptly.',
      sendAnother: 'Send Another Message',
      formTitle: 'Send Us an Inquiry',
      formSubtitle: 'Guaranteed response within 24 business hours.',
      fullNameLabel: 'Full Name *',
      fullNamePlaceholder: 'e.g. Eng. Carlos Mendoza',
      phoneLabel: 'Phone / WhatsApp *',
      phonePlaceholder: '+1 (809) 000-0000',
      emailLabel: 'Email Address *',
      emailPlaceholder: 'carlos@condominium.com',
      propertyLabel: 'Condominium or Property Name',
      propertyPlaceholder: 'e.g. Bellas Artes Tower / Los Cerezos Residence',
      messageLabel: 'How can we help you?',
      messagePlaceholder: 'Detail your property needs (e.g., fee collections, generator maintenance, janitorial staffing...)',
      submitting: 'Sending inquiry...',
      submit: 'Send Message',
      privacyNote: 'Your details are handled with strict professional confidentiality and will never be shared with third parties.',
    },
    quote: {
      badge: 'Building Quote Engine',
      title: 'Request a Management Proposal',
      subtitle: 'Fill out basic information about your property to estimate investment costs and schedule a free technical site visit.',
      step1Title: 'Property Type',
      step1Desc: 'Specify the main characteristics of the property.',
      step2Title: 'Units & Currency',
      step2Desc: 'Approximate number of apartments or commercial units.',
      step3Title: 'Scope of Services',
      step3Desc: 'Select the operational areas where your building needs support.',
      step4Title: 'Contact Information',
      step4Desc: 'Details to receive your formal proposal or schedule a board presentation.',
      propertyType: 'Property Typology',
      unitsCount: 'Number of Units / Apartments',
      currency: 'Preferred Currency',
      servicesIncluded: 'Services Required',
      fullName: 'Full Name or Board Representative',
      emailAddress: 'Email Address',
      phoneNumber: 'Contact Phone / WhatsApp',
      additionalNotes: 'Building name, location, or additional remarks',
      next: 'Next Step',
      prev: 'Back',
      submit: 'Request Proposal for My Building',
      submitting: 'Submitting request...',
      successTitle: 'Proposal Request Submitted Successfully!',
      successMessage: 'We have received your property information. A Gadmicon manager will get in touch to present a formal proposal.',
      instantCalculation: 'Preliminary Management Estimate',
      estimatedMonthly: 'Estimated Monthly Fee',
      disclaimer: '*Estimated fee subject to on-site inspection of machinery, common areas, and specific building requirements.',
      requiredField: 'This field is required.',
      perMonth: '/ month',
      volumeDiscount: 'Institutional volume discount applied',
      unitSingular: 'unit',
      unitPlural: 'units',
      servicesIncludedCount: 'services included',
      options: {
        properties: [
          { id: 'torre_residencial', label: 'Residential Tower', desc: 'High-rise buildings with common areas, elevators & power plant' },
          { id: 'residencial_horizontal', label: 'Gated Residential Complex', desc: 'Groups of low-rise apartments or gated home communities' },
          { id: 'plaza_comercial', label: 'Commercial / Mixed Plaza', desc: 'Retail stores, corporate offices & shared parking' },
          { id: 'villa_lujo', label: 'Luxury Villas / Private Complex', desc: 'Exclusive properties with private gardens and pools' },
        ],
        services: [
          { id: 'gestion_contable', label: 'Accounting & Collection', desc: 'Billing, collections & monthly financial statements' },
          { id: 'mantenimiento_tecnico', label: 'Technical Maintenance', desc: 'Generator, pump & machinery supervision' },
          { id: 'limpieza_conserjeria', label: 'Janitorial & Cleaning', desc: 'Trained staff for spotless common areas' },
          { id: 'asesoria_legal', label: 'Law 5038 Legal Advisory', desc: 'Assembly meetings, minutes & condo regulations' },
        ],
      },
    },
    console: {
      title: 'Client Information Portal',
      subtitle: 'System requests and database overview.',
      supabaseTab: 'Database',
      n8nTab: 'Automation',
      sqlTab: 'Technical Schema',
      leadsCount: 'Requests Received',
      projectsCount: 'Registered Properties',
      n8nStatus: 'Active Notifications',
      simulateWebhook: 'Send Test Record',
      resetData: 'Reset Data',
      refreshData: 'Refresh',
    },
    footer: {
      tagline: 'Professional management of condominiums, residential complexes, and commercial plazas in the Dominican Republic.',
      rights: 'All rights reserved.',
      location: 'Gral. Eusebio Manzueta F23 • Santiago & Santo Domingo, Dominican Republic',
      navTitle: 'Navigation',
      aboutLink: 'About Gadmicon',
      contactLink: 'Contact & Advisory',
      customerService: 'Customer Support',
      backToTop: 'Back to top',
      footerTaglineBottom: 'Condominium • Plaza • Apartment Management',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      projects: 'Copropriétés',
      quote: 'Devis',
      contact: 'Contact',
      console: 'Espace Client',
      ctaQuote: 'Demander un Devis',
    },
    hero: {
      badge: 'Gestion Professionnelle de Copropriétés et Résidences',
      headline: 'Sérénité, ordre et valeur pour votre communauté',
      headlineHighlight: 'avec Gadmicon',
      subheadline: 'Nous administrons votre copropriété ou tour résidentielle avec une transparence comptable totale, une maintenance technique continue et une écoute attentive des syndics et propriétaires en République Dominicaine.',
      ctaPrimary: 'Demander une Proposition de Gestion',
      ctaSecondary: 'Voir les Copropriétés',
      contactQuestion: 'Vous préférez échanger directement avec nous ?',
      contactAction: 'Contactez-nous ici',
      metric1Val: '+45',
      metric1Label: 'Copropriétés & Tours Administrées',
      metric2Val: '99.2%',
      metric2Label: 'Taux de Recouvrement Mensuel',
      metric3Val: '24/7',
      metric3Label: 'Assistance Technique d’Urgence',
      quickCalcTitle: 'Calculateur Rapide de Gestion',
      quickCalcDesc: 'Obtenez une estimation de référence pour la gestion complète de votre immeuble.',
    },
    services: {
      badge: 'Nos Services',
      title: 'Nos Services',
      subtitle: 'Nous prenons en charge tous les aspects opérationnels, financiers et juridiques pour que votre bien fonctionne sans friction.',
      items: [
        {
          id: 'gestion-integral',
          title: 'Gestion Comptable & Recouvrement',
          desc: 'Facturation des charges, recouvrement préventif, rapprochement bancaire et bilans financiers transparents pour l’assemblée générale.',
          tags: ['Comptabilité Claire', 'Rapports Mensuels', 'Gestion du Retard'],
        },
        {
          id: 'mantenimiento-tecnico',
          title: 'Maintenance Préventive & Technique',
          desc: 'Supervision des générateurs, pompes, cisternes, ascenseurs, portails électriques et entretien des espaces communs.',
          tags: ['Inspection Hebdomadaire', 'Groupes Électrogènes', 'Prestataires Qualifiés'],
        },
        {
          id: 'housekeeping-5star',
          title: 'Nettoyage & Conciergerie',
          desc: 'Personnel formé et uniformisé, règles strictes d’hygiène pour les halls et couloirs, et entretien des espaces verts.',
          tags: ['Personnel Vérifié', 'Halls Impeccables', 'Espaces Verts'],
        },
        {
          id: 'renta-vacacional',
          title: 'Gestion des Accès & Séjours',
          desc: 'Supervision du règlement intérieur pour les visiteurs, accueil et contrôle des accès pour la sécurité des résidents.',
          tags: ['Contrôle Accès', 'Règlement Intérieur', 'Sécurité'],
        },
        {
          id: 'auditoria-dgii',
          title: 'Conformité Juridique & Loi 5038',
          desc: 'Convocation formelle des assemblées, rédaction des procès-verbaux, démarches DGII et respect des réglementations.',
          tags: ['Loi Copropriété 5038', 'Assemblées Formalisées', 'DGII à Jour'],
        },
        {
          id: 'tecnologia-supabase',
          title: 'Communication & Assistance Résidents',
          desc: 'Canal direct via WhatsApp et e-mail pour les résidents, prise en charge rapide des demandes techniques et incidents.',
          tags: ['Assistance Directe', 'Réponse Rapide', 'Canal WhatsApp'],
        },
      ],
    },
    projects: {
      badge: 'Portefeuille Administré',
      title: 'Copropriétés et Résidences en Gestion',
      subtitle: 'Exemples d’immeubles et résidences gérés selon les standards de qualité Gadmicon.',
      all: 'Tous les Biens',
      viewGallery: 'Voir la Fiche du Bien',
      photosCount: 'photos de l’immeuble',
      locationLabel: 'Emplacement',
      unitsLabel: 'Unités',
      statusLabel: 'Statut',
      activeStatus: 'En Gestion Active',
      modalClose: 'Fermer',
      unitSingular: 'unité',
      unitPlural: 'unités',
      categories: {
        all: 'Tous les Biens',
        torres: 'Tours Résidentielles',
        villas: 'Villas de Luxe',
        penthouses: 'Penthouses de Prestige',
        playa: 'Résidences de Plage',
      },
    },
    about: {
      badge: 'À propos de nous',
      heading: 'Une gestion professionnelle alliée à una vision humaine et sereine pour votre communauté.',
      paragraph1: 'Chez Gadmicon, nous sommes spécialisés dans l’administration professionnelle, la maintenance préventive et la direction opérationnelle de copropriétés résidentielles, tours d’habitation et centres commerciaux.',
      paragraph2: 'Nous travaillons main dans la main avec les syndics et copropriétaires pour maintenir un climat d’harmonie et garantir le fonctionnement optimal des équipements communs.',
      paragraph3: 'Gadmicon a été créée pour offrir une gestion transparente et rigoureuse, assurant la valorisation pérenne de chaque immeuble et la satisfaction des résidents.',
      ctaButton: 'Parler avec un conseiller Gadmicon',
      pillars: [
        {
          title: 'Transparence & Rendu de Comptes',
          desc: 'Rapports comptables mensuels clairs et accès ouvert aux livres de comptes pour chaque conseil syndical.',
        },
        {
          title: 'Équipe Proche & Professionnelle',
          desc: 'Superviseurs de terrain, techniciens certifiés et personnel d’entretien dédié au service rapide.',
        },
        {
          title: 'Conformité Juridique Loi 5038',
          desc: 'Accompagnement juridique, tenue des procès-verbaux d’assemblée et application du règlement intérieur.',
        },
        {
          title: 'Préservation de la Valeur',
          desc: 'Protection des détails architecturaux et des espaces communs pour assurer la plus-value de votre bien.',
        },
      ],
    },
    contact: {
      title: 'Échangeons sur les besoins de votre copropriété',
      subtitle: 'Notre équipe est à votre disposition pour réaliser un diagnostic sur place de votre immeuble sans engagement.',
      teamTitle: 'Équipe d’Administration • Gadmicon',
      officeTitle: 'Siège Opérationnel',
      officeAddress: 'Bureau Gadmicon, Gral. Eusebio Manzueta F23, Santiago & Saint-Domingue, Rep. Dominicaine',
      phoneTitle: 'Téléphone / WhatsApp',
      phoneDesc: 'Assistance immédiate pour les syndics et urgences techniques',
      emailTitle: 'Courrier Électronique',
      hoursTitle: 'Heures d’Ouverture',
      hoursText: 'Lundi au Vendredi: 8h00 – 18h00',
      hoursEmergency: 'Service d’urgence technique 24/7 pour les immeubles sous contrat active',
      visitQuestion: 'Souhaitez-vous une visite de notre équipe pour présenter notre offre à votre Conseil Syndical ?',
      successTitle: 'Message Reçu !',
      successMessage: 'Merci d’avoir contacté Gadmicon. Un gestionnaire dédié prendra contact avec vous dans les plus brefs délais.',
      sendAnother: 'Envoyer un autre message',
      formTitle: 'Posez-nous votre question',
      formSubtitle: 'Réponse garantie sous 24 heures ouvrables.',
      fullNameLabel: 'Nom complet *',
      fullNamePlaceholder: 'Ex. M. Carlos Mendoza',
      phoneLabel: 'Téléphone / WhatsApp *',
      phonePlaceholder: '+1 (809) 000-0000',
      emailLabel: 'Courrier électronique *',
      emailPlaceholder: 'carlos@copropriete.com',
      propertyLabel: 'Immeuble ou Copropriété',
      propertyPlaceholder: 'Ex. Tour Bellas Artes / Résidence Los Cerezos',
      messageLabel: 'Comment pouvons-nous vous aider ?',
      messagePlaceholder: 'Précisez les besoins de votre immeuble (recouvrement des charges, entretien du générateur, conciergerie...)',
      submitting: 'Envoi en cours...',
      submit: 'Envoyer le Message',
      privacyNote: 'Vos données sont traitées en toute confidentialité et ne seront pas transmises à des tiers.',
    },
    quote: {
      badge: 'Simulateur de Devis Immeuble',
      title: 'Demandez una Proposition d’Administration',
      subtitle: 'Renseignez les caractéristiques de votre immeuble pour obtenir una estimation et organiser une visite technique gratuite.',
      step1Title: 'Type d’Immeuble',
      step1Desc: 'Indiquez la typologie principale de la propriété.',
      step2Title: 'Unités & Devise',
      step2Desc: 'Nombre approximatif d’appartements ou locaux.',
      step3Title: 'Étendue des Services',
      step3Desc: 'Sélectionnez les domaines dans lesquels vous souhaitez notre intervention.',
      step4Title: 'Coordonnées de Contact',
      step4Desc: 'Informations pour l’envoi de votre proposition personnalisée.',
      propertyType: 'Typologie du Bien',
      unitsCount: 'Nombre d’Unités / Appartements',
      currency: 'Devise Souhaitée',
      servicesIncluded: 'Services Requis',
      fullName: 'Nom du Demandeura ou Membre du Conseil',
      emailAddress: 'Courrier Électronique',
      phoneNumber: 'Téléphone / WhatsApp',
      additionalNotes: 'Nom de la copropriété, localisation ou remarques',
      next: 'Étape Suivante',
      prev: 'Retour',
      submit: 'Demander un Devis pour Mon Immeuble',
      submitting: 'Envoi de la demande...',
      successTitle: 'Demande de Devis Envoyée avec Succès !',
      successMessage: 'Nous avons bien reçu vos informations. Un gestionnaire Gadmicon prendra contact avec vous rapidement.',
      instantCalculation: 'Estimation Prévisionnelle de Gestion',
      estimatedMonthly: 'Tarif Mensuel Estimé',
      disclaimer: '*Tarif donné à titre indicatif sous réserve de visite technique des installations et équipements.',
      requiredField: 'Ce champ est obligatoire.',
      perMonth: '/ mois',
      volumeDiscount: 'Remise pour volume d’unités appliquée',
      unitSingular: 'unité',
      unitPlural: 'unités',
      servicesIncludedCount: 'services inclus',
      options: {
        properties: [
          { id: 'torre_residencial', label: 'Tour Résidentielle', desc: 'Immeuble avec espaces communs, ascenseurs et générateur' },
          { id: 'residencial_horizontal', label: 'Résidence Fermée', desc: 'Ensemble d’appartements bas o maisons en copropriété' },
          { id: 'plaza_comercial', label: 'Centre Commercial / Mixte', desc: 'Boutiques, bureaux et parkings communs' },
          { id: 'villa_lujo', label: 'Villas ou Domaine Privé', desc: 'Propriétés d’exception avec jardins et piscines' },
        ],
        services: [
          { id: 'gestion_contable', label: 'Gestion Comptable & Recouvrement', desc: 'Facturation des appels de fonds et suivi financier' },
          { id: 'mantenimiento_tecnico', label: 'Maintenance Technique', desc: 'Supervision des groupes électrogènes et équipements' },
          { id: 'limpieza_conserjeria', label: 'Nettoyage & Conciergerie', desc: 'Personnel qualifié pour la propreté des communs' },
          { id: 'asesoria_legal', label: 'Accompagnement Loi 5038', desc: 'Gestion des assemblées générales et règlements' },
        ],
      },
    },
    console: {
      title: 'Espace d’Information Client',
      subtitle: 'Supervision des demandes et suivi du système.',
      supabaseTab: 'Base de Données',
      n8nTab: 'Automatisation',
      sqlTab: 'Structure Technique',
      leadsCount: 'Demandes Reçues',
      projectsCount: 'Copropriétés Enregistrées',
      n8nStatus: 'Notifications Actives',
      simulateWebhook: 'Envoyer Test',
      resetData: 'Réinitialiser',
      refreshData: 'Actualiser',
    },
    footer: {
      tagline: 'Administration professionnelle de copropriétés, résidences et centres commerciaux en République Dominicaine.',
      rights: 'Tous droits réservés.',
      location: 'Gral. Eusebio Manzueta F23 • Santiago & Saint-Domingue, République Dominicaine',
      navTitle: 'Navigation',
      aboutLink: 'À propos de Gadmicon',
      contactLink: 'Contact & Conseil',
      customerService: 'Service Client',
      backToTop: 'Haut de page',
      footerTaglineBottom: 'Administration de Copropriétés • Immeubles • Appartements',
    },
  },
};

