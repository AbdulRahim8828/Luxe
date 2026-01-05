
export const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Luxe Wooden Furniture Polishing',
  alternateName: 'Luxe Furniture Polishing',
  description: 'Premium wooden furniture polishing and restoration services in Mumbai. Specializing in luxury homes, villas, offices, and interior design projects with expert craftsmanship and attention to detail.',
  image: 'https://luxewoodenfurniturepolishing.com/logo.png',
  logo: 'https://luxewoodenfurniturepolishing.com/logo.png',
  url: 'https://luxewoodenfurniturepolishing.com',
  telephone: '+918828709945',
  email: 'info@luxewoodenfurniturepolishing.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mumbai Metropolitan Region',
    addressLocality: 'Mumbai',
    postalCode: '400001',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.0760,
    longitude: 72.8777,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/luxewoodenfurniturepolishing',
    'https://www.instagram.com/luxewoodenfurniturepolishing',
  ],
  priceRange: '₹₹₹',
  paymentAccepted: ['Cash', 'Credit Card', 'UPI', 'Bank Transfer'],
  currenciesAccepted: 'INR',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '500',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Luxury Furniture Polishing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Premium Wooden Furniture Polishing',
          description: 'Expert polishing for dining tables, chairs, beds, and cabinets',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Antique & Heritage Restoration',
          description: 'Specialized care for vintage and antique furniture pieces',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Executive Office Polishing',
          description: 'Premium furniture polishing for luxury offices and businesses',
        },
      },
    ],
  },
  areaServed: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 19.1136, // Jogeshwari
        longitude: 72.8694,
      },
      geoRadius: '5000',
    },
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 19.1194, // Andheri
        longitude: 72.8465,
      },
      geoRadius: '5000',
    },
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 19.1645, // Goregaon
        longitude: 72.8493,
      },
      geoRadius: '5000',
    },
  ],
};
