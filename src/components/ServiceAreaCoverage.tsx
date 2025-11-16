import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';

const ServiceAreaCoverage = () => {
  const areas = [
    'Andheri East', 'Andheri West', 'Bandra', 'Powai', 'Jogeshwari',
    'Goregaon', 'Malad', 'Kandivali', 'Borivali', 'Dahisar',
    'Santacruz', 'Vile Parle', 'Juhu', 'Versova', 'Oshiwara',
    'Lokhandwala', 'Khar', 'Bandra Kurla Complex', 'Vikhroli', 'Ghatkopar'
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-amber-600 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">
              Service Areas in Mumbai
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide professional furniture polishing services across Mumbai. Same-day service available in select areas!
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700 font-medium">{area}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your area? <span className="font-semibold">We cover all of Mumbai!</span>
          </p>
          <a
            href="tel:+918828709945"
            className="inline-flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-200 font-semibold"
          >
            <span>Call to Check Availability</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaCoverage;
