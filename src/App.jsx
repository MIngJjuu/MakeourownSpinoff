import React from 'react';
import { Instagram } from 'lucide-react';

function App() {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/makeurownspinoff?igsh=MThybXJtcTgwdW9ycw%3D%3D', '_blank');
  };

  const handleNavigation = (page) => {
    console.log(`${page} 페이지로 이동`);
    // 실제 라우팅은 나중에 React Router로 구현
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header / Navigation */}
      <header className="bg-black text-white py-4 px-6 flex items-center justify-between">
        {/* 왼쪽: 로고/홈 버튼 */}
        <div 
          onClick={() => handleNavigation('main')}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="bg-white text-black px-4 py-2 rounded-full font-bold text-lg">
            SPINOFF
          </div>
        </div>

        {/* 중앙: 네비게이션 메뉴 */}
        <nav className="flex gap-12 text-lg">
          <button 
            onClick={() => handleNavigation('about')}
            className="hover:text-gray-300 transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={() => handleNavigation('gathering')}
            className="hover:text-gray-300 transition-colors"
          >
            Gathering
          </button>
          <button 
            onClick={() => handleNavigation('apply')}
            className="hover:text-gray-300 transition-colors"
          >
            Apply
          </button>
        </nav>

        {/* 오른쪽: 인스타그램 아이콘 */}
        <button
          onClick={handleInstagramClick}
          className="hover:opacity-80 transition-opacity"
        >
          <Instagram size={32} className="text-pink-500" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-gray-800 text-center leading-tight">
          Make our<br />
          Own Spinoff!
        </h1>
      </main>
    </div>
  );
}

export default App;