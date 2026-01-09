import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const customerReviews = [
  {
    name: 'Priya Sharma',
    location: 'Bandra, Mumbai',
    rating: 5,
    image: '/Luxe assets/sofa-polish.webp',
    service: 'Sofa Polish',
    review: 'Excellent work! My sofa looks brand new.',
  },
  {
    name: 'Rajesh Patel',
    location: 'Andheri, Mumbai',
    rating: 5,
    image: '/Luxe assets/Bed-polish.webp',
    service: 'Bed Polish',
    review: 'Very professional service. Highly recommended!',
  },
  {
    name: 'Meera Joshi',
    location: 'Powai, Mumbai',
    rating: 5,
    image: '/Luxe assets/Wardrobe-polish.webp',
    service: 'Wardrobe Polish',
    review: 'Amazing transformation! Worth every penny.',
  },
  {
    name: 'Amit Kumar',
    location: 'Goregaon, Mumbai',
    rating: 5,
    image: '/Luxe assets/Door-polish.webp',
    service: 'Door Polish',
    review: 'Great quality work. Very satisfied!',
  },
  {
    name: 'Sneha Desai',
    location: 'Juhu, Mumbai',
    rating: 5,
    image: '/Luxe assets/side-table.webp',
    service: 'Table Polish',
    review: 'Professional team. Excellent results!',
  },
];

const CustomerPhotos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % customerReviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % customerReviews.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + customerReviews.length) % customerReviews.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-12 md:py-16 luxe-bg-primary relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="luxe-heading-lg text-white mb-4">
            Join <span className="text-yellow-400 luxe-shimmer">500+ Premium Clients</span>
          </h2>
          <p className="luxe-body-lg text-gray-300 max-w-2xl mx-auto">
            Trusted by luxury homes, villas, and premium offices across Mumbai for exceptional furniture restoration
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {customerReviews.map((review, index) => (
                <div key={index} className="min-w-full">
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 hover:border-yellow-500/30 transition-all duration-300">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      {/* Image */}
                      <div className="relative h-64 md:h-72 rounded-xl overflow-hidden bg-gray-800/50">
                        <img
                          src={review.image}
                          alt={review.service}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 py-1.5 rounded-full text-sm font-bold">
                          {review.service}
                        </div>
                      </div>

                      {/* Review Content */}
                      <div className="text-center md:text-left">
                        {/* Rating */}
                        <div className="flex justify-center md:justify-start gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="luxe-body-lg text-gray-300 mb-6 italic leading-relaxed">
                          "{review.review}"
                        </p>

                        {/* Customer Info */}
                        <div>
                          <p className="luxe-heading-sm text-white mb-1">{review.name}</p>
                          <p className="text-yellow-400 text-sm font-medium">{review.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center hover:border-yellow-500/40 transition-all duration-300 shadow-lg z-10 group"
            >
              <ChevronLeft className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center hover:border-yellow-500/40 transition-all duration-300 shadow-lg z-10 group"
            >
              <ChevronRight className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {customerReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-10 h-3 bg-gradient-to-r from-yellow-500 to-yellow-600'
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                } rounded-full`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerPhotos;
