import { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    slug: "10-powerful-reasons-why-choose-a1-furniture-polish-for-wooden-furniture-in-goregaon",
    title: "10 Powerful Reasons Why Choose A1 Furniture Polish For Wooden Furniture In Goregaon",
    description: "Why choose A1 Furniture Polish for wooden furniture in Goregaon? The answer is simple—affordable, professional, and long-lasting solutions...",
    keywords: "furniture polish, wood polish, mumbai, 10, powerful, reasons",
    category: "Furniture Care",
    author: "A1 Furniture Polish Team",
    date: "09/01/2026",
    readTime: "7 min read",
    image: "/Luxe assets/Hero Image.webp",
    featured: true
  },
  {
    slug: "a1-furniture-polish-pricing-services-in-bandra-complete-guide-2025",
    title: "A1 Furniture Polish Pricing Services In Bandra Complete Guide 2025",
    description: "If your sofa, dining table, or wooden furniture has started to look dull, scratched, or faded, polishing is the smartest way to bring it back...",
    keywords: "furniture polish, wood polish, mumbai, a1, furniture, polish",
    category: "Furniture Care",
    author: "A1 Furniture Polish Team",
    date: "09/01/2026",
    readTime: "5 min read",
    image: "/Luxe assets/Three seater sofa.webp"
  },
  {
    slug: "best-wood-polishing-in-andheri-restore-shine-with-a1-furniture-polish",
    title: "Best Wood Polishing In Andheri Restore Shine With A1 Furniture Polish",
    description: "Wood has always held a special place in Indian households. From traditional carved wardrobes to modern dining tables, wooden furniture adds...",
    keywords: "furniture polish, wood polish, mumbai, best, wood, polishing",
    category: "Furniture Care",
    author: "A1 Furniture Polish Team",
    date: "09/01/2026",
    readTime: "6 min read",
    image: "/Luxe assets/Dining Table with 4 chair.webp"
  },
  {
    slug: "professional-furniture-polishing-services-in-jogeshwari-a1-furniture-polish",
    title: "Professional Furniture Polishing Services In Jogeshwari A1 Furniture Polish",
    description: "Furniture isn't just wood and polish—it's a part of your home's personality. Over time, dust, scratches, and dullness take away the charm...",
    keywords: "furniture polish, wood polish, mumbai, professional, furniture, polishing",
    category: "Furniture Care",
    author: "A1 Furniture Polish Team",
    date: "09/01/2026",
    readTime: "4 min read",
    image: "/Luxe assets/Four Door wardrobe.webp"
  },
  {
    slug: "step-by-step-furniture-polishing-guide-for-mumbai-homes",
    title: "Step By Step Furniture Polishing Guide For Mumbai Homes",
    description: "Why Furniture Polishing is Important for Mumbai Homes and step by step guide for furniture polishing...",
    keywords: "furniture polish, wood polish, mumbai, step, by, step",
    category: "Furniture Care",
    author: "A1 Furniture Polish Team",
    date: "09/01/2026",
    readTime: "5 min read",
    image: "/Luxe assets/Step 1.webp"
  },
  {
    slug: "top-furniture-polish-services-in-mumbai-enhance-your-home-d-cor",
    title: "Top Furniture Polish Services In Mumbai Enhance Your Home Décor",
    description: "Why Furniture Polish Services Matter and how to enhance your home décor with top furniture polish services in Mumbai...",
    keywords: "furniture polish, wood polish, mumbai, top, furniture, polish",
    category: "Furniture Care",
    author: "A1 Furniture Polish Team",
    date: "09/01/2026",
    readTime: "6 min read",
    image: "/Luxe assets/King size Bed.webp",
    featured: true
  },
  {
    slug: "wood-polishing-cost-in-mumbai",
    title: "Wood Polishing Cost In Mumbai",
    description: "Wood Polishing Cost in Mumbai (2025 Updated Guide) – PU, Melamine, Door & Furniture Polish Price List...",
    keywords: "furniture polish, wood polish, mumbai, wood, polishing, cost",
    category: "Furniture Care",
    author: "A1 Furniture Polish Team",
    date: "09/01/2026",
    readTime: "8 min read",
    image: "/Luxe assets/Coffee Table.webp"
  },
  {
    slug: "choosing-the-right-wood-polish",
    title: "Choosing The Right Wood Polish",
    description: "Choosing the right wood polish can feel overwhelming. With so many options on the market, how do you know which one will give your furniture that perfect, long-lasting shine?",
    keywords: "furniture polish, wood polish, mumbai, choosing, the, right",
    category: "Furniture Care",
    author: "A1 Furniture Polish Team",
    date: "09/01/2026",
    readTime: "3 min read",
    image: "/Luxe assets/Study Table.webp"
  },
  {
    slug: "common-polishing-mistakes",
    title: "Common Polishing Mistakes",
    description: "Polishing furniture seems straightforward, but a few common mistakes can ruin the finish, leaving it dull, sticky, or even damaged...",
    keywords: "furniture polish, wood polish, mumbai, common, polishing, mistakes",
    category: "Furniture Care",
    author: "A1 Furniture Polish Team",
    date: "09/01/2026",
    readTime: "4 min read",
    image: "/Luxe assets/Single chair.webp"
  },
  {
    slug: "how-to-maintain-wooden-furniture",
    title: "How To Maintain Wooden Furniture",
    description: "Your wooden furniture brings timeless elegance to your Mumbai home. But the city's unique climate—with its high humidity and persistent dust—can be tough on it...",
    keywords: "furniture polish, wood polish, mumbai, how, to, maintain",
    category: "Furniture Care",
    author: "A1 Furniture Polish Team",
    date: "09/01/2026",
    readTime: "5 min read",
    image: "/Luxe assets/Two seater sofa.webp"
  }
];

