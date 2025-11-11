import React from 'react';
import { Phone, Mail, MapPin, Clock, Building, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} className="text-amber-600" />,
      title: 'Phone',
      text: '+91 8828709945',
      href: 'tel:+918828709945',
    },
    {
      icon: <Mail size={24} className="text-amber-600" />,
      title: 'Email',
      text: 'a1furniturepolishservice@gmail.com',
      href: 'mailto:a1furniturepolishservice@gmail.com',
    },
    {
        icon: <MapPin size={24} className="text-amber-600" />,
        title: 'Address',
        text: 'Shop No 18, Akbar Ali Compound, Relief Road, near HK College, Oshiwara, Jogeshwari West, Mumbai, Maharashtra 400102',
    },
    {
      icon: <Clock size={24} className="text-amber-600" />,
      title: 'Hours',
      text: 'Available 24/7',
    },
  ];

  return (
    <>
      <SEOHead
        title="Contact A1 Furniture Polish in Mumbai"
        description="Get in touch with A1 Furniture Polish for expert wood polishing services in Mumbai. Contact us for a free quote for your furniture."
        keywords="a1 furniture polish contact, furniture polishing mumbai, wood polish service, contact for furniture polish"
      />
      
      <div className="bg-white text-gray-800">

        {/* Header */}
        <div className="bg-amber-50 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help you restore the beauty of your furniture. Reach out for a free consultation.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-gray-600 hover:text-amber-600 transition-colors">
                          {item.text}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
               <div className="mt-8 flex gap-4">
                    <a href="tel:+918828709945" className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-transform transform hover:scale-105">
                        <Phone size={20} className="mr-2" /> Call Now
                    </a>
                    <a href="https://wa.me/918828709945" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105">
                        <MessageCircle size={20} className="mr-2" /> WhatsApp
                    </a>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Free Quote</h2>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">Your full name</label>
                  <input type="text" name="full_name" id="full_name" autoComplete="name" className="mt-1 py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your email address</label>
                  <input id="email" name="email" type="email" autoComplete="email" className="mt-1 py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md" />
                </div>
                <div>
                  <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Your phone number</label>
                  <input type="text" name="phone_number" id="phone_number" autoComplete="tel" className="mt-1 py-3 px-4 block w-full focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md" placeholder="+91 12345 67890" />
                </div>
                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">Select a service</label>
                    <select id="service" name="service" className="mt-1 py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md">
                        <option>Bed Wood Polish</option>
                        <option>Door Wood Polish</option>
                        <option>Cabinet Wood Polish</option>
                        <option>Table Wood Polish</option>
                        <option>Dining Set Polish</option>
                        <option>Wooden Door Frame Polish</option>
                        <option>Bookshelf / Rack Polish</option>
                        <option>Wooden Shelf Polish</option>
                        <option>Mandir Polish</option>
                        <option>Jula Polish</option>
                        <option>Sofa Polish</option>
                        <option>Chester Drawer Polish</option>
                        <option>Wardrobe Polish</option>
                        <option>TV Unit Polish</option>
                    </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell us about your furniture polishing requirements</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex items-center justify-center px-6 py-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-transform transform hover:scale-105">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Find Us in Mumbai</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We serve customers across Mumbai and surrounding areas.</p>
          </div>
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.058352628886!2d72.83614527462436!3d19.14892284968038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b774c4aec095%3A0x5d8d2b1b1e74bc0a!2sA1%20Furniture%20Polish%20Service!5e0!3m2!1sen!2sin!4v1758041294733!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;