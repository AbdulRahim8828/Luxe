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
    <div ref={ref} className="text-center p-6 md:p-8">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
        {icon}
      </div>
      <div className="text-3xl md:text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-amber-100 font-medium">
        {label}
      </div>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <StatItem
            icon={<Users className="w-8 h-8 md:w-10 md:h-10 text-white" />}
            end={500}
            label="Happy Customers"
            suffix="+"
          />
          <StatItem
            icon={<Briefcase className="w-8 h-8 md:w-10 md:h-10 text-white" />}
            end={1000}
            label="Projects Completed"
            suffix="+"
          />
          <StatItem
            icon={<Award className="w-8 h-8 md:w-10 md:h-10 text-white" />}
            end={10}
            label="Years Experience"
            suffix="+"
          />
          <StatItem
            icon={<Clock className="w-8 h-8 md:w-10 md:h-10 text-white" />}
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
