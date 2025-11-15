
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { FaArrowRight } from 'react-icons/fa';

const repairService = {
  id: 'office-chair-repair',
  name: 'Office Chair Repair',
  image: '/assets/Chair Repair.jpg',
  categories: [
    {
      name: 'Chair Base Replacement',
      options: [
        { name: 'Steel Finish', price: 749 },
        { name: 'Black Finish', price: 619 },
        { name: 'Nylon', price: 549 },
        { name: 'Plastic', price: 549 },
      ],
    },
    {
      name: 'Other Repairs',
      options: [
        { name: 'Wheel Replacement', price: 449 },
        { name: 'Hydraulic Replacement', price: 599 },
      ],
    },
  ],
  features: [
    'On-site repair and service for office chairs.',
    'High-quality spare parts for all major brands.',
    'Experienced technicians for reliable repairs.',
    'Warranty on all replaced parts.',
    'A labour charge of ₹249 is included in all service prices.',
  ],
};

const OfficeChairRepair: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<{ cat: number; opt: number } | null>(null);
  const [formErrors, setFormErrors] = useState({ variant: '' });

  const allOptions = repairService.categories.flatMap(c => c.options);
  const minPrice = Math.min(...allOptions.map(o => o.price));

  const handleOptionChange = (catIndex: number, optIndex: number) => {
    setSelectedOption({ cat: catIndex, opt: optIndex });
    setFormErrors({ variant: '' });
  };

  const openBookingModal = () => {
    if (!selectedOption) {
      setFormErrors({ variant: 'Please select a service option.' });
      return;
    }
    const option = repairService.categories[selectedOption.cat].options[selectedOption.opt];
    const message = `I would like to book the Office Chair Repair service for ${option.name} at a price of ₹${option.price}.`;
    const whatsappUrl = `https://wa.me/918828709945?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: repairService.name,
    provider: {
      '@type': 'LocalBusiness',
      name: 'A1 Furniture Polish',
      telephone: '+918828709945',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jogeshwari West',
        addressLocality: 'Mumbai',
        addressRegion: 'MH',
        postalCode: '400102',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Mumbai',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Chair Repair Services',
      itemListElement: repairService.categories.map(cat => ({
        '@type': 'OfferCatalog',
        name: cat.name,
        itemListElement: cat.options.map(opt => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: opt.name,
          },
          price: opt.price,
          priceCurrency: 'INR',
        })),
      })),
    },
  };

  return (
    <>
      <SEOHead
        title="Office Chair Repair Services in Mumbai | A1 Furniture Polish"
        description="Expert office chair repair in Mumbai. We offer base, wheel, and hydraulic replacement with on-site service at competitive prices."
        keywords="office chair repair, chair repair mumbai, chair base replacement, chair wheel replacement, hydraulic replacement, furniture repair"
      />
      <JsonLd data={serviceSchema} />

      <div className="bg-gray-100 min-h-screen block">
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={repairService.image} alt={repairService.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900">{repairService.name}</h1>
              <div className="flex items-baseline mt-2 mb-6">
                <span className="text-2xl font-bold text-amber-600">Starts at ₹{minPrice}</span>
                <span className="ml-4 px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                  Includes Labour Cost of ₹249
                </span>
              </div>

              {repairService.categories.map((category, catIndex) => (
                <div key={catIndex} className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {category.options.map((option, optIndex) => (
                      <div
                        key={optIndex}
                        onClick={() => handleOptionChange(catIndex, optIndex)}
                        className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedOption?.cat === catIndex && selectedOption?.opt === optIndex
                            ? 'border-amber-600 bg-amber-50'
                            : 'border-gray-200 hover:border-amber-400'
                        }`}>
                        <p className="font-semibold text-gray-800">{option.name}</p>
                        <p className="text-lg font-bold text-gray-900">₹{option.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {formErrors.variant && <p className="text-red-500 text-sm mt-2">{formErrors.variant}</p>}

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">What's Included</h4>
                <ul className="text-gray-600 space-y-2">
                  {repairService.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={openBookingModal}
                  className="bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center justify-center transition-transform duration-200 hover:scale-105"
                >
                  Book Now <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default OfficeChairRepair;
