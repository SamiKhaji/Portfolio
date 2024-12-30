import React, { useState } from "react";
import { Link } from "react-scroll";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="portfolio-name">PORTFOLIO</h1>
      </div>

      <div className="header-right">
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="education" smooth={true} duration={500}>Education & Experience</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(true)}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMenu}>
            <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
              <span className="mobile-nav-close" onClick={closeMenu}>&times;</span>
              <ul>
                <li><Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link></li>
                <li><Link to="education" smooth={true} duration={500} onClick={closeMenu}>Education & Experience</Link></li>
                <li><Link to="skills" smooth={true} duration={500} onClick={closeMenu}>Skills</Link></li>
                <li><Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
