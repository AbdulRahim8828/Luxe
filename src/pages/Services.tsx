import { useState, useCallback, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { servicePageData } from '../data/servicePageData';
import ServiceDetailModal from '../components/ServiceDetailModal';
import SEO from '../components/SEO';
import LoadingSpinner from '../components/LoadingSpinner';
import { getCanonicalURL } from '../utils/canonicalURL';
import Toast from '../components/Toast';
import { useAnalytics } from '../hooks/useAnalytics';
import { useCart } from '../context/CartContext';
import { Plus, ShoppingCart } from 'lucide-react';

const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  const analytics = useAnalytics();
  const { addToCart, cartItems, getTotalItems } = useCart();

  // Handle cart navigation
  const handleViewCart = () => {
    navigate('/cart');
  };

  // Handle URL parameter for opening service modal
  useEffect(() => {
    const serviceId = searchParams.get('service');
    if (serviceId && servicePageData.find(s => s.id === serviceId)) {
      setSelectedServiceId(serviceId);
      // Remove the parameter from URL after opening modal
      searchParams.delete('service');
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  /**
   * Add a service to cart
   */
  const addService = useCallback(
    (serviceId: string, optionIndex: number, quantity: number = 1) => {
      setIsAddingToCart(true);
      
      try {
        const service = servicePageData.find((s) => s.id === serviceId);
        if (!service) {
          return;
        }

        const option = service.options[optionIndex];
        if (!option) {
          return;
        }

        // Add to cart context
        addToCart({
          serviceName: service.name,
          optionName: option.name,
          price: option.price,
          categoryId: service.category,
          serviceId: service.id,
        });

        // Show success message
        setToastMessage(`${option.name} added to cart!`);
        
        // Track analytics
        analytics.trackEvent({
          action: 'service_added_to_cart',
          category: 'Ecommerce',
          label: `${serviceId} - ${service.name} - ${option.name}`,
          value: option.price
        });

      } catch (error) {
        console.error('Error adding service to cart:', error);
        setToastMessage('Failed to add service to cart');
      } finally {
        setIsAddingToCart(false);
      }
    },
    [addToCart, analytics]
  );

  /**
   * Add service handler for modal
   */
  const handleAddService = (serviceId: string, optionIndex: number, quantity: number = 1) => {
    addService(serviceId, optionIndex, quantity);
  };

  const handleViewDetails = (serviceId: string) => {
    const service = servicePageData.find(s => s.id === serviceId);
    if (service) {
      setSelectedServiceId(serviceId);
      analytics.trackEvent({
        action: 'service_modal_opened',
        category: 'Services',
        label: `${serviceId} - ${service.name}`
      });
    }
  };

  const handleCloseModal = () => {
    setSelectedServiceId(null);
  };

  return (
    <>
      <SEO
        title="Premium Furniture Polishing Services in Mumbai - LUXE"
        description="Professional wooden furniture polishing services in Mumbai. Expert restoration for sofa, bed, dining table, wardrobe & more. 6-month warranty. Book now!"
        keywords="furniture polishing Mumbai, wooden furniture polish, sofa polishing, bed polishing, dining table polish, wardrobe polishing, premium furniture services"
        canonical={getCanonicalURL('/services')}
      />

      <div className="bg-black pb-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-4 w-32 h-32 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-4 w-40 h-40 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-full blur-3xl"></div>

        {/* Compact Premium Hero Section */}
        <div className="relative z-10 bg-gradient-to-br from-gray-900/95 to-black/90 backdrop-blur-xl border-b border-yellow-500/20 pt-4 pb-1">
          {/* Decorative Elements */}
          <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-60"></div>
          <div className="absolute bottom-3 right-3 w-1 h-1 bg-yellow-500 rounded-full opacity-40"></div>
          
          <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
            <div className="flex items-center justify-between">
              {/* Compact Left Content */}
              <div className="text-center md:text-left flex-1">
                {/* Smaller Premium Badge */}
                <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 border border-yellow-600/30 rounded-full mb-3">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-yellow-400 text-xs font-medium tracking-wider uppercase">Premium Services</span>
                </div>

                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3" style={{ fontFamily: 'Playfair Display' }}>
                  Our <span className="text-yellow-400 luxe-shimmer">Premium</span> Services
                </h1>
                <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto md:mx-0 leading-relaxed mb-3">
                  Choose from our comprehensive range of luxury furniture polishing services
                </p>

                {/* Compact Service Stats */}
                <div className="hidden md:flex items-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">{servicePageData.length}+ Services</span>
                  </div>
                  <div className="w-px h-3 bg-gray-600"></div>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">6-Month Warranty</span>
                  </div>
                  <div className="w-px h-3 bg-gray-600"></div>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">Expert Craftsmen</span>
                  </div>
                </div>
              </div>

              {/* Compact Desktop Cart Icon */}
              <div className="hidden md:flex items-center ml-6">
                <button
                  onClick={handleViewCart}
                  className="relative bg-gradient-to-br from-gray-800/90 to-gray-700/70 backdrop-blur-lg border border-gray-600/50 hover:border-yellow-500/60 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 group transform hover:scale-105"
                  aria-label={`View cart with ${getTotalItems()} items`}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex flex-col items-center space-y-2">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center border border-yellow-500/30 group-hover:border-yellow-400/50 transition-all duration-300">
                        <ShoppingCart className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                      </div>
                      
                      {/* Compact Cart Item Count Badge */}
                      {getTotalItems() > 0 && (
                        <span className="absolute -top-1 -right-1 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black text-xs font-bold rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center shadow-lg border-2 border-gray-800">
                          {getTotalItems() > 99 ? '99+' : getTotalItems()}
                        </span>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold text-sm group-hover:text-yellow-400 transition-colors" style={{ fontFamily: 'Playfair Display' }}>
                        Cart
                      </div>
                      <div className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors">
                        {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
                      </div>
                    </div>
                  </div>

                  {/* Small Corner Decoration */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>



        {/* Services Section */}
        <div className="relative z-10 max-w-6xl mx-auto px-3 md:px-4 py-6 md:py-8">
          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {servicePageData.map((service) => (
              <div
                key={service.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg md:rounded-2xl p-3 md:p-6 hover:border-yellow-500/30 transition-all duration-300 group"
              >
                {/* Service Image */}
                <div className="w-full h-32 md:h-48 bg-gray-700/50 rounded-lg md:rounded-xl mb-2 md:mb-4 overflow-hidden">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-500 text-2xl md:text-4xl">🪑</span>
                    </div>
                  )}
                </div>

                {/* Service Info */}
                <h3 className="text-white font-bold text-sm md:text-lg mb-1 md:mb-2 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                  {service.name}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-2 md:mb-4 line-clamp-2 leading-relaxed hidden md:block">
                  {service.features?.[0] || 'Professional furniture polishing service'}
                </p>

                {/* Price Range */}
                <div className="flex items-center justify-between mb-2 md:mb-4">
                  <div>
                    <span className="text-gray-400 text-xs hidden md:block">Starting from</span>
                    <div className="text-yellow-400 font-bold text-sm md:text-lg">
                      ₹{Math.min(...service.options.map(opt => opt.price)).toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 text-xs">{service.options.length} options</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                  <button
                    onClick={() => handleViewDetails(service.id)}
                    className="flex-1 bg-transparent border border-yellow-500 text-yellow-400 py-2 md:py-2 px-2 md:px-4 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 text-xs md:text-sm font-medium min-h-[36px] md:min-h-[auto] flex items-center justify-center"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => addService(service.id, 0)}
                    disabled={isAddingToCart}
                    className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 md:p-2 px-2 rounded-lg transition-all duration-300 disabled:opacity-50 min-h-[36px] md:min-h-[auto] flex items-center justify-center md:min-w-[44px]"
                  >
                    <Plus className="w-4 h-4 mr-1 md:mr-0" />
                    <span className="md:hidden text-xs font-medium">Add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Detail Modal */}
        <ServiceDetailModal
          service={selectedServiceId ? servicePageData.find(s => s.id === selectedServiceId) || null : null}
          isOpen={!!selectedServiceId}
          onClose={handleCloseModal}
          onAddService={handleAddService}
          onRemoveService={() => {}} // Not used in new cart system
          onUpdateQuantity={() => {}} // Not used in new cart system
          onViewCart={handleViewCart}
          selectedOptions={[]} // Not used in new cart system
        />

        {/* Toast Notification */}
        {toastMessage && (
          <Toast
            message={toastMessage}
            type="success"
            onClose={() => setToastMessage(null)}
          />
        )}

        {/* Loading Spinner */}
        {isAddingToCart && <LoadingSpinner />}
      </div>
    </>
  );
};

export default Services;