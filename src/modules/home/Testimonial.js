import React from "react";
import "../../assets/styles/Testimonial.css";

function Testimonial() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="testimonial-card">
            <p className="rating">⭐⭐⭐⭐☆</p>
            <div className="avatar"></div>
            <p className="name">Customer {i}</p>
            <p className="quote">"Excellent food and service!"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
