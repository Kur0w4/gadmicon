export type Language = 'es' | 'en' | 'fr';
export type Currency = 'USD' | 'DOP';

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
  category: 'torre' | 'villa' | 'penthouse' | 'residence';
  units_count?: number;
  year_completed?: number;
  featured?: boolean;
}
