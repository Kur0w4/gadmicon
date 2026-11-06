import { Language } from '../types';

export interface Translations {
  nav: {
    home: string;
    services: string;
    projects: string;
    contact: string;
    quote: string;
    console: string;
    ctaContact: string;
  };
  hero: {
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    contactQuestion: string;
    contactAction: string;
  };
  services: {
    title: string;
    subtitle: string;
    badge: string;
    viewDetails: string;
    modalClose: string;
    modalCta: string;
    scopeTitle: string;
    benefitTitle: string;
    modalityTitle: string;
    items: {
      id: string;
      title: string;
      desc: string;
      tags: string[];
      details: {
        scope: string[];
        benefit: string;
        modality: string;
      };
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
    viewOnMap: string;
    servicesTitle: string;
    scopeTitle: string;
    technicalInspection: string;
    residentSupport: string;
    managementLabel: string;
    footerOfficial: string;
    quoteProject: string;
    categories: {
      all: string;
      torres: string;
      villas: string;
      penthouses: string;
      playa: string;
    };
  };
  about: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    ctaButton: string;
    pillars: {
      title: string;
      desc: string;
    }[];
    cards: {
      title: string;
      desc: string;
    }[];
    mvvBadge: string;
    mvvTitle: string;
    mvvSubtitle: string;
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
  quote: {
    badge: string;
    title: string;
    subtitle: string;
    modeGuided: string;
    modeManual: string;
    condoSelectionTitle: string;
    condoSelectionSubtitle: string;
    servicesSelectionTitle: string;
    servicesSelectionSubtitle: string;
    adjustUnitsLabel: string;
    adjustUnitsHelp: string;
    propertyTypeLabel: string;
    unitsLabel: string;
    servicesLabel: string;
    summaryPrefix: string;
    unitsWord: string;
    servicesWord: string;
    switchToManual: string;
    switchToGuided: string;
    propertyTypes: { torre: string; villa: string; penthouse: string; comercial: string };
    serviceOptions: { contable: string; mantenimiento: string; conserjeria: string; legal: string; atencion: string };
    condoProfiles: {
      torre: { name: string; desc: string; unitsHint: string };
      residencial: { name: string; desc: string; unitsHint: string };
      villa: { name: string; desc: string; unitsHint: string };
      penthouse: { name: string; desc: string; unitsHint: string };
      comercial: { name: string; desc: string; unitsHint: string };
    };
    serviceDescriptions: {
      contable: { desc: string; tag: string };
      mantenimiento: { desc: string; tag: string };
      conserjeria: { desc: string; tag: string };
      legal: { desc: string; tag: string };
      atencion: { desc: string; tag: string };
    };
    estimateLabel: string;
    ctaButton: string;
    disclaimer: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      projects: 'Condominios',
      contact: 'Contacto',
      quote: 'Cotización',
      console: 'Portal Clientes',
      ctaContact: 'Solicitar Cotización',
    },
    hero: {
      headline: 'Tranquilidad, orden y valor para su comunidad condominal',
      headlineHighlight: 'con Gadmicon',
      subheadline: 'Administramos su condominio o torre residencial con total transparencia contable, mantenimiento técnico continuo y atención cercana para juntas de vecinos y propietarios en República Dominicana.',
      ctaPrimary: 'Solicitar Propuesta de Administración',
      ctaSecondary: 'Ver Condominios',
      contactQuestion: '¿Prefieres hablar directamente con nosotros?',
      contactAction: 'Contactar aquí',
    },
    services: {
      badge: 'Nuestros Servicios',
      title: 'Nuestros Servicios',
      subtitle: 'Nos encargamos de todos los aspectos operativos, financieros y legales para que vivir o invertir en su inmueble sea una experiencia grata y sin fricciones.',
      viewDetails: 'Conocer más detalles',
      modalClose: 'Cerrar',
      modalCta: 'Solicitar Cotización de este Servicio',
      scopeTitle: 'Qué incluye este servicio',
      benefitTitle: 'Beneficio clave para su propiedad',
      modalityTitle: 'Modalidad de atención',
      items: [
        {
          id: 'gestion-integral',
          title: 'Administración Contable & Cobranzas',
          desc: 'Emisión de recibos de cuotas, cobranza preventiva, conciliación bancaria mensual, pago a suplidores y estados financieros transparentes para la asamblea.',
          tags: ['Cuentas Claras', 'Reporte Mensual', 'Gestión de Mora'],
          details: {
            scope: [
              'Conciliación bancaria mensual y estados de cuenta en tiempo real para la junta de vecinos.',
              'Emisión, entrega y seguimiento riguroso de recibos de cuotas de mantenimiento.',
              'Gestión proactiva de cobranza preventiva y gestión de mora amigable o legal según la Ley 5038.'
            ],
            benefit: 'Cuentas claras, cero sorpresas y total rendición de cuentas ante la asamblea de condómines.',
            modality: 'Supervisión Contable Continua & Cierre Mensual'
          }
        },
        {
          id: 'mantenimiento-tecnico',
          title: 'Mantenimiento Preventivo & Correctivo',
          desc: 'Supervisión de generadores eléctricos, bombas sumergibles, cisternas, ascensores, portones eléctricos y pintura de áreas comunes.',
          tags: ['Inspección Semanal', 'Plantas Eléctricas', 'Proveedores Calificados'],
          details: {
            scope: [
              'Inspección técnica semanal de plantas eléctricas, bombas sumergibles y cisternas.',
              'Supervisión y fiscalización de contratos de ascensores, portones eléctricos y CCTV.',
              'Protocolo de respuesta prioritaria ante contingencias y averías críticas del edificio.'
            ],
            benefit: 'Prolonga la vida útil de los equipos comunes y reduce costos de reparaciones mayores hasta en un 40%.',
            modality: 'Visitas Semanales & Guardias Técnicas 24/7'
          }
        },
        {
          id: 'housekeeping-5star',
          title: 'Limpieza, Conserjería y Jardinería',
          desc: 'Personal debidamente depurado y uniformado, protocolos rigurosos de aseo en lobbies y pasillos, y embellecimiento de áreas verdes.',
          tags: ['Personal Depurado', 'Lobbies Impecables', 'Jardines Cuidados'],
          details: {
            scope: [
              'Protocolo diario de desinfección y aseo en vestíbulos, pasillos, ascensores y amenidades.',
              'Conserjes y porteros uniformados, capacitados y debidamente depurados con vocación de servicio.',
              'Mantenimiento continuo y embellecimiento paisajístico de jardines y zonas verdes comunes.'
            ],
            benefit: 'Instalaciones relucientes que enaltecen el prestigio del inmueble y elevan la calidad de vida.',
            modality: 'Turnos Diarios Fijos & Supervisión Semanal'
          }
        },
        {
          id: 'renta-vacacional',
          title: 'Gestión de Alquileres y Renta Corta',
          desc: 'Supervisión de reglas de convivencia para huéspedes, recepción, control de accesos y cuidado de las áreas comunes del edificio.',
          tags: ['Control de Huéspedes', 'Reglamento Interno', 'Seguridad de Acceso'],
          details: {
            scope: [
              'Registro estricto y verificación de identidad de huéspedes al ingresar a la propiedad.',
              'Fiscalización y cumplimiento riguroso del reglamento interno sobre ruidos y áreas comunes.',
              'Inspección posterior a la estadía y reporte inmediato de anomalías al propietario.'
            ],
            benefit: 'Compatibilidad armónica entre el negocio turístico de los propietarios y la paz de los residentes permanentes.',
            modality: 'Control Operativo Continuo 24/7'
          }
        },
        {
          id: 'auditoria-dgii',
          title: 'Asesoría Legal y Cumplimiento Ley 5038',
          desc: 'Convocatoria formal de asambleas ordinarias y extraordinarias, redacción de actas, registro ante la DGII y cumplimiento normativo.',
          tags: ['Ley de Condominios', 'Asambleas Formales', 'DGII al Día'],
          details: {
            scope: [
              'Convocatoria formal y reglamentaria de asambleas de condómines ordinarias y extraordinarias.',
              'Redacción, protocolización y registro formal de actas de asamblea ante las autoridades.',
              'Actualización y mantenimiento del RNC del condominio y cumplimiento tributario ante la DGII.'
            ],
            benefit: 'Blindaje jurídico total, evitando multas fiscales y controversias entre copropietarios.',
            modality: 'Asesoría Jurídica Permanente & Acompañamiento en Asambleas'
          }
        },
        {
          id: 'tecnologia-supabase',
          title: 'Atención y Comunicación Continua',
          desc: 'Canal directo de atención para condómines vía WhatsApp y correo, recepción de reportes técnicos y resolución rápida de incidencias.',
          tags: ['Atención Directa', 'Resolución Rápida', 'Vía WhatsApp'],
          details: {
            scope: [
              'Canal directo y exclusivo de WhatsApp corporativo para reportes, dudas e incidencias.',
              'Sistema ágil de seguimiento de solicitudes hasta su resolución y confirmación por el condómine.',
              'Boletines y circulares periódicas sobre mantenimientos programados y estado de la comunidad.'
            ],
            benefit: 'Comunicación fluida y transparente; cada condómine se siente escuchado y respaldado los 365 días.',
            modality: 'Atención Multicanal Lunes a Sábado + Emergencias 24/7'
          }
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
      viewOnMap: 'Ver ubicación en Google Maps',
      servicesTitle: 'Servicios Prestados por Gadmicon',
      scopeTitle: 'Alcance de la Administración en este Inmueble',
      technicalInspection: 'Inspección Semanal',
      residentSupport: 'Atención WhatsApp 24/7',
      managementLabel: 'Gestión Operativa',
      footerOfficial: 'Inmueble administrado bajo los estándares de transparencia y calidad de Gadmicon S.R.L.',
      quoteProject: 'Cotizar este tipo de propiedad',
      categories: {
        all: 'Todos los Inmuebles',
        torres: 'Torres Residenciales',
        villas: 'Villas de Lujo',
        penthouses: 'Penthouses Colección',
        playa: 'Residencias de Playa',
      },
    },
    about: {
      heading: 'Sobre Nosotros.',
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
      cards: [
        {
          title: 'Misión',
          desc: 'Brindar una administración integral, transparente y rigurosa de condominios y propiedades residenciales, garantizando la preservación patrimonial, el orden financiero y la tranquilidad de cada comunidad.',
        },
        {
          title: 'Visión',
          desc: 'Ser el referente líder en administración condominal e inmobiliaria en República Dominicana, reconocidos por nuestra innovación, transparencia absoluta y excelencia operativa.',
        },
        {
          title: 'Valores',
          desc: 'Transparencia contable, integridad, compromiso con la comunidad, eficiencia operativa y vocación de servicio permanente.',
        },
      ],
      mvvBadge: 'Filosofía & Propósito',
      mvvTitle: 'Misión, Visión y Valores',
      mvvSubtitle: 'Los principios fundamentales que rigen cada una de nuestras decisiones y garantizan el valor de su comunidad.',
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
    quote: {
      badge: 'Calculadora de Cotización',
      title: 'Estima tu propuesta',
      subtitle: 'Obtén un estimado mensual ajustado a tu propiedad y los servicios que necesitas.',
      modeGuided: 'Selección Guiada',
      modeManual: 'Modo Manual',
      condoSelectionTitle: '1. Elige tu tipo de condominio',
      condoSelectionSubtitle: 'Selecciona el perfil que mejor represente a tu propiedad:',
      servicesSelectionTitle: '2. Selecciona los servicios requeridos',
      servicesSelectionSubtitle: 'Elige los servicios operativos y contables que Gadmicon gestionará:',
      adjustUnitsLabel: 'Cantidad de unidades',
      adjustUnitsHelp: 'Ajusta el número exacto si tu condominio difiere:',
      propertyTypeLabel: 'Tipo de propiedad',
      unitsLabel: 'Número de unidades',
      servicesLabel: 'Servicios requeridos',
      summaryPrefix: 'Estimado basado en',
      unitsWord: 'unidades',
      servicesWord: 'servicios',
      switchToManual: '¿Prefieres ajustar cada dato libremente? Cambiar a Modo Manual',
      switchToGuided: 'Volver a Selección Guiada',
      propertyTypes: {
        torre: 'Torre / Residencial',
        villa: 'Villa',
        penthouse: 'Penthouse',
        comercial: 'Plaza Comercial',
      },
      serviceOptions: {
        contable: 'Administración Contable',
        mantenimiento: 'Mantenimiento Técnico',
        conserjeria: 'Conserjería / Limpieza',
        legal: 'Gestión Legal',
        atencion: 'Atención a Residentes',
      },
      condoProfiles: {
        torre: {
          name: 'Torre Residencial',
          desc: 'Edificios verticales con ascensor, planta eléctrica, lobby y áreas sociales.',
          unitsHint: '36 unidades típicas',
        },
        residencial: {
          name: 'Condominio / Residencial',
          desc: 'Complejos residenciales de casas, townhouses o edificios de baja densidad.',
          unitsHint: '20 unidades típicas',
        },
        villa: {
          name: 'Villa / Casa de Lujo',
          desc: 'Propiedad individual exclusiva, casa vacacional o de playa con gestión integral.',
          unitsHint: '1 unidad privada',
        },
        penthouse: {
          name: 'Penthouse / Boutique',
          desc: 'Residencias selectas con requerimientos de alta gama y mantenimiento continuo.',
          unitsHint: '4 unidades',
        },
        comercial: {
          name: 'Plaza Comercial / Mixta',
          desc: 'Inmuebles comerciales, locales y oficinas con cobranza y operación activa.',
          unitsHint: '16 locales típicos',
        },
      },
      serviceDescriptions: {
        contable: {
          desc: 'Cobros, estados financieros mensuales, conciliaciones bancarias y pagos a suplidores.',
          tag: 'Cuentas Claras',
        },
        mantenimiento: {
          desc: 'Supervisión de generadores, bombas de agua, cisternas, ascensores y áreas comunes.',
          tag: 'Inspección Técnica',
        },
        conserjeria: {
          desc: 'Personal de conserjería calificado, control de accesos y limpieza profunda.',
          tag: 'Personal 5 Estrellas',
        },
        legal: {
          desc: 'Asambleas conformes a la Ley 5038, actas notariales y fiscalización de contratos.',
          tag: 'Cumplimiento Legal',
        },
        atencion: {
          desc: 'Canal de soporte WhatsApp 24/7 a condómines, gestión de quejas y renta vacacional.',
          tag: 'Soporte 24/7',
        },
      },
      estimateLabel: 'Estimado mensual',
      ctaButton: 'Solicitar Cotización Personalizada',
      disclaimer: 'Estimado referencial • Propuesta final a confirmar con nuestro equipo',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Managed Properties',
      contact: 'Contact',
      quote: 'Quote',
      console: 'Client Portal',
      ctaContact: 'Request Quote',
    },
    hero: {
      headline: 'Peace of mind, transparency, and value for your residential community',
      headlineHighlight: 'with Gadmicon',
      subheadline: 'We manage your condominium, tower, or commercial plaza with full financial accountability, preventive technical upkeep, and dedicated care for homeowner boards and owners across the Dominican Republic.',
      ctaPrimary: 'Request Management Proposal',
      ctaSecondary: 'View Condominiums',
      contactQuestion: 'Prefer to speak with us directly?',
      contactAction: 'Contact us here',
    },
    services: {
      badge: 'Our Services',
      title: 'Our Services',
      subtitle: 'We handle all operational, financial, and legal aspects so living or investing in your property is a pleasant, hassle-free experience.',
      viewDetails: 'View Service Details',
      modalClose: 'Close',
      modalCta: 'Request Quote for this Service',
      scopeTitle: 'What this service includes',
      benefitTitle: 'Key benefit for your property',
      modalityTitle: 'Service modality',
      items: [
        {
          id: 'gestion-integral',
          title: 'Accounting & Collection Management',
          desc: 'Monthly HOA fee billing, proactive collection, bank reconciliation, vendor payments, and transparent financial statements for general assemblies.',
          tags: ['Clear Accounting', 'Monthly Reports', 'Arrears Management'],
          details: {
            scope: [
              'Monthly bank reconciliation and real-time financial statements for the board.',
              'Timely issuance, distribution, and systematic tracking of HOA fee statements.',
              'Proactive collection strategy and amicable or legal dispute handling under Law 5038.'
            ],
            benefit: 'Clear accounting, zero financial surprises, and total accountability before the general assembly.',
            modality: 'Continuous Accounting Supervision & Monthly Closing'
          }
        },
        {
          id: 'mantenimiento-tecnico',
          title: 'Preventive & Corrective Maintenance',
          desc: 'Supervision of power generators, submersible pumps, water cisterns, elevators, electric gates, and common area maintenance.',
          tags: ['Weekly Inspection', 'Power Generators', 'Vetted Vendors'],
          details: {
            scope: [
              'Weekly technical inspection of backup power plants, submersible pumps, and water cisterns.',
              'Contract auditing and performance oversight for elevators, electric gates, and CCTV.',
              'Rapid emergency response protocols for critical electrical and hydraulic infrastructure.'
            ],
            benefit: 'Extends the operational lifespan of shared equipment and cuts major breakdown costs by up to 40%.',
            modality: 'Weekly Site Inspections & 24/7 Technical On-Call'
          }
        },
        {
          id: 'housekeeping-5star',
          title: 'Janitorial & Gardening Services',
          desc: 'Vetted, uniformed staff following strict cleaning protocols for lobbies and hallways, along with landscape maintenance.',
          tags: ['Vetted Staff', 'Spotless Lobbies', 'Landscaping'],
          details: {
            scope: [
              'Daily sanitation and cleaning routines for lobbies, elevators, corridors, and amenities.',
              'Vetted, background-checked, and impeccably uniformed staff trained in customer service.',
              'Continuous horticultural care and landscape beautification for shared green spaces.'
            ],
            benefit: 'Immaculate common areas that elevate property prestige and improve resident quality of life.',
            modality: 'Full-Time Daily Shifts & Weekly Supervisory Audits'
          }
        },
        {
          id: 'renta-vacacional',
          title: 'Short-Term Rental & Access Oversight',
          desc: 'Community guideline enforcement for guest stays, front desk reception, access control, and protection of shared amenities.',
          tags: ['Guest Control', 'House Rules', 'Access Security'],
          details: {
            scope: [
              'Mandatory guest registration and digital identity verification at security checkpoints.',
              'Strict enforcement of community noise ordinances, pool rules, and amenity access.',
              'Post-checkout visual review and immediate incident reporting to unit owners.'
            ],
            benefit: 'Harmonious coexistence between vacation rental profitability and full-time residents’ peace of mind.',
            modality: '24/7 Continuous Access & Security Supervision'
          }
        },
        {
          id: 'auditoria-dgii',
          title: 'Legal & Condominium Law Compliance',
          desc: 'Formal assembly convocations, meeting minutes drafting, DGII tax registration, and regulatory compliance under Law 5038.',
          tags: ['Condo Law 5038', 'Formal Assemblies', 'DGII Tax Status'],
          details: {
            scope: [
              'Statutory convocation and formal preparation of annual and extraordinary assemblies.',
              'Drafting, legalization, and official registration of condominium meeting minutes.',
              'Maintenance and updating of condominium tax registration (RNC) with DGII authorities.'
            ],
            benefit: 'Complete legal protection, preventing fiscal sanctions and avoiding disputes between owners.',
            modality: 'Ongoing Legal Counsel & Assembly Representation'
          }
        },
        {
          id: 'tecnologia-supabase',
          title: 'Direct Resident Support & Communication',
          desc: 'Direct WhatsApp and email support channel for owners and board members, rapid ticket response, and incident resolution.',
          tags: ['Direct Support', 'Rapid Resolution', 'WhatsApp Channel'],
          details: {
            scope: [
              'Direct, dedicated corporate WhatsApp channel for owners to report inquiries and maintenance issues.',
              'Digital ticket tracking until final resolution and verification by the resident.',
              'Regular informational circulars regarding scheduled maintenance and community updates.'
            ],
            benefit: 'Transparent, immediate communication ensuring every owner feels backed and informed 365 days a year.',
            modality: 'Multi-Channel Support Mon–Sat + 24/7 Emergency Line'
          }
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
      viewOnMap: 'View location on Google Maps',
      servicesTitle: 'Services Provided by Gadmicon',
      scopeTitle: 'Management Scope in this Property',
      technicalInspection: 'Weekly Technical Inspection',
      residentSupport: '24/7 WhatsApp Support',
      managementLabel: 'Operational Management',
      footerOfficial: 'Property managed under Gadmicon S.R.L. transparency and quality standards.',
      quoteProject: 'Quote this property type',
      categories: {
        all: 'All Properties',
        torres: 'Residential Towers',
        villas: 'Luxury Villas',
        penthouses: 'Penthouse Collection',
        playa: 'Beachfront Residences',
      },
    },
    about: {
      heading: 'About Us.',
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
      cards: [
        {
          title: 'Mission',
          desc: 'To deliver comprehensive, transparent, and rigorous management of condominiums and residential communities, ensuring asset preservation, financial order, and peace of mind for every resident.',
        },
        {
          title: 'Vision',
          desc: 'To be the leading and benchmark property and condominium management firm in the Dominican Republic, recognized for innovation, absolute transparency, and operational excellence.',
        },
        {
          title: 'Values',
          desc: 'Financial transparency, integrity, community commitment, operational efficiency, and a continuous dedication to service.',
        },
      ],
      mvvBadge: 'Philosophy & Purpose',
      mvvTitle: 'Mission, Vision & Values',
      mvvSubtitle: 'The foundational principles that guide every decision and protect your community’s long-term value.',
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
    quote: {
      badge: 'Quote Calculator',
      title: 'Estimate your proposal',
      subtitle: 'Get a monthly estimate tailored to your property and the services you need.',
      modeGuided: 'Guided Selection',
      modeManual: 'Manual Mode',
      condoSelectionTitle: '1. Select your condominium type',
      condoSelectionSubtitle: 'Choose the profile that best matches your residential community:',
      servicesSelectionTitle: '2. Select required Gadmicon services',
      servicesSelectionSubtitle: 'Select the operational and accounting services Gadmicon will manage:',
      adjustUnitsLabel: 'Number of units',
      adjustUnitsHelp: 'Adjust the exact unit count if your condominium differs:',
      propertyTypeLabel: 'Property type',
      unitsLabel: 'Number of units',
      servicesLabel: 'Required services',
      summaryPrefix: 'Estimated for',
      unitsWord: 'units',
      servicesWord: 'services',
      switchToManual: 'Prefer to fine-tune each parameter? Switch to Manual Mode',
      switchToGuided: 'Return to Guided Selection',
      propertyTypes: {
        torre: 'Tower / Residential',
        villa: 'Villa',
        penthouse: 'Penthouse',
        comercial: 'Commercial Plaza',
      },
      serviceOptions: {
        contable: 'Accounting Management',
        mantenimiento: 'Technical Maintenance',
        conserjeria: 'Concierge / Cleaning',
        legal: 'Legal Management',
        atencion: 'Resident Support',
      },
      condoProfiles: {
        torre: {
          name: 'Residential Tower',
          desc: 'Vertical apartment buildings with elevators, backup power, lobby, and shared amenities.',
          unitsHint: '36 typical units',
        },
        residencial: {
          name: 'Gated Community / Residential',
          desc: 'Low-density gated complexes of single homes, townhouses, or residential blocks.',
          unitsHint: '20 typical units',
        },
        villa: {
          name: 'Luxury Villa / Estate',
          desc: 'Exclusive private residence, beachfront home, or luxury vacation rental estate.',
          unitsHint: '1 private unit',
        },
        penthouse: {
          name: 'Penthouse / Boutique',
          desc: 'Select high-end residences requiring discreet, specialized maintenance.',
          unitsHint: '4 units',
        },
        comercial: {
          name: 'Commercial Plaza / Mixed-Use',
          desc: 'Retail shops, offices, and mixed plazas with active collection and operation.',
          unitsHint: '16 typical units',
        },
      },
      serviceDescriptions: {
        contable: {
          desc: 'Fee collections, monthly financial statements, bank reconciliations, and vendor payments.',
          tag: 'Transparent Books',
        },
        mantenimiento: {
          desc: 'Supervision of backup generators, water pumps, cisterns, elevators, and common areas.',
          tag: 'Technical Oversight',
        },
        conserjeria: {
          desc: 'Vetted concierge staff, building access control, and continuous cleaning standards.',
          tag: '5-Star Hospitality',
        },
        legal: {
          desc: 'HOA meetings under Dominican Law 5038, formal minutes, and vendor contract audits.',
          tag: 'Legal Compliance',
        },
        atencion: {
          desc: '24/7 resident WhatsApp channel, incident resolution, and vacation rental support.',
          tag: '24/7 Support',
        },
      },
      estimateLabel: 'Monthly estimate',
      ctaButton: 'Request a Custom Quote',
      disclaimer: 'Reference estimate • Final proposal confirmed by our team',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      projects: 'Copropriétés',
      contact: 'Contact',
      quote: 'Devis',
      console: 'Espace Client',
      ctaContact: 'Demander un Devis',
    },
    hero: {
      headline: 'Sérénité, ordre et valeur pour votre communauté',
      headlineHighlight: 'avec Gadmicon',
      subheadline: 'Nous administrons votre copropriété ou tour résidentielle avec une transparence comptable totale, une maintenance technique continue et une écoute attentive des syndics et propriétaires en République Dominicaine.',
      ctaPrimary: 'Demander une Proposition de Gestion',
      ctaSecondary: 'Voir les Copropriétés',
      contactQuestion: 'Vous préférez échanger directement avec nous ?',
      contactAction: 'Contactez-nous ici',
    },
    services: {
      badge: 'Nos Services',
      title: 'Nos Services',
      subtitle: 'Nous prenons en charge tous les aspects opérationnels, financiers et juridiques pour que votre bien fonctionne sans friction.',
      viewDetails: 'Découvrir les détails',
      modalClose: 'Fermer',
      modalCta: 'Demander un Devis pour ce Service',
      scopeTitle: 'Ce qui est inclus dans ce service',
      benefitTitle: 'Bénéfice principal pour votre bien',
      modalityTitle: 'Modalité d’intervention',
      items: [
        {
          id: 'gestion-integral',
          title: 'Gestion Comptable & Recouvrement',
          desc: 'Facturation des charges, recouvrement préventif, rapprochement bancaire et bilans financiers transparents pour l’assemblée générale.',
          tags: ['Comptabilité Claire', 'Rapports Mensuels', 'Gestion du Retard'],
          details: {
            scope: [
              'Rapprochement bancaire mensuel et bilans en temps réel pour le conseil syndical.',
              'Émission et suivi rigoureux des appels de charges de copropriété.',
              'Gestion proactive et amiable des impayés selon le cadre de la Loi 5038.'
            ],
            benefit: 'Comptabilité limpide, zéro mauvaise surprise et bilan transparent pour l’assemblée.',
            modality: 'Suivi Comptable Continu & Clôture Mensuelle'
          }
        },
        {
          id: 'mantenimiento-tecnico',
          title: 'Maintenance Préventive & Technique',
          desc: 'Supervision des générateurs, pompes, cisternes, ascenseurs, portails électriques et entretien des espaces communs.',
          tags: ['Inspection Hebdomadaire', 'Groupes Électrogènes', 'Prestataires Qualifiés'],
          details: {
            scope: [
              'Inspection technique hebdomadaire des générateurs, pompes et citernes d’eau.',
              'Supervision et audit des contrats d’ascenseurs, portails et vidéosurveillance.',
              'Protocole d’intervention prioritaire en cas de panne technique critique.'
            ],
            benefit: 'Prolonge la durée de vie des équipements et réduit les coûts de réparation d’urgence jusqu’à 40%.',
            modality: 'Visites Hebdomadaires & Urgences Techniques 24/7'
          }
        },
        {
          id: 'housekeeping-5star',
          title: 'Nettoyage & Conciergerie',
          desc: 'Personnel formé et uniformisé, règles strictes d’hygiène pour les halls et couloirs, et entretien des espaces verts.',
          tags: ['Personnel Vérifié', 'Halls Impeccables', 'Espaces Verts'],
          details: {
            scope: [
              'Protocole d’entretien quotidien des halls d’accueil, couloirs et espaces partagés.',
              'Personnel de conciergerie vérifié, formé et vêtu d’un uniforme impeccable.',
              'Entretien paysager régulier des espaces verts et jardins de la résidence.'
            ],
            benefit: 'Des espaces impeccables qui valorisent le standing de la résidence et le confort des copropriétaires.',
            modality: 'Présence Quotidienne & Contrôles Hebdomadaires'
          }
        },
        {
          id: 'renta-vacacional',
          title: 'Gestion des Accès & Séjours',
          desc: 'Supervision du règlement intérieur pour les visiteurs, accueil et contrôle des accès pour la sécurité des résidents.',
          tags: ['Contrôle Accès', 'Règlement Intérieur', 'Sécurité'],
          details: {
            scope: [
              'Enregistrement rigoureux et vérification d’identité des voyageurs aux entrées.',
              'Application stricte du règlement intérieur concernant le bruit et les équipements communs.',
              'Contrôle post-séjour et signalement immédiat d’éventuelles anomalies aux propriétaires.'
            ],
            benefit: 'Équilibre harmonieux entre rentabilité locative et tranquillité des résidents permanents.',
            modality: 'Supervision Opérationnelle 24/7'
          }
        },
        {
          id: 'auditoria-dgii',
          title: 'Conformité Juridique & Loi 5038',
          desc: 'Convocation formelle des assemblées, rédaction des procès-verbaux, démarches DGII et respect des réglementations.',
          tags: ['Loi Copropriété 5038', 'Assemblées Formalisées', 'DGII à Jour'],
          details: {
            scope: [
              'Organisation et convocation formelle des assemblées générales ordinaires et extraordinaires.',
              'Rédaction, enregistrement légal et procès-verbaux d’assemblée.',
              'Mise à jour du statut fiscal DGII et conformité juridique sous la Loi 5038.'
            ],
            benefit: 'Sécurité juridique totale, évitant pénalités fiscales et litiges entre copropriétaires.',
            modality: 'Conseil Juridique Permanent & Tenue des Assemblées'
          }
        },
        {
          id: 'tecnologia-supabase',
          title: 'Communication & Assistance Résidents',
          desc: 'Canal direct via WhatsApp et e-mail pour les résidents, prise en charge rapide des demandes techniques et incidents.',
          tags: ['Assistance Directe', 'Réponse Rapide', 'Canal WhatsApp'],
          details: {
            scope: [
              'Canal direct WhatsApp pour signalements, requêtes et demandes d’assistance.',
              'Suivi digitalisé des tickets d’incident jusqu’à leur résolution et validation.',
              'Circulaires régulières et avis d’information pour les résidents de la copropriété.'
            ],
            benefit: 'Communication fluide et réactive; chaque copropriétaire est écouté et assisté 365 jours par an.',
            modality: 'Assistance Multicanal Lun–Sam + Urgences 24/7'
          }
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
      viewOnMap: 'Voir l’emplacement sur Google Maps',
      servicesTitle: 'Services Assurés par Gadmicon',
      scopeTitle: 'Périmètre de Gestion de cet Immeuble',
      technicalInspection: 'Inspection Hebdomadaire',
      residentSupport: 'Assistance WhatsApp 24/7',
      managementLabel: 'Gestion Opérationnelle',
      footerOfficial: 'Copropriété gérée selon les normes de transparence et qualité Gadmicon S.R.L.',
      quoteProject: 'Devis pour ce type de bien',
      categories: {
        all: 'Tous les Biens',
        torres: 'Tours Résidentielles',
        villas: 'Villas de Luxe',
        penthouses: 'Penthouses de Prestige',
        playa: 'Résidences de Plage',
      },
    },
    about: {
      heading: 'À propos de nous.',
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
      cards: [
        {
          title: 'Mission',
          desc: 'Offrir une gestion intégrale, transparente et rigoureuse des copropriétés et résidences, en assurant la préservation du patrimoine, la clarté financière et la sérénité de chaque communauté.',
        },
        {
          title: 'Vision',
          desc: 'Être la référence et le leader de la gestion de copropriétés et biens immobiliers en République Dominicaine, reconnu pour notre innovation, notre transparence absolue et notre excellence.',
        },
        {
          title: 'Valeurs',
          desc: 'Transparence comptable, intégrité, engagement communautaire, efficacité opérationnelle et sens du service continu.',
        },
      ],
      mvvBadge: 'Philosophie & Vision',
      mvvTitle: 'Mission, Vision & Valeurs',
      mvvSubtitle: 'Les principes fondamentaux qui guident nos décisions et préservent la valeur de votre communauté.',
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
    quote: {
      badge: 'Calculateur de Devis',
      title: 'Estimez votre proposition',
      subtitle: 'Obtenez une estimation mensuelle adaptée à votre propriété et aux services dont vous avez besoin.',
      modeGuided: 'Sélection Guidée',
      modeManual: 'Mode Manuel',
      condoSelectionTitle: '1. Choisissez votre type de copropriété',
      condoSelectionSubtitle: 'Sélectionnez le profil correspondant le mieux à votre résidence :',
      servicesSelectionTitle: '2. Sélectionnez les services Gadmicon requis',
      servicesSelectionSubtitle: 'Choisissez les prestations opérationnelles et comptables à gérer par Gadmicon :',
      adjustUnitsLabel: 'Nombre de lots / unités',
      adjustUnitsHelp: 'Ajustez le nombre exact si votre copropriété diffère :',
      propertyTypeLabel: 'Type de propriété',
      unitsLabel: 'Nombre d\'unités',
      servicesLabel: 'Services requis',
      summaryPrefix: 'Estimé pour',
      unitsWord: 'unités',
      servicesWord: 'services',
      switchToManual: 'Vous préférez ajuster chaque donnée librement ? Passer en Mode Manuel',
      switchToGuided: 'Retourner à la Sélection Guidée',
      propertyTypes: {
        torre: 'Tour / Résidentiel',
        villa: 'Villa',
        penthouse: 'Penthouse',
        comercial: 'Plaza Commerciale',
      },
      serviceOptions: {
        contable: 'Gestion Comptable',
        mantenimiento: 'Maintenance Technique',
        conserjeria: 'Conciergerie / Nettoyage',
        legal: 'Gestion Juridique',
        atencion: 'Support Résidents',
      },
      condoProfiles: {
        torre: {
          name: 'Tour Résidentielle',
          desc: 'Immeuble d\'appartements avec ascenseur, groupe électrogène, hall et espaces communs.',
          unitsHint: '36 unités typiques',
        },
        residencial: {
          name: 'Copropriété / Résidence',
          desc: 'Ensemble résidentiel fermé de maisons, townhouses ou petits collectifs.',
          unitsHint: '20 unités typiques',
        },
        villa: {
          name: 'Villa / Propriété de Luxe',
          desc: 'Résidence individuelle d’exception, villa en bord de mer ou location de prestige.',
          unitsHint: '1 unité privée',
        },
        penthouse: {
          name: 'Penthouse / Boutique',
          desc: 'Logements d’exception avec exigences haut de gamme et entretien minutieux.',
          unitsHint: '4 unités',
        },
        comercial: {
          name: 'Centre Commercial / Mixte',
          desc: 'Commerces et bureaux avec gestion du recouvrement et maintenance intensive.',
          unitsHint: '16 lots typiques',
        },
      },
      serviceDescriptions: {
        contable: {
          desc: 'Appels de charges, bilans mensuels, rapprochements bancaires et paiement des fournisseurs.',
          tag: 'Comptabilité Claire',
        },
        mantenimiento: {
          desc: 'Supervision des groupes électrogènes, pompes, citernes, ascenseurs et communs.',
          tag: 'Suivi Technique',
        },
        conserjeria: {
          desc: 'Concierges qualifiés, contrôle des accès et entretien régulier soigné.',
          tag: 'Qualité 5 Étoiles',
        },
        legal: {
          desc: 'Assemblées selon la Loi 5038, procès-verbaux et audit des contrats prestataires.',
          tag: 'Conformité Légale',
        },
        atencion: {
          desc: 'Canal d\'assistance WhatsApp 24/7, prise en charge des incidents et séjour locatif.',
          tag: 'Assistance 24/7',
        },
      },
      estimateLabel: 'Estimation mensuelle',
      ctaButton: 'Demander un Devis Personnalisé',
      disclaimer: 'Estimation indicative • Proposition finale confirmée par notre équipe',
    },
  },
};

