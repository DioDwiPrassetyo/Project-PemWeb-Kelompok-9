// src/pages/MenuPage.jsx
import React, { useState } from "react";
import MenuCategory from "../components/MenuCategory";
import MenuItemCard from "../components/MenuItemCard";

const menuItems = {
  Dessert: [
    {
      name: "Patbingsu",
      price: "3.5$",
      image: "all_menu/patbingsu.jpg",
    },
  ],
  "Main Course": [
    { name: "Kimbap", price: "3.5$", image: "all_menu/kimbap.jpg" },
    { name: "Kimchi", price: "3.5$", image: "all_menu/kimchi.jpg" },
    { name: "Bibimbap", price: "3.5$", image: "all_menu/bibimbap.jpg" },
    { name: "Bulgogi", price: "3.5$", image: "all_menu/bulgogi.jpg" },
    {
      name: "Jajangmyeon",
      price: "3.5$",
      image: "all_menu/jajangmyeon.jpg",
    },
    {
      name: "Tteokbokki",
      price: "3.5$",
      image: "all_menu/tteokbokki.jpg",
    },
    { name: "Tokbokki", price: "3.5$", image: "all_menu/tokbokki.jpg" },
    {
      name: "Miyeokguk",
      price: "3.5$",
      image: "all_menu/miyeokguk.jpg",
    },
    {
      name: "Haemultang",
      price: "3.5$",
      image: "all_menu/haemultang.jpg",
    },
    {
      name: "Samgyetang",
      price: "3.5$",
      image: "all_menu/samgyetang.jpg",
    },
  ],
  Drink: [
    { name: "Dalgona", price: "2.25$", image: "all_menu/dalgona.jpg" },
    {
      name: "Barley Tea",
      price: "2.25$",
      image: "all_menu/barley_tea.jpg",
    },
    { name: "Soju", price: "2.25$", image: "all_menu/soju.jpg" },
    {
      name: "Makgeolli",
      price: "2.25$",
      image: "all_menu/makgeolli.jpg",
    },
    {
      name: "Omija Tea",
      price: "2.25$",
      image: "all_menu/omija_tea.jpg",
    },
    { name: "Sikhye", price: "2.25$", image: "all_menu/sikhye.jpg" },
    {
      name: "Sujeonggwa",
      price: "2.25$",
      image: "all_menu/sujeonggwa.jpg",
    },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Main Course");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('all_menu/menu-background.jpg')",
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
