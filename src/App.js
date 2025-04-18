import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import CoffinDisplay from './components/CoffinDisplay';
import Awards from './components/Awards';
import About from './components/About';
import Footer from './components/Footer';
import Customers from './components/Customers';
import Contact from './components/Contact';
import Pass from './components/Pass';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <PhotoGallery />
              <CoffinDisplay />
              <Awards />
              <About />
              <Footer />
            </>
          } />
          <Route path="/customers" element={<Customers />} />
          <Route path="/plans" element={<Pass />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
