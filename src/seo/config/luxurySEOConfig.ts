/**
 * Luxury SEO Configuration for Luxe Wooden Furniture Polishing
 * Centralized SEO metadata templates and configurations for luxury positioning
 */

import { brandConfig, contentManagerConfig } from '../../config/brand';

export interface LuxurySEOTemplate {
  titleTemplate: string;
  descriptionTemplate: string;
  keywords: string[];
}

export interface LuxurySEOConfig {
  brandName: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string[];
  templates: {
    home: LuxurySEOTemplate;
    service: LuxurySEOTemplate;
    location: LuxurySEOTemplate;
    serviceLocation: LuxurySEOTemplate;
    about: LuxurySEOTemplate;
    contact: LuxurySEOTemplate;
    blog: LuxurySEOTemplate;
  };
  openGraph: {
    siteName: string;
    type: string;
    locale: string;
  };
  twitter: {
    site: string;
    creator: string;
  };
}

// Luxury SEO Configuration
export const luxurySEOConfig: LuxurySEOConfig = {
  brandName: brandConfig.name,
  defaultTitle: `${brandConfig.name} - Luxury Finish for Timeless Furniture`,
  defaultDescription: 'Premium wooden furniture polishing services in Mumbai. Specializing in luxury homes, villas, and high-end offices. Expert craftsmanship with 1-year warranty.',
  defaultKeywords: [
    'Wooden Furniture Polishing in Mumbai',
    'Luxury Furniture Polishing Services',
    'Premium Furniture Care Mumbai',
    'Luxury Wooden Furniture Restoration',
    'High-end Furniture Polishing',
    'Professional Furniture Polish Mumbai',
    'Luxury Home Furniture Care',
    'Premium Wood Polish Services',
  ],
  templates: {
    home: {
      titleTemplate: `${brandConfig.name} - Luxury Finish for Timeless Furniture`,
      descriptionTemplate: 'Premium wooden furniture polishing services in Mumbai. Specializing in luxury homes, villas, and high-end offices. Expert craftsmanship with 1-year warranty.',
      keywords: [
        'Wooden Furniture Polishing in Mumbai',
        'Luxury Furniture Polishing Services',
        'Premium Furniture Care Mumbai',
        'Luxury Home Furniture Polish',
        'High-end Wood Polish Mumbai',
      ],
    },
    service: {
      titleTemplate: 'Luxury {service} Services | {brandName}',
      descriptionTemplate: 'Premium {service} services in Mumbai. Expert craftsmanship for luxury homes, villas, and high-end offices. Professional quality with 1-year warranty.',
      keywords: [
        'Luxury {service} Mumbai',
        'Premium {service} Services',
        'Professional {service} Mumbai',
        'High-end {service}',
        '{service} for Luxury Homes',
      ],
    },
    location: {
      titleTemplate: 'Wooden Furniture Polishing in {location} | {brandName}',
      descriptionTemplate: 'Premium wooden furniture polishing services in {location}. Luxury finish for discerning homeowners and interior designers. Expert craftsmanship with warranty.',
      keywords: [
        'Wooden Furniture Polishing in {location}',
        'Luxury Furniture Polish {location}',
        'Premium Furniture Care {location}',
        'Professional Wood Polish {location}',
        'Furniture Polishing Services {location}',
      ],
    },
    serviceLocation: {
      titleTemplate: 'Luxury {service} in {location} | {brandName}',
      descriptionTemplate: 'Premium {service} services in {location}. Specializing in luxury homes, villas, and high-end offices. Expert craftsmanship with professional quality guarantee.',
      keywords: [
        'Luxury {service} in {location}',
        'Premium {service} {location}',
        'Professional {service} {location}',
        '{service} Services {location}',
        'High-end {service} {location}',
      ],
    },
    about: {
      titleTemplate: 'About Us - Premium Furniture Care Experts | {brandName}',
      descriptionTemplate: 'Learn about our luxury furniture polishing expertise. Serving discerning homeowners, interior designers, and luxury establishments across Mumbai with premium quality.',
      keywords: [
        'Luxury Furniture Polish Company',
        'Premium Furniture Care Experts',
        'Professional Wood Polish Mumbai',
        'Luxury Furniture Restoration',
        'High-end Furniture Services',
      ],
    },
    contact: {
      titleTemplate: 'Contact Us - Book Premium Furniture Services | {brandName}',
      descriptionTemplate: 'Get in touch for luxury furniture polishing services. Free consultation and quotes for premium furniture care in Mumbai. Expert service for discerning clients.',
      keywords: [
        'Book Furniture Polishing Mumbai',
        'Luxury Furniture Service Contact',
        'Premium Wood Polish Booking',
        'Furniture Polish Consultation',
        'Professional Furniture Care Mumbai',
      ],
    },
    blog: {
      titleTemplate: '{title} | {brandName} - Luxury Furniture Care Tips',
      descriptionTemplate: 'Expert insights on luxury furniture care and maintenance. Professional tips for preserving the beauty of your premium wooden furniture.',
      keywords: [
        'Luxury Furniture Care Tips',
        'Premium Wood Maintenance',
        'Furniture Polish Guide',
        'Luxury Home Furniture Care',
        'Professional Furniture Tips',
      ],
    },
  },
  openGraph: {
    siteName: brandConfig.name,
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    site: '@LuxeWoodPolish',
    creator: '@LuxeWoodPolish',
  },
};

