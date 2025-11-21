import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import BottomNav from './components/BottomNav';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for better performance
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/contact'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const BlogListPage = lazy(() => import('./pages/BlogListPage'));
const WoodenFurniturePolish = lazy(() => import('./pages/WoodenFurniturePolish'));
const SofaAndChairPolishing = lazy(() => import('./pages/SofaAndChairPolishing'));
const TableAndBedPolishing = lazy(() => import('./pages/TableAndBedPolishing'));
const AntiqueRestoration = lazy(() => import('./pages/AntiqueRestoration'));
const CommercialPolishing = lazy(() => import('./pages/CommercialPolishing'));
const SofaFabricChange = lazy(() => import('./pages/SofaFabricChange'));
const OfficeChairRepair = lazy(() => import('./pages/OfficeChairRepair'));
const GoregaonFurniturePolish = lazy(() => import('./pages/GoregaonFurniturePolish'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen font-sans bg-white">
            <Header />
            <main className="flex-grow pb-20 md:pb-0 bg-white">
              <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              
              {/* Service Pages */}
              <Route path="/services/wooden-furniture-polish" element={<WoodenFurniturePolish />} />
              <Route path="/sofa-chair-polishing" element={<SofaAndChairPolishing />} />
              <Route path="/services/table-and-bed-polishing" element={<TableAndBedPolishing />} />
              <Route path="/services/antique-restoration" element={<AntiqueRestoration />} />
              <Route path="/services/commercial-polishing" element={<CommercialPolishing />} />
              <Route path="/sofa-fabric-change" element={<SofaFabricChange />} />
              <Route path="/office-chair-repair" element={<OfficeChairRepair />} />
              
              {/* Location Pages */}
              <Route path="/goregaon-furniture-polish" element={<GoregaonFurniturePolish />} />
              
              {/* Redirect old route to /services */}
              <Route path="/furniture-polish-services" element={<Navigate to="/services" replace />} />

              </Routes>
            </Suspense>
          </main>
          <Footer />
          <BottomNav />
        </div>
      </Router>
    </ErrorBoundary>
  </HelmetProvider>
  );
}

export default App;
