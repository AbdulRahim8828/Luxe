import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { FadeIn } from '../components/ScrollAnimations';
import { getCanonicalURL } from '../utils/canonicalURL';
import { getContactSEO } from '../seo/config/luxurySEOConfig';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    service: 'Premium Bed Polish',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.full_name || !formData.phone_number) {
      alert('Please fill in your name and phone number.');
      return;
    }

    setIsSubmitting(true);

    const message = `New Premium Quote Request from LUXE Website:

Name: ${formData.full_name}
Email: ${formData.email || 'Not provided'}
Phone: ${formData.phone_number}
Premium Service: ${formData.service}
Message: ${formData.message || 'No additional message'}

URL: ${window.location.href}`;

    const whatsappUrl = `https://wa.me/918828709945?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    alert('WhatsApp opened with your premium quote request. Please tap Send in WhatsApp to send the message.');
    
    // Reset form
    setFormData({
      full_name: '',
      email: '',
      phone_number: '',
      service: 'Premium Bed Polish',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="full_name" className="block text-sm font-medium text-white mb-2">Your Full Name *</label>
        <input 
          type="text" 
          name="full_name" 
          id="full_name" 
          value={formData.full_name}
          onChange={handleChange}
          autoComplete="name" 
          required
          className="w-full py-3 px-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white backdrop-blur-sm transition-all duration-300 placeholder-gray-400 text-sm"
          placeholder="Enter your full name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Your Email Address</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          value={formData.email}
          onChange={handleChange}
          autoComplete="email" 
          className="w-full py-3 px-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white backdrop-blur-sm transition-all duration-300 placeholder-gray-400 text-sm"
          placeholder="Enter your email address"
        />
      </div>
      <div>
        <label htmlFor="phone_number" className="block text-sm font-medium text-white mb-2">Your Phone Number *</label>
        <input 
          type="tel" 
          name="phone_number" 
          id="phone_number" 
          value={formData.phone_number}
          onChange={handleChange}
          autoComplete="tel" 
          required
          className="w-full py-3 px-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white backdrop-blur-sm transition-all duration-300 placeholder-gray-400 text-sm"
          placeholder="+91 12345 67890" 
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-white mb-2">Select Premium Service</label>
        <select 
          id="service" 
          name="service" 
          value={formData.service}
          onChange={handleChange}
          className="w-full py-3 px-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white backdrop-blur-sm transition-all duration-300 text-sm"
        >
          <option>Premium Bed Polish</option>
          <option>Luxury Door Polish</option>
          <option>Premium Cabinet Polish</option>
          <option>Executive Table Polish</option>
          <option>Luxury Dining Set Polish</option>
          <option>Premium Door Frame Polish</option>
          <option>Luxury Bookshelf Polish</option>
          <option>Premium Shelf Polish</option>
          <option>Sacred Mandir Polish</option>
          <option>Premium Jula Polish</option>
          <option>Luxury Sofa Polish</option>
          <option>Premium Drawer Polish</option>
          <option>Luxury Wardrobe Polish</option>
          <option>Premium TV Unit Polish</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Tell Us About Your Premium Requirements</label>
        <textarea 
          id="message" 
          name="message" 
          rows={3} 
          value={formData.message}
          onChange={handleChange}
          className="w-full py-3 px-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white backdrop-blur-sm transition-all duration-300 placeholder-gray-400 resize-none text-sm"
          placeholder="Describe your luxury furniture restoration needs..."
        ></textarea>
      </div>
      <div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full luxe-btn-primary py-3 px-4 rounded-xl font-semibold text-sm shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? 'Sending Premium Request...' : 'Send Premium Quote Request'}
        </button>
      </div>
    </form>
  );
};

const Contact = () => {
  // Get luxury SEO configuration for contact page
  const contactSEO = getContactSEO();
  
  const contactInfo = [
    {
      icon: <Phone size={24} className="text-black" />,
      title: 'Premium Support',
      text: '+91 8828709945',
      href: 'tel:+918828709945',
    },
    {
      icon: <Mail size={24} className="text-black" />,
      title: 'Luxury Consultation',
      text: 'a1furniturepolishservice@gmail.com',
      href: 'mailto:a1furniturepolishservice@gmail.com',
    },
    {
        icon: <MapPin size={24} className="text-black" />,
        title: 'Premium Workshop',
        text: 'Shop No 18, Akbar Ali Compound, Relief Road, near HK College, Oshiwara, Jogeshwari West, Mumbai, Maharashtra 400102',
    },
    {
      icon: <Clock size={24} className="text-black" />,
      title: 'Premium Service Hours',
      text: 'Available 24/7 for Luxury Clients',
    },
  ];

  return (
    <>
      <SEOHead
        title={contactSEO.title}
        description={contactSEO.description}
        keywords={contactSEO.keywords}
        canonical={getCanonicalURL('/contact')}
      />
      
      <div className="luxe-bg-primary text-white min-h-screen">

        {/* Luxury Header */}
        <div className="relative luxe-bg-secondary py-12 md:py-16 overflow-hidden">
          {/* Luxury Decorative Elements */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-yellow-600/30 to-yellow-800/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-700/20 to-yellow-900/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-yellow-600/15 to-transparent rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <FadeIn>
              <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 border border-yellow-600/30 rounded-full mb-6">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-yellow-400 text-xs font-medium tracking-wider uppercase">Premium Consultation</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                Let's Restore Your <span className="text-yellow-400 luxe-shimmer">Luxury Furniture</span>
              </h1>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                We're here to help you restore the beauty of your premium furniture. Reach out for an exclusive consultation and personalized quote. Available 24/7 for our distinguished clients.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-16 left-16 w-48 h-48 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-16 right-16 w-64 h-64 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-2xl"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start relative z-10">

            {/* Contact Information */}
            <FadeIn>
              <div className="luxe-glass-card p-6 md:p-8 border border-yellow-500/20 shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>Premium Contact Information</h2>
                <p className="text-sm md:text-base text-gray-300 mb-6">
                  Have questions about our luxury services? We're here to provide premium support through any of these exclusive channels.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-2xl hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/30 hover:border-yellow-500/30">
                      <div className="w-10 h-10 luxe-gold-gradient rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-xs md:text-sm text-gray-300 hover:text-yellow-400 transition-colors break-words">
                            {item.text}
                          </a>
                        ) : (
                          <p className="text-xs md:text-sm text-gray-300 break-words">{item.text}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl border border-yellow-500/30">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-sm font-semibold text-white">Premium Response Guaranteed</h3>
                  </div>
                  <p className="text-xs md:text-sm text-gray-300">
                    We typically respond within 15 minutes for our premium clients. For urgent luxury requests, call us directly for immediate assistance!
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a 
                    href="tel:+918828709945" 
                    className="luxe-btn-primary py-3 px-4 rounded-xl font-semibold text-center shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
                  >
                    <Phone size={16} /> Call Premium
                  </a>
                  <a 
                    href="https://wa.me/918828709945" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-green-500/25 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={200}>
              <div className="luxe-glass-card p-6 md:p-8 border border-yellow-500/20 shadow-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 luxe-gold-gradient rounded-xl flex items-center justify-center shadow-lg">
                    <Send className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display' }}>Request Premium Quote</h2>
                </div>
                <p className="text-sm md:text-base text-gray-300 mb-6">
                  Fill out the form below and we'll get back to you with a detailed premium quote within 2 hours.
                </p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Luxury Map Section */}
        <div className="max-w-6xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-16 right-16 w-48 h-48 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-16 left-16 w-64 h-64 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-2xl"></div>
          </div>

          <FadeIn>
            <div className="text-center mb-8 relative z-10">
              <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-600/30 rounded-full mb-4">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-blue-400 text-xs font-medium tracking-wider uppercase">Premium Location</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>Find Our Luxury Workshop</h2>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
                Visit our premium workshop in Mumbai or we'll come to your luxury property for an exclusive consultation!
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-500/20 relative z-10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.058352628886!2d72.83614527462436!3d19.14892284968038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b774c4aec095%3A0x5d8d2b1b1e74bc0a!2sA1%20Furniture%20Polish%20Service!5e0!3m2!1sen!2sin!4v1758041294733!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </FadeIn>

          {/* Premium Service Areas */}
          <FadeIn delay={300}>
            <div className="mt-8 luxe-glass-card p-6 md:p-8 border border-yellow-500/20 shadow-2xl relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'Playfair Display' }}>
                We Serve All <span className="text-yellow-400">Premium Mumbai Areas</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-center">
                {['Andheri', 'Bandra', 'Powai', 'Jogeshwari', 'Goregaon', 'Malad', 'Kandivali', 'Borivali'].map((area, index) => (
                  <div key={index} className="bg-gray-800/50 px-3 py-2 rounded-xl shadow-sm text-sm text-gray-300 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300">
                    {area}
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-gray-400 mt-4">
                ...and many more luxury areas across Mumbai and surrounding regions!
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default Contact;