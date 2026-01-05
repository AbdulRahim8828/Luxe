import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 luxe-bg-primary relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-600/30 to-yellow-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-700/20 to-yellow-900/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-600/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="luxe-glass-card p-12 md:p-16 text-center border border-yellow-500/30 shadow-2xl">
          <h2 className="luxe-heading-xl text-white mb-6 leading-tight">
            Join <span className="text-yellow-400 luxe-shimmer">500+ Premium Clients</span>
          </h2>
          <p className="luxe-body-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Trusted by luxury homes, villas, and premium offices across Mumbai for exceptional furniture restoration and polishing services
          </p>
          
          {/* Premium Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <span className="text-yellow-400 text-lg">⭐</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">5-Star Rated</div>
                <div className="text-gray-400 text-sm">Premium Service</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <span className="text-yellow-400 text-lg">🏆</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Award Winning</div>
                <div className="text-gray-400 text-sm">Excellence</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <span className="text-yellow-400 text-lg">✓</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">6 Months</div>
                <div className="text-gray-400 text-sm">Warranty</div>
              </div>
            </div>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-3 luxe-btn-primary px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Book Premium Service Now
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
