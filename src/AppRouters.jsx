// src/AppRouters.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MenuPage from "./pages/MenuPage";

function AppRouters() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouters;
