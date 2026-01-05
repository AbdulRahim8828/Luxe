import { PageData } from '../types';

/**
 * Sample page data for testing ServicePageTemplate component
 * This represents a typical generated page for "Affordable Furniture Polishing in Mumbai"
 */
export const samplePageData: PageData = {
  // SEO Fields
  title: 'Premium Furniture Polishing in Mumbai | Luxe Wooden Furniture Polishing',
  metaDescription: 'Get premium luxury furniture polishing services in Mumbai. Expert wooden furniture polish, sofa restoration, and complete refinishing. 24/7 service. Call +91 8828709945',
  h1: 'Premium Luxury Furniture Polishing Services in Mumbai',
  url: '/services/premium-furniture-polishing-mumbai',
  canonicalUrl: 'https://luxewoodenfurniturepolishing.com/services/premium-furniture-polishing-mumbai',
  
  // Service Information
  serviceCategory: 'furniture-polishing',
  serviceName: 'Furniture Polishing',
  location: 'Mumbai',
  titleVariation: 'premium',
  
  // Content Sections
  introduction: 'Transform your furniture with Luxe Wooden Furniture Polishing - Mumbai\'s most trusted experts in premium luxury wooden furniture polishing, sofa restoration, table polishing, and complete furniture refinishing. We specialize in teak wood polish, PU polish, melamine polish, and antique restoration. Serving all areas of Mumbai with 24/7 emergency service and same-day availability.',
  
  services: [
    {
      name: 'Wooden Furniture Polish',
      description: 'Professional polishing for all types of wooden furniture including teak, sheesham, and mango wood',
    },
    {
      name: 'Sofa & Chair Polishing',
      description: 'Expert restoration and polishing services for sofa sets and chairs',
    },
    {
      name: 'Table & Bed Polishing',
      description: 'Complete refinishing for dining tables, coffee tables, and bed frames',
    },
    {
      name: 'Wardrobe & Cabinet Polish',
      description: 'Interior and exterior polishing for wardrobes, cabinets, and storage units',
    },
    {
      name: 'Door Polishing',
      description: 'Professional door polishing and refinishing services',
    },
    {
      name: 'Antique Restoration',
      description: 'Specialized care and restoration for antique and vintage furniture',
    },
  ],
  
  process: [
    {
      step: 1,
      title: 'Inspection',
      description: 'Our experts inspect your furniture and provide a detailed quote',
      image: '/assets/Cleaning & Sanding.webp',
    },
    {
      step: 2,
      title: 'Preparation',
      description: 'We clean, sand, and prepare the surface for polishing',
      image: '/assets/Cleaning & Sanding (2).webp',
    },
    {
      step: 3,
      title: 'Polishing',
      description: 'Apply premium quality polish with expert techniques',
      image: '/assets/filling-gaps-polish-application.webp',
    },
    {
      step: 4,
      title: 'Finishing',
      description: 'Final touches and quality check before delivery',
      image: '/assets/drying-finishing.webp',
    },
  ],
  
  locationAreas: [
    'Andheri West',
    'Andheri East',
    'Bandra',
    'Goregaon',
    'Malad',
    'Borivali',
    'Kandivali',
    'Jogeshwari',
    'Powai',
    'Dadar',
    'Kurla',
    'Thane',
    'Vile Parle',
    'Santacruz',
    'Juhu',
    'Chembur',
    'Ghatkopar',
    'Mulund',
    'Bhandup',
    'Vikhroli',
  ],
  
  serviceAreaDescription: 'We proudly serve all areas across Mumbai, including Western suburbs, Central Mumbai, Eastern suburbs, and Navi Mumbai. Our team of expert polishers is available throughout the city, ensuring convenient service no matter where you\'re located. We understand Mumbai\'s unique climate challenges and use appropriate materials and techniques that withstand humidity and temperature variations.',
  
  pricing: {
    startingPrice: 1999,
    priceRange: '₹1,999 - ₹15,000',
    factors: [
      'Type and size of furniture',
      'Current condition and damage level',
      'Type of premium polish required (PU, Melamine, Duco)',
      'Number of coats needed',
      'Additional luxury services like scratch repair or restoration',
    ],
  },
  
  whyChooseUs: [
    {
      title: 'Master Craftsmen',
      description: 'Skilled luxury artisans with 10+ years of experience in premium furniture polishing',
    },
    {
      title: '24/7 Premium Service',
      description: 'Available round the clock for urgent luxury requirements across Mumbai',
    },
    {
      title: 'Quality Guaranteed',
      description: '100% satisfaction guarantee with 12 months warranty on all luxury work',
    },
    {
      title: 'Luxury Specialists',
      description: 'Deep understanding of Mumbai luxury market and discerning customer needs',
    },
  ],
  
  faqs: [
    {
      question: 'How quickly can you start the luxury furniture polishing work?',
      answer: 'We offer same-day premium service for most areas in Mumbai. Book before 2 PM and we can start the same day. Emergency luxury services available within 2-4 hours.',
    },
    {
      question: 'What type of premium polish do you use? Is it safe?',
      answer: 'We use only the finest quality PU (Polyurethane) polish, melamine polish, and duco paint. All materials are eco-friendly, non-toxic, and safe for luxury homes with children and pets.',
    },
    {
      question: 'Do I need to empty my furniture before luxury polishing?',
      answer: 'Yes, please empty all items from the furniture. Our luxury team will handle the furniture with utmost care, but we recommend removing all contents for safety and optimal results.',
    },
    {
      question: 'How long does the luxury polishing work take?',
      answer: 'Small items (1-2 shelves): 3-4 hours | Medium furniture (bookshelf, TV unit): 6-8 hours | Large luxury items (wardrobes): 2-3 days. Premium drying time is additional 48-72 hours.',
    },
    {
      question: 'What is included in the luxury service price?',
      answer: 'Our premium price includes high-end material cost (luxury polish, sandpaper, primer), expert labor charges, transportation of materials, and 12 months luxury service warranty. No hidden charges.',
    },
  ],
  
  relatedServices: [
    {
      name: 'Luxury Wood Polishing in Mumbai',
      url: '/services/premium-wood-polishing-mumbai',
    },
    {
      name: 'Premium PU Polish in Mumbai',
      url: '/services/premium-pu-polish-mumbai',
    },
    {
      name: 'Luxury Door Polishing in Mumbai',
      url: '/services/premium-door-polishing-mumbai',
    },
    {
      name: 'Premium Wardrobe Polishing in Mumbai',
      url: '/services/premium-wardrobe-polishing-mumbai',
    },
  ],
  
  // Schema Data
  schema: {
    localBusiness: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Luxe Wooden Furniture Polishing - Mumbai',
      image: 'https://luxewoodenfurniturepolishing.com/assets/wooden furniture .webp',
      '@id': 'https://luxewoodenfurniturepolishing.com',
      url: 'https://luxewoodenfurniturepolishing.com/services/premium-furniture-polishing-mumbai',
      telephone: '+918828709945',
      priceRange: '₹₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Mumbai Metropolitan Region',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.1450,
        longitude: 72.8450,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      sameAs: [
        'https://www.facebook.com/luxewoodenfurniturepolishing',
        'https://www.instagram.com/luxewoodenfurniturepolishing',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '500',
      },
    },
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Premium Furniture Polishing',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Luxe Wooden Furniture Polishing',
      },
      areaServed: {
        '@type': 'City',
        name: 'Mumbai',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Luxury Furniture Polishing Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Premium Wooden Furniture Polish',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Luxury Sofa & Chair Polishing',
            },
          },
        ],
      },
    },
  },
  
  // Keywords
  primaryKeyword: 'premium furniture polishing mumbai',
  secondaryKeywords: [
    'luxury furniture polish mumbai',
    'premium wooden furniture polishing',
    'luxury sofa polishing mumbai',
    'premium table polishing service',
    'luxury furniture restoration mumbai',
    'high-end furniture polish',
    'premium furniture polishing',
  ],
};
