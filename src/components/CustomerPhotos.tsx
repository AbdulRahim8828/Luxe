import React from 'react';
import { Star, Phone, MessageCircle, CheckCircle, Sparkles, Crown } from 'lucide-react';

const CustomerPhotos: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-400/5 to-yellow-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Premium Features */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-3xl p-6 md:p-12 mb-12 md:mb-16 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6" style={{ fontFamily: 'Playfair Display' }}>
                Why Choose <span className="text-yellow-400">Luxe Polish?</span>
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Premium Quality Materials</h4>
                    <p className="text-gray-400 text-xs md:text-sm">Only the finest polishes and restoration products</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Expert Craftsmen</h4>
                    <p className="text-gray-400 text-xs md:text-sm">15+ years of furniture restoration expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Guaranteed Results</h4>
                    <p className="text-gray-400 text-xs md:text-sm">100% satisfaction or money back guarantee</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Same Day Service</h4>
                    <p className="text-gray-400 text-xs md:text-sm">Quick turnaround for urgent requirements</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-2 border-yellow-500/30 rounded-2xl p-6 md:p-8">
                <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-3 md:mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  ₹1299
                </div>
                <div className="text-gray-300 text-base md:text-lg mb-4 md:mb-6">Premium Service Starting</div>
                <div className="space-y-2 md:space-y-3 text-sm text-gray-400 mb-4 md:mb-6">
                  <div>✓ Expert Consultation</div>
                  <div>✓ Premium Materials</div>
                  <div>✓ 6 Months Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerPhotos;