// Content mapping for better reliability
const contentMap: Record<string, () => Promise<any>> = {
  "10-powerful-reasons-why-choose-a1-furniture-polish-for-wooden-furniture-in-goregaon": () => import('./assets/10-powerful-reasons-why-choose-a1-furniture-polish-for-wooden-furniture-in-goregaon.js'),
  "a1-furniture-polish-pricing-services-in-bandra-complete-guide-2025": () => import('./assets/a1-furniture-polish-pricing-services-in-bandra-complete-guide-2025.js'),
  "best-wood-polishing-in-andheri-restore-shine-with-a1-furniture-polish": () => import('./assets/best-wood-polishing-in-andheri-restore-shine-with-a1-furniture-polish.js'),
  "professional-furniture-polishing-services-in-jogeshwari-a1-furniture-polish": () => import('./assets/professional-furniture-polishing-services-in-jogeshwari-a1-furniture-polish.js'),
  "step-by-step-furniture-polishing-guide-for-mumbai-homes": () => import('./assets/step-by-step-furniture-polishing-guide-for-mumbai-homes.js'),
  "top-furniture-polish-services-in-mumbai-enhance-your-home-d-cor": () => import('./assets/top-furniture-polish-services-in-mumbai-enhance-your-home-d-cor.js'),
  "wood-polishing-cost-in-mumbai": () => import('./assets/wood-polishing-cost-in-mumbai.js'),
  "choosing-the-right-wood-polish": () => import('./assets/choosing-the-right-wood-polish.js'),
  "common-polishing-mistakes": () => import('./assets/common-polishing-mistakes.js'),
  "how-to-maintain-wooden-furniture": () => import('./assets/how-to-maintain-wooden-furniture.js')
};

// Simple function to get blog content
export const getBlogContent = async (slug: string): Promise<string> => {
  try {
    const contentLoader = contentMap[slug];
    if (contentLoader) {
      const module = await contentLoader();
      return module.default;
    } else {
      console.warn(`No content loader found for slug: ${slug}`);
      return '<p>Content not available for this article.</p>';
    }
  } catch (error) {
    console.error(`Failed to load content for ${slug}:`, error);
    return '<p>Content could not be loaded. Please try again later.</p>';
  }
};

export const blogConfig = {
  postsPerPage: 9,
  featuredPostsLimit: 2
};