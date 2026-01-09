import React from 'react';
import { Clock, Shield, IndianRupee, Calendar, Award, Headphones } from 'lucide-react';

const WhyBookOnline: React.FC = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Instant Premium Booking',
      description: 'Book luxury services in 30 seconds. No calls, no waiting. Get instant confirmation for premium appointments.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: IndianRupee,
      title: 'Transparent Premium Pricing',
      description: 'See exact luxury pricing upfront. No hidden charges. Premium quality at transparent rates.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-600/10',
    },
    {
      icon: Calendar,
      title: 'Flexible Premium Scheduling',
      description: 'Choose your preferred date and time for luxury service. Reschedule anytime for free with priority support.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: Shield,
      title: '6-Month Premium Warranty',
      description: 'All luxury work comes with 6-month warranty. 100% satisfaction guaranteed on premium services.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-600/10',
    },
    {
      icon: Award,
      title: 'Master Craftsmen',
      description: 'All workers are background verified, extensively trained, and experienced in luxury furniture restoration.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: Headphones,
      title: '24/7 Premium Support',
      description: 'Dedicated customer support available round the clock via call, WhatsApp, or chat for premium clients.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-600/10',
    },
  ];

  return (
    <section className="py-12 md:py-16 luxe-bg-secondary relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="luxe-heading-lg text-white mb-4">
            Why Choose <span className="text-yellow-400 luxe-shimmer">LUXE Premium</span>?
          </h2>
          <p className="luxe-body-lg text-gray-300 max-w-2xl mx-auto">
            Experience hassle-free luxury booking with complete transparency and guaranteed premium quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 hover:border-yellow-500/30 transition-all duration-300 text-center group luxe-hover-lift"
              >
                <div className={`w-16 h-16 rounded-2xl ${benefit.bgColor} border border-yellow-500/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="luxe-heading-sm text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="luxe-body-md text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyBookOnline;
