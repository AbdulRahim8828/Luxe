import { ComponentType } from 'react';

export interface BlogPostData {
  slug: string;
  title: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  description: string;
  keywords: string;
  content: string;
}

// Urban Company Style Service UI Types

export interface ServiceOption {
  id?: string;
  name: string;
  price: number;
  rating?: number;
  reviewCount?: number;
  estimatedTime?: string;
  image?: string;
  badge?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TrustBadge {
  icon: string;
  text: string;
}

export interface ServiceData {
  id: string;
  name: string;
  category: string;
  tabCategory?: 'polish' | 'sofa' | 'product';
  rating: number;
  reviewCount: number;
  duration: string;
  image: string;
  features: string[];
  options: ServiceOption[];
  selectedOption?: number;
  priceIncludes: string[];
  materials: string[];
  processSteps: ProcessStep[];
  faqs: FAQ[];
  trustBadges: TrustBadge[];
}

export interface SelectedService {
  serviceId: string;
  serviceName: string;
  optionId: string;
  optionName: string;
  price: number;
  quantity: number;
  image: string;
}

export interface BookingData {
  services: SelectedService[];
  totalPrice: number;
  customerInfo?: {
    name?: string;
    phone?: string;
    address?: string;
  };
}
