import React from "react";
import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-nav">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo-placeholder">LL</div>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Reservations</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>123 Main Street, Chicago</p>
          <p>(312) 555-1234</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Little Lemon. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
