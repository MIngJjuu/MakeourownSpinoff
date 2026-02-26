import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/makeurownspinoff?igsh=MThybXJtcTgwdW9ycw==', '_blank');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* 로고 */}
        <div className="navbar-left">
          <Link to="/" className="main-logo">
            <img src="/images/logo.png" alt="Spinoff Logo" />
          </Link>
        </div>

        {/* 데스크톱 메뉴 */}
        <div className="menu desktop-menu">
          <Link to="/about" className="menu-item">About Us</Link>
          <Link to="/gathering" className="menu-item">Gathering</Link>
          <Link to="/apply" className="menu-item">Apply</Link>
        </div>

        {/* 인스타그램 */}
        <div className="navbar-right">
          <div className="instagram-link desktop-only">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              onClick={handleInstagramClick}
            />
          </div>
          {/* 햄버거 버튼 */}
          <button className="hamburger-btn mobile-only" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* 모바일 메뉴 */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/AboutUs" className="mobile-menu-item" onClick={closeMenu}>About Us</Link>
        <Link to="/Gathering" className="mobile-menu-item" onClick={closeMenu}>Gathering</Link>
        <Link to="/Apply" className="mobile-menu-item" onClick={closeMenu}>Apply</Link>
      </div>

      {/* 오버레이 */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;