import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import SEOHead from '../components/SEOHead';
import { Calendar, Clock } from 'lucide-react';
import { getCanonicalURL } from '../utils/canonicalURL';
import OptimizedImage from '../components/OptimizedImage';
import { COMMON_SIZES } from '../utils/imageHelpers';

const BlogListPage = () => {
  return (
    <>
      <SEOHead
        title="Blog | A1 Furniture Polish"
        description="Read our latest articles on furniture care, polishing tips, and restoration guides to keep your wooden furniture looking its best."
        canonical={getCanonicalURL('/blog')}
      />
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Blog</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Expert advice on furniture care, polishing, and restoration from the A1 Furniture Polish team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                <Link to={`/blog/${post.slug}`} className="block">
                  <OptimizedImage 
                    src={post.image} 
                    alt={post.title} 
                    width={640} 
                    height={480} 
                    className="w-full h-48" 
                    sizes={COMMON_SIZES.grid}
                    objectFit="cover"
                  />
                  <div className="p-6">
                    <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-amber-600 transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <span className="mx-2">|</span>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default BlogListPage;