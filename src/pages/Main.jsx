import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Main() {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/your_spinoff_account', '_blank');
  };

  return (
    <div className="layout">
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

      <main className="main">
        <h1 className="main-title">
          Make our<br />
          Own Spinoff!
        </h1>
      </main>
    </div>
  );
}

export default Main;