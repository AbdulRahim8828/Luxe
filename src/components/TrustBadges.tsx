import React from 'react';
import { Shield, Star, Clock, Users, Award, CheckCircle } from 'lucide-react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Users,
      number: '500+',
      text: 'Premium Clients',
      subtitle: 'Luxury Homes & Offices',
    },
    {
      icon: Star,
      number: '4.8',
      text: 'Google Rating',
      subtitle: 'Premium Service Excellence',
      showStar: true,
    },
    {
      icon: Award,
      number: '10+',
      text: 'Years Excellence',
      subtitle: 'Industry Experience',
    },
    {
      icon: CheckCircle,
      number: '100%',
      text: 'Satisfaction',
      subtitle: 'Guaranteed',
    },
  ];

  return (
    <section className="py-10 md:py-12 luxe-bg-secondary relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-8 left-8 w-24 h-24 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-8 right-8 w-32 h-32 bg-gradient-to-br from-yellow-700/10 to-transparent rounded-full blur-xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 border border-yellow-600/30 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-yellow-400 text-xs font-medium tracking-wider uppercase">Our Impact</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display' }}>
            Trusted by <span className="luxe-shimmer">Premium</span> Clients
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Our commitment to excellence has earned us the trust of discerning customers across Mumbai's luxury properties
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={index}
                className="luxe-glass-card text-center group animate-slideInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-yellow-400" />
                </div>
                
                <div className="mb-2">
                  <span className="text-2xl md:text-3xl font-bold text-white">
                    {badge.number}
                  </span>
                  {badge.showStar && <span className="text-yellow-400 ml-1">★</span>}
                </div>
                
                <h3 className="text-sm font-semibold text-white mb-1">
                  {badge.text}
                </h3>
                
                <p className="text-xs text-gray-400">
                  {badge.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">Live Service</span>
            </div>
            <div className="h-3 w-px bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-white font-medium text-sm">24/7 Support</span>
            </div>
            <div className="h-3 w-px bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-white font-medium text-sm">Always Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
