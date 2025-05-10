import React, { useState } from "react";
import MenuCategory from "../../components/Our Menu/MenuCategory";
import MenuItemCard from "../../components/Our Menu/MenuItemCard";
import MenuBackground from "../../assets/bg/menubg.jpeg"

// Import semua gambar
import patbingsu from "../../assets/allmenu/patbingsu.jpg";
import kimbap from "../../assets/allmenu/kimbap.jpg";
import kimchi from "../../assets/allmenu/kimchi.jpg";
import bibimbap from "../../assets/allmenu/bibimbap.jpg";
import bulgogi from "../../assets/allmenu/bulgogi.jpg";
import jajangmyeon from "../../assets/allmenu/jajangmyeon.jpg";
import tteokbokki from "../../assets/allmenu/tteokbokki.jpg";
import tokbokki from "../../assets/allmenu/tokbokki.jpg";
import miyeokguk from "../../assets/allmenu/miyeokguk.jpg";
import haemultang from "../../assets/allmenu/haemultang.jpg";
import samgyetang from "../../assets/allmenu/samgyetang.jpg";
import dalgona from "../../assets/allmenu/dalgona.jpg";
import barleyTea from "../../assets/allmenu/barley_tea.jpg";
import soju from "../../assets/allmenu/soju.jpg";
import makgeolli from "../../assets/allmenu/makgeolli.jpg";
import omijaTea from "../../assets/allmenu/omija_tea.jpg";
import sikhye from "../../assets/allmenu/sikhye.jpg";
import sujeonggwa from "../../assets/allmenu/sujeonggwa.jpg";

const menuItems = {
  Dessert: [
    { name: "Patbingsu", price: "3.5$", image: patbingsu }, // Gunakan variabel yang di-import
  ],
  "Main Course": [
    { name: "Kimbap", price: "3.5$", image: kimbap },
    { name: "Kimchi", price: "3.5$", image: kimchi },
    { name: "Bibimbap", price: "3.5$", image: bibimbap },
    { name: "Bulgogi", price: "3.5$", image: bulgogi },
    { name: "Jajangmyeon", price: "3.5$", image: jajangmyeon },
    { name: "Tteokbokki", price: "3.5$", image: tteokbokki },
    { name: "Tokbokki", price: "3.5$", image: tokbokki },
    { name: "Miyeokguk", price: "3.5$", image: miyeokguk },
    { name: "Haemultang", price: "3.5$", image: haemultang },
    { name: "Samgyetang", price: "3.5$", image: samgyetang },
  ],
  Drink: [
    { name: "Dalgona", price: "2.25$", image: dalgona },
    { name: "Barley Tea", price: "2.25$", image: barleyTea },
    { name: "Soju", price: "2.25$", image: soju },
    { name: "Makgeolli", price: "2.25$", image: makgeolli },
    { name: "Omija Tea", price: "2.25$", image: omijaTea },
    { name: "Sikhye", price: "2.25$", image: sikhye },
    { name: "Sujeonggwa", price: "2.25$", image: sujeonggwa },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Main Course");

   return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${MenuBackground})`, // Menggunakan template literal
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-3xl font-bold mb-4 bg-orange-500 px-4 py-2 rounded-full">
        OUR MENU
      </h1>

      <MenuCategory
        categories={Object.keys(menuItems)}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="flex justify-center mt-4 flex-wrap gap-4">
        {menuItems[activeCategory].map((item, index) => (
          <MenuItemCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}