import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/form" className="navbar-link">
            Form
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/photo" className="navbar-link">
            Photos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
