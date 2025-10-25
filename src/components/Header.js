import React, { useState } from "react";
import "../assets/styles/Header.css";
import { Link } from "react-router-dom";
import { logo } from "../assets/constants/listImage";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img className="logo" src={logo} alt="Little Lemon Logo" />
        </Link>
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
            <li>
              <Link to="/order-online" onClick={() => setMenuOpen(false)}>
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
