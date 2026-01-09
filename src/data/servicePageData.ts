import { ServiceData } from '../types';

// Service categories for tabs
export type ServiceCategory = 'polish' | 'sofa' | 'product';

export const servicePageData: ServiceData[] = [
  {
    id: 'sofa-polish',
    name: 'Sofa Wood Polish',
    category: 'furniture-polish',
    tabCategory: 'sofa' as ServiceCategory,
    rating: 4.9,
    reviewCount: 2156,
    duration: '~2.5 hrs',
    features: [
      '6 Months Polished Warranty',
      'Premium wood finish',
      'Scratch removal included',
    ],
    image: '/Luxe assets/Three seater sofa.webp',
    options: [
      { 
        id: 'sofa-1seater',
        name: '1 Seater Sofa', 
        price: 1449,
        rating: 4.9,
        reviewCount: 356,
        estimatedTime: '1.5 hrs',
        image: '/Luxe assets/Single seater sofa.webp'
      },
      { 
        id: 'sofa-2seater',
        name: '2 Seater Sofa', 
        price: 1999,
        rating: 4.9,
        reviewCount: 456,
        estimatedTime: '2 hrs',
        image: '/Luxe assets/Two seater sofa.webp'
      },
      { 
        id: 'sofa-3seater',
        name: '3 Seater Sofa', 
        price: 2949,
        rating: 4.8,
        reviewCount: 678,
        estimatedTime: '2.5 hrs',
        image: '/Luxe assets/Three seater sofa.webp'
      },
      { 
        id: 'sofa-lshape',
        name: 'L-Shape Sofa', 
        price: 6449,
        rating: 4.8,
        reviewCount: 234,
        estimatedTime: '4.5 hrs',
        image: '/Luxe assets/1,1 3 Seater sofa.webp'
      },
    ],
    selectedOption: -1,
    priceIncludes: [
      'Material & labour cost (Hand Polish)',
      'Premium polish brand',
      'Post-service cleaning',
      'Scratch removal & surface preparation',
      '6 months warranty on polish',
      'Machine Polish: Extra ₹1,499/-'
    ],
    materials: [
      '/Luxe assets/luxe-process-shade-selection.webp',
      '/Luxe assets/luxe-process-cleaning-sanding.webp',
      '/Luxe assets/luxe-process-gap-filling-application.webp',
      '/Luxe assets/luxe-process-drying-finishing.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Consultation & Booking',
        description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.',
        image: '/Luxe assets/luxe-process-consultation-booking.webp'
      },
      {
        step: 2,
        title: 'Surface Preparation',
        description: 'Our professionals clean and sand the furniture surface to remove old polish and scratches.',
        image: '/Luxe assets/luxe-process-cleaning-sanding.webp'
      },
      {
        step: 3,
        title: 'Polish Shade Selection',
        description: 'Choose from clear or colored finishes that match your furniture and home décor.',
        image: '/Luxe assets/luxe-process-shade-selection.webp'
      },
      {
        step: 4,
        title: 'Gap Filling & Polish Application',
        description: 'We fill any gaps or cracks, then apply premium quality polish evenly.',
        image: '/Luxe assets/luxe-process-gap-filling-application.webp'
      },
      {
        step: 5,
        title: 'Drying & Finishing',
        description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.',
        image: '/Luxe assets/luxe-process-drying-finishing.webp'
      },
      {
        step: 6,
        title: 'Quality Check & Handover',
        description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed furniture.',
        image: '/Luxe assets/luxe-furniture-wooden-collection.webp'
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
    image: '/Luxe assets/Queen size Bed.webp',
    options: [
      { 
        id: 'bed-single',
        name: 'Single Bed', 
        price: 2449,
        rating: 4.8,
        reviewCount: 342,
        estimatedTime: '3 hrs',
        image: '/Luxe assets/Single Bed.webp'
      },
      { 
        id: 'bed-diwan',
        name: 'Diwan', 
        price: 2999,
        rating: 4.8,
        reviewCount: 156,
        estimatedTime: '2.5 hrs',
        image: '/Luxe assets/Divan.webp'
      },
      { 
        id: 'bed-queen',
        name: 'Queen Size Bed', 
        price: 3449,
        rating: 4.9,
        reviewCount: 521,
        estimatedTime: '3.5 hrs',
        image: '/Luxe assets/Queen size Bed.webp'
      },
      { 
        id: 'bed-king',
        name: 'King Size Bed', 
        price: 3799,
        rating: 4.8,
        reviewCount: 284,
        estimatedTime: '4 hrs',
        image: '/Luxe assets/King size Bed.webp'
      },
      { 
        id: 'bed-sofacumbed',
        name: 'Sofa cum Bed', 
        price: 4799,
        rating: 4.7,
        reviewCount: 89,
        estimatedTime: '4 hrs',
        image: '/Luxe assets/Single Bed.webp'
      },
      { 
        id: 'bed-bunk',
        name: 'Bunk Bed', 
        price: 5799,
        rating: 4.7,
        reviewCount: 100,
        estimatedTime: '5 hrs',
        image: '/Luxe assets/Single Bed.webp'
      },
    ],
    selectedOption: -1,
    priceIncludes: [
      'Material & labour cost (Hand Polish)',
      'Premium polish brand (Melamine/PU)',
      'Post-service cleaning',
      'Scratch removal & surface preparation',
      '6 months warranty on polish',
      'Machine Polish: Extra ₹1,499/-'
    ],
    materials: [
      '/Luxe assets/luxe-process-shade-selection.webp',
      '/Luxe assets/luxe-process-cleaning-sanding.webp',
      '/Luxe assets/luxe-process-gap-filling-application.webp',
      '/Luxe assets/luxe-process-drying-finishing.webp'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Consultation & Booking',
        description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.',
        image: '/Luxe assets/luxe-process-consultation-booking.webp'
      },
      {
        step: 2,
        title: 'Surface Preparation',
        description: 'Our professionals clean and sand the furniture surface to remove old polish and scratches.',
        image: '/Luxe assets/luxe-process-cleaning-sanding.webp'
      },
      {
        step: 3,
        title: 'Polish Shade Selection',
        description: 'Choose from clear or colored finishes that match your furniture and home décor.',
        image: '/Luxe assets/luxe-process-shade-selection.webp'
      },
      {
        step: 4,
        title: 'Gap Filling & Polish Application',
        description: 'We fill any gaps or cracks, then apply premium quality polish evenly.',
        image: '/Luxe assets/luxe-process-gap-filling-application.webp'
      },
      {
        step: 5,
        title: 'Drying & Finishing',
        description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.',
        image: '/Luxe assets/luxe-process-drying-finishing.webp'
      },
      {
        step: 6,
        title: 'Quality Check & Handover',
        description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed furniture.',
        image: '/Luxe assets/luxe-furniture-wooden-collection.webp'
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
    image: '/Luxe assets/Single Door.webp',
    options: [
      { id: 'door-single', name: 'Single Door', price: 2449, rating: 4.7, reviewCount: 523, estimatedTime: '2 hrs', image: '/Luxe assets/Single Door.webp' },
      { id: 'door-2door', name: '2 Door', price: 3899, rating: 4.8, reviewCount: 789, estimatedTime: '3 hrs', image: '/Luxe assets/Single Door.webp' },
      { id: 'door-3door', name: '3 Door', price: 4899, rating: 4.7, reviewCount: 345, estimatedTime: '3.5 hrs', image: '/Luxe assets/Single Door.webp' },
      { id: 'door-4door', name: '4 Door', price: 5899, rating: 4.8, reviewCount: 277, estimatedTime: '4 hrs', image: '/Luxe assets/Single Door.webp' },
      { id: 'door-frame', name: 'Door Frame', price: 1999, rating: 4.7, reviewCount: 234, estimatedTime: '1.5 hrs', image: '/Luxe assets/Door frame.webp' },
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost (Hand Polish)', 'Premium polish brand (Melamine/PU)', 'Post-service cleaning', 'Both sides polishing', '6 months warranty on polish', 'Machine Polish: Extra ₹1,499/-'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp', '/Luxe assets/luxe-process-gap-filling-application.webp', '/Luxe assets/luxe-process-drying-finishing.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the door surface to remove old polish and scratches.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your door and home décor.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly on both sides.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed door.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
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
    image: '/Luxe assets/Center table.webp',
    options: [
      { id: 'table-coffee', name: 'Coffee Table', price: 1549, rating: 4.8, reviewCount: 234, estimatedTime: '1.5 hrs', image: '/Luxe assets/Coffee Table.webp' },
      { id: 'table-center', name: 'Center Table', price: 2899, rating: 4.9, reviewCount: 567, estimatedTime: '2.5 hrs', image: '/Luxe assets/Center table.webp' },
      { id: 'table-side', name: 'Side Table', price: 1999, rating: 4.8, reviewCount: 456, estimatedTime: '2 hrs', image: '/Luxe assets/Side Table.webp' },
      { id: 'table-study', name: 'Study Table', price: 3899, rating: 4.7, reviewCount: 310, estimatedTime: '3 hrs', image: '/Luxe assets/Study Table.webp' },
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost (Hand Polish)', 'Premium polish brand (Melamine/PU)', 'Post-service cleaning', 'Scratch removal & surface preparation', '6 months warranty on polish', 'Machine Polish: Extra ₹1,499/-'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp', '/Luxe assets/luxe-process-gap-filling-application.webp', '/Luxe assets/luxe-process-drying-finishing.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the table surface to remove old polish and scratches.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your table and home décor.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed table.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
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
    image: '/Luxe assets/Three Doors wardrobe.webp',
    options: [
      { id: 'wardrobe-2door', name: '2 Door Wardrobe', price: 3499, rating: 4.9, reviewCount: 678, estimatedTime: '3.5 hrs', image: '/Luxe assets/Two Door wardrobe.webp' },
      { id: 'wardrobe-3door', name: '3 Door Wardrobe', price: 4449, rating: 4.8, reviewCount: 892, estimatedTime: '4.5 hrs', image: '/Luxe assets/Three Doors wardrobe.webp' },
      { id: 'wardrobe-4door', name: '4 Door Wardrobe', price: 5849, rating: 4.9, reviewCount: 456, estimatedTime: '5 hrs', image: '/Luxe assets/Four Door wardrobe.webp' },
      { id: 'wardrobe-sliding', name: 'Sliding Door Wardrobe', price: 6799, rating: 4.8, reviewCount: 319, estimatedTime: '4 hrs', image: '/Luxe assets/Sliding Door wardrobe.webp' },
      { id: 'wardrobe-single', name: 'Single Door Wardrobe', price: 2999, rating: 4.8, reviewCount: 245, estimatedTime: '3 hrs', image: '/Luxe assets/Single Door Wardrobe.webp' },
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost (Hand Polish)', 'Premium polish brand (Melamine/PU)', 'Post-service cleaning', 'Inside & outside polishing', '6 months warranty on polish', 'Machine Polish: Extra ₹1,499/-'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp', '/Luxe assets/luxe-process-gap-filling-application.webp', '/Luxe assets/luxe-process-drying-finishing.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the wardrobe surface to remove old polish and scratches.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your wardrobe and home décor.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly inside and outside.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed wardrobe.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
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
    image: '/Luxe assets/Dining Table with 6 chair.webp',
    options: [
      { id: 'dining-2seater', name: '2 Seater + Bench', price: 4449, rating: 4.9, reviewCount: 467, estimatedTime: '3.5 hrs', image: '/Luxe assets/Dining Table with 2 chair+bench.webp' },
      { id: 'dining-4seater', name: '4 Seater Dining Set', price: 3849, rating: 4.9, reviewCount: 567, estimatedTime: '4 hrs', image: '/Luxe assets/Dining Table with 4 chair.webp' },
      { id: 'dining-5seater', name: '5 Seater Dining Set', price: 4599, rating: 4.9, reviewCount: 456, estimatedTime: '4.5 hrs', image: '/Luxe assets/Dining Table with 5 chair.webp' },
      { id: 'dining-6seater', name: '6 Seater Dining Set', price: 5099, rating: 4.9, reviewCount: 789, estimatedTime: '5 hrs', image: '/Luxe assets/Dining Table with 6 chair.webp' },
      { id: 'dining-table-only', name: 'Dining Table Only', price: 2999, rating: 4.8, reviewCount: 345, estimatedTime: '2.5 hrs', image: '/Luxe assets/Dining Table.webp' },
      { id: 'dining-chair-single', name: 'Single Chair', price: 899, rating: 4.8, reviewCount: 234, estimatedTime: '1 hr', image: '/Luxe assets/Single chair.webp' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost (Hand Polish)', 'Premium polish brand (Melamine/PU)', 'Post-service cleaning', 'Complete polish for table and chairs', 'Heat and water-resistant finish', '6 months warranty on polish', 'Machine Polish: Extra ₹1,499/-'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp', '/Luxe assets/luxe-process-gap-filling-application.webp', '/Luxe assets/luxe-process-drying-finishing.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the dining set surface to remove old polish and scratches.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your dining set and home décor.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly on table and chairs.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed dining set.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
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
    image: '/Luxe assets/3 Door cabinet.webp',
    options: [
      { id: 'cabinet-single', name: 'Single Door Cabinet', price: 2449, rating: 4.8, reviewCount: 345, estimatedTime: '2 hrs', image: '/Luxe assets/Single Door cabinet.webp' },
      { id: 'cabinet-double', name: 'Two Door Cabinet', price: 2999, rating: 4.9, reviewCount: 567, estimatedTime: '2.5 hrs', image: '/Luxe assets/Two Door cabinet.webp' },
      { id: 'cabinet-3door', name: '3 Door Cabinet', price: 3899, rating: 4.7, reviewCount: 234, estimatedTime: '3 hrs', image: '/Luxe assets/3 Door cabinet.webp' },
      { id: 'cabinet-crockery', name: 'Kitchen Crockery Rack', price: 3999, rating: 4.8, reviewCount: 310, estimatedTime: '3.5 hrs', image: '/Luxe assets/Kitchen crockery Rack.webp' },
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost (Hand Polish)', 'Premium polish brand (Melamine/PU)', 'Post-service cleaning', 'Inside & outside polishing', '6 months warranty on polish', 'Machine Polish: Extra ₹1,499/-'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp', '/Luxe assets/luxe-process-gap-filling-application.webp', '/Luxe assets/luxe-process-drying-finishing.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the cabinet surface to remove old polish and scratches.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your cabinet and home décor.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed cabinet.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
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
    image: '/Luxe assets/5 bookshelf.webp',
    options: [
      { id: 'shelf-3', name: '3 Shelf', price: 1999, rating: 4.8, reviewCount: 345, estimatedTime: '2 hrs', image: '/Luxe assets/3 bookshelf.webp' },
      { id: 'shelf-5', name: '5 Shelf', price: 2799, rating: 4.9, reviewCount: 567, estimatedTime: '2.5 hrs', image: '/Luxe assets/5 bookshelf.webp' },
      { id: 'shelf-7', name: '7 Shelf', price: 3499, rating: 4.8, reviewCount: 322, estimatedTime: '3.5 hrs', image: '/Luxe assets/7 bookshelf.webp' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost (Hand Polish)', 'Premium polish brand', 'Post-service cleaning', '6 months warranty', 'Machine Polish: Extra ₹1,499/-'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the bookshelf surface to remove old polish and scratches.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your furniture and home décor.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed bookshelf.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
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
    image: '/Luxe assets/3 bookshelf.webp',
    options: [
      { id: 'shelf-small', name: 'Small', price: 999, rating: 4.7, reviewCount: 234, estimatedTime: '1 hr' },
      { id: 'shelf-medium', name: 'Medium', price: 1449, rating: 4.8, reviewCount: 245, estimatedTime: '1.5 hrs' },
      { id: 'shelf-large', name: 'Large', price: 1999, rating: 4.7, reviewCount: 175, estimatedTime: '2 hrs' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost (Hand Polish)', 'Premium polish brand', 'Post-service cleaning', '6 months warranty', 'Machine Polish: Extra ₹1,499/-'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the shelf surface to remove old polish and scratches.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your furniture and home décor.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed shelf.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
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
    image: '/Luxe assets/Mandir.webp',
    options: [
      { id: 'mandir-standard', name: 'Mandir', price: 2999, rating: 4.9, reviewCount: 987, estimatedTime: '3 hrs' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost (Hand Polish)', 'Premium polish brand', 'Post-service cleaning', '6 months warranty', 'Machine Polish: Extra ₹1,499/-'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the mandir surface to remove old polish and scratches.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your mandir and home décor.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed mandir.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
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
    image: '/Luxe assets/Jhula.webp',
    options: [
      { id: 'jhula-1seater', name: '1 Seater Jhula', price: 1999, rating: 4.8, reviewCount: 465, estimatedTime: '3 hrs' },
      { id: 'jhula-2seater', name: '2 Seater Jhula', price: 2799, rating: 4.8, reviewCount: 765, estimatedTime: '4 hrs' },
      { id: 'jhula-3seater', name: '3 Seater Jhula', price: 3449, rating: 4.9, reviewCount: 345, estimatedTime: '5 hrs' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost (Hand Polish)', 'Premium polish brand', 'Post-service cleaning', '6 months warranty', 'Machine Polish: Extra ₹1,499/-'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the jhula surface to remove old polish and scratches.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your jhula and home décor.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed jhula.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
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
    image: '/Luxe assets/Three Drawer Chester.webp',
    options: [
      { id: 'drawer-2', name: '2 Drawer', price: 1449, rating: 4.7, reviewCount: 234, estimatedTime: '2 hrs', image: '/Luxe assets/Two Drawer Chester.webp' },
      { id: 'drawer-3', name: '3 Drawer', price: 2199, rating: 4.8, reviewCount: 189, estimatedTime: '2.5 hrs', image: '/Luxe assets/Three Drawer Chester.webp' },
      { id: 'drawer-4', name: '4 Drawer', price: 2799, rating: 4.7, reviewCount: 120, estimatedTime: '3 hrs', image: '/Luxe assets/Four Drawer Chester.webp' },
      { id: 'drawer-5', name: '5 Drawer', price: 3449, rating: 4.8, reviewCount: 95, estimatedTime: '3.5 hrs', image: '/Luxe assets/Five Drawer Chester.webp' },
      { id: 'drawer-6', name: '6 Drawer', price: 3999, rating: 4.7, reviewCount: 78, estimatedTime: '4 hrs', image: '/Luxe assets/Six drawer Chester.webp' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost (Hand Polish)', 'Premium polish brand', 'Post-service cleaning', '6 months warranty', 'Machine Polish: Extra ₹1,499/-'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the drawer surface to remove old polish and scratches.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your furniture and home décor.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed drawer.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
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
    image: '/Luxe assets/Tv unit (Medium).webp',
    options: [
      { id: 'tv-small', name: 'Small TV Unit', price: 2899, rating: 4.8, reviewCount: 345, estimatedTime: '3 hrs', image: '/Luxe assets/Tv Unit (small).webp' },
      { id: 'tv-medium', name: 'Medium TV Unit', price: 3899, rating: 4.9, reviewCount: 567, estimatedTime: '4 hrs', image: '/Luxe assets/Tv unit (Medium).webp' },
      { id: 'tv-large', name: 'Large TV Unit', price: 4899, rating: 4.8, reviewCount: 211, estimatedTime: '5 hrs', image: '/Luxe assets/Tv unit (large).webp' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost (Hand Polish)', 'Premium polish brand', 'Post-service cleaning', '6 months warranty', 'Machine Polish: Extra ₹1,499/-'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the TV unit surface to remove old polish and scratches.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your furniture and home décor.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed TV unit.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
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
    image: '/Luxe assets/luxe-service-floor-polishing.jpeg',
    options: [
      { id: 'floor-hand', name: 'Hand Polish (per sqft)', price: 219, rating: 4.9, reviewCount: 1234, estimatedTime: 'Varies' },
      { id: 'floor-machine', name: 'Machine Polish (per sqft)', price: 249, rating: 4.9, reviewCount: 1111, estimatedTime: 'Varies' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Premium polish brand', 'Post-service cleaning', 'Floor protection'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and prepare the floor surface thoroughly.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your interior décor.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed floor.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
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
    image: '/Luxe assets/luxe-polish-pu-finish.webp',
    options: [
      { id: 'pu-standard', name: 'PU Polish (per sqft)', price: 270, rating: 4.8, reviewCount: 456, estimatedTime: 'Varies' },
      { id: 'pu-premium', name: 'Premium PU Polish (per sqft)', price: 320, rating: 4.9, reviewCount: 400, estimatedTime: 'Varies' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Premium PU coating', 'Surface preparation', 'Professional application'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and prepare the surface thoroughly for PU polish application.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Surface Priming', description: 'Apply primer coat to ensure better adhesion of PU polish.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'PU Polish Application', description: 'Apply premium quality PU polish evenly for durable finish.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your furniture.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
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
    image: '/Luxe assets/luxe-furniture-decorative.webp',
    options: [
      { id: 'deco-standard', name: 'Deco Polish (per sqft)', price: 249, rating: 4.7, reviewCount: 389, estimatedTime: 'Varies' },
      { id: 'deco-premium', name: 'Premium Deco Polish (per sqft)', price: 279, rating: 4.8, reviewCount: 334, estimatedTime: 'Varies' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Decorative coating', 'Surface preparation', 'Professional application'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and prepare the surface thoroughly for Deco polish application.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Color Selection', description: 'Choose from multiple decorative colors that match your interior décor.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'Deco Polish Application', description: 'Apply premium quality Deco polish evenly for aesthetic finish.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your furniture.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
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
    id: 'antique-carving-furniture',
    name: 'Antique / Carving Furniture',
    category: 'furniture-polish',
    rating: 4.9,
    reviewCount: 456,
    duration: '~4-6 hrs',
    features: ['Antique Wood Restoration', 'Intricate Carving Preservation', 'Traditional Finishing', 'Detail Enhancement'],
    image: '/Luxe assets/Antique_carving.webp',
    options: [
      { id: 'antique-small', name: 'Small Antique Furniture', price: 2449, rating: 4.9, reviewCount: 156, estimatedTime: '4 hrs' },
      { id: 'antique-medium', name: 'Medium Antique Furniture', price: 2999, rating: 4.9, reviewCount: 189, estimatedTime: '5 hrs' },
      { id: 'antique-large', name: 'Large Antique Furniture', price: 3799, rating: 4.8, reviewCount: 111, estimatedTime: '6 hrs' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Antique wood restoration', 'Carving preservation', 'Traditional polish finish', '6 months warranty on polish'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp', '/Luxe assets/luxe-process-gap-filling-application.webp', '/Luxe assets/luxe-process-drying-finishing.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Assessment', description: 'Expert assessment of antique furniture condition and restoration requirements.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Gentle Cleaning & Preparation', description: 'Careful cleaning of antique wood and intricate carvings with specialized tools.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Restoration Work', description: 'Repair damaged areas, fill cracks, and restore original beauty of carvings.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 4, title: 'Traditional Polish Application', description: 'Apply authentic traditional polish that enhances antique character.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 5, title: 'Detail Enhancement', description: 'Highlight intricate carvings and restore original luster with premium finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Final Inspection', description: 'Thorough quality check ensuring antique furniture restored to its former glory.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
    ],
    faqs: [
      { question: 'How long does antique furniture restoration take?', answer: 'Restoration time varies from 4-6 hours depending on the size and condition of the antique piece. We ensure careful, unhurried work.' },
      { question: 'Do you work with all types of antique wood?', answer: 'Yes, we have expertise in restoring various antique wood types including teak, rosewood, sheesham, and mahogany.' },
      { question: 'Will the carving details be preserved?', answer: 'Absolutely! We use specialized techniques and tools to carefully preserve and enhance all intricate carving details.' },
      { question: 'What type of polish do you use for antique furniture?', answer: 'We use traditional polish methods and premium materials suitable for antique wood that enhance its natural character and patina.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' },
      { icon: 'medal', text: 'Antique restoration experts' }
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
    image: '/Luxe assets/Metal Almirah .webp',
    options: [
      { id: 'almirah-paint', name: 'Metal Almirah Paint (per sqft)', price: 249, rating: 4.6, reviewCount: 542, estimatedTime: 'Varies' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost', 'Multi-color paint options', 'Surface preparation', 'Professional application'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and prepare the metal almirah surface thoroughly.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Color Selection', description: 'Choose from multiple colors that match your interior décor.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'Primer & Paint Application', description: 'Apply primer and paint evenly for durable finish.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your almirah.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
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
    id: 'shoe-rack-polish',
    name: 'Shoe Rack Polish',
    category: 'furniture-polish',
    rating: 4.7,
    reviewCount: 456,
    duration: '~2 hrs',
    features: ['6 Months Polished Warranty', 'Choice of clear or coloured finishes', 'All Materials & Labour Cost'],
    image: '/Luxe assets/Shoe rack medium.webp',
    options: [
      { id: 'shoe-rack-small', name: 'Small Shoe Rack', price: 1299, rating: 4.7, reviewCount: 156, estimatedTime: '1.5 hrs', image: '/Luxe assets/Shoe rack small.webp' },
      { id: 'shoe-rack-medium', name: 'Medium Shoe Rack', price: 1799, rating: 4.8, reviewCount: 189, estimatedTime: '2 hrs', image: '/Luxe assets/Shoe rack medium.webp' },
      { id: 'shoe-rack-large', name: 'Large Shoe Rack', price: 2299, rating: 4.7, reviewCount: 111, estimatedTime: '2.5 hrs', image: '/Luxe assets/Shoe rack large.webp' }
    ],
    selectedOption: -1,
    priceIncludes: ['Material & labour cost (Hand Polish)', 'Premium polish brand', 'Post-service cleaning', '6 months warranty', 'Machine Polish: Extra ₹1,499/-'],
    materials: ['/Luxe assets/luxe-process-shade-selection.webp', '/Luxe assets/luxe-process-cleaning-sanding.webp'],
    processSteps: [
      { step: 1, title: 'Consultation & Booking', description: 'Book your service online or via WhatsApp. Our team will confirm your appointment.', image: '/Luxe assets/luxe-process-consultation-booking.webp' },
      { step: 2, title: 'Surface Preparation', description: 'Our professionals clean and sand the shoe rack surface to remove old polish and scratches.', image: '/Luxe assets/luxe-process-cleaning-sanding.webp' },
      { step: 3, title: 'Polish Shade Selection', description: 'Choose from clear or colored finishes that match your furniture and home décor.', image: '/Luxe assets/luxe-process-shade-selection.webp' },
      { step: 4, title: 'Gap Filling & Polish Application', description: 'We fill any gaps or cracks, then apply premium quality polish evenly.', image: '/Luxe assets/luxe-process-gap-filling-application.webp' },
      { step: 5, title: 'Drying & Finishing', description: 'Allow proper drying time and apply finishing coats for a smooth, glossy finish.', image: '/Luxe assets/luxe-process-drying-finishing.webp' },
      { step: 6, title: 'Quality Check & Handover', description: 'Final inspection to ensure perfect finish. We clean up and hand over your refreshed shoe rack.', image: '/Luxe assets/luxe-furniture-wooden-collection.webp' }
    ],
    faqs: [
      { question: 'How long does shoe rack polishing take?', answer: 'Typically 1.5-2.5 hours depending on size.' }
    ],
    trustBadges: [
      { icon: 'shield-check', text: 'Background verified professionals' },
      { icon: 'wrench', text: '300+ hours of training' }
    ]
  }
];
