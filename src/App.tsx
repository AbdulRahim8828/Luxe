import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/contact';
import BlogPostPage from './pages/BlogPostPage';
import BlogListPage from './pages/BlogListPage';
import WoodenFurniturePolish from './pages/WoodenFurniturePolish';
import SofaAndChairPolishing from './pages/SofaAndChairPolishing';
import TableAndBedPolishing from './pages/TableAndBedPolishing';
import AntiqueRestoration from './pages/AntiqueRestoration';
import CommercialPolishing from './pages/CommercialPolishing';
import ScrollToTop from './components/ScrollToTop';
import BottomNav from './components/BottomNav';
import SofaFabricChange from './pages/SofaFabricChange';
import OfficeChairRepair from './pages/OfficeChairRepair';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-gray-50">
        <Header />
        <main className="flex-grow pb-16 md:pb-0">
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

          </Routes>
        </main>
        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
