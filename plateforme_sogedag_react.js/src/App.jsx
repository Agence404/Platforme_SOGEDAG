import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Catalogue from './pages/Catalogue';
import Multimedia from './pages/Multimedia';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ProductCategory from './pages/ProductCategory';
import ProductDetail from './pages/ProductDetail';
import Recherche from './pages/Recherche';
import ResearchDetail from './pages/ResearchDetail';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/catalogue/:slug" element={<ProductCategory />} />
        <Route path="/produits/:categorySlug/:productSlug" element={<ProductDetail />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/recherche/:slug" element={<ResearchDetail />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;