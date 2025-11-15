import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdBrush } from 'react-icons/md';
import { FaChair, FaTools } from 'react-icons/fa';

const navigation = [
  { name: 'A1', href: '/', icon: HiHome },
  { name: 'Polish', href: '/services', icon: MdBrush },
  { name: 'Sofa', href: '/sofa-fabric-change', icon: FaChair },
  { name: 'Repair', href: '/office-chair-repair', icon: FaTools },
];

const BottomNav = () => {
  const location = useLocation();
  const isActive = (href: string) => {
    // Highlight Polish tab for all service pages
    if (href === '/services') {
      return location.pathname.startsWith('/services');
    }
    return location.pathname === href;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-1px_5px_rgba(0,0,0,0.1)] z-50 border-t border-gray-200">
      <div className="flex justify-around max-w-full mx-auto">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex flex-col items-center justify-center w-full pt-2 pb-1 text-center transition-colors duration-200 ${
              isActive(item.href)
                ? 'text-amber-600'
                : 'text-gray-600 hover:text-amber-600'
            }`}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
