import { Link } from 'react-router-dom';
import { BlogPost } from '../blog/types';
import OptimizedImage from '../../src/components/OptimizedImage';

interface BlogCardProps {
  post: BlogPost;
  showTags?: boolean;
  showExcerpt?: boolean;
}

const BlogCard = ({ post, showTags = false, showExcerpt = false }: BlogCardProps) => {
  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="group block bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10"
    >
      <div className="relative overflow-hidden">
        <OptimizedImage
          src={post.image}
          alt={post.title}
          width={400}
          height={240}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 bg-yellow-500/90 backdrop-blur-sm text-black text-xs font-semibold rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col justify-between">
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
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2" style={{ fontFamily: 'Playfair Display' }}>
            {post.title}
          </h3>
          
          {/* Description/Excerpt */}
          {showExcerpt && (
            <p className="text-sm text-gray-300 mb-4 line-clamp-3">
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