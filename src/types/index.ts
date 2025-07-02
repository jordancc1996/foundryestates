export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  badge?: 'Featured' | 'Exclusive' | 'New';
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: 'buying' | 'selling' | 'consulting' | 'advisory';
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  interest: 'buying' | 'selling' | 'investment' | 'consultation' | '';
  message: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  phone: string;
  email: string;
  address: string;
  social: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
  };
}

