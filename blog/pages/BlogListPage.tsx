import { useState } from 'react';
import { blogPosts } from '../data/blogPosts';
import SEO from '../../src/components/SEO';
import BlogCard from '../components/BlogCard';
import { getCanonicalURL } from '../../src/utils/canonicalURL';
import { BlogPostData } from '../types';


const BlogListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // All posts (no filtering) - cast to include optional content
  const filteredPosts = blogPosts as (Omit<BlogPostData, 'content'> & { content?: string })[];

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Featured posts
  const featuredPosts = (blogPosts as (Omit<BlogPostData, 'content'> & { content?: string })[]).filter(post => post.featured).slice(0, 2);

  return (
    <>
      <SEO
        title="LUXE Premium Blog | Luxury Furniture Care & Restoration Insights"
        description="Discover expert insights on luxury furniture care, premium polishing techniques, and restoration guides from LUXE's master craftsmen to keep your premium furniture looking magnificent."
        canonical={getCanonicalURL('/blog')}
      />
      <div className="bg-black min-h-screen py-8 md:py-10 relative overflow-hidden">
        {/* Luxury Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-16 w-48 h-48 bg-gradient-to-br from-yellow-600/20 to-yellow-800/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-16 right-16 w-64 h-64 bg-gradient-to-br from-yellow-700/15 to-yellow-900/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 border border-yellow-600/30 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-yellow-400 text-xs font-medium tracking-wider uppercase">Premium Insights</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
              Luxury Furniture Care <span className="text-yellow-400 luxe-shimmer">Insights</span>
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Expert advice, premium techniques, and exclusive guides on luxury furniture care, restoration, and preservation from LUXE's master craftsmen.
            </p>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-8 sm:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center lg:text-left" style={{ fontFamily: 'Playfair Display' }}>
                <span className="text-yellow-400">⭐</span> Featured Premium Articles
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {featuredPosts.map((post) => (
                  <BlogCard 
                    key={post.slug} 
                    post={post} 
                    variant="featured"
                    showTags={true}
                    showExcerpt={true}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Results Summary */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-4 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <p className="text-sm text-gray-300">
                Showing <span className="font-semibold text-yellow-400">{paginatedPosts.length}</span> of <span className="font-semibold text-yellow-400">{filteredPosts.length}</span> premium articles
              </p>
              {totalPages > 1 && (
                <p className="text-xs text-gray-400">
                  Page {currentPage} of {totalPages}
                </p>
              )}
            </div>
          </div>

          {/* Blog Posts Grid */}
          {paginatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
              {paginatedPosts.map((post) => (
                <BlogCard 
                  key={post.slug} 
                  post={post} 
                  showTags={true}
                  showExcerpt={true}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-20">
              <div className="max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-3xl hover:border-yellow-500/30 transition-all duration-300">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-white mb-3">No Premium Articles Available</h3>
                <p className="text-sm text-gray-300">
                  We're crafting exclusive articles about luxury furniture care and premium restoration techniques.
                </p>
              </div>
            </div>
          )}

          {/* Luxury Pagination */}
          {totalPages > 1 && (
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 sm:p-8 shadow-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="flex flex-col items-center gap-6">
                
                {/* Page Info */}
                <div className="text-center">
                  <p className="text-sm text-gray-300 mb-3">
                    Showing page <span className="font-semibold text-yellow-400">{currentPage}</span> of <span className="font-semibold text-yellow-400">{totalPages}</span>
                  </p>
                  <div className="w-full bg-gray-700 rounded-full h-2 max-w-xs mx-auto">
                    <div 
                      className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full transition-all duration-300 shadow-lg"
                      style={{ width: `${(currentPage / totalPages) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-wrap justify-center items-center gap-2">
                  
                  {/* Previous Button */}
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                      currentPage === 1
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:text-yellow-400 hover:shadow-lg hover:border-yellow-500/30 active:scale-95'
                    }`}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1 sm:gap-2">
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let page;
                      if (totalPages <= 5) {
                        page = i + 1;
                      } else if (currentPage <= 3) {
                        page = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        page = totalPages - 4 + i;
                      } else {
                        page = currentPage - 2 + i;
                      }
                      
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl font-semibold transition-all duration-300 text-sm ${
                            currentPage === page
                              ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-2xl transform scale-110 hover:shadow-yellow-500/25'
                              : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:text-yellow-400 hover:shadow-lg hover:border-yellow-500/30 active:scale-95'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                    
                    {/* Show ellipsis and last page if needed */}
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <>
                        <span className="px-2 text-gray-500">...</span>
                        <button
                          onClick={() => setCurrentPage(totalPages)}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl font-semibold bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:text-yellow-400 hover:shadow-lg hover:border-yellow-500/30 transition-all duration-300 active:scale-95 text-sm"
                        >
                          {totalPages}
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Next Button */}
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                      currentPage === totalPages
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:text-yellow-400 hover:shadow-lg hover:border-yellow-500/30 active:scale-95'
                    }`}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Quick Jump (for many pages) */}
                {totalPages > 10 && (
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-300">Jump to page:</span>
                    <select
                      value={currentPage}
                      onChange={(e) => setCurrentPage(Number(e.target.value))}
                      className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 text-sm hover:border-yellow-500/30"
                    >
                      {Array.from({ length: totalPages }, (_, i) => (
                        <option key={i + 1} value={i + 1} className="bg-gray-800">
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default BlogListPage;