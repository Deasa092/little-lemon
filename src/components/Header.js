import React, { useState } from "react";
import logo from "../assets/images/logo.jpg";
import "../assets/styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <img className="logo" src={logo} alt="Little Lemon Logo" />

        {/* Hamburger Icon */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={() => setMenuOpen(false)}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" onClick={() => setMenuOpen(false)}>
                Reservations
              </Link>
            </li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
