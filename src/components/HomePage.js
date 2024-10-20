// src/components/Home.js
import React from 'react';
import Sidebar from './Sidebar';
import '../styles/Home.css'; // Stil dosyası

const Home = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <div className="home-content">
        <h1>Welcome to the Dashboard</h1>
        <p>Select an option from the menu to get started.</p>
      </div>
    </div>
  );
};

export default Home;
