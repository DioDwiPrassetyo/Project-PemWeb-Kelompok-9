import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-2 w-[auto] h-[100px] flex items-center justify-center px-28">
      <div className="flex items-center space-x-20">
        {/* Menu Kiri (Spacing Sedikit Dikecilkan) */}
        <div className="flex space-x-14 text-[24px] font-[Poppins]">
          <a href="home" className="hover:text-yellow-500">
            Home
          </a>
          <a href="menu" className="hover:text-yellow-500">
            Menu
          </a>
          <a href="about" className="hover:text-yellow-500">
            About Us
          </a>
        </div>

        {/* Logo Tengah - Geser ke kiri */}
        <div className="flex flex-col items-center relative left-[-15px]">
          <span className="text-[42px] font-[Piazzolla] text-yellow-500">
            BIMBIMBOX
          </span>
          <span className="text-[24px] font-[Petrona] relative bottom-[6px]">
            RESTAURANT
          </span>
        </div>

        {/* Menu Kanan - Geser ke kiri */}
        <div className="flex space-x-14 text-[24px] font-[Poppins] relative left-[-14px]">
          <a href="reservation" className="hover:text-yellow-500">
            Reservation
          </a>
          <a href="contact" className="hover:text-yellow-500">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
