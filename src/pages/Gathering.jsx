import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

function Gathering() {
  return (
    <div className="layout">
      <Navbar />
      
      <main className="main">
        <h1>Gathering</h1>
        {/* 여기에 Gathering 내용 추가 */}
      </main>
    </div>
  );
}

export default Gathering;