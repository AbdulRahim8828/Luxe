import { ServiceData } from '../types';

export const servicePageData: ServiceData[] = [
  {
    id: 'sofa-polish',
    name: 'Sofa Wood Polish',
    category: 'furniture-polish',
    rating: 4.9,
    reviewCount: 2156,
    duration: '~2.5 hrs',
    features: [
      '6 Months Polished Warranty',
      'Premium wood finish',
      'Scratch removal included',
    ],
    image: '/assets/sofa-polish.webp',
    options: [
      { 
        id: 'sofa-1seater',
        name: '1 Seater Sofa', 
        price: 1449,
        rating: 4.9,
        reviewCount: 356,
        estimatedTime: '1.5 hrs'
      },
      { 
        id: 'sofa-2seater',
        name: '2 Seater Sofa', 
        price: 1999,
        rating: 4.9,
        reviewCount: 456,
        estimatedTime: '2 hrs'
      },
      { 
        id: 'sofa-3seater',
        name: '3 Seater Sofa', 
        price: 2949,
        rating: 4.8,
        reviewCount: 678,
        estimatedTime: '2.5 hrs'
      },
      { 
        id: 'sofa-lshape',
        name: 'L-Shape Sofa', 
        price: 6449,
        rating: 4.8,
        reviewCount: 234,
        estimatedTime: '4.5 hrs'
      },
    ],
    selectedOption: -1,
    priceIncludes: [
      'Material & labour cost',
      'Premium polish brand',
      'Post-service cleaning',
      'Scratch removal & surface preparation',
      '6 months warranty on polish'
    ],
    materials: [
      '/assets/select-wood-polish-shade.webp',
      '/assets/Cleaning & Sanding.webp',
      '/assets/filling-gaps-polish-application.webp',
      '/assets/drying-finishing.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Consultation & Booking',
        description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.',
        image: '/assets/consultation-booking.webp'
      },
      {
        step: 2,
        title: 'Surface Preparation',
        description: 'Our professionals clean and sand the furniture surface to remove old polish and scratches.',
        image: '/assets/Cleaning & Sanding.webp'
      },
      {
        step: 3,
        title: 'Polish Shade Selection',
        description: 'Choose from clear or colored finishes that match your furniture and home décor.',
        image: '/assets/select-wood-polish-shade.webp'
      },
      {
        step: 4,
        title: 'Gap Filling & Polish Application',
        description: 'We fill any gaps or cracks, then apply premium quality polish evenly.',
        image: '/assets/filling-gaps-polish-application.webp'
      },
      {
        step: 5,
        title: 'Drying & Finishing',
        description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.',
        image: '/assets/drying-finishing.webp'
      },
      {
        step: 6,
        title: 'Quality Check & Handover',
        description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed furniture.',
        image: '/assets/wooden furniture .webp'
      }
    ],
    faqs: [
      {
        question: 'How long does sofa polishing take?',
        answer: 'Typically, sofa polishing takes 2-4 hours depending on the size. We ensure thorough work without rushing.'
      },
      {
        question: 'What type of polish do you use?',
        answer: 'We use premium quality Melamine or PU polish based on your preference. Both are durable, eco-friendly, and provide excellent finish.'
      },
      {
        question: 'Do I need to move the sofa?',
        answer: 'No, our professionals can work on-site. However, we recommend clearing the area around the sofa for easy access.'
      },
      {
        question: 'Is there a warranty on the polish?',
        answer: 'Yes, we provide a 1-year warranty on all our polishing work against peeling or fading under normal use.'
      }
    ],
    trustBadges: [
      {
        icon: 'shield-check',
        text: 'Background verified professionals'
      },
      {
        icon: 'wrench',
        text: '300+ hours of training'
      },
      {
        icon: 'medal',
        text: 'Certified under Skill India Programme'
      }
    ]
  },
  {
    id: 'bed-polish',
    name: 'Bed Wood Polish',
    category: 'furniture-polish',
    rating: 4.8,
    reviewCount: 1847,
    duration: '~3 hrs',
    features: [
      '6 Months Polished Warranty',
      'Choice of clear or coloured finishes',
      'Removes scratches and enhances natural look',
    ],
    image: '/assets/Bed-polish.webp',
    options: [
      { 
        id: 'bed-single',
        name: 'Single Bed', 
        price: 2449,
        rating: 4.8,
        reviewCount: 342,
        estimatedTime: '3 hrs'
      },
      { 
        id: 'bed-queen',
        name: 'Queen Size Bed', 
        price: 2999,
        rating: 4.9,
        reviewCount: 521,
        estimatedTime: '3.5 hrs'
      },
      { 
        id: 'bed-king',
        name: 'King Size Bed', 
        price: 3799,
        rating: 4.8,
        reviewCount: 284,
        estimatedTime: '4 hrs'
      },
      { 
        id: 'bed-storage',
        name: 'Double Bed with Storage', 
        price: 4449,
        rating: 4.8,
        reviewCount: 234,
        estimatedTime: '4.5 hrs'
      },
      { 
        id: 'bed-bunk',
        name: 'Bunk Bed', 
        price: 5799,
        rating: 4.7,
        reviewCount: 100,
        estimatedTime: '5 hrs'
      },
    ],
    selectedOption: -1,
    priceIncludes: [
      'Material & labour cost',
      'Premium polish brand (Melamine/PU)',
      'Post-service cleaning',
      'Scratch removal & surface preparation',
      '6 months warranty on polish'
    ],
    materials: [
      '/assets/select-wood-polish-shade.webp',
      '/assets/Cleaning & Sanding.webp',
      '/assets/filling-gaps-polish-application.webp',
      '/assets/drying-finishing.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Consultation & Booking',
        description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.',
        image: '/assets/consultation-booking.webp'
      },
      {
        step: 2,
        title: 'Surface Preparation',
        description: 'Our professionals clean and sand the furniture surface to remove old polish and scratches.',
        image: '/assets/Cleaning & Sanding.webp'
      },
      {
        step: 3,
        title: 'Polish Shade Selection',
        description: 'Choose from clear or colored finishes that match your furniture and home décor.',
        image: '/assets/select-wood-polish-shade.webp'
      },
      {
        step: 4,
        title: 'Gap Filling & Polish Application',
        description: 'We fill any gaps or cracks, then apply premium quality polish evenly.',
        image: '/assets/filling-gaps-polish-application.webp'
      },
      {
        step: 5,
        title: 'Drying & Finishing',
        description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.',
        image: '/assets/drying-finishing.webp'
      },
      {
        step: 6,
        title: 'Quality Check & Handover',
        description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed furniture.',
        image: '/assets/wooden furniture .webp'
      }
    ],
    faqs: [
      {
        question: 'How long does bed polishing take?',
        answer: 'Typically, bed polishing takes 3-4 hours depending on the size and condition of the bed. We ensure thorough work without rushing.'
      },
      {
        question: 'What type of polish do you use?',
        answer: 'We use premium quality Melamine or PU polish based on your preference. Both are durable, eco-friendly, and provide excellent finish.'
      },
      {
        question: 'Do I need to move the bed?',
        answer: 'No, our professionals can work on-site. However, we recommend clearing the area around the bed for easy access.'
      },
      {
        question: 'Is there a warranty on the polish?',
        answer: 'Yes, we provide a 1-year warranty on all our polishing work against peeling or fading under normal use.'
      }
    ],
    trustBadges: [
      {
        icon: 'shield-check',
        text: 'Background verified professionals'
      },
      {
        icon: 'wrench',
        text: '300+ hours of training'
      },
      {
        icon: 'medal',
        text: 'Certified under Skill India Programme'
      }
    ]
  },
  {
    id: 'door-polish',
    name: 'Door Wood Polish',
    category: 'furniture-polish',
    rating: 4.8,
    reviewCount: 1934,
    duration: '~2 hrs',
    features: [
      '6 Months Polished Warranty',
      'Both sides polishing',
      'Frame polishing included',
    ],
    image: '/assets/Door-polish.webp',
    options: [
      { id: 'door-single', name: 'Single Door', price: 2449, rating: 4.7, reviewCount: 523, estimatedTime: '2 hrs' },
      { id: 'door-2door', name: '2 Door', price: 3899, rating: 4.8, reviewCount: 789, estimatedTime: '3 hrs' },
      { id: 'door-3door', name: '3 Door', price: 4899, rating: 4.7, reviewCount: 345, estimatedTime: '3.5 hrs' },
      { id: 'door-4door', name: '4 Door', price: 5899, rating: 4.8, reviewCount: 277, estimatedTime: '4 hrs' },
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Premium polish brand (Melamine/PU)', 'Post-service cleaning', 'Both sides polishing', '6 months warranty on polish'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp', '/assets/filling-gaps-polish-application.webp', '/assets/drying-finishing.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the door surface to remove old polish and scratches.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your door and home décor.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly on both sides.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed door.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'How long does door polishing take?', answer: 'Typically, door polishing takes 2-3 hours depending on the size and type. We ensure thorough work without rushing.' },
      { question: 'Do you polish both sides?', answer: 'Yes, we polish both sides of the door and the frame if selected.' },
      { question: 'What type of polish do you use?', answer: 'We use premium quality Melamine or PU polish based on your preference. Both are durable and provide excellent finish.' },
      { question: 'Is there a warranty on the polish?', answer: 'Yes, we provide a 1-year warranty on all our polishing work against peeling or fading under normal use.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' },
      { icon: 'medal', text: 'Certified under Skill India Programme' }
    ]
  },
  {
    id: 'table-polish',
    name: 'Table Wood Polish',
    category: 'furniture-polish',
    rating: 4.8,
    reviewCount: 1767,
    duration: '~2.5 hrs',
    features: ['6 Months Polished Warranty', 'Scratch-resistant finish', 'Food-safe polish options'],
    image: '/assets/side-table.webp',
    options: [
      { id: 'table-coffee', name: 'Coffee Table', price: 1549, rating: 4.8, reviewCount: 234, estimatedTime: '1.5 hrs', image: '/assets/Coffe-table-polish.webp' },
      { id: 'table-center', name: 'Center Table', price: 2899, rating: 4.9, reviewCount: 567, estimatedTime: '2.5 hrs', image: '/assets/Center-table-polish.webp' },
      { id: 'table-side', name: 'Side Table', price: 1999, rating: 4.8, reviewCount: 456, estimatedTime: '2 hrs', image: '/assets/side-table.webp' },
      { id: 'table-study', name: 'Study Table', price: 3899, rating: 4.7, reviewCount: 310, estimatedTime: '3 hrs', image: '/assets/Study-table-polish.webp' },
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Premium polish brand (Melamine/PU)', 'Post-service cleaning', 'Scratch removal & surface preparation', '6 months warranty on polish'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp', '/assets/filling-gaps-polish-application.webp', '/assets/drying-finishing.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the table surface to remove old polish and scratches.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your table and home décor.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed table.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'How long does table polishing take?', answer: 'Typically, table polishing takes 2-3 hours depending on the size. We ensure thorough work without rushing.' },
      { question: 'Is the polish food-safe?', answer: 'Yes, we use food-safe polish options for dining tables that are completely safe for daily use.' },
      { question: 'What type of polish do you use?', answer: 'We use premium quality Melamine or PU polish based on your preference. Both are durable and provide excellent finish.' },
      { question: 'Is there a warranty on the polish?', answer: 'Yes, we provide a 1-year warranty on all our polishing work against peeling or fading under normal use.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' },
      { icon: 'medal', text: 'Certified under Skill India Programme' }
    ]
  },
  {
    id: 'wardrobe-polish',
    name: 'Wardrobe Wood Polish',
    category: 'furniture-polish',
    rating: 4.9,
    reviewCount: 2345,
    duration: '~4 hrs',
    features: ['6 Months Polished Warranty', 'Inside & outside polishing', 'Handles & fittings care'],
    image: '/assets/Wardrobe-polish.webp',
    options: [
      { id: 'wardrobe-2door', name: '2 Door Wardrobe', price: 3499, rating: 4.9, reviewCount: 678, estimatedTime: '3.5 hrs', image: '/assets/Wardrobe-polish.webp' },
      { id: 'wardrobe-3door', name: '3 Door Wardrobe', price: 4449, rating: 4.8, reviewCount: 892, estimatedTime: '4.5 hrs', image: '/assets/3-Door-wardrobe.webp' },
      { id: 'wardrobe-4door', name: '4 Door Wardrobe', price: 5849, rating: 4.9, reviewCount: 456, estimatedTime: '5 hrs', image: '/assets/4-Door-Wardrobe.webp' },
      { id: 'wardrobe-sliding', name: 'Sliding Door Wardrobe', price: 6799, rating: 4.8, reviewCount: 319, estimatedTime: '4 hrs', image: '/assets/Sliding-wardrobe.webp' },
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Premium polish brand (Melamine/PU)', 'Post-service cleaning', 'Inside & outside polishing', '6 months warranty on polish'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp', '/assets/filling-gaps-polish-application.webp', '/assets/drying-finishing.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the wardrobe surface to remove old polish and scratches.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your wardrobe and home décor.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly inside and outside.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed wardrobe.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'How long does wardrobe polishing take?', answer: 'Typically, wardrobe polishing takes 3-5 hours depending on the size and number of doors. We ensure thorough work without rushing.' },
      { question: 'Do you polish inside the wardrobe?', answer: 'Yes, we polish both inside and outside surfaces of the wardrobe for a complete finish.' },
      { question: 'What type of polish do you use?', answer: 'We use premium quality Melamine or PU polish based on your preference. Both are durable and provide excellent finish.' },
      { question: 'Is there a warranty on the polish?', answer: 'Yes, we provide a 1-year warranty on all our polishing work against peeling or fading under normal use.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' },
      { icon: 'medal', text: 'Certified under Skill India Programme' }
    ]
  },
  {
    id: 'dining-set-polish',
    name: 'Dining Set Polish',
    category: 'furniture-polish',
    rating: 4.9,
    reviewCount: 1876,
    duration: '~5 hrs',
    features: ['6 Months Polished Warranty', 'Complete polish for table and chairs', 'Heat and water-resistant finish', 'All Materials & Labour Cost'],
    image: '/assets/Dining-polish.webp',
    options: [
      { id: 'dining-2seater', name: '2 Seater + Bench', price: 4449, rating: 4.9, reviewCount: 467, estimatedTime: '3.5 hrs' },
      { id: 'dining-4seater', name: '4 Seater Dining Set', price: 3849, rating: 4.9, reviewCount: 567, estimatedTime: '4 hrs' },
      { id: 'dining-6seater', name: '6 Seater Dining Set', price: 5099, rating: 4.9, reviewCount: 789, estimatedTime: '5 hrs' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Premium polish brand (Melamine/PU)', 'Post-service cleaning', 'Complete polish for table and chairs', 'Heat and water-resistant finish', '6 months warranty on polish'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp', '/assets/filling-gaps-polish-application.webp', '/assets/drying-finishing.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the dining set surface to remove old polish and scratches.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your dining set and home décor.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly on table and chairs.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed dining set.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'How long does dining set polishing take?', answer: 'Typically, dining set polishing takes 4-6 hours depending on the size. We ensure thorough work without rushing.' },
      { question: 'Do you polish both table and chairs?', answer: 'Yes, we polish the complete dining set including table and all chairs for a uniform finish.' },
      { question: 'What type of polish do you use?', answer: 'We use premium quality Melamine or PU polish based on your preference. Both are durable and provide excellent finish.' },
      { question: 'Is there a warranty on the polish?', answer: 'Yes, we provide a 1-year warranty on all our polishing work against peeling or fading under normal use.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' },
      { icon: 'medal', text: 'Certified under Skill India Programme' }
    ]
  },
  {
    id: 'cabinet-polish',
    name: 'Cabinet Wood Polish',
    category: 'furniture-polish',
    rating: 4.8,
    reviewCount: 1456,
    duration: '~2.5 hrs',
    features: ['6 Months Polished Warranty', 'Inside & outside polishing', 'Handles & hinges care'],
    image: '/assets/Cabinet-polish.webp',
    options: [
      { id: 'cabinet-single', name: 'Single Door Cabinet', price: 2449, rating: 4.8, reviewCount: 345, estimatedTime: '2 hrs', image: '/assets/Single-Door-cabinet.webp' },
      { id: 'cabinet-double', name: 'Double Door Cabinet', price: 2999, rating: 4.9, reviewCount: 567, estimatedTime: '2.5 hrs', image: '/assets/3-Door-Cabinet.webp' },
      { id: 'cabinet-3door', name: '3 Door Cabinet', price: 3899, rating: 4.7, reviewCount: 234, estimatedTime: '3 hrs', image: '/assets/3-Door-Cabinet.webp' },
      { id: 'cabinet-crockery', name: 'Crockery Self', price: 3999, rating: 4.8, reviewCount: 310, estimatedTime: '3.5 hrs', image: '/assets/Crockery.webp' },
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Premium polish brand (Melamine/PU)', 'Post-service cleaning', 'Inside & outside polishing', '6 months warranty on polish'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp', '/assets/filling-gaps-polish-application.webp', '/assets/drying-finishing.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the cabinet surface to remove old polish and scratches.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your cabinet and home décor.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed cabinet.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'How long does cabinet polishing take?', answer: 'Typically, cabinet polishing takes 2-3 hours depending on the size. We ensure thorough work without rushing.' },
      { question: 'Do you polish inside the cabinet?', answer: 'Yes, we polish both inside and outside surfaces for a complete finish.' },
      { question: 'What type of polish do you use?', answer: 'We use premium quality Melamine or PU polish based on your preference. Both are durable and provide excellent finish.' },
      { question: 'Is there a warranty on the polish?', answer: 'Yes, we provide a 1-year warranty on all our polishing work against peeling or fading under normal use.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' },
      { icon: 'medal', text: 'Certified under Skill India Programme' }
    ]
  },
  {
    id: 'bookshelf-rack-polish',
    name: 'Bookshelf / Rack Polish',
    category: 'furniture-polish',
    rating: 4.8,
    reviewCount: 1234,
    duration: '~3 hrs',
    features: ['6 Months Polished Warranty', 'Choice of clear or coloured finishes', 'All Materials & Labour Cost'],
    image: '/assets/5-Shelves.webp',
    options: [
      { id: 'shelf-3', name: '3 Shelf', price: 1999, rating: 4.8, reviewCount: 345, estimatedTime: '2 hrs', image: '/assets/3-Shelves.webp' },
      { id: 'shelf-5', name: '5 Shelf', price: 2799, rating: 4.9, reviewCount: 567, estimatedTime: '2.5 hrs', image: '/assets/5-Shelves.webp' },
      { id: 'shelf-7', name: '7 Shelf', price: 3499, rating: 4.8, reviewCount: 322, estimatedTime: '3.5 hrs', image: '/assets/7-Shelves.webp' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Premium polish brand', 'Post-service cleaning', '6 months warranty'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the bookshelf surface to remove old polish and scratches.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your furniture and home décor.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed bookshelf.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'How long does bookshelf polishing take?', answer: 'Typically 2-3.5 hours depending on size.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' }
    ]
  },
  {
    id: 'wooden-shelf-polish',
    name: 'Wooden Shelf Polish',
    category: 'furniture-polish',
    rating: 4.7,
    reviewCount: 654,
    duration: '~1 hr',
    features: ['6 Months Polished Warranty', 'Choice of clear or coloured finishes', 'All Materials & Labour Cost'],
    image: '/assets/Wooden-Shelves.webp',
    options: [
      { id: 'shelf-small', name: 'Small', price: 999, rating: 4.7, reviewCount: 234, estimatedTime: '1 hr' },
      { id: 'shelf-medium', name: 'Medium', price: 1449, rating: 4.8, reviewCount: 245, estimatedTime: '1.5 hrs' },
      { id: 'shelf-large', name: 'Large', price: 1999, rating: 4.7, reviewCount: 175, estimatedTime: '2 hrs' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Premium polish brand', 'Post-service cleaning', '6 months warranty'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the shelf surface to remove old polish and scratches.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your furniture and home décor.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed shelf.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'How long does shelf polishing take?', answer: 'Typically 1-2 hours depending on size.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' }
    ]
  },
  {
    id: 'mandir-polish',
    name: 'Mandir Polish',
    category: 'furniture-polish',
    rating: 4.9,
    reviewCount: 987,
    duration: '~3 hrs',
    features: ['6 Months Polished Warranty', 'Choice of clear or coloured finishes', 'All Materials & Labour Cost'],
    image: '/assets/Mandir-polish.webp',
    options: [
      { id: 'mandir-standard', name: 'Mandir', price: 2999, rating: 4.9, reviewCount: 987, estimatedTime: '3 hrs' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Premium polish brand', 'Post-service cleaning', '6 months warranty'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the mandir surface to remove old polish and scratches.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your mandir and home décor.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed mandir.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'How long does mandir polishing take?', answer: 'Typically 3 hours.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' }
    ]
  },
  {
    id: 'jhula-polish',
    name: 'Jhula Polish',
    category: 'furniture-polish',
    rating: 4.8,
    reviewCount: 765,
    duration: '~4 hrs',
    features: ['6 Months Polished Warranty', 'Choice of clear or coloured finishes', 'All Materials & Labour Cost'],
    image: '/assets/Jhula-Polish.webp',
    options: [
      { id: 'jhula-1seater', name: '1 Seater Jhula', price: 1999, rating: 4.8, reviewCount: 465, estimatedTime: '3 hrs' },
      { id: 'jhula-2seater', name: '2 Seater Jhula', price: 2799, rating: 4.8, reviewCount: 765, estimatedTime: '4 hrs' },
      { id: 'jhula-3seater', name: '3 Seater Jhula', price: 3449, rating: 4.9, reviewCount: 345, estimatedTime: '5 hrs' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Premium polish brand', 'Post-service cleaning', '6 months warranty'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the jhula surface to remove old polish and scratches.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your jhula and home décor.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed jhula.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'How long does jhula polishing take?', answer: 'Typically 4 hours.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' }
    ]
  },
  {
    id: 'chester-drawer-polish',
    name: 'Chester Drawer Polish',
    category: 'furniture-polish',
    rating: 4.7,
    reviewCount: 543,
    duration: '~3 hrs',
    features: ['6 Months Polished Warranty', 'Choice of clear or coloured finishes', 'All Materials & Labour Cost'],
    image: '/assets/3-Chester-Drawer.webp',
    options: [
      { id: 'drawer-2', name: '2 Drawer', price: 1449, rating: 4.7, reviewCount: 234, estimatedTime: '2 hrs', image: '/assets/2-Chester-Drawer.webp' },
      { id: 'drawer-3', name: '3 Drawer', price: 2199, rating: 4.8, reviewCount: 189, estimatedTime: '2.5 hrs', image: '/assets/3-Chester-Drawer.webp' },
      { id: 'drawer-4', name: '4 Drawer', price: 2799, rating: 4.7, reviewCount: 120, estimatedTime: '3 hrs', image: '/assets/4-Chester-Drawer.webp' },
      { id: 'drawer-5', name: '5 Drawer', price: 3449, rating: 4.8, reviewCount: 95, estimatedTime: '3.5 hrs', image: '/assets/5-Chester-Drawer.webp' },
      { id: 'drawer-6', name: '6 Drawer', price: 3999, rating: 4.7, reviewCount: 78, estimatedTime: '4 hrs', image: '/assets/6-Chester-Drawer.webp' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Premium polish brand', 'Post-service cleaning', '6 months warranty'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the drawer surface to remove old polish and scratches.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your furniture and home décor.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed drawer.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'How long does drawer polishing take?', answer: 'Typically 2-3 hours depending on size.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' }
    ]
  },
  {
    id: 'tv-unit-polish',
    name: 'TV Unit Polish',
    category: 'furniture-polish',
    rating: 4.8,
    reviewCount: 1123,
    duration: '~4 hrs',
    features: ['6 Months Polished Warranty', 'Choice of clear or coloured finishes', 'All Materials & Labour Cost'],
    image: '/assets/TV-unit-polish.webp',
    options: [
      { id: 'tv-small', name: 'Small', price: 2899, rating: 4.8, reviewCount: 345, estimatedTime: '3 hrs' },
      { id: 'tv-medium', name: 'Medium', price: 3899, rating: 4.9, reviewCount: 567, estimatedTime: '4 hrs' },
      { id: 'tv-large', name: 'Large', price: 4899, rating: 4.8, reviewCount: 211, estimatedTime: '5 hrs' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Premium polish brand', 'Post-service cleaning', '6 months warranty'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the TV unit surface to remove old polish and scratches.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your furniture and home décor.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed TV unit.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'How long does TV unit polishing take?', answer: 'Typically 3-5 hours depending on size.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' }
    ]
  },
  {
    id: 'floor-polishing',
    name: 'Floor Polishing',
    category: 'floor-polish',
    rating: 4.9,
    reviewCount: 2345,
    duration: 'Varies by area',
    features: ['Professional floor polishing service', 'Restores shine and protects wooden floors', 'Eco-friendly polishing materials', 'Hand Polish: ₹219/sqft | Machine Polish: ₹249/sqft'],
    image: '/assets/Floor-polishing.jpeg',
    options: [
      { id: 'floor-hand', name: 'Hand Polish (per sqft)', price: 219, rating: 4.9, reviewCount: 1234, estimatedTime: 'Varies' },
      { id: 'floor-machine', name: 'Machine Polish (per sqft)', price: 249, rating: 4.9, reviewCount: 1111, estimatedTime: 'Varies' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Premium polish brand', 'Post-service cleaning', 'Floor protection'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and prepare the floor surface thoroughly.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your interior décor.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed floor.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'How long does floor polishing take?', answer: 'Depends on the area size.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' }
    ]
  },
  {
    id: 'pu-polish',
    name: 'PU Polish',
    category: 'furniture-polish',
    rating: 4.8,
    reviewCount: 856,
    duration: 'Varies by area',
    features: ['Premium PU finish', 'Durable coating', 'Professional application', 'Travelling cost extra'],
    image: '/assets/PU.webp',
    options: [
      { id: 'pu-standard', name: 'PU Polish (per sqft)', price: 270, rating: 4.8, reviewCount: 456, estimatedTime: 'Varies' },
      { id: 'pu-premium', name: 'Premium PU Polish (per sqft)', price: 320, rating: 4.9, reviewCount: 400, estimatedTime: 'Varies' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Premium PU coating', 'Surface preparation', 'Professional application'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and prepare the surface thoroughly for PU polish application.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Surface Priming', description: 'Apply primer coat to ensure better adhesion of PU polish.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'PU Polish Application', description: 'Apply premium quality PU polish evenly for durable finish.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your furniture.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'What is PU polish?', answer: 'PU (Polyurethane) polish is a premium coating that provides excellent durability and finish.' },
      { question: 'Is travelling cost included?', answer: 'No, travelling cost is charged separately based on location.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' }
    ]
  },
  {
    id: 'deco-polish',
    name: 'Deco Paint',
    category: 'furniture-polish',
    rating: 4.7,
    reviewCount: 723,
    duration: 'Varies by area',
    features: ['Decorative finish', 'Multiple color options', 'Professional application', 'Travelling cost extra'],
    image: '/assets/Deco.webp',
    options: [
      { id: 'deco-standard', name: 'Deco Polish (per sqft)', price: 249, rating: 4.7, reviewCount: 389, estimatedTime: 'Varies' },
      { id: 'deco-premium', name: 'Premium Deco Polish (per sqft)', price: 279, rating: 4.8, reviewCount: 334, estimatedTime: 'Varies' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Decorative coating', 'Surface preparation', 'Professional application'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and prepare the surface thoroughly for Deco polish application.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Color Selection', description: 'Choose from multiple decorative colors that match your interior décor.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Deco Polish Application', description: 'Apply premium quality Deco polish evenly for aesthetic finish.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth finish.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your furniture.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'What is Deco polish?', answer: 'Deco polish is a decorative coating available in multiple colors for aesthetic finish.' },
      { question: 'Is travelling cost included?', answer: 'No, travelling cost is charged separately based on location.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' }
    ]
  },
  {
    id: 'metal-almirah-paint',
    name: 'Metal Almirah Paint',
    category: 'metal-services',
    rating: 4.6,
    reviewCount: 542,
    duration: 'Varies by size',
    features: ['Multi-color available', 'Durable paint', 'Professional finish', 'Travelling cost extra'],
    image: '/assets/Metal-cupboard.webp',
    options: [
      { id: 'almirah-paint', name: 'Metal Almirah Paint (per sqft)', price: 249, rating: 4.6, reviewCount: 542, estimatedTime: 'Varies' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Multi-color paint options', 'Surface preparation', 'Professional application'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and prepare the metal almirah surface thoroughly.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Color Selection', description: 'Choose from multiple colors that match your interior décor.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Primer & Paint Application', description: 'Apply primer and paint evenly for durable finish.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your almirah.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'What colors are available?', answer: 'Multiple colors are available. You can choose during consultation.' },
      { question: 'Is travelling cost included?', answer: 'No, travelling cost is charged separately based on location.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' }
    ]
  },
  {
    id: 'metal-bed-powder-coating',
    name: 'Metal Bed Powder Coating',
    category: 'metal-services',
    rating: 4.7,
    reviewCount: 634,
    duration: 'Varies by size',
    features: ['Powder coating finish', 'Durable protection', 'Fitting charge extra', 'Travelling cost extra'],
    image: '/assets/Metal-Bed.webp',
    options: [
      { id: 'bed-powder-coating', name: 'Metal Bed Powder Coating (per sqft)', price: 160, rating: 4.7, reviewCount: 634, estimatedTime: 'Varies' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Powder coating application', 'Surface preparation'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and prepare the metal bed surface thoroughly.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Color Selection', description: 'Choose from multiple powder coating colors.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Powder Coating Application', description: 'Apply powder coating evenly for durable finish.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Curing & Finishing', description: 'Cure the coating at proper temperature for long-lasting finish.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your bed.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'What is powder coating?', answer: 'Powder coating is a durable finish applied to metal surfaces for long-lasting protection.' },
      { question: 'Are fitting and travelling charges included?', answer: 'No, fitting and travelling charges are extra and charged separately.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' }
    ]
  },
  {
    id: 'steel-bed-buffing',
    name: 'Steel Bed Buffing Polish',
    category: 'metal-services',
    rating: 4.8,
    reviewCount: 478,
    duration: 'Varies by size',
    features: ['Buffing polish', 'Junk removal included', 'Fitting charge extra', 'Travelling cost extra'],
    image: '/assets/Steel-Bed.webp',
    options: [
      { id: 'steel-bed-buffing', name: 'Steel Bed Buffing (per sqft)', price: 189, rating: 4.8, reviewCount: 478, estimatedTime: 'Varies' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Buffing polish', 'Junk removal', 'Surface preparation'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Cleaning', description: 'Our professionals clean the steel bed surface thoroughly.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Rust Removal', description: 'Remove any rust or oxidation from the surface.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Buffing Application', description: 'Apply buffing compound and polish the surface.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Polishing & Shine', description: 'Buff the surface to restore shine and luster.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect shine. We clean up and hand over your bed.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'What is buffing polish?', answer: 'Buffing polish restores shine to steel surfaces by removing oxidation and scratches.' },
      { question: 'Are fitting and travelling charges included?', answer: 'No, fitting and travelling charges are extra and charged separately.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' }
    ]
  },
  {
    id: 'kitchen-trolley-buffing',
    name: 'Kitchen Steel Trolley Buffing',
    category: 'metal-services',
    rating: 4.7,
    reviewCount: 392,
    duration: 'Varies by size',
    features: ['Buffing polish only', 'Junk removal included', 'Labour cost extra', 'Travelling cost extra'],
    image: '/assets/Kitchen-Steel.webp',
    options: [
      { id: 'trolley-buffing', name: 'Kitchen Trolley Buffing (per sqft)', price: 189, rating: 4.7, reviewCount: 392, estimatedTime: 'Varies' }
    ],
    selectedOption: -1,
    priceIncludes: ['Buffing polish', 'Junk removal', 'Surface preparation'],
    materials: ['/assets/select-wood-polish-shade.webp', '/assets/Cleaning & Sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/assets/consultation-booking.webp' },
      { step: 2, title: 'Surface Cleaning', description: 'Our professionals clean the kitchen trolley surface thoroughly.', image: '/assets/Cleaning & Sanding.webp' },
      { step: 3, title: 'Rust Removal', description: 'Remove any rust or oxidation from the surface.', image: '/assets/select-wood-polish-shade.webp' },
      { step: 4, title: 'Buffing Application', description: 'Apply buffing compound and polish the surface.', image: '/assets/filling-gaps-polish-application.webp' },
      { step: 5, title: 'Polishing & Shine', description: 'Buff the surface to restore shine and luster.', image: '/assets/drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect shine. We clean up and hand over your trolley.', image: '/assets/wooden furniture .webp' }
    ],
    faqs: [
      { question: 'What is included in the price?', answer: 'The price includes only buffing polish. Labour and travelling costs are charged separately.' },
      { question: 'Is junk removal included?', answer: 'Yes, junk removal is included in the buffing service.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' }
    ]
  }
];
