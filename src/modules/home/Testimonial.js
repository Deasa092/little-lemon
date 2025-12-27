import React from "react";
import "../../assets/styles/Testimonial.css";
import { listTestimonials } from "../../assets/constants/listTestimonials";

function Testimonial() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Customers Say</h2>

      <div className="testimonials-grid">
        {listTestimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <div className="rating">
              {"⭐".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
            </div>
            <div className="avatar">
              <img src={item.avatar} alt={item.name} />
            </div>
            <p className="name">{item.name}</p>
            <p className="quote">“{item.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
