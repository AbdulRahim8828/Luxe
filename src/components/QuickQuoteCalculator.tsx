import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, Crown } from 'lucide-react';
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
    <section className="py-12 md:py-16 luxe-bg-primary relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-yellow-700/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-amber-600/15 to-yellow-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 border border-yellow-600/30 rounded-full mb-4">
            <Crown className="w-3 h-3 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-xs font-medium tracking-wider uppercase">Premium Calculator</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <Calculator className="w-5 h-5 text-black" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display' }}>
              Get <span className="text-yellow-400 luxe-shimmer">Instant Quote</span>
            </h2>
          </div>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            Select your premium furniture and receive luxury pricing instantly
          </p>
        </div>

        {/* Compact Calculator Card */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 md:p-8 hover:border-yellow-500/50 transition-all duration-300 shadow-xl">
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Compact Service Selection */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xs">
                  1
                </div>
                <label className="text-base font-bold text-white" style={{ fontFamily: 'Playfair Display' }}>
                  Select Premium Furniture
                </label>
              </div>
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={(e) => handleServiceChange(e.target.value)}
                  className="w-full p-3 bg-gray-800/60 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white backdrop-blur-sm transition-all duration-300 text-sm font-medium hover:border-yellow-500/30"
                >
                  <option value="" className="bg-gray-800">Choose your premium furniture...</option>
                  {servicePageData.slice(0, 8).map((service) => (
                    <option key={service.id} value={service.id} className="bg-gray-800">
                      {service.name}
                    </option>
                  ))}
                </select>
                <Sparkles className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-yellow-400 pointer-events-none" />
              </div>
            </div>

            {/* Compact Option Selection */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xs">
                  2
                </div>
                <label className="text-base font-bold text-white" style={{ fontFamily: 'Playfair Display' }}>
                  Select Size & Type
                </label>
              </div>
              <div className="relative">
                <select
                  value={selectedOption}
                  onChange={(e) => handleOptionChange(e.target.value)}
                  disabled={!selectedService}
                  className="w-full p-3 bg-gray-800/60 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white backdrop-blur-sm disabled:bg-gray-700/30 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 text-sm font-medium hover:border-yellow-500/30"
                >
                  <option value="" className="bg-gray-800">Choose size & specifications...</option>
                  {selectedServiceData?.options.map((option) => (
                    <option key={option.id} value={option.id} className="bg-gray-800">
                      {option.name}
                    </option>
                  ))}
                </select>
                <Sparkles className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-yellow-400 pointer-events-none opacity-50" />
              </div>
            </div>
          </div>

          {/* Compact Quote Result */}
          {showQuote && selectedOptionData && (
            <div className="mt-6 p-6 bg-gradient-to-br from-yellow-500/15 to-yellow-600/10 rounded-2xl border border-yellow-500/40 backdrop-blur-sm relative">
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Crown className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 text-xs font-medium uppercase tracking-wider">Premium Service</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Playfair Display' }}>
                    {selectedOptionData.name}
                  </h3>
                  <p className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                    Estimated time: {selectedOptionData.estimatedTime}
                  </p>
                </div>
                <div className="text-right">
                  <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl p-3 border border-yellow-500/30">
                    <p className="text-2xl font-bold text-yellow-400 mb-0.5">
                      ₹{selectedOptionData.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-400">Premium materials included</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/918828709945?text=Hi! I want to book ${selectedServiceData?.name} - ${selectedOptionData.name} for ₹${selectedOptionData.price.toLocaleString()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
                >
                  <span>Book Premium Service</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+918828709945"
                  className="flex-1 bg-transparent border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black py-3 px-6 rounded-xl font-bold text-center text-sm transition-all duration-300"
                >
                  Call for Consultation
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Compact Features */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 text-yellow-400">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
              <span className="text-xs font-medium">Instant Pricing</span>
            </div>
            <div className="w-px h-3 bg-yellow-400/30"></div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
              <span className="text-xs font-medium">Premium Quality</span>
            </div>
            <div className="w-px h-3 bg-yellow-400/30"></div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
              <span className="text-xs font-medium">6-Month Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickQuoteCalculator;
