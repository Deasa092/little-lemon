import React from "react";
import "../../assets/styles/About.css";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Little Lemon</h2>
          <h3>Tradition & Taste</h3>
          <p>
            We are a family-owned Mediterranean restaurant focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div className="about-images">
          <div className="img-large">Image Large</div>
          <div className="img-small">Image Small</div>
        </div>
      </div>
    </section>
  );
}

export default About;
