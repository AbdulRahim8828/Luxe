import React from 'react';
import { ServiceData } from '../types';
import OptimizedImage from '../../src/components/OptimizedImage';
import { brandSystem, serviceCardConfig } from '../config/brand';

interface ServiceCardProps {
  service: ServiceData;
  onViewDetails: (serviceId: string) => void;
  onQuickAdd?: (serviceId: string, optionIndex: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onViewDetails,
}) => {
  // Get the starting price (minimum price from options)
  const startingPrice = Math.min(...service.options.map(opt => opt.price));
  
  // Get the number of options
  const optionsCount = service.options.length;

  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    onViewDetails(service.id);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Open modal instead of quick add
    onViewDetails(service.id);
  };

  return (
    <article 
      className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden group hover:-translate-y-3 border border-gray-100 hover:border-[#C9A24D]/30 relative transform hover:scale-[1.02]"
      role="listitem"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Luxury Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A24D] via-[#E6D3A3] to-[#C9A24D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Gold Gradient Overlay - Appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/10 via-[#E6D3A3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>

      {/* Service Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <OptimizedImage
          src={service.image}
          alt={`${service.name} service`}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Luxury Image Overlay with Gold Tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-[#C9A24D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Subtle Gold Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A24D]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      </div>

      {/* Service Content - Generous white space and luxury styling */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* Service Name - Luxury typography with hover animation */}
        <h3 
          className="text-lg sm:text-xl md:text-2xl font-bold text-[#0E0E0E] mb-3 line-clamp-2 tracking-wide group-hover:text-[#C9A24D] transition-colors duration-300"
          style={{ 
            fontFamily: 'Playfair Display, serif',
            letterSpacing: '0.02em'
          }}
        >
          {service.name}
        </h3>

        {/* Rating and Reviews - High contrast styling */}
        <div className="flex items-center gap-3 mb-4" role="group" aria-label={`Rating ${service.rating} out of 5 stars with ${service.reviewCount} reviews`}>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#C9A24D] fill-current"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-base font-semibold text-[#0E0E0E]" aria-hidden="true">
              {service.rating}
            </span>
          </div>
          <span className="text-sm text-[#9A9A9A] font-medium" aria-hidden="true">
            ({service.reviewCount >= 1000 ? `${(service.reviewCount / 1000).toFixed(1)}K` : service.reviewCount} reviews)
          </span>
        </div>

        {/* Starting Price - Premium formatting */}
        <div className="mb-6">
          <p className="text-sm text-[#9A9A9A] font-medium mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Starting from
          </p>
          <p 
            className="text-2xl sm:text-3xl font-bold text-[#0E0E0E]" 
            aria-label={`Starting price ${startingPrice} rupees`}
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            ₹{startingPrice.toLocaleString()}
          </p>
        </div>

        {/* Features - Luxury list styling */}
        <ul className="space-y-3 mb-6" aria-label="Service features">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-[#0E0E0E]">
              <svg
                className="w-5 h-5 text-[#C9A24D] flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-medium leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Options Count - Subtle luxury styling */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 bg-[#C9A24D] rounded-full"></div>
          <p className="text-sm text-[#9A9A9A] font-medium" aria-label={`${optionsCount} pricing ${optionsCount === 1 ? 'option' : 'options'} available`}>
            {optionsCount} {optionsCount === 1 ? 'option' : 'options'} available
          </p>
        </div>

        {/* Action Buttons - Luxury gold styling with enhanced hover animations */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            onClick={handleViewDetails}
            className="flex-1 text-[#C9A24D] font-semibold text-sm hover:text-[#0E0E0E] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:ring-offset-2 rounded-lg py-3 sm:py-2 min-h-[48px] sm:min-h-0 flex items-center justify-center border border-[#C9A24D] hover:border-[#0E0E0E] hover:bg-gradient-to-r hover:from-[#C9A24D]/10 hover:to-[#E6D3A3]/10 transform hover:scale-105 active:scale-95"
            aria-label={`View details for ${service.name}`}
            type="button"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            View Details
          </button>
          <button
            onClick={handleQuickAdd}
            className="px-8 py-3 bg-gradient-to-r from-[#C9A24D] to-[#E6D3A3] text-white font-semibold text-sm rounded-lg hover:from-[#B8914A] hover:to-[#D4C299] hover:shadow-xl hover:shadow-[#C9A24D]/30 transform hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:ring-offset-2 min-h-[48px] flex items-center justify-center shadow-md relative overflow-hidden"
            aria-label={`Add ${service.name} to booking`}
            type="button"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {/* Button shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10">Add Service</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
