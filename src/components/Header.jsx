import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@mui/material"; // Import MUI components
import './header.css';

export default function Header({ isNightMode, toggleNightMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={`header ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <div className="header-left">
        <h1 className="portfolio-name">PORTFOLIO</h1>
        <IconButton onClick={toggleNightMode} color="inherit">
          <FontAwesomeIcon  className="faicon" icon={isNightMode ? faSun : faMoon} /> {/* Toggle between Sun and Moon icon */}
        </IconButton>
      </div>

      <div className="header-right">
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            <li className="effect"><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className="effect"><Link to="education" smooth={true} duration={500}>Education & Experience</Link></li>
            <li className="effect"><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className="effect"><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li className="effect"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <IconButton
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          color="inherit"
        >
          <FontAwesomeIcon icon={faEllipsisV} />
        </IconButton>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
            <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
              <span
                className="mobile-nav-close"
                onClick={() => setIsMenuOpen(false)}
              >
                &times;
              </span>
              <ul>
                <li><Link to="home" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>About</Link></li>
                <li><Link to="education" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Education & Experience</Link></li>
                <li><Link to="skills" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
                <li><Link to="projects" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
