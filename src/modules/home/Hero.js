import React from "react";
import "../../assets/styles/Hero.css";
import { heroImage } from "../../assets/constants/listImage";
import { useNavigate } from "react-router-dom";


function Hero() {
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate("/reservations");
  };
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button onClick={handleReservation} className="btn-primary">Reserve a table</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Restorant" className="hero-image"/>
      </div>
    </section>
  );
}

export default Hero;
