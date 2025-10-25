import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ReservationPage from "./pages/Reservation";
import "./assets/styles/global.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reservations" element={<ReservationPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
