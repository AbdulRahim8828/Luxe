import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 luxe-bg-secondary pb-24 md:pb-20 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center luxe-glass-card p-8 md:p-12 border border-yellow-500/20 shadow-2xl">
          <h2 className="luxe-heading-lg text-white mb-6 leading-tight">
            Still have questions? <span className="text-yellow-400">We're here to help!</span>
          </h2>
          <p className="luxe-body-lg text-gray-300 mb-8">
            Get instant answers from our premium support team
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <a
              href="tel:+918828709945"
              className="inline-flex items-center justify-center gap-3 luxe-btn-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Premium Support
            </a>
            <a
              href="https://wa.me/918828709945"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-green-500/25 transform hover:scale-105 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
