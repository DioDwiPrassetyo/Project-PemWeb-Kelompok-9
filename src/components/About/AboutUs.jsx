import React from "react";
import Bg from "../../assets/bg/bg1.jpg";
import { Link } from 'react-router-dom';

export default function About() {
  const restaurantInfo = {
    name: "BIMBIMBOX",
    tagline: "RESTAURANT",
    title: "About Us.",
    paragraphs: [
      "Bimbimbox is an authentic Korean restaurant that serves the taste of South Korea with a modern touch. We present a delicious culinary experience through various dishes such as bulgogi, bibimbap, tteokbokki, and many more.",
      "With quality ingredients and a warm restaurant atmosphere, we are committed to providing the best service for every visitor. Enjoy the Korean atmosphere right from your dining table only at Bimbimbox Restaurant.",
    ],
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background image */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        alt="Restaurant background"
        src={Bg}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content container */}
      <div className="relative z-10 flex h-full w-full flex-col justify-center px-6 md:px-16">
        {/* Branding in top-right corner */}
        <div className="absolute right-12 top-10 text-right">
          <h2 className="text-5xl font-bold text-[#d3b485] tracking-wide">
            {restaurantInfo.name}
          </h2>
          <p className="text-xl text-white tracking-[.3em] mt-1">
            {restaurantInfo.tagline}
          </p>
        </div>

        {/* Main content - PARAGRAPH TIDAK DIUBAH */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-7xl font-bold mb-12">
            {restaurantInfo.title}
          </h1>
          {restaurantInfo.paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="text-white text-xl mb-8 leading-relaxed"
            >
              {para}
            </p>
          ))}

          {/* Decorative line */}
          <div className="w-32 h-1 bg-[#d3b485] my-6 mx-auto rounded-full"></div>

          {/* Additional description */}
          <p className="text-white text-lg mt-6 mb-10">
            Our passion is serving unforgettable dishes with a blend of tradition and modern flair. Come taste the experience!
          </p>

          {/* Centered Buttons - PERUBAHAN HANYA PADA TOMBOL VIEW MENU */}
          <div className="flex justify-center gap-6 mt-4">
            <Link to="/menu">
              <button className="rounded-full bg-[#d3b485] px-6 py-3 text-black font-semibold text-lg hover:bg-[#c1a46a] transition-all">
                View Menu
              </button>
            </Link>
            <Link to="/reservation"> 
              <button className="rounded-full border border-[#d3b485] px-6 py-3 text-[#d3b485] font-semibold text-lg hover:bg-[#d3b485] hover:text-black transition-all">
                Reserve Now
              </button>
            </Link>
          </div>
        </div>

        {/* Quote in bottom-right */}
        <div className="absolute bottom-10 right-12 text-right max-w-sm">
          <p className="text-[#d3b485] italic text-xl">
            “Good food is the foundation of genuine happiness.”
          </p>
          <span className="text-white text-sm mt-1 block">– Auguste Escoffier</span>
        </div>
      </div>
    </section>
  );
}