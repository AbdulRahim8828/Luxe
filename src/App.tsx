import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/BlogListPage';
import BlogPost from './pages/BlogPostPage';
import Contact from './pages/contact';
import WoodenFurniturePolish from './pages/WoodenFurniturePolish';
import SofaAndChairPolishing from './pages/SofaAndChairPolishing';
import TableAndBedPolishing from './pages/TableAndBedPolishing';
import AntiqueRestoration from './pages/AntiqueRestoration';
import CommercialPolishing from './pages/CommercialPolishing';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wooden-furniture-polish" element={<WoodenFurniturePolish />} />
            <Route path="/sofa-chair-polishing" element={<SofaAndChairPolishing />} />
            <Route path="/table-bed-polishing" element={<TableAndBedPolishing />} />
            <Route path="/antique-restoration" element={<AntiqueRestoration />} />
            <Route path="/commercial-polishing" element={<CommercialPolishing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
