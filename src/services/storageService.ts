import { Currency, LeadQuote, N8nWebhookEvent, PortfolioProject, PropertyType } from '../types';
import { initialProjects } from '../data/mockPortfolio';

const STORAGE_KEYS = {
  PROJECTS: 'gadmicon_portfolio_projects_v1',
  LEADS: 'gadmicon_lead_quotes_v1',
  WEBHOOKS: 'gadmicon_n8n_webhooks_v1',
};

// Exchange rate DOP to USD approximate
export const USD_TO_DOP_RATE = 60.5;

export function calculatePreliminaryQuote(
  propertyType: PropertyType,
  unitsCount: number,
  currency: Currency,
  services: string[] = []
): {
  monthlyFee: number;
  baseRatePerUnit: number;
  discountPct: number;
  tier: 'Standard' | 'Portfolio' | 'Enterprise';
} {
  let baseUnitRateUsd = 195;

  switch (propertyType) {
    case 'Villa':
      baseUnitRateUsd = 450;
      break;
    case 'Penthouse':
      baseUnitRateUsd = 380;
      break;
    case 'Torre Residencial':
      baseUnitRateUsd = 160;
      break;
    case 'Edificio Comercial':
      baseUnitRateUsd = 280;
      break;
    case 'Apartamento':
    default:
      baseUnitRateUsd = 195;
      break;
  }

  // Multiplier for services selected
  const serviceMultiplier = 1 + Math.max(0, services.length - 1) * 0.15;
  const rawSubtotalUsd = unitsCount * baseUnitRateUsd * serviceMultiplier;

  let discountPct = 0;
  let tier: 'Standard' | 'Portfolio' | 'Enterprise' = 'Standard';

  if (unitsCount >= 20) {
    discountPct = 20;
    tier = 'Enterprise';
  } else if (unitsCount >= 6) {
    discountPct = 12;
    tier = 'Portfolio';
  }

  const finalFeeUsd = Math.round(rawSubtotalUsd * (1 - discountPct / 100));

  if (currency === 'DOP') {
    return {
      monthlyFee: Math.round(finalFeeUsd * USD_TO_DOP_RATE),
      baseRatePerUnit: Math.round(baseUnitRateUsd * USD_TO_DOP_RATE),
      discountPct,
      tier,
    };
  }

  return {
    monthlyFee: finalFeeUsd,
    baseRatePerUnit: baseUnitRateUsd,
    discountPct,
    tier,
  };
}

const initialLeads: LeadQuote[] = [
  {
    id: 'f9e8d7c6-0001-4000-8000-000000000001',
    client_name: 'Inversiones Piantini Capital SRL',
    email: 'contacto@piantinipartners.com',
    phone: '+1 (809) 555-0192',
    property_type: 'Torre Residencial',
    units_count: 24,
    preferred_currency: 'USD',
    status: 'contacted',
    estimated_monthly_fee: 3072,
    selected_services: ['Gestión Integral', 'Mantenimiento Preventivo', 'Housekeeping 5★'],
    notes: 'Interés en migrar la administración completa de Torre Alero VI a partir de Q3.',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(),
    n8n_dispatched: true,
  },
  {
    id: 'f9e8d7c6-0002-4000-8000-000000000002',
    client_name: 'Jean-Luc Moreau',
    email: 'jl.moreau@invest-caribbean.fr',
    phone: '+33 6 12 34 56 78',
    property_type: 'Villa',
    units_count: 2,
    preferred_currency: 'USD',
    status: 'pending',
    estimated_monthly_fee: 900,
    selected_services: ['Renta Corta / Airbnb Luxe', 'Housekeeping 5★', 'Mantenimiento Preventivo'],
    notes: 'Villas de recreo en Cap Cana. Requiere atención bilingüe francés/inglés para huéspedes.',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
    n8n_dispatched: true,
  },
  {
    id: 'f9e8d7c6-0003-4000-8000-000000000003',
    client_name: 'Dra. Carmen Valenzuela',
    email: 'carmen.valenzuela@medgroup.do',
    phone: '+1 (829) 555-8841',
    property_type: 'Apartamento',
    units_count: 4,
    preferred_currency: 'DOP',
    status: 'pending',
    estimated_monthly_fee: 47190,
    selected_services: ['Gestión Integral', 'Mantenimiento Preventivo'],
    notes: 'Unidades residenciales en Bella Vista para renta a largo plazo.',
    created_at: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
    n8n_dispatched: true,
  },
];

