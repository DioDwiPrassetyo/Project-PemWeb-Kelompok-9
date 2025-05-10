import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals"; // Tambahkan ini

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Panggil reportWebVitals (opsional, biasanya untuk analisis performa)
reportWebVitals(console.log);
