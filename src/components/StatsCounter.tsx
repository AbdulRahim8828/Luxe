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
    <div ref={ref} className="text-center p-4 md:p-6">
      <div className="w-16 h-16 md:w-20 md:h-20 luxe-glass-card rounded-xl flex items-center justify-center mx-auto mb-4 border border-yellow-500/20">
        {icon}
      </div>
      <div className="text-2xl md:text-4xl font-bold text-white mb-2 luxe-heading">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-yellow-300 font-medium luxe-body">
        {label}
      </div>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-16 md:py-20 luxe-bg-secondary relative overflow-hidden">
      {/* Luxury Decorative Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-600/30 to-yellow-800/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-700/20 to-yellow-900/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-yellow-600/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="luxe-heading-lg text-white mb-4">
            Trusted by <span className="text-yellow-400 luxe-shimmer">Premium Clients</span>
          </h2>
          <p className="luxe-body-lg text-gray-300 max-w-2xl mx-auto">
            Excellence delivered across luxury homes, villas, and premium offices in Mumbai
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <StatItem
            icon={<Users className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />}
            end={500}
            label="Premium Clients"
            suffix="+"
          />
          <StatItem
            icon={<Briefcase className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />}
            end={1000}
            label="Luxury Projects"
            suffix="+"
          />
          <StatItem
            icon={<Award className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />}
            end={10}
            label="Years Excellence"
            suffix="+"
          />
          <StatItem
            icon={<Clock className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />}
            end={24}
            label="Hours Service"
            suffix="/7"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