// In-memory fallback and listeners
type StorageListener = () => void;
const listeners: Set<StorageListener> = new Set();

export function subscribeToDatabase(listener: StorageListener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function notifyChange(): void {
  listeners.forEach((fn) => {
    try {
      fn();
    } catch (e) {
      console.error(e);
    }
  });
}

// Projects operations
export function getPortfolioProjects(): PortfolioProject[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn('LocalStorage error reading projects', err);
  }
  return initialProjects;
}

// Leads operations
export function getLeadQuotes(): LeadQuote[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LEADS);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn('LocalStorage error reading leads', err);
  }
  return initialLeads;
}

// Webhook events operations
export function getN8nWebhookEvents(): N8nWebhookEvent[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.WEBHOOKS);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn('LocalStorage error reading webhooks', err);
  }

  // Pre-seed sample webhook executions
  const sampleEvents: N8nWebhookEvent[] = initialLeads.map((lead, idx) => {
    const calc = calculatePreliminaryQuote(
      lead.property_type,
      lead.units_count,
      lead.preferred_currency,
      lead.selected_services
    );
    return {
      id: `wh_${lead.id.substring(0, 8)}`,
      timestamp: lead.created_at,
      event: 'INSERT',
      table: 'lead_quotes',
      payload: {
        record: lead,
        preliminary_calculation: {
          units: lead.units_count,
          base_unit_rate: calc.baseRatePerUnit,
          currency: lead.preferred_currency,
          estimated_monthly: calc.monthlyFee,
          volume_discount_pct: calc.discountPct,
          tier: calc.tier,
        },
      },
      status: 'completed',
      execution_time_ms: 180 + idx * 45,
      client_email_sent: true,
      internal_slack_alert: true,
    };
  });
  return sampleEvents;
}

export function insertLeadQuote(leadData: Omit<LeadQuote, 'id' | 'created_at' | 'status' | 'n8n_dispatched'>): {
  lead: LeadQuote;
  webhookEvent: N8nWebhookEvent;
} {
  const currentLeads = getLeadQuotes();
  const currentWebhooks = getN8nWebhookEvents();

  const id = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const created_at = new Date().toISOString();

  const calculation = calculatePreliminaryQuote(
    leadData.property_type,
    leadData.units_count,
    leadData.preferred_currency,
    leadData.selected_services || []
  );

  const newLead: LeadQuote = {
    ...leadData,
    id,
    status: 'pending',
    created_at,
    estimated_monthly_fee: calculation.monthlyFee,
    n8n_dispatched: true,
  };

  const updatedLeads = [newLead, ...currentLeads];

  // Create simulated n8n webhook event
  const webhookEvent: N8nWebhookEvent = {
    id: `wh_${Date.now()}`,
    timestamp: created_at,
    event: 'INSERT',
    table: 'lead_quotes',
    payload: {
      record: newLead,
      preliminary_calculation: {
        units: newLead.units_count,
        base_unit_rate: calculation.baseRatePerUnit,
        currency: newLead.preferred_currency,
        estimated_monthly: calculation.monthlyFee,
        volume_discount_pct: calculation.discountPct,
        tier: calculation.tier,
      },
    },
    status: 'completed',
    execution_time_ms: Math.floor(Math.random() * 120) + 140,
    client_email_sent: true,
    internal_slack_alert: true,
  };

  const updatedWebhooks = [webhookEvent, ...currentWebhooks];

  try {
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(updatedLeads));
    localStorage.setItem(STORAGE_KEYS.WEBHOOKS, JSON.stringify(updatedWebhooks));
  } catch (err) {
    console.warn('LocalStorage error writing lead', err);
  }

  notifyChange();

  return { lead: newLead, webhookEvent };
}

export function updateLeadStatus(id: string, status: 'pending' | 'contacted' | 'closed'): void {
  const currentLeads = getLeadQuotes();
  const updated = currentLeads.map((l) => (l.id === id ? { ...l, status } : l));
  try {
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(updated));
  } catch (err) {
    console.warn(err);
  }
  notifyChange();
}

export function resetDemoData(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.LEADS);
    localStorage.removeItem(STORAGE_KEYS.WEBHOOKS);
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
  } catch (err) {
    console.warn(err);
  }
  notifyChange();
}
