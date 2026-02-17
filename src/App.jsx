import React from 'react';
import './App.css';

function App() {
  const handleInstagramClick = () => {
    // 실제 인스타그램 링크로 변경해주세요
    window.open('https://www.instagram.com/your_spinoff_account', '_blank');
  };

  const handleNavigation = (page) => {
    console.log(`${page} 페이지로 이동`);
    // 실제 라우팅은 나중에 React Router로 구현
  };

  return (
    <div className="layout">
      {/* 상단 네비게이션 바 */}
      <nav className="navbar">
        {/* 메뉴 */}
        <div className="menu">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}
            className="menu-item"
          >
            About Us
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavigation('gathering'); }}
            className="menu-item"
          >
            Gathering
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavigation('apply'); }}
            className="menu-item"
          >
            Apply
          </a>
        </div>

        {/* 인스타그램 아이콘 */}
        <div className="instagram-link">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            onClick={handleInstagramClick}
          />
        </div>
      </nav>

      {/* 메인 영역 */}
      <main className="main">
        <h1 className="main-title">
          Make our<br />
          Own Spinoff!
        </h1>
      </main>
    </div>
  );
}

export default App;