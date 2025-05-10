import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import ReservationForm from "./component/ReservationForm";
import Footer from "./component/Footer";
import "./index.css";

function ReservationContainer() {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start" style={{ backgroundImage: `url("/bg.png")` }}>
      <Navbar />
      <div className="mt-32">
        <ReservationForm />
      </div>
      <div className="mt-28">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
     <Routes>
  <Route path="/" element={<ReservationContainer />} />
</Routes>
    </Router>
  );
}

export default App;
