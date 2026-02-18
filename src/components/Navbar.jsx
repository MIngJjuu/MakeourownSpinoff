import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/your_spinoff_account', '_blank');
  };

  return (
    <nav className="navbar">
      <div className="menu">
        <Link to="/about" className="menu-item">About Us</Link>
        <Link to="/gathering" className="menu-item">Gathering</Link>
        <Link to="/apply" className="menu-item">Apply</Link>
      </div>

      <div className="instagram-link">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          onClick={handleInstagramClick}
        />
      </div>
    </nav>
  );
}

export default Navbar;