import { BlogPostData } from '../types';

export const blogPosts: Omit<BlogPostData, 'content'>[] = [
  {
    slug: 'how-to-maintain-wooden-furniture',
    title: 'How to Maintain Wooden Furniture at Home: A Guide for Mumbai Residents',
    image: '/assets/How To Maintain Wooden Furniture At Home.jpeg',
    date: '10-08-2025',
    author: 'A1 Furniture Polish Team',
    category: 'Furniture Care',
    readTime: '12 min read',
    description: 'Learn the best furniture care tips to maintain your wooden furniture in Mumbai. Our guide covers everything from daily dusting to professional polishing services.',
    keywords: 'wooden furniture polish Mumbai, furniture care tips, professional furniture polishing services'
  },
  {
    slug: 'choosing-the-right-wood-polish',
    title: 'The Ultimate Guide to Choosing The Right Wood Polish',
    image: '/assets/Ultimate Guide to choose.jpeg',
    date: '11-08-2025',
    author: 'A1 Furniture Polish Team',
    category: 'DIY Tips',
    readTime: '8 min read',
    description: 'A comprehensive guide to help you choose the perfect wood polish for your furniture.',
    keywords: 'wood polish, furniture polish, DIY furniture care'
  },
  {
    slug: 'common-polishing-mistakes',
    title: '5 Common Mistakes to Avoid When Polishing Furniture',
    image: '/assets/5 Common Mistakes To Avoid.jpeg',
    date: '12-08-2025',
    author: 'A1 Furniture Polish Team',
    category: 'Furniture Care',
    readTime: '6 min read',
    description: 'Avoid these common mistakes to ensure a perfect finish every time you polish your furniture.',
    keywords: 'furniture polishing mistakes, DIY polishing, wood care'
  },
  {
    slug: 'professional-furniture-polishing-services-in-jogeshwari',
    title: 'Professional Furniture Polishing Services in Jogeshwari – A1 Furniture Polish',
    image: '/assets/Furniture Polishing Services In Jogeshwari.jpeg',
    date: '13-08-2025',
    author: 'A1 Furniture Polish Team',
    category: 'Local Services',
    readTime: '8 min read',
    description: 'Give your furniture a new lease on life with the best professional furniture polishing services in Jogeshwari, Mumbai. A1 Furniture Polish offers expert wood polishing, restoration, and finishing.',
    keywords: 'furniture polishing services in Jogeshwari, wood polish in Jogeshwari, A1 Furniture Polish'
  },
  {
    slug: 'best-wood-polishing-in-andheri',
    title: 'Best Wood Polishing in Andheri: Restore Shine with A1 Furniture Polish',
    image: '/assets/Best Wood Polishing In Andheri.jpeg',
    date: '14-08-2025',
    author: 'A1 Furniture Polish Team',
    category: 'Local Services',
    readTime: '9 min read',
    description: 'Restore the shine of your wooden furniture with the best wood polishing services in Andheri. A1 Furniture Polish offers expert restoration and finishing for homes and offices.',
    keywords: 'wood polishing Andheri, furniture polish Andheri, A1 Furniture Polish'
  },
  {
    slug: 'a1-furniture-polish-pricing-services-bandra',
    title: 'A1 Furniture Polish Pricing & Services in Bandra – Complete Guide 2025',
    image: '/assets/A1 Furniture Polishing Price And Service In Bandra.jpeg',
    date: '15-08-2025',
    author: 'A1 Furniture Polish Team',
    category: 'Local Services',
    readTime: '10 min read',
    description: 'A complete guide to A1 Furniture Polish\'s pricing and services in Bandra, Mumbai for 2025. Find affordable rates for sofa, bed, door, and dining table polishing.',
    keywords: 'furniture polish bandra, wood polish price bandra, A1 Furniture Polish'
  },
  {
    slug: 'why-choose-a1-furniture-polish-goregaon',
    title: '10 Powerful Reasons Why Choose A1 Furniture Polish for Wooden Furniture in Goregaon',
    image: '/assets/Why Choose A1 Furniture Polish for Wooden Furniture in Goregaon.jpeg',
    date: '16-08-2025',
    author: 'A1 Furniture Polish Team',
    category: 'Local Services',
    readTime: '11 min read',
    description: 'Find out the 10 powerful reasons to choose A1 Furniture Polish in Goregaon for your wooden furniture. Affordable, professional, and long-lasting solutions.',
    keywords: 'furniture polish goregaon, wood polish goregaon, A1 Furniture Polish'
  },
  {
    slug: 'top-furniture-polish-services-mumbai',
    title: 'Top Furniture Polish Services in Mumbai – Enhance Your Home Décor',
    image: '/assets/Top Furniture Polish Services in Mumbai.jpeg',
    date: '17-08-2025',
    author: 'A1 Furniture Polish Team',
    category: 'Furniture Care',
    readTime: '12 min read',
    description: 'Discover the top furniture polish services in Mumbai to enhance your home décor. Learn how professional polishing can restore shine and protect your valuable furniture.',
    keywords: 'furniture polish mumbai, top furniture polish services, a1 furniture polish'
  },
  {
    slug: 'step-by-step-furniture-polishing-guide-for-mumbai-homes',
    title: 'Step-by-Step Furniture Polishing Guide for Mumbai Homes – Ultimate DIY & Professional Tips',
    image: '/assets/Furntiure Polishing Guide For Mumbai.jpeg',
    date: '18-08-2025',
    author: 'A1 Furniture Polish Team',
    category: 'DIY Tips',
    readTime: '13 min read',
    description: 'Looking for the best step-by-step furniture polishing guide for Mumbai homes? Learn how to polish wood, leather, and marble furniture with expert tips, eco-friendly solutions, and professional advice from A1 Furniture Polish.',
    keywords: 'furniture polishing guide, DIY furniture polish, mumbai homes, a1 furniture polish'
  }
];

export const fetchBlogPostContent = async (slug: string) => {
  switch (slug) {
    case 'how-to-maintain-wooden-furniture':
      // @ts-ignore
      return (await import('../../assets/how-to-maintain-wooden-furniture.js')).default;
    case 'choosing-the-right-wood-polish':
      // @ts-ignore
      return (await import('../../assets/choosing-the-right-wood-polish.js')).default;
    case 'common-polishing-mistakes':
      // @ts-ignore
      return (await import('../../assets/common-polishing-mistakes.js')).default;
    case 'professional-furniture-polishing-services-in-jogeshwari':
      // @ts-ignore
      return (await import('../../assets/professional-furniture-polishing-services-in-jogeshwari.js')).default;
    case 'best-wood-polishing-in-andheri':
      // @ts-ignore
      return (await import('../../assets/best-wood-polishing-in-andheri.js')).default;
    case 'a1-furniture-polish-pricing-services-bandra':
      // @ts-ignore
      return (await import('../../assets/a1-furniture-polish-pricing-services-bandra.js')).default;
    case 'why-choose-a1-furniture-polish-goregaon':
      // @ts-ignore
      return (await import('../../assets/why-choose-a1-furniture-polish-goregaon.js')).default;
    case 'top-furniture-polish-services-mumbai':
      // @ts-ignore
      return (await import('../../assets/top-furniture-polish-services-mumbai.js')).default;
    case 'step-by-step-furniture-polishing-guide-for-mumbai-homes':
      // @ts-ignore
      return (await import('../../assets/step-by-step-furniture-polishing-guide-for-mumbai-homes.js')).default;
    default:
      throw new Error('Blog post not found');
  }
};
