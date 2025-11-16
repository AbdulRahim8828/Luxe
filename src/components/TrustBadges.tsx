import React from 'react';
import { Shield, Award, ThumbsUp, Zap } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: '100% Safe',
      description: 'Eco-Friendly Products'
    },
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: 'Certified',
      description: '10+ Years Experience'
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-green-600" />,
      title: 'Guaranteed',
      description: 'Satisfaction Promise'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-600" />,
      title: 'Fast Service',
      description: 'Same-Day Available'
    }
  ];

  return (
    <div className="bg-white py-6 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                {badge.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs md:text-sm font-bold text-gray-900 truncate">
                  {badge.title}
                </div>
                <div className="text-xs text-gray-600 truncate">
                  {badge.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
