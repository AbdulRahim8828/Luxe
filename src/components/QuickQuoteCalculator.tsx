import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { servicePageData } from '../data/servicePageData';

const QuickQuoteCalculator: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showQuote, setShowQuote] = useState(false);

  const handleServiceChange = (serviceId: string) => {
    setSelectedService(serviceId);
    setSelectedOption('');
    setShowQuote(false);
  };

  const handleOptionChange = (optionId: string) => {
    setSelectedOption(optionId);
    setShowQuote(true);
  };

  const selectedServiceData = servicePageData.find(s => s.id === selectedService);
  const selectedOptionData = selectedServiceData?.options.find(o => o.id === selectedOption);

  return (
    <section className="py-10 md:py-12 luxe-bg-secondary relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 right-16 w-48 h-48 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-16 left-16 w-64 h-64 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Calculator className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display' }}>
              Get <span className="text-yellow-400 luxe-shimmer">Instant Quote</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-300">Select your furniture type and get premium pricing in seconds</p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 hover:border-yellow-500/30 transition-all duration-300 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Service Selection */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                1. Select Furniture Type
              </label>
              <select
                value={selectedService}
                onChange={(e) => handleServiceChange(e.target.value)}
                className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white backdrop-blur-sm transition-all duration-300 text-sm"
              >
                <option value="" className="bg-gray-800">Choose furniture type...</option>
                {servicePageData.slice(0, 8).map((service) => (
                  <option key={service.id} value={service.id} className="bg-gray-800">
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Option Selection */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                2. Select Size/Type
              </label>
              <select
                value={selectedOption}
                onChange={(e) => handleOptionChange(e.target.value)}
                disabled={!selectedService}
                className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white backdrop-blur-sm disabled:bg-gray-700/30 disabled:cursor-not-allowed transition-all duration-300 text-sm"
              >
                <option value="" className="bg-gray-800">Choose size/type...</option>
                {selectedServiceData?.options.map((option) => (
                  <option key={option.id} value={option.id} className="bg-gray-800">
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quote Result */}
          {showQuote && selectedOptionData && (
            <div className="mt-6 p-6 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl border border-yellow-500/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {selectedOptionData.name}
                  </h3>
                  <p className="text-sm text-gray-300">
                    Estimated time: {selectedOptionData.estimatedTime}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-bold text-yellow-400">
                    ₹{selectedOptionData.price.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-400">Inclusive of premium materials</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/918828709945?text=Hi! I want to book ${selectedServiceData?.name} - ${selectedOptionData.name} for ₹${selectedOptionData.price.toLocaleString()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 luxe-btn-primary py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm"
                >
                  <span>Book Premium Service</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+918828709945"
                  className="flex-1 luxe-btn-secondary py-3 px-6 rounded-xl font-semibold text-center text-sm"
                >
                  Call for Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuickQuoteCalculator;
