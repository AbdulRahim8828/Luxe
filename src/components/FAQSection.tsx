import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can you start the premium furniture polishing work?',
      answer: 'We offer same-day service for most luxury areas in Mumbai. Book before 2 PM and we can start the same day. Priority services available within 2-4 hours for premium clients.',
    },
    {
      question: 'What type of premium polish do you use? Is it safe?',
      answer: 'We use only the finest quality PU (Polyurethane) polish, premium Deco paint, and high-grade melamine polish. All materials are eco-friendly, non-toxic, and safe for luxury homes with children and pets. We provide 6 months warranty on all premium polishing work.',
    },
    {
      question: 'Do I need to empty my furniture before polishing?',
      answer: 'Yes, please empty all items from the furniture. Our master craftsmen will handle your luxury furniture with utmost care, but we recommend removing all contents for safety and optimal results.',
    },
    {
      question: 'How long does the premium polishing work take?',
      answer: 'Small luxury items (1-2 shelves): 2-3 hours | Medium furniture (bookshelf, TV unit): 4-6 hours | Large premium items (wardrobes): 1-2 days. Premium drying time is additional 24-48 hours depending on weather conditions.',
    },
    {
      question: 'What is included in the premium pricing?',
      answer: 'Our premium price includes: High-grade material cost (premium polish, finest sandpaper, quality primer), Expert craftsman charges, Transportation of materials, and 6 months luxury service warranty. Absolutely no hidden charges.',
    },
    {
      question: 'Do you provide custom color matching service?',
      answer: 'Absolutely! We can match any existing color or help you choose from 100+ premium shade options. We do a test patch before starting the full work to ensure perfect color match for your luxury furniture.',
    },
    {
      question: 'What if I am not satisfied with the premium work?',
      answer: 'We offer 100% satisfaction guarantee on all luxury services. If you are not completely satisfied with the work, we will redo it for free within 7 days. We also provide 6 months warranty against peeling or color fading.',
    },
    {
      question: 'Do you work on weekends and holidays?',
      answer: 'Yes, we work 7 days a week including weekends and holidays for our premium clients. You can book a slot that is convenient for you - morning, afternoon, or evening.',
    },
  ];

  return (
    <section className="py-16 md:py-20 luxe-bg-primary relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-yellow-400" />
            <h2 className="luxe-heading-lg text-white">
              Frequently Asked <span className="text-yellow-400 luxe-shimmer">Questions</span>
            </h2>
          </div>
          <p className="luxe-body-lg text-gray-300">Quick answers to common questions about our premium services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="luxe-glass-card border border-gray-700/50 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-transparent hover:bg-yellow-500/5 transition-all duration-300 text-left group"
              >
                <span className="luxe-heading-sm text-white pr-4 group-hover:text-yellow-400 transition-colors">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-yellow-400 flex-shrink-0 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0 group-hover:text-yellow-400 transition-colors duration-300" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-yellow-500/5 border-t border-yellow-500/20">
                  <p className="luxe-body-md text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
