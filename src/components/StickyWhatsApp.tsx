import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const StickyWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip for 3 seconds
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 animate-slideInUp">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl text-sm whitespace-nowrap relative">
            Need help? Chat with us!
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-1 -right-1 bg-gray-700 rounded-full p-1 hover:bg-gray-600"
            >
              <X size={12} />
            </button>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918828709945?text=Hi! I'm interested in your furniture polishing services."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        
        {/* Icon */}
        <MessageCircle className="relative w-6 h-6 md:w-8 md:h-8 text-white" />
        
        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-red-500 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
};

export default StickyWhatsApp;
