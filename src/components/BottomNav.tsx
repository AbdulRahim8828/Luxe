import { Link, useLocation } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdBrush } from 'react-icons/md';
import { FaTools, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const navigation = [
  { name: 'Home', href: '/', icon: HiHome },
  { name: 'Services', href: '/services', icon: MdBrush },
  { name: 'IKEA', href: '/ikea-assembly', icon: FaTools },
  { name: 'Cart', href: '/cart', icon: FaShoppingCart },
];

const BottomNav = () => {
  const location = useLocation();
  const { cartItems } = useCart();
  
  const isActive = (href: string) => {
    // Highlight Services tab for all service pages
    if (href === '/services') {
      return location.pathname.startsWith('/services');
    }
    return location.pathname === href;
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.3)] z-50 border-t border-gray-800 safe-area-inset-bottom">
      <div className="flex justify-around items-center max-w-full mx-auto px-2 py-1.5">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-lg transition-all duration-300 min-h-[50px] relative ${
              isActive(item.href)
                ? 'text-yellow-400 bg-yellow-500/20 border border-yellow-500/30 shadow-lg shadow-yellow-500/20'
                : 'text-gray-400 hover:text-yellow-400 hover:bg-gray-800/50 active:scale-95'
            }`}
          >
            <div className={`p-1 rounded-lg transition-all duration-300 relative ${
              isActive(item.href) 
                ? 'bg-yellow-500/20' 
                : 'bg-transparent'
            }`}>
              <item.icon className={`${
                isActive(item.href) 
                  ? 'w-4 h-4 text-yellow-400' 
                  : 'w-3.5 h-3.5 text-gray-400'
              } transition-all duration-300`} />
              
              {/* Cart Badge */}
              {item.name === 'Cart' && getTotalItems() > 0 && (
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[8px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                  {getTotalItems() > 9 ? '9+' : getTotalItems()}
                </div>
              )}
            </div>
            <span className={`text-[9px] mt-0.5 font-medium transition-all duration-300 ${
              isActive(item.href) 
                ? 'font-semibold text-yellow-400' 
                : 'text-gray-400'
            }`}>
              {item.name}
            </span>
            {isActive(item.href) && (
              <div className="w-1 h-1 bg-yellow-400 rounded-full mt-0.5 animate-pulse"></div>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
