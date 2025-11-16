import React, { useState, useEffect } from 'react';
import { Users, Clock } from 'lucide-react';

const UrgencyNotification = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const notifications = [
    { icon: Users, text: 'Rajesh from Bandra just booked a service', time: '2 min ago' },
    { icon: Clock, text: '3 slots left today in Andheri', time: 'Just now' },
    { icon: Users, text: 'Priya from Powai just requested a quote', time: '5 min ago' },
    { icon: Clock, text: '2 slots left today in Goregaon', time: '1 min ago' },
    { icon: Users, text: 'Amit from Jogeshwari just booked', time: '3 min ago' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const notification = notifications[currentNotification];
  const Icon = notification.icon;

  return (
    <div
      className={`fixed bottom-24 md:bottom-6 left-2 md:left-6 bg-white rounded-lg shadow-2xl p-3 md:p-4 max-w-[calc(100vw-1rem)] sm:max-w-xs z-40 border-l-4 border-amber-600 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
    >
      <div className="flex items-start space-x-2 md:space-x-3">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">{notification.text}</p>
          <p className="text-[10px] md:text-xs text-gray-500 mt-1">{notification.time}</p>
        </div>
      </div>
      <div className="absolute top-2 right-2">
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default UrgencyNotification;
