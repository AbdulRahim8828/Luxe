import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { blogPosts, getBlogContent } from '../blog/data';
import { BlogPost as BlogPostType } from '../blog/types';
import SEOHead from '../components/SEOHead';
import OptimizedImage from '../components/OptimizedImage';
import { getCanonicalURL } from '../utils/canonicalURL';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const foundPost = blogPosts.find(p => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      
      // Load content
      getBlogContent(slug).then(htmlContent => {
        setContent(htmlContent);
        setLoading(false);
      }).catch(() => {
        setContent('<p>Content not available</p>');
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-6">📝</div>
          <h1 className="text-2xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-300 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.description}
        canonical={getCanonicalURL(`/blog/${post.slug}`)}
        image={post.image}
      />
      <div className="bg-black min-h-screen">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <OptimizedImage
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          {/* Back Button */}
          <div className="absolute top-8 left-8 z-10">
            <Link 
              to="/blog"
              className="inline-flex items-center px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-xl hover:bg-black/70 transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
          
          {/* Article Info */}
          <div className="absolute bottom-8 left-8 right-8 z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-3 py-1 bg-yellow-500/90 text-black text-sm font-semibold rounded-full mb-4">
                {post.category}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div 
            className="prose prose-lg prose-invert max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-yellow-400 prose-a:no-underline hover:prose-a:text-yellow-300
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:text-gray-300 prose-ol:text-gray-300
              prose-li:text-gray-300 prose-li:leading-relaxed
              prose-blockquote:border-l-yellow-500 prose-blockquote:bg-gray-800/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
              prose-code:text-yellow-400 prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        {/* Related Articles */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: 'Playfair Display' }}>
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts
              .filter(p => p.slug !== post.slug && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group block bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">{relatedPost.readTime}</p>
                    <div className="flex items-center text-yellow-400 font-medium text-sm">
                      <span>Read Article</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;