import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Close menu on link click (for mobile)
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/profile" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
          Profile
        </NavLink>
        <NavLink to="/skills" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
          Skills
        </NavLink>
        <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
          Projects
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
