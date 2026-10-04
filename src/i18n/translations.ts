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
      badge: 'Servicios Integrales',
      title: 'Soluciones Profesionales para su Condominio',
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
      badge: 'Core Capabilities',
      title: 'Specialized Real Estate Management Services',
      subtitle: 'A turnkey operational ecosystem built for demanding investors and luxury developers.',
      items: [
        {
          id: 'gestion-integral',
          title: 'Comprehensive Asset Management',
          desc: 'Automated rent collection, airtight legal agreements, thorough tenant screening, and transparent real-time financial reporting.',
          tags: ['Guaranteed Rent', 'Legal Auditing', 'Tenant Screening'],
        },
        {
          id: 'mantenimiento-tecnico',
          title: 'Preventive & Technical Maintenance',
          desc: 'Scheduled mechanical reviews, inverter HVAC servicing, power generators, smart home systems, and sub-45-minute emergency dispatch.',
          tags: ['24/7 Support', 'Technical Audits', 'Certified Crews'],
        },
        {
          id: 'housekeeping-5star',
          title: 'Hotel-Grade Housekeeping & Staging',
          desc: 'Hospital-grade sanitization protocols, Egyptian cotton luxury linen rotation, and white-glove staging for VIP arrivals.',
          tags: ['5-Star Luxury', 'Textile Rotation', 'Deep Cleaning'],
        },
        {
          id: 'renta-vacacional',
          title: 'Luxury Short-Term Rental Operations',
          desc: 'Algorithmic yield optimization on Airbnb Luxe & Vrbo, bilingual concierge greeting, and relentless 4.9+ star review preservation.',
          tags: ['Yield Optimization', 'VIP Concierge', 'Superhost 24/7'],
        },
        {
          id: 'auditoria-dgii',
          title: 'Tax Compliance & HOA Governance',
          desc: 'Condo board budget reconciliation, DGII Dominican tax compliance, comprehensive property insurance, and fiduciary oversight.',
          tags: ['DGII Compliant', 'Trust Funds', 'All-Risk Insurance'],
        },
        {
          id: 'tecnologia-supabase',
          title: 'Owner Digital Executive Portal',
          desc: 'Encrypted 24/7 portal to review net yield, historical occupancy, open work orders, and download certified tax statements.',
          tags: ['Private Dashboard', 'PDF Statements', 'Live Sync'],
        },
      ],
    },
    projects: {
      badge: 'Signature Portfolio',
      title: 'Alero Real Estate Flagship Developments',
      subtitle: 'Discover Caribbean architectural icons operated under Gadmicon’s rigorous management standards.',
      all: 'All Projects',
      viewGallery: 'View Gallery & Specifications',
      photosCount: 'high-resolution photographs',
      locationLabel: 'Location',
      unitsLabel: 'Units',
      statusLabel: 'Status',
      activeStatus: 'Active Gadmicon Operation',
      modalClose: 'Close Gallery',
    },
    quote: {
      badge: 'Interactive Quote Engine',
      title: 'Configure Your Tailored Management Plan',
      subtitle: 'Follow the steps below to calculate an instant preliminary budget and trigger our automated n8n workflow.',
      step1Title: 'Property Type',
      step1Desc: 'Select the architectural typology of the property.',
      step2Title: 'Scale & Currency',
      step2Desc: 'Specify unit counts and your billing currency preference.',
      step3Title: 'Service Scope',
      step3Desc: 'Choose the level of operational care required for your portfolio.',
      step4Title: 'Contact Details',
      step4Desc: 'Provide your details to receive the official digitized proposal.',
      propertyType: 'Property Typology',
      unitsCount: 'Number of Units',
      currency: 'Preferred Currency',
      servicesIncluded: 'Services Required',
      fullName: 'Full Name or Entity',
      emailAddress: 'Corporate Email',
      phoneNumber: 'Phone / WhatsApp',
      additionalNotes: 'Special property requirements (optional)',
      next: 'Proceed to Next Step',
      prev: 'Previous Step',
      submit: 'Submit Formal Quote Request',
      submitting: 'Inserting into Supabase & triggering n8n webhook...',
      successTitle: 'Quote Successfully Submitted & Processed!',
      successMessage: 'Your request was committed to the Supabase lead_quotes table. The n8n orchestration webhook calculated your preliminary budget and sent confirmation emails.',
      instantCalculation: 'Preliminary Management Estimate',
      estimatedMonthly: 'Estimated Monthly Fee',
      disclaimer: '*Preliminary estimate subject to on-site architectural inspection and amenity audit.',
      requiredField: 'This field is required.',
    },
    console: {
      title: 'Architecture Console (Supabase + n8n)',
      subtitle: 'Live real-time monitoring of relational tables and automated orchestration webhooks for Phase 1.',
      supabaseTab: 'Supabase Tables (PostgreSQL)',
      n8nTab: 'Orchestration Pipeline (n8n)',
      sqlTab: 'DDL Schema & Indexes',
      leadsCount: 'Records in lead_quotes',
      projectsCount: 'Records in portfolio_projects',
      n8nStatus: 'Webhook Status: Active',
      simulateWebhook: 'Trigger Test Webhook',
      resetData: 'Reset Demo Data',
      refreshData: 'Refresh',
    },
    footer: {
      tagline: 'Setting the Caribbean benchmark for luxury real estate asset administration and equity enhancement.',
      rights: 'All rights reserved.',
      location: 'Winston Churchill Ave #1099, Piantini, Santo Domingo, Dominican Republic',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      projects: 'Portefeuille',
      quote: 'Devis',
      contact: 'Contact',
      console: 'Console Supabase & n8n',
      ctaQuote: 'Demander un Devis',
    },
    hero: {
      badge: 'Phase 1 • Gestion Immobilière Haut de Gamme',
      headline: 'Gestion d’Actifs Intelligente pour l’Immobilier de Prestige',
      headlineHighlight: 'Gadmicon',
      subheadline: 'Nous maximisons le rendement patrimonial et la valeur des résidences, tours et villas en République Dominicaine grâce à une gestion intégrale et un service hôtelier cinq étoiles.',
      ctaPrimary: 'Demander une Proposition de Gestion',
      ctaSecondary: 'Voir les Copropriétés',
      contactQuestion: 'Vous préférez échanger directement avec nous ?',
      contactAction: 'Contactez-nous ici',
      metric1Val: '+$180M',
      metric1Label: 'USD d’Actifs sous Gestion',
      metric2Val: '99.4%',
      metric2Label: 'Taux Moyen d’Occupation et de Recouvrement',
      metric3Val: '24/7',
      metric3Label: 'Conciergerie Technique Dédiée',
      quickCalcTitle: 'Calculateur Rapide de Gestion',
      quickCalcDesc: 'Estimez immédiatement les frais d’administration pour vos actifs en République Dominicaine.',
    },
    services: {
      badge: 'Compétences Opérationnelles',
      title: 'Services Spécialisés de Gestion Immobilière',
      subtitle: 'Un écosystème haut de gamme conçu pour les investisseurs et promoteurs exigeants.',
      items: [
        {
          id: 'gestion-integral',
          title: 'Gestion Intégrale d’Actifs',
          desc: 'Encaissements automatisés, baux juridiques certifiés, sélection minutieuse des locataires et rapports financiers en temps réel.',
          tags: ['Loyers Sécurisés', 'Audit Juridique', 'Sélection VIP'],
        },
        {
          id: 'mantenimiento-tecnico',
          title: 'Maintenance Préventive & Technique',
          desc: 'Inspections périodiques, systèmes de climatisation haute efficacité, générateurs d’urgence et intervention en moins de 45 minutes.',
          tags: ['Assistance 24/7', 'Audits Techniques', 'Équipes Agréées'],
        },
        {
          id: 'housekeeping-5star',
          title: 'Entretien Hôtelier 5 Étoiles',
          desc: 'Protocoles de désinfection hospitaliers, literie de luxe en coton d’Égypte et mise en scène méticuleuse avant chaque arrivée.',
          tags: ['Luxe 5 Étoiles', 'Rotation Textile', 'Nettoyage Expert'],
        },
        {
          id: 'renta-vacacional',
          title: 'Exploitation de Séjours Courts de Luxe',
          desc: 'Optimisation algorithmique des tarifs (Airbnb Luxe, Vrbo), conciergerie bilingue et maintien strict d’une note moyenne de 4.9+ étoiles.',
          tags: ['Rendement Optimisé', 'Accueil VIP', 'Superhost 24/7'],
        },
        {
          id: 'auditoria-dgii',
          title: 'Conformité Fiscale et Syndicale',
          desc: 'Gestion des charges de copropriété, déclarations fiscales auprès de la DGII dominicaine et assurances tous risques.',
          tags: ['Conformité DGII', 'Fiducies', 'Assurance Complète'],
        },
        {
          id: 'tecnologia-supabase',
          title: 'Portail Numérique Propriétaire',
          desc: 'Plateforme sécurisée 24/7 pour suivre les rendements nets, les taux d’occupation et télécharger vos bilans fiscaux certifiés.',
          tags: ['Tableau de Bord', 'Rapports PDF', 'Synchronisation'],
        },
      ],
    },
    projects: {
      badge: 'Portefeuille d’Exception',
      title: 'Réalisations Emblématiques Alero Real Estate',
      subtitle: 'Découvrez les tours et résidences d’exception des Caraïbes gérées selon les standards d’excellence Gadmicon.',
      all: 'Tous les Projets',
      viewGallery: 'Consulter la Galerie & Fiche Technique',
      photosCount: 'photographies haute définition',
      locationLabel: 'Emplacement',
      unitsLabel: 'Unités',
      statusLabel: 'Statut',
      activeStatus: 'Opération Active Gadmicon',
      modalClose: 'Fermer la Galerie',
    },
    quote: {
      badge: 'Simulateur Interactif',
      title: 'Configurez Votre Formule d’Administration sur Mesure',
      subtitle: 'Suivez les étapes ci-dessous pour obtenir une estimation instantanée et déclencher notre orchestration automatisée n8n.',
      step1Title: 'Type de Propriété',
      step1Desc: 'Sélectionnez la typologie du bien immobilier à confier.',
      step2Title: 'Volume & Devise',
      step2Desc: 'Indiquez le nombre d’unités et votre devise préférée.',
      step3Title: 'Étendue des Services',
      step3Desc: 'Personnalisez le niveau d’assistance opérationnelle souhaité.',
      step4Title: 'Coordonnées de Contact',
      step4Desc: 'Renseignez vos coordonnées pour recevoir l’offre formalisée.',
      propertyType: 'Typologie du Bien',
      unitsCount: 'Nombre d’Unités',
      currency: 'Devise Préférée',
      servicesIncluded: 'Services Demandés',
      fullName: 'Nom Complet ou Société',
      emailAddress: 'E-mail Professionnel',
      phoneNumber: 'Téléphone / WhatsApp',
      additionalNotes: 'Exigences particulières (optionnel)',
      next: 'Passer à l’Étape Suivante',
      prev: 'Étape Précédente',
      submit: 'Envoyer la Demande de Devis',
      submitting: 'Insertion dans Supabase & déclenchement du webhook n8n...',
      successTitle: 'Demande Enregistrée et Traitée avec Succès !',
      successMessage: 'Votre demande a été intégrée dans la table Supabase lead_quotes. Le webhook d’orchestration n8n a calculé votre budget prévisionnel et vous a transmis une confirmation.',
      instantCalculation: 'Estimation Prévisionnelle de Gestion',
      estimatedMonthly: 'Tarif Mensuel Estimé',
      disclaimer: '*Estimation préliminaire sous réserve de visite technique et audit des équipements.',
      requiredField: 'Ce champ est obligatoire.',
    },
    console: {
      title: 'Console d’Architecture (Supabase + n8n)',
      subtitle: 'Suivi en temps réel des tables relationnelles et des déclenchements de flux automatisés pour la Phase 1.',
      supabaseTab: 'Tables Supabase (PostgreSQL)',
      n8nTab: 'Pipeline d’Orchestration (n8n)',
      sqlTab: 'Schéma DDL & Index',
      leadsCount: 'Enregistrements dans lead_quotes',
      projectsCount: 'Enregistrements dans portfolio_projects',
      n8nStatus: 'Statut du Webhook : Actif',
      simulateWebhook: 'Tester le Webhook n8n',
      resetData: 'Réinitialiser les Données Démo',
      refreshData: 'Actualiser',
    },
    footer: {
      tagline: 'La référence caribéenne en matière d’administration et de valorisation du patrimoine immobilier de prestige.',
      rights: 'Tous droits réservés.',
      location: 'Avenue Winston Churchill #1099, Saint-Domingue, République Dominicaine',
    },
  },
};
