import React from "react";
import "../../assets/styles/About.css";
import { aboutLarge, aboutSmall } from "../../assets/constants/listImage";


function About() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Little Lemon</h2>
          <h3>Tradition & Taste</h3>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant that blends
            traditional recipes with a modern touch. Our chefs use the freshest
            ingredients to create dishes that celebrate the vibrant flavors of
            the Mediterranean — from olive oil and herbs to citrus and seafood.
          </p>
          <p>
            Founded in Chicago, Little Lemon offers a cozy and welcoming
            atmosphere that makes every meal special. Whether you’re here for a
            casual lunch or a romantic dinner, we serve every guest with warmth
            and passion.
          </p>
        </div>

        <div className="about-images">
          <div className="img-large">
            <img src={aboutLarge} alt="Mediterranean restaurant" />
          </div>
          <div className="img-small">
            <img src={aboutSmall} alt="Fresh ingredients" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
