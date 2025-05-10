import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-2 w-full h-[100px] fixed top-0 left-0 z-50 flex items-center justify-center px-28 shadow-md">
      <div className="flex items-center space-x-20">
        
        {/* Menu Kiri */}
        <div className="flex space-x-14 text-[24px] font-[Poppins]">
          <a href="#home" className="hover:text-yellow-500">Home</a>
          <a href="#menu" className="hover:text-yellow-500">Menu</a>
          <a href="#about" className="hover:text-yellow-500">About Us</a>
        </div>

        {/* Logo Tengah */}
        <div className="flex flex-col items-center relative left-[-15px]"> 
          <span className="text-[42px] font-[Piazzolla] text-yellow-500">BIMBIMBOX</span>
          <span className="text-[24px] font-[Petrona] relative bottom-[6px]">RESTAURANT</span>
        </div>

        {/* Menu Kanan */}
        <div className="flex space-x-14 text-[24px] font-[Poppins] relative left-[-14px]">
          <a href="#reservation" className="hover:text-yellow-500">Reservation</a>
          <a href="#contact" className="hover:text-yellow-500">Contact Us</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
