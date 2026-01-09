import React, { useState, useEffect, useRef } from 'react';
import { Users, Briefcase, Award, Clock } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, end, label, suffix = '+', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center p-2 md:p-6">
      <div className="w-8 h-8 md:w-20 md:h-20 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-lg md:rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4 hover:border-yellow-500/30 hover:from-yellow-500/10 hover:to-yellow-600/5 transition-all duration-300 shadow-lg">
        {icon}
      </div>
      <div className="text-lg md:text-4xl font-bold text-white mb-1 md:mb-2 luxe-heading">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-base text-yellow-300 font-medium luxe-body leading-tight">
        {label}
      </div>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-6 md:py-16 luxe-bg-secondary relative overflow-hidden">
      {/* Luxury Decorative Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-yellow-600/30 to-yellow-800/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-br from-yellow-700/20 to-yellow-900/5 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl md:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-yellow-600/15 to-transparent rounded-full blur-2xl md:blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 md:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-12">
          <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 border border-yellow-600/30 rounded-full mb-3 md:mb-4">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-500 rounded-full mr-2 md:mr-3 animate-pulse"></div>
            <span className="text-yellow-400 text-xs md:text-sm font-medium tracking-wider uppercase">Our Impact</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
            Trusted by <span className="text-yellow-400 luxe-shimmer">Premium Clients</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Excellence delivered across luxury homes, villas, and premium offices in Mumbai
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          <StatItem
            icon={<Users className="w-4 h-4 md:w-8 md:h-8 text-yellow-400" />}
            end={500}
            label="Premium Clients"
            suffix="+"
          />
          <StatItem
            icon={<Briefcase className="w-4 h-4 md:w-8 md:h-8 text-yellow-400" />}
            end={1000}
            label="Luxury Projects"
            suffix="+"
          />
          <StatItem
            icon={<Award className="w-4 h-4 md:w-8 md:h-8 text-yellow-400" />}
            end={10}
            label="Years Excellence"
            suffix="+"
          />
          <StatItem
            icon={<Clock className="w-4 h-4 md:w-8 md:h-8 text-yellow-400" />}
            end={24}
            label="Hours Service"
            suffix="/7"
          />
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-yellow-400 font-bold text-lg md:text-xl mb-2">Mumbai's #1</div>
              <div className="text-gray-300 text-sm md:text-base">Luxury Furniture Care</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-yellow-400 font-bold text-lg md:text-xl mb-2">4.8★ Rating</div>
              <div className="text-gray-300 text-sm md:text-base">Customer Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-yellow-400 font-bold text-lg md:text-xl mb-2">6 Months</div>
              <div className="text-gray-300 text-sm md:text-base">Service Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
