import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { FaArrowRight } from 'react-icons/fa';

const sofaService = {
  id: 'sofa-fabric-change',
  name: 'Sofa Fabric Change',
  image: '../assets/Sofa_Fabric_Change_20.jpg',
  categories: [
    {
      name: 'Sofa & Miscellaneous',
      options: [
        { name: '1 seater Sofa', price: 3499 },
        { name: '2 seater Sofa', price: 4499 },
        { name: '3 seater Sofa', price: 5999 },
        { name: 'L shape Sofa', price: 8999 },
        { name: 'Sofa cumbed', price: 5999 },
        { name: 'Bed side 3 side', price: 3499 },
      ],
    },
    {
      name: 'Recliner Sofa',
      options: [
        { name: 'Recliner 1 seater', price: 4499 },
        { name: 'Recliner 2 seater', price: 7499 },
        { name: 'Recliner 3 seater', price: 9999 },
        { name: 'Recliner 3-1-1 seater', price: 13999 },
      ],
    },
  ],
  features: [
    'The listed prices are for labor costs only and do not include the cost of fabric.',
    'High-quality fabric in a variety of colors and textures',
    'Professional removal of old fabric and installation of new fabric',
    'Minor frame repairs and foam padding replacement included',
    'Free consultation and fabric sample selection at your home',
  ],
};

const SofaFabricChange: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<{ cat: number; opt: number } | null>(null);
  const [formErrors, setFormErrors] = useState({ variant: '' });

  const allOptions = sofaService.categories.flatMap(c => c.options);
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
    const option = sofaService.categories[selectedOption.cat].options[selectedOption.opt];
    const message = `I would like to book the Sofa Fabric Change service for a ${option.name} at a price of ₹${option.price}.`;
    const whatsappUrl = `https://wa.me/918828709945?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: sofaService.name,
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
      name: 'Sofa Fabric Change Services',
      itemListElement: sofaService.categories.map(cat => ({
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
        title="Sofa Fabric Change Services in Mumbai | A1 Furniture Polish"
        description="Professional sofa fabric change services in Mumbai. Get the best prices for 1, 2, 3-seater, L-shape sofas, recliners, and more."
        keywords={'sofa fabric change, sofa repair, furniture upholstery, mumbai, recliner fabric change'}
      />
      <JsonLd data={serviceSchema} />

      <div className="bg-gray-100 min-h-screen">
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={sofaService.image} alt="Sofa Fabric Change" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900">{sofaService.name}</h1>
              <div className="flex items-baseline mt-2 mb-6">
                <span className="text-2xl font-bold text-amber-600">Starts at ₹{minPrice}</span>
                <span className="ml-4 px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                  20% Lower than competitors
                </span>
              </div>

              {sofaService.categories.map((category, catIndex) => (
                <div key={catIndex} className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                  {sofaService.features.map((feature, i) => (
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
};go

export default SofaFabricChange;
