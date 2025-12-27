import React from "react";
import "../assets/styles/Footer.css";
import { logoShort } from "../assets/constants/listImage";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* logo */}
        <div className="footer-logo">
          <img
            src={logoShort}
            alt="Little Lemon Logo"
            className="logo-footer"
          />
        </div>

        {/* Doormat Navigation */}
        <div className="footer-nav">
          <h4>Doormat Navigation</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservation">Reservations</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>123 Lemon Street, Chicago</p>
          <p>(312) 555-1234</p>
          <p>info@littlelemon.com</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h4>Social Media Links</h4>

          <ul>
            <li>
              <a
                href="https://www.facebook.com/LittleLemonRestaurant"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/LittleLemonRestaurant"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/LittleLemon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-copy">© 2025 Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
