// Navbar.js

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Import file CSS untuk styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/popular" className="nav-link" activeClassName="active">
            Popular
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/top" className="nav-link" activeClassName="active">
            Top Rated
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
