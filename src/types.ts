export type Language = 'es' | 'en' | 'fr';
export type Currency = 'USD' | 'DOP';

export type PropertyType = 
  | 'Apartamento'
  | 'Penthouse'
  | 'Villa'
  | 'Torre Residencial'
  | 'Edificio Comercial';

export type LeadStatus = 'pending' | 'contacted' | 'closed';

export interface PortfolioProject {
  id: string;
  title: string;
  description_es: string;
  description_en: string;
  description_fr: string;
  location: string;
  main_image_url: string;
  gallery_urls: string[];
  created_at: string;
  // Metadata for luxury presentation
  category: 'torre' | 'villa' | 'penthouse' | 'residence';
  units_count?: number;
  year_completed?: number;
  featured?: boolean;
}

export interface LeadQuote {
  id: string;
  client_name: string;
  email: string;
  phone?: string;
  property_type: PropertyType;
  units_count: number;
  preferred_currency: Currency;
  status: LeadStatus;
  created_at: string;
  // Quote calculation details
  estimated_monthly_fee?: number;
  selected_services?: string[];
  notes?: string;
  n8n_dispatched?: boolean;
}

export interface N8nWebhookEvent {
  id: string;
  timestamp: string;
  event: 'INSERT';
  table: 'lead_quotes';
  payload: {
    record: LeadQuote;
    preliminary_calculation: {
      units: number;
      base_unit_rate: number;
      currency: Currency;
      estimated_monthly: number;
      volume_discount_pct: number;
      tier: 'Standard' | 'Portfolio' | 'Enterprise';
    };
  };
  status: 'delivered' | 'processing' | 'completed';
  execution_time_ms: number;
  client_email_sent: boolean;
  internal_slack_alert: boolean;
}
