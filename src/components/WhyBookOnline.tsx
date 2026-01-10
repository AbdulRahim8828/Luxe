import React from 'react';
import { Clock, Shield, IndianRupee, Calendar, Award, Headphones } from 'lucide-react';

const WhyBookOnline: React.FC = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Instant Premium Booking',
      description: 'Book luxury services in 30 seconds. No calls, no waiting. Get instant confirmation for premium appointments.',
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: IndianRupee,
      title: 'Transparent Premium Pricing',
      description: 'See exact luxury pricing upfront. No hidden charges. Premium quality at transparent rates.',
      gradient: 'from-yellow-600 to-amber-600',
    },
    {
      icon: Calendar,
      title: 'Flexible Premium Scheduling',
      description: 'Choose your preferred date and time for luxury service. Reschedule anytime for free with priority support.',
      gradient: 'from-amber-500 to-yellow-500',
    },
    {
      icon: Shield,
      title: '6-Month Premium Warranty',
      description: 'All luxury work comes with 6-month warranty. 100% satisfaction guaranteed on premium services.',
      gradient: 'from-yellow-500 to-amber-500',
    },
    {
      icon: Award,
      title: 'Master Craftsmen',
      description: 'All workers are background verified, extensively trained, and experienced in luxury furniture restoration.',
      gradient: 'from-amber-600 to-yellow-600',
    },
    {
      icon: Headphones,
      title: '24/7 Premium Support',
      description: 'Dedicated customer support available round the clock via call, WhatsApp, or chat for premium clients.',
      gradient: 'from-yellow-600 to-yellow-500',
    },
  ];

  return (
    <section className="py-12 md:py-16 luxe-bg-primary relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-yellow-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-amber-600/15 to-yellow-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 border border-yellow-600/30 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-yellow-400 text-xs font-medium tracking-wider uppercase">Premium Excellence</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
            Why Choose <span className="text-yellow-400 luxe-shimmer">LUXE Premium</span>?
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience hassle-free luxury booking with complete transparency and guaranteed premium quality
          </p>
        </div>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-4 md:p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 transform hover:-translate-y-1"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Compact Icon Container */}
                <div className="relative mb-4">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mx-auto shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300 group-hover:scale-105`}>
                    <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-black" />
                  </div>
                </div>

                {/* Compact Content */}
                <div className="relative text-center">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300" style={{ fontFamily: 'Playfair Display' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Small Decorative Elements */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Compact Bottom Element */}
        <div className="text-center mt-10 md:mt-12">
          <div className="inline-flex items-center space-x-2 text-yellow-400">
            <div className="w-6 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
            <span className="text-xs font-medium tracking-wider uppercase">Premium Service Guarantee</span>
            <div className="w-6 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBookOnline;
