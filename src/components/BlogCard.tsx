import { Link } from 'react-router-dom';
import { BlogPost } from '../blog/types';
import OptimizedImage from './OptimizedImage';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured';
  showTags?: boolean;
  showExcerpt?: boolean;
}

const BlogCard = ({ post, variant = 'default', showTags = false, showExcerpt = false }: BlogCardProps) => {
  const isFeatured = variant === 'featured';
  
  return (
    <Link 
      to={`/blog/${post.slug}`}
      className={`group block bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 ${
        isFeatured ? 'lg:flex lg:items-stretch' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${isFeatured ? 'lg:w-1/2 lg:min-h-[320px]' : ''}`}>
        <OptimizedImage
          src={post.image}
          alt={post.title}
          width={isFeatured ? 600 : 400}
          height={isFeatured ? 320 : 240}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            isFeatured ? 'h-64 lg:h-full' : 'h-48'
          }`}
          sizes={isFeatured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 bg-yellow-500/90 backdrop-blur-sm text-black text-xs font-semibold rounded-full">
            {post.category}
          </span>
        </div>
        
        {/* Featured Badge */}
        {post.featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-xs font-bold rounded-full">
              ⭐ Featured
            </span>
          </div>
        )}
      </div>
      
      <div className={`p-6 flex flex-col justify-between ${isFeatured ? 'lg:w-1/2 lg:p-8' : ''}`}>
        {/* Meta Info */}
        <div>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
          
          {/* Title */}
          <h3 className={`font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2 ${
            isFeatured ? 'text-xl lg:text-2xl' : 'text-lg'
          }`} style={{ fontFamily: 'Playfair Display' }}>
            {post.title}
          </h3>
          
          {/* Description/Excerpt */}
          {showExcerpt && (
            <p className={`text-gray-300 mb-4 line-clamp-3 ${
              isFeatured ? 'text-base' : 'text-sm'
            }`}>
              {post.description}
            </p>
          )}
          
          {/* Tags */}
          {showTags && post.keywords && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.keywords.split(', ').slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg"
                >
                  #{tag.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Read More */}
        <div className="flex items-center text-yellow-400 font-medium text-sm group-hover:text-yellow-300 transition-colors duration-300 mt-auto">
          <span>Read Article</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;