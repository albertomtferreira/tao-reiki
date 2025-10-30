import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">TaoReiki</h3>
            <p className="footer-description">
              Certified Reiki Practitioner dedicated to helping you find balance,
              peace, and wellness through ancient healing practices.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => scrollToSection('home')}>
                  <i className="fas fa-chevron-right"></i> Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')}>
                  <i className="fas fa-chevron-right"></i> My Journey
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reiki')}>
                  <i className="fas fa-chevron-right"></i> What is Reiki
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('blog')}>
                  <i className="fas fa-chevron-right"></i> Blog
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('booking')}>
                  <i className="fas fa-chevron-right"></i> Book a Session
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@taoreiki.com">info@taoreiki.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Your Location</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Session Hours</h4>
            <ul className="hours-info">
              <li>
                <span className="day">Monday - Friday:</span>
                <span className="time">10:00 AM - 7:00 PM</span>
              </li>
              <li>
                <span className="day">Saturday:</span>
                <span className="time">11:00 AM - 5:00 PM</span>
              </li>
              <li>
                <span className="day">Sunday:</span>
                <span className="time">By Appointment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TaoReiki. All rights reserved.</p>
          <p className="footer-note">
            Reiki is a complementary therapy and not a substitute for medical treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
