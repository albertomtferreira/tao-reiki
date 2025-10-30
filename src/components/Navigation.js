import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          TaoReiki
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <button className="nav-link" onClick={() => scrollToSection('home')}>
            Home
          </button>
          <button className="nav-link" onClick={() => scrollToSection('about')}>
            My Journey
          </button>
          <button className="nav-link" onClick={() => scrollToSection('reiki')}>
            What is Reiki
          </button>
          <button className="nav-link" onClick={() => scrollToSection('blog')}>
            Blog
          </button>
          <button className="nav-link" onClick={() => scrollToSection('booking')}>
            Book a Session
          </button>
        </div>

        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
