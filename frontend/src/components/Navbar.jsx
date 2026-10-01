import { useState } from "react";

import { Link } from "react-router-dom";

import logo from "../assets/webnest-logo.png";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="WebNest Logo" />
      </div>

        <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/*<div className="nav-links">*/}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
         <Link to="/services">Services</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>

       <Link to="/login">
            <button className="navbar-get-start">
              Login
            </button>
          </Link>
      </div>

    </nav>
  );
}

export default Navbar;