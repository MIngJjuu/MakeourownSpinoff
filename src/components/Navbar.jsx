import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/makeurownspinoff?igsh=MThybXJtcTgwdW9ycw==', '_blank');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="main-logo">
          <img src="/images/logo.png" alt="Spinoff Logo" />
        </Link>
      </div>

      <div className="menu">
        <Link to="/about" className="menu-item">About Us</Link>
        <Link to="/gathering" className="menu-item">Gathering</Link>
        <Link to="/apply" className="menu-item">Apply</Link>
      </div>

      <div className="navbar-right">
        <div className="instagram-link">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            onClick={handleInstagramClick}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;