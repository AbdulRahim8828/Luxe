import React from 'react';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { useState, ChangeEvent, FormEvent } from 'react';
import { servicePadeData } from '../data/servicePageData';

interface ServiceOption {
  name: string;
  price: number;
}

interface Service {
  id: string;
  name: string;
  duration: string;
  features: string[];
  image: string;
  options: ServiceOption[];
  selectedOption: number;
}

interface SelectedService {
  id: string;
  name: string;
  variant: string;
  price: number;
}

interface BookingForm {
  name: string;
  mobile: string;
  address: string;
}

interface FormErrors {
  name: string;
  mobile: string;
  address: string;
  variant: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>(servicePadeData.map(s => ({ ...s, selectedOption: -1, features: s.features.filter((f): f is string => !!f) })));

 
  const [selectedService, setSelectedService] = useState<SelectedService | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState<BookingForm>({ name: '', mobile: '', address: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({ name: '', mobile: '', address: '', variant: '' });

  const handleOptionChange = (serviceIndex: number, optionIndex: number) => {
    setServices(currentServices =>
      currentServices.map((service, index) => {
        if (index === serviceIndex) {
          return { ...service, selectedOption: optionIndex };
        }
        return service;
      })
    );
    setFormErrors({ ...formErrors, variant: '' });
  };

  const openBookingModal = (service: Service) => {
    if (service.selectedOption === -1) {
      setFormErrors({ ...formErrors, variant: 'Please select a variant.' });
      return;
    }
    const selectedOption = service.options[service.selectedOption];
    setSelectedService({
      id: service.id,
      name: service.name,
      variant: selectedOption.name,
      price: selectedOption.price,
    });
    setIsModalOpen(true);
  };

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingForm({ ...bookingForm, [name]: value });
  };

  const submitToWhatsApp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: Partial<FormErrors> = {};
    if (!bookingForm.name) errors.name = 'Name is required.';
    if (!bookingForm.mobile) errors.mobile = 'Mobile is required.';
    if (!bookingForm.address) errors.address = 'Address is required.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors as FormErrors);
      return;
    }

    setIsSubmitting(true);

    if (selectedService) {
      const message = `New booking from website:
Name: ${bookingForm.name}
Mobile: ${bookingForm.mobile}
Address: ${bookingForm.address}
Service: ${selectedService.name}
Variant: ${selectedService.variant}
Price: ${selectedService.price}
URL: ${window.location.href}`;

      const whatsappUrl = `https://wa.me/918828709945?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, '_blank');
      alert('WhatsApp opened with your booking details. Please tap Send in WhatsApp to send the message.');
      setIsModalOpen(false);
    }

    setIsSubmitting(false);
  };

  const serviceSchema = services.map(service => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    image: service.image,
    provider: {
      '@type': 'LocalBusiness',
      name: 'A1 Furniture Polish',
      image: 'https://a1furniturepolish.com/logo.png',
      telephone: '+918828709945',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jogeshwari West',
        addressLocality: 'Mumbai',
        addressRegion: 'MH',
        postalCode: '400102',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Mumbai',
    },
    offers: service.options.map(option => ({
      '@type': 'Offer',
      name: option.name,
      price: option.price,
      priceCurrency: 'INR',
    })),
    estimatedDuration: 'PT3H',
  }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How is pricing calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We compare UrbanCompany prices and offer a 20% discount on all our wood polishing services.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does polishing take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A standard piece of furniture like a bed or a door typically takes around 3-5 hours to polish.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer same-day service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer same-day service in Jogeshwari, Andheri, and Goregaon areas of Mumbai.',
        },
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Wood Polishing Services in Mumbai — A1 Furniture Polish"
        description="Affordable wood polishing for bed, door, cabinet, and table in Mumbai. A1 Furniture Polish offers professional service at rates 20% lower than UrbanCompany."
      />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
        <section className="bg-amber-50 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of professional wood polishing services. We offer quality craftsmanship at prices 20% lower than competitors.
          </p>
        </section>
      <div className="py-8 md:py-16 bg-gray-100 pb-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            {services.map((service, serviceIndex) => (
              <div key={service.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <div className="flex justify-center items-center bg-gray-50 p-4">
                    <img
                    src={service.image}
                    alt={service.name}
                    className="h-48 md:h-64 object-contain transition-transform duration-300"
                    loading="lazy"
                    />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-0 mb-4">
                    <span className="text-xl md:text-2xl font-bold text-amber-600">Starts at ₹{service.options[0].price}</span>
                    <span className="sm:ml-4 px-3 py-1 bg-green-100 text-green-800 text-xs md:text-sm font-semibold rounded-full w-fit">
                      20% Lower than competitors
                    </span>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-3">Get an estimate</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.options.map((option, optionIndex) => (
                        <div
                          key={option.name}
                          onClick={() => handleOptionChange(serviceIndex, optionIndex)}
                          className={`p-3 md:p-4 border rounded-lg cursor-pointer transition-all duration-200 ${service.selectedOption === optionIndex ? 'border-amber-600 bg-amber-50' : 'border-gray-200 hover:border-amber-400'}`}>
                          <p className="text-sm md:text-base font-semibold text-gray-800">{option.name}</p>
                          <p className="text-base md:text-lg font-bold text-gray-900">₹{option.price}</p>
                        </div>
                      ))}
                    </div>
                    {formErrors.variant && service.selectedOption === -1 && <p className="text-red-500 text-sm mt-2">{formErrors.variant}</p>}
                  </div>

                  <div className="mt-6">
                     <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-3">What's included</h4>
                    <ul className="text-gray-600 space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm md:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button onClick={() => openBookingModal(service)} className="mt-6 md:mt-8 w-full bg-amber-600 text-white px-6 py-3 md:py-4 rounded-lg hover:bg-amber-700 transition-all duration-200 font-bold text-base md:text-lg">
                    Book Now
                  </button>
                  <p className="text-center text-xs md:text-sm text-gray-500 mt-3">
                    Same-day service available in Jogeshwari, Andheri, Goregaon.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Book Service</h2>
            <p className="mb-4 text-sm md:text-base">You are booking: <strong>{selectedService.name} - {selectedService.variant}</strong> for <strong>₹{selectedService.price}</strong></p>
            <form onSubmit={submitToWhatsApp}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                <input type="text" name="name" id="name" value={bookingForm.name} onChange={handleFormChange} className="mt-1 block w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-base" required />
                {formErrors.name && <p className="text-red-500 text-xs md:text-sm mt-1">{formErrors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile *</label>
                <input type="tel" name="mobile" id="mobile" value={bookingForm.mobile} onChange={handleFormChange} className="mt-1 block w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-base" required />
                {formErrors.mobile && <p className="text-red-500 text-xs md:text-sm mt-1">{formErrors.mobile}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address *</label>
                <textarea name="address" id="address" value={bookingForm.address} onChange={handleFormChange} rows={3} className="mt-1 block w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-base" required></textarea>
                {formErrors.address && <p className="text-red-500 text-xs md:text-sm mt-1">{formErrors.address}</p>}
              </div>
              <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-0">
                <button type="button" onClick={() => setIsModalOpen(false)} className="w-full sm:w-auto sm:mr-4 px-4 py-2 md:py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 font-medium">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-6 py-2 md:py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 disabled:bg-gray-400 font-medium">
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
