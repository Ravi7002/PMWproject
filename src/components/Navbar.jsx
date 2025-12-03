import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <div className="logo">
          <span className="logo-icon">✦</span>
          <span className="logo-text">Lumina</span>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link active">Blog</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Newsletter</a>
        </div>
        <button className="cta-button">Subscribe</button>
      </div>
    </nav>
  );
};

export default Navbar;
