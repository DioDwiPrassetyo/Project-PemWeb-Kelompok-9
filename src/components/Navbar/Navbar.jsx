import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { MdTableRestaurant } from 'react-icons/md';

const Navbar = ({ onScrollToAbout, onScrollToTestimonial }) => {
  const location = useLocation();

  const handleAboutClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      onScrollToAbout();
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTestimonialClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      onScrollToTestimonial();
      document.getElementById('testimonial')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-50 shadow-md bg-[#393E46] dark:bg-gray-900 dark:text-white duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-10 filter brightness-200" />
          </Link>
          <ul className="hidden sm:flex items-center gap-4">
            <li>
              <Link to="/" className="inline-block py-3 px-3 text-white hover:text-primary">Home</Link>
            </li>
            <li>
              <Link to="/menu" className="inline-block py-3 px-3 text-white hover:text-primary">Menu</Link>
            </li>
            <li>
              <Link 
                to="#about" 
                onClick={handleAboutClick}
                className="inline-block py-3 px-3 text-white hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="inline-block py-3 px-3 text-white hover:text-primary">Contact</Link>
            </li>
            <li>
              <Link 
                to="#testimonial" 
                onClick={handleTestimonialClick}
                className="inline-block py-3 px-3 text-white hover:text-primary"
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="/reservation">
                <button className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full shadow hover:opacity-90 duration-300 transition-all">
                  Reservation <MdTableRestaurant className='inline-block ml-2' />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;