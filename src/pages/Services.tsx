import { useState, useCallback, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { servicePageData } from '../data/servicePageData';
import ServiceDetailModal from '../components/ServiceDetailModal';
import BookingSummary from '../components/BookingSummary';
import SEO from '../components/SEO';
import LoadingSpinner from '../components/LoadingSpinner';
import { getCanonicalURL } from '../utils/canonicalURL';
import CouponModal from '../components/CouponModal';
import CouponSection from '../components/CouponSection';
import PaymentSummary from '../components/PaymentSummary';
import CartIcon from '../components/CartIcon';
import FloatingCartButton from '../components/FloatingCartButton';
import Toast from '../components/Toast';
import { SelectedService } from '../types';
import { openWhatsAppBooking } from '../utils/whatsappBooking';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useAnalytics } from '../hooks/useAnalytics';

// Constants for quantity limits
const MIN_QUANTITY = 1;
const MAX_QUANTITY = 10;

// Cart version - increment this when cart structure changes
const CART_VERSION = '1.0.0';

const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useLocalStorage<SelectedService[]>('cart', []);
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  const analytics = useAnalytics();

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

  // Check cart version and clear if outdated
  useEffect(() => {
    const storedVersion = localStorage.getItem('cartVersion');
    if (storedVersion !== CART_VERSION) {
      localStorage.removeItem('cart');
      localStorage.setItem('cartVersion', CART_VERSION);
      setSelectedServices([]);
    }
  }, [setSelectedServices]);

  // Handle browser back button for cart
  useEffect(() => {
    const handlePopState = () => {
      if (showCart) {
        setShowCart(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [showCart]);

  // Update URL when cart opens/closes
  useEffect(() => {
    if (showCart) {
      window.history.pushState({ cart: true }, '', '?cart=open');
    } else if (window.location.search.includes('cart=open')) {
      window.history.pushState({}, '', window.location.pathname);
    }
  }, [showCart]);

  // Valid coupons
  const validCoupons: { [key: string]: { discount: number; description: string } } = {
    'FIRST10': { discount: 0.10, description: 'First Booking - 10% OFF' },
  };

  // Coupon handlers
  const handleApplyCoupon = useCallback((code: string) => {
    setAppliedCoupon(code);
  }, []);

  const handleRemoveCoupon = useCallback(() => {
    setAppliedCoupon(null);
  }, []);

  const handleViewDetails = (serviceId: string) => {
    const service = servicePageData.find(s => s.id === serviceId);
    if (service) {
      analytics.trackServiceView(serviceId, service.name);
    }
    setSelectedServiceId(serviceId);
  };

  const handleCloseModal = () => {
    setSelectedServiceId(null);
  };

  /**
   * Calculate total price of all selected services - Memoized for performance
   */
  const calculateTotal = useMemo((): number => {
    return selectedServices.reduce((sum, service) => {
      return sum + service.price * service.quantity;
    }, 0);
  }, [selectedServices]);

  /**
   * Add a service or update quantity if already exists
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

        // Validate quantity
        const validQuantity = Math.max(MIN_QUANTITY, Math.min(MAX_QUANTITY, quantity));

      setSelectedServices((prevServices) => {
        // Check if this service option is already selected
        const existingIndex = prevServices.findIndex(
          (s) => s.serviceId === serviceId && s.optionId === (option.id || `${serviceId}-${optionIndex}`)
        );

        if (existingIndex >= 0) {
          // Update existing service quantity (respecting max limit)
          const updated = [...prevServices];
          const newQuantity = Math.min(updated[existingIndex].quantity + validQuantity, MAX_QUANTITY);
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: newQuantity,
          };
          return updated;
        } else {
          // Add new service
          const newService: SelectedService = {
            serviceId: service.id,
            serviceName: service.name,
            optionId: option.id || `${serviceId}-${optionIndex}`,
            optionName: option.name,
            price: option.price,
            quantity: validQuantity,
            image: service.image,
          };
          return [...prevServices, newService];
        }
      });
        // Show success toast
        setToastMessage(`${option.name} added to cart`);
      } finally {
        // Reset loading state after a short delay for smooth UX
        setTimeout(() => setIsAddingToCart(false), 300);
      }
    },
    [setSelectedServices]
  );

  /**
   * Update quantity of a selected service
   */
  const updateQuantity = useCallback((serviceId: string, optionId: string, newQuantity: number) => {
    const validQuantity = Math.max(MIN_QUANTITY, Math.min(MAX_QUANTITY, newQuantity));

    setSelectedServices((prevServices) => {
      return prevServices.map((service) => {
        if (service.serviceId === serviceId && service.optionId === optionId) {
          return {
            ...service,
            quantity: validQuantity,
          };
        }
        return service;
      });
    });
  }, [setSelectedServices]);

  /**
   * Remove a service from the booking summary
   */
  const removeService = useCallback((serviceId: string, optionId: string) => {
    setSelectedServices((prevServices) => {
      return prevServices.filter((service) => {
        return !(service.serviceId === serviceId && service.optionId === optionId);
      });
    });
  }, [setSelectedServices]);



  /**
   * Add service handler for modal (supports custom quantity)
   */
  const handleAddService = (serviceId: string, optionIndex: number, quantity: number = 1) => {
    addService(serviceId, optionIndex, quantity);
  };

  /**
   * Handle View Cart
   */
  const handleViewCart = useCallback(() => {
    analytics.trackViewCart(selectedServices.length, calculateTotal);
    setShowCart(true);
  }, [selectedServices.length, calculateTotal, analytics]);

  /**
   * Handle WhatsApp booking
   */
  const handleBookNow = useCallback(() => {
    // Clear any previous errors
    setBookingError(null);
    setIsLoading(true);

    try {
      // Validate empty booking
      if (selectedServices.length === 0) {
        setBookingError('Please select at least one service before booking');
        setIsLoading(false);
        return;
      }

      // Track booking initiation
      analytics.trackBooking(selectedServices.length, calculateTotal);

      // Open WhatsApp with booking details
      openWhatsAppBooking(selectedServices, calculateTotal);
      
      setIsLoading(false);
    } catch (error) {
      // Handle any errors during WhatsApp opening
      const errorMessage = error instanceof Error ? error.message : 'Failed to open WhatsApp. Please try again.';
      setBookingError(errorMessage);
      setIsLoading(false);
    }
  }, [selectedServices, calculateTotal, analytics]);

  // Get selected option indices for the current service
  const getSelectedOptions = (serviceId: string): number[] => {
    const service = servicePageData.find((s) => s.id === serviceId);
    if (!service) return [];

    return service.options
      .map((option, index) => {
        const optionId = option.id || `${serviceId}-${index}`;
        const isSelected = selectedServices.some((s) => s.serviceId === serviceId && s.optionId === optionId);
        return isSelected ? index : -1;
      })
      .filter((index) => index >= 0);
  };

  const selectedService = servicePageData.find((s) => s.id === selectedServiceId);

  // Filter out IKEA services (they have their own page)
  const polishServices = useMemo(() => {
    return servicePageData.filter(service => service.tabCategory !== 'ikea');
  }, []);

  return (
    <>
      <SEO 
        title="LUXE Premium Furniture Services | Elite Wood Polish & Restoration"
        description="Experience luxury furniture polishing services in Mumbai. Premium sofa, bed, door, table, wardrobe polish with 6-months warranty. Master craftsmen, exclusive materials."
        keywords="luxury furniture polish Mumbai, premium wood polish services, elite sofa polish, luxury bed polish, premium door polish, luxury wardrobe polish, exclusive furniture care"
        canonical={getCanonicalURL('/services')}
        image="/assets/Sofa And chair.webp"
      />
      
      <div className="min-h-screen luxe-bg-primary">
        {/* Header - Enhanced UI with Cart Icon */}
        <header className="luxe-glass-card border-b border-yellow-500/20 shadow-2xl relative overflow-hidden">
          {/* Luxury Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-600/30 to-yellow-800/10 rounded-full blur-2xl"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-700/20 to-yellow-900/5 rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 relative z-10">
            <div className="flex items-center justify-between gap-4">
              {/* Left - Back/Home Button (Optional) */}
              <div className="flex items-center">
                <div className="w-10 md:w-12 flex items-center justify-center">
                  {/* Placeholder for future back button */}
                </div>
              </div>
              
              {/* Center - Title with Icon */}
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <svg 
                    className="w-7 h-7 md:w-8 md:h-8 text-yellow-400 hidden sm:block drop-shadow-lg" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <h1 className="luxe-heading-lg text-white tracking-tight">
                    <span className="text-yellow-400 luxe-shimmer">LUXE</span> Premium Services
                  </h1>
                </div>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium">
                  Elite Polishing • Lifetime Warranty • Master Craftsmen
                </p>
              </div>
              
              {/* Right - Cart Icon with Enhanced Badge */}
              <div className="flex items-center">
                <CartIcon
                  itemCount={selectedServices.length}
                  onClick={handleViewCart}
                />
              </div>
            </div>
          </div>
        </header>

      {/* Category Grid Section - Extra Compact */}
      <section className="luxe-bg-primary py-4 sm:py-6 relative overflow-hidden">
        {/* Luxury Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 relative z-10">
          <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 sm:gap-3">
            {polishServices.map((service) => (
              <button
                key={service.id}
                onClick={() => handleViewDetails(service.id)}
                className="flex flex-col items-center gap-2 p-2 sm:p-3 luxe-glass-card rounded-xl hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-1 active:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 group border border-yellow-500/20 hover:border-yellow-500/40"
                aria-label={`View ${service.name} options`}
                type="button"
              >
                <div className="w-full aspect-square bg-gradient-to-br from-yellow-600/5 to-yellow-500/5 rounded-lg overflow-hidden flex items-center justify-center p-2 sm:p-2.5 group-hover:bg-gradient-to-br group-hover:from-yellow-600/10 group-hover:to-yellow-500/10 transition-all duration-300 border border-yellow-500/10">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-contain drop-shadow-sm"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-gray-300 group-hover:text-yellow-400 text-center line-clamp-2 w-full leading-tight transition-colors duration-300">
                  {service.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section-wise Service Cards - Urban Company Style */}
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8 relative">
        {/* Luxury Background Elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        {polishServices.map((service) => {
          const minPrice = Math.min(...service.options.map(opt => opt.price));
          
          // Check if service is per sqft based
          const isPerSqft = ['floor-polishing', 'pu-polish', 'deco-polish', 'metal-almirah-paint', 'metal-bed-powder-coating', 'steel-bed-buffing', 'kitchen-trolley-buffing'].includes(service.id);
          
          return (
            <section key={service.id} className="space-y-4 relative z-10">
              {/* Section Heading */}
              <h2 className="luxe-heading-md text-white">
                {service.name.replace(' Wood Polish', '').replace(' Polish', '')}
              </h2>

              {/* Service Card */}
              <div className="luxe-glass-card rounded-2xl border border-yellow-500/20 p-6 sm:p-8 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2 transition-all duration-300 hover:border-yellow-500/40">
                <div className="flex gap-6">
                  {/* Left Side - Service Details */}
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    {/* Service Name */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {service.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold text-yellow-400">{service.rating}</span>
                      <span className="text-xs text-gray-400">
                        ({service.reviewCount >= 1000 ? `${(service.reviewCount / 1000).toFixed(1)}K` : service.reviewCount} premium reviews)
                      </span>
                    </div>

                    {/* Starting Price */}
                    <p className="text-lg sm:text-xl font-bold text-white">
                      Starts at <span className="text-yellow-400">₹{minPrice.toLocaleString()}</span>{isPerSqft && '/sqft'}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-yellow-500/20"></div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* View Details Link */}
                    <button
                      onClick={() => handleViewDetails(service.id)}
                      className="text-yellow-400 font-semibold text-sm hover:text-yellow-300 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                      type="button"
                    >
                      View premium details →
                    </button>
                  </div>

                  {/* Right Side - Image and Add Button (Compact) */}
                  <div className="flex flex-col items-center gap-3 w-36 sm:w-44 flex-shrink-0">
                    {/* Service Image */}
                    <div className="w-full aspect-square bg-gradient-to-br from-yellow-600/10 to-yellow-500/5 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-yellow-500/20">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-contain drop-shadow-lg"
                        loading="lazy"
                      />
                    </div>

                    {/* Add Button */}
                    <button
                      onClick={() => handleViewDetails(service.id)}
                      className="w-full px-4 py-3 luxe-gold-gradient text-black font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      type="button"
                      aria-label={`Add ${service.name} to booking`}
                    >
                      Add Premium
                    </button>

                    {/* Options Count */}
                    <p className="text-xs text-gray-400">
                      {service.options.length} luxury options
                    </p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService || null}
        isOpen={!!selectedServiceId}
        onClose={handleCloseModal}
        onAddService={handleAddService}
        onRemoveService={removeService}
        onUpdateQuantity={updateQuantity}
        onViewCart={handleViewCart}
        selectedOptions={selectedServiceId ? getSelectedOptions(selectedServiceId) : []}
      />

      {/* Booking Summary */}
      {!showCart && (
        <BookingSummary
          selectedServices={selectedServices}
          totalPrice={calculateTotal}
          onUpdateQuantity={updateQuantity}
          onRemoveService={removeService}
          onBookNow={handleBookNow}
          onViewCart={handleViewCart}
          showDoneButton={selectedServices.length > 0}
        />
      )}

      {/* Cart View */}
      {showCart && (
        <div className="fixed inset-0 luxe-bg-primary z-50 overflow-y-auto md:pb-0 pb-20">
          <div className="min-h-screen md:min-h-auto">
            {/* Header */}
            <header className="luxe-glass-card border-b border-yellow-500/20 sticky top-0 z-10">
              <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowCart(false)}
                    className="p-2 hover:bg-yellow-500/10 rounded-full transition-colors text-gray-300 hover:text-yellow-400"
                    aria-label="Go back"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h1 className="text-xl font-bold text-white">Your Premium Cart</h1>
                </div>
                {selectedServices.length > 0 && (
                  <button
                    onClick={() => {
                      if (confirm('Clear all items from cart?')) {
                        setSelectedServices([]);
                        setShowCart(false);
                      }
                    }}
                    className="text-sm text-red-400 hover:text-red-300 font-medium transition-colors"
                    type="button"
                  >
                    Clear Cart
                  </button>
                )}
              </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 py-6 space-y-6 pb-40 md:pb-32">
              {/* Empty Cart Message */}
              {selectedServices.length === 0 ? (
                <section className="luxe-glass-card rounded-2xl p-8 shadow-2xl text-center border border-yellow-500/20">
                  <div className="max-w-sm mx-auto">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-600/20 to-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-500/20">
                      <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">Your cart is empty</h2>
                    <p className="text-gray-300 mb-6">Add premium services to get started with your luxury booking</p>
                    <button
                      onClick={() => setShowCart(false)}
                      className="px-6 py-3 luxe-gold-gradient text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                      type="button"
                    >
                      Browse Premium Services
                    </button>
                  </div>
                </section>
              ) : (
                <>
                  {/* Checkout Section */}
                  <section className="luxe-glass-card rounded-2xl p-6 shadow-2xl border border-yellow-500/20">
                    <h2 className="text-lg font-bold mb-4 text-white">Premium Checkout</h2>
                    
                    {/* Services List */}
                    <div className="space-y-6">
                  {selectedServices.map((service) => {
                    // Capture service details in closure to avoid stale references
                    const currentServiceId = service.serviceId;
                    const currentOptionId = service.optionId;
                    const currentQuantity = service.quantity;
                    
                    return (
                      <div key={`${currentServiceId}-${currentOptionId}`} className="space-y-3 p-4 bg-gradient-to-r from-yellow-600/5 to-yellow-500/5 rounded-xl border border-yellow-500/10">
                        <h3 className="font-semibold text-white">{service.serviceName}</h3>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">{service.optionName}</span>
                          
                          <div className="flex items-center gap-4">
                            {/* Quantity Selector */}
                            <div className="flex items-center gap-3 border-2 border-yellow-500/30 rounded-lg px-3 py-1 bg-gradient-to-r from-yellow-600/10 to-yellow-500/10">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (currentQuantity > 1) {
                                    updateQuantity(currentServiceId, currentOptionId, currentQuantity - 1);
                                  } else {
                                    removeService(currentServiceId, currentOptionId);
                                  }
                                }}
                                className="text-yellow-400 font-bold text-lg w-6 h-6 flex items-center justify-center hover:bg-yellow-500/20 rounded transition-colors"
                                aria-label="Decrease quantity"
                                type="button"
                              >
                                −
                              </button>
                              <span className="font-semibold text-yellow-400 min-w-[20px] text-center">
                                {currentQuantity}
                              </span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateQuantity(currentServiceId, currentOptionId, currentQuantity + 1);
                                }}
                                className="text-yellow-400 font-bold text-lg w-6 h-6 flex items-center justify-center hover:bg-yellow-500/20 rounded transition-colors"
                                aria-label="Increase quantity"
                                type="button"
                              >
                                +
                              </button>
                            </div>
                          
                            {/* Price */}
                            <span className="font-semibold text-white min-w-[80px] text-right">
                              ₹{(service.price * currentQuantity).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Coupons Section */}
              <CouponSection
                appliedCoupon={appliedCoupon}
                validCoupons={validCoupons}
                onOpenModal={() => setShowCouponModal(true)}
              />

              {/* Payment Summary */}
              <PaymentSummary
                itemTotal={calculateTotal}
                appliedCoupon={appliedCoupon}
                validCoupons={validCoupons}
              />
              </>
              )}
            </main>

            {/* Bottom CTA - Above bottom nav on mobile - Only show if cart has items */}
            {selectedServices.length > 0 && (
              <div className="fixed bottom-0 left-0 right-0 luxe-glass-card border-t border-yellow-500/20 p-4 shadow-2xl mb-20 md:mb-0 z-40">
              <div className="max-w-3xl mx-auto">
                <button
                  onClick={handleBookNow}
                  className="w-full luxe-gold-gradient text-black font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 active:scale-95"
                >
                  Book Premium Services Now
                </button>
              </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Coupon Modal */}
      <CouponModal
        isOpen={showCouponModal}
        onClose={() => setShowCouponModal(false)}
        onApplyCoupon={handleApplyCoupon}
        onRemoveCoupon={handleRemoveCoupon}
        appliedCoupon={appliedCoupon}
        validCoupons={validCoupons}
      />

      {/* Error Toast */}
      {bookingError && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-slideInUp">
          <div className="bg-red-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 max-w-md border border-red-400/30">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-medium">{bookingError}</span>
            <button
              onClick={() => setBookingError(null)}
              className="ml-2 hover:bg-red-600/50 rounded p-1 transition-colors"
              aria-label="Close error message"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="luxe-glass-card rounded-2xl p-8 border border-yellow-500/20">
            <LoadingSpinner size="lg" text="Opening WhatsApp..." />
          </div>
        </div>
      )}

      {/* Floating Cart Button - Shows after scrolling */}
      {!showCart && (
        <FloatingCartButton
          itemCount={selectedServices.length}
          onClick={handleViewCart}
        />
      )}

      {/* Toast Notification - Mobile Friendly */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => setToastMessage(null)}
        />
      )}

      {/* Loading Indicator - Mobile Friendly */}
      {isAddingToCart && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-sm">
          <div className="luxe-glass-card px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-2xl flex items-center gap-2 sm:gap-3 mx-auto border border-yellow-500/20">
            <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-yellow-400 flex-shrink-0"></div>
            <span className="font-medium text-white text-sm sm:text-base">Adding to cart...</span>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Services;
