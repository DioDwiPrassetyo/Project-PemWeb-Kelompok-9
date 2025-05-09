import React from 'react';
import Logo from '../../assets/logo.png';
import { MdTableRestaurant } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 shadow-md bg-[#393E46] dark:bg-gray-900 dark:text-white duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <a href="#">
            <img src={Logo} alt="Logo" className="w-10 filter brightness-200" />
          </a>
          <ul className="hidden sm:flex items-center gap-4">
            <li>
              <a href="#" className="inline-block py-3 px-3 text-white hover:text-primary">Home</a>
            </li>
            <li>
              <a href="#" className="inline-block py-3 px-3 text-white hover:text-primary">Menu</a>
            </li>
            <li>
              <a href="#" className="inline-block py-3 px-3 text-white hover:text-primary">About</a>
            </li>
            <li>
              <a href="#" className="inline-block py-3 px-3 text-white hover:text-primary">Contact</a>
            </li>
            <li>
              <a href="#" className="inline-block py-3 px-3 text-white hover:text-primary">Testimonial</a>
            </li>
            <li>
              <button className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full shadow hover:opacity-90 duration-300 transition-all">
                Reservation <MdTableRestaurant className='inline-block ml-2' />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
