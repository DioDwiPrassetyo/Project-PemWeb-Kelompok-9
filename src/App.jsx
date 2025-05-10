import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import MenuPage from './components/Our Menu/MenuPage';
import About from './components/About/AboutUs';
import Testimonial from './components/Testimonial/Testimonial';
import Reservation from './components/Reservation/Reservation';
import ContactPage from './components/Contact/ContactPage';
import Footer from './components/Footer/Footer';

const HomeContent = () => {
  const aboutRef = useRef(null);
  const testimonialRef = useRef(null);

  const ScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const ScrollToTestimonial = () => {
    testimonialRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero />
      <Menu />
      <div ref={aboutRef} id="about">
        <About />
      </div>
      <div ref={testimonialRef} id="testimonial">
        <Testimonial />
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="bg-[#222831]">
        {/* Navbar muncul di semua halaman */}
        <Navbar 
          onScrollToAbout={() => window.location.hash = '#about'}
          onScrollToTestimonial={() => window.location.hash = '#testimonial'}
        />
        
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        {/* Footer muncul di semua halaman */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;