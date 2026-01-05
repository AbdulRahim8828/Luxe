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
    <section className="py-16 md:py-20 luxe-bg-secondary relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-yellow-700/10 to-transparent rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 border border-yellow-600/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
            <span className="text-yellow-400 text-sm font-medium tracking-wider uppercase">Our Impact</span>
          </div>
          <h2 className="luxe-heading-md mb-4">
            Trusted by <span className="luxe-shimmer">Premium</span> Clients
          </h2>
          <p className="luxe-body-lg max-w-2xl mx-auto">
            Our commitment to excellence has earned us the trust of discerning customers across Mumbai's luxury properties
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={index}
                className="luxe-glass-card text-center group animate-slideInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-yellow-400" />
                </div>
                
                <div className="mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    {badge.number}
                  </span>
                  {badge.showStar && <span className="text-yellow-400 ml-1">★</span>}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-1">
                  {badge.text}
                </h3>
                
                <p className="luxe-body-sm text-gray-400">
                  {badge.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Live Service</span>
            </div>
            <div className="h-4 w-px bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-white font-medium">24/7 Support</span>
            </div>
            <div className="h-4 w-px bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-white font-medium">Always Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
