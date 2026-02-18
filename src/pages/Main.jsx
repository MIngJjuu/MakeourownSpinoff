import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

function Main() {
  return (
    <div className="layout">
      <Navbar />
      
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