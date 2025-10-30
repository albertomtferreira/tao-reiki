import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to TaoReiki</h1>
        <p className="hero-subtitle">
          Experience the healing power of Reiki
        </p>
        <p className="hero-description">
          Certified Reiki Practitioner dedicated to helping you find balance, peace, and wellness through ancient healing practices
        </p>
        <button className="hero-button" onClick={scrollToBooking}>
          Book Your Session
        </button>
      </div>
    </section>
  );
};

export default Hero;