// Template processing functions
export const processTemplate = (template: string, variables: Record<string, string>): string => {
  let processed = template;
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{${key}}`, 'g');
    processed = processed.replace(regex, value);
  });
  return processed;
};

export const generateSEOTitle = (
  templateType: keyof LuxurySEOConfig['templates'],
  variables: Record<string, string> = {}
): string => {
  const template = luxurySEOConfig.templates[templateType];
  const allVariables = {
    brandName: luxurySEOConfig.brandName,
    ...variables,
  };
  return processTemplate(template.titleTemplate, allVariables);
};

export const generateSEODescription = (
  templateType: keyof LuxurySEOConfig['templates'],
  variables: Record<string, string> = {}
): string => {
  const template = luxurySEOConfig.templates[templateType];
  const allVariables = {
    brandName: luxurySEOConfig.brandName,
    ...variables,
  };
  return processTemplate(template.descriptionTemplate, allVariables);
};

export const generateSEOKeywords = (
  templateType: keyof LuxurySEOConfig['templates'],
  variables: Record<string, string> = {}
): string[] => {
  const template = luxurySEOConfig.templates[templateType];
  return template.keywords.map(keyword => processTemplate(keyword, variables));
};

// Utility functions for common SEO patterns
export const getHomeSEO = () => ({
  title: generateSEOTitle('home'),
  description: generateSEODescription('home'),
  keywords: generateSEOKeywords('home').join(', '),
});

export const getServiceSEO = (service: string) => ({
  title: generateSEOTitle('service', { service }),
  description: generateSEODescription('service', { service }),
  keywords: generateSEOKeywords('service', { service }).join(', '),
});

export const getLocationSEO = (location: string) => ({
  title: generateSEOTitle('location', { location }),
  description: generateSEODescription('location', { location }),
  keywords: generateSEOKeywords('location', { location }).join(', '),
});

export const getServiceLocationSEO = (service: string, location: string) => ({
  title: generateSEOTitle('serviceLocation', { service, location }),
  description: generateSEODescription('serviceLocation', { service, location }),
  keywords: generateSEOKeywords('serviceLocation', { service, location }).join(', '),
});

export const getAboutSEO = () => ({
  title: generateSEOTitle('about'),
  description: generateSEODescription('about'),
  keywords: generateSEOKeywords('about').join(', '),
});

export const getContactSEO = () => ({
  title: generateSEOTitle('contact'),
  description: generateSEODescription('contact'),
  keywords: generateSEOKeywords('contact').join(', '),
});

export const getBlogSEO = (title: string) => ({
  title: generateSEOTitle('blog', { title }),
  description: generateSEODescription('blog'),
  keywords: generateSEOKeywords('blog').join(', '),
});

// Enhanced Open Graph and Twitter Card generation
export const generateLuxuryOpenGraphTags = (
  title: string,
  description: string,
  url: string,
  image?: string
): Record<string, string> => ({
  'og:title': title,
  'og:description': description,
  'og:type': luxurySEOConfig.openGraph.type,
  'og:url': url,
  'og:site_name': luxurySEOConfig.openGraph.siteName,
  'og:locale': luxurySEOConfig.openGraph.locale,
  ...(image && { 'og:image': image }),
});

export const generateLuxuryTwitterCardTags = (
  title: string,
  description: string,
  image?: string
): Record<string, string> => ({
  'twitter:card': 'summary_large_image',
  'twitter:site': luxurySEOConfig.twitter.site,
  'twitter:creator': luxurySEOConfig.twitter.creator,
  'twitter:title': title,
  'twitter:description': description,
  ...(image && { 'twitter:image': image }),
});