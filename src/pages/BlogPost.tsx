import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Phone, MessageCircle, ArrowUpCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SEOHead from '../../src/components/SEOHead';
import { blogPosts, fetchBlogPostContent } from '../../blog/data/blogPosts';
import { BlogPostData } from '../types';
import OptimizedImage from '../../src/components/OptimizedImage';
import { COMMON_SIZES } from '../../src/utils/imageHelpers';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const getPostContent = async () => {
      setIsLoading(true);
      try {
        const postData = blogPosts.find((p: any) => p.slug === slug);
        if (postData) {
          const content = await fetchBlogPostContent(slug || '');
          setPost({ ...postData, content });
        }
      } catch (error) {
        // Error loading blog post - silently fail in production
        setPost(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      getPostContent();
    }
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const postIndex = blogPosts.findIndex((p: any) => p.slug === slug);
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <>
      <SEOHead 
        title={post.title} 
        description={post.description} 
        keywords={post.keywords} 
        ogUrl={`https://luxewoodenfurniturepolishing.com/blog/${slug}`}
      />
      <div className="bg-white py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-xs text-gray-500 mb-3">
            <Link to="/" className="hover:text-amber-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-amber-600">Blogs</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 truncate w-64">{post.title}</span>
          </div>

          <div className="w-full mb-4 md:mb-6 rounded-lg overflow-hidden">
            <OptimizedImage 
              src={post.image} 
              alt={post.title} 
              width={1920} 
              height={1080} 
              className="w-full" 
              sizes={COMMON_SIZES.fullWidth}
              objectFit="cover"
            />
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-3 mb-6 text-gray-500 text-sm">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">{post.author}</span>
            </div>
            <span className="hidden md:block">|</span>
            <div className="flex items-center space-x-2">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <span className="hidden md:block">|</span>
            <div className="flex items-center space-x-2">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <main>
            <div className="prose prose-base max-w-none prose-p:mb-4 prose-headings:text-gray-800 prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl prose-a:text-amber-600 hover:prose-a:text-amber-800 overflow-x-auto">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
              </ReactMarkdown>
            </div>
          </main>

          <section className="text-center py-8 mt-8 border-t">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Restore Your Furniture?</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto mb-6">
              Contact us today for a free consultation and let our experts bring back the shine to your beloved furniture.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+918828709945"
                className="flex items-center justify-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold w-full sm:w-auto text-sm"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/918828709945"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold w-full sm:w-auto text-sm"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </section>

          <div className="flex justify-between items-center mt-6 pt-4 border-t">
            {prevPost ? (
              <Link to={`/blog/${prevPost.slug}`} className="text-amber-600 hover:text-amber-800 font-semibold text-left text-sm">
                <span className="block text-xs text-gray-500">Previous</span>
                &larr; {prevPost.title}
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link to={`/blog/${nextPost.slug}`} className="text-amber-600 hover:text-amber-800 font-semibold text-right text-sm">
                <span className="block text-xs text-gray-500">Next</span>
                {nextPost.title} &rarr;
              </Link>
            ) : (
              <div />
            )}
          </div>

        </div>
      </div>

      {showGoToTop && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 bg-amber-600 text-white p-2 rounded-full shadow-lg hover:bg-amber-700 transition-all duration-300 z-50"
          aria-label="Go to top"
        >
          <ArrowUpCircle size={24} />
        </button>
      )}
    </>
  );
};

export default BlogPost;
