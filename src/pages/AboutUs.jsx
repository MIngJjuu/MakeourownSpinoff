import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

function AboutUs() {
  return (
    <div className="layout">
      <Navbar />
      
      <main className="main">
        <h1>About Us</h1>
        {/* 여기에 About Us 내용 추가 */}
      </main>
    </div>
  );
}

export default AboutUs;