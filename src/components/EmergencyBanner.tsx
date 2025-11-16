import React, { useState } from 'react';
import { AlertCircle, X, Phone } from 'lucide-react';

const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-4 relative animate-pulse">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm md:text-base font-semibold">
            🚨 Need Urgent Furniture Polishing? Same-Day Service Available!
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <a
            href="tel:+918828709945"
            className="hidden sm:flex items-center space-x-2 bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold text-sm"
          >
            <Phone size={16} />
            <span>Call Now</span>
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors duration-200"
            aria-label="Close banner"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
