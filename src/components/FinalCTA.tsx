import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, CheckCircle } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-8 md:py-10 luxe-bg-primary relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-16 left-16 w-48 h-48 bg-gradient-to-br from-yellow-600/30 to-yellow-800/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-16 right-16 w-64 h-64 bg-gradient-to-br from-yellow-700/20 to-yellow-900/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6 md:p-8 text-center shadow-2xl hover:border-yellow-500/50 transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
            Join <span className="text-yellow-400 luxe-shimmer">500+ Premium Clients</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-6 max-w-xl mx-auto leading-relaxed">
            Trusted by luxury homes and premium offices across Mumbai for exceptional furniture restoration
          </p>
          
          {/* Premium Features */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-xs">5-Star Rated</div>
                <div className="text-gray-400 text-xs">Premium Service</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-xs">Premium Quality</div>
                <div className="text-gray-400 text-xs">Excellence</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                <CheckCircle className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-xs">6 Months</div>
                <div className="text-gray-400 text-xs">Warranty</div>
              </div>
            </div>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 luxe-btn-primary px-6 py-3 rounded-xl font-semibold text-sm shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Book Premium Service Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
