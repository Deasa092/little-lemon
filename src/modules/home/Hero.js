import React from "react";
import "../../assets/styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="btn-primary">Reserve a table</button>
      </div>
      <div className="hero-image">Image</div>
    </section>
  );
}

export default Hero;
