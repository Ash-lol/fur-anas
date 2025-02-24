// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <h1>
      Pranay
      <img src={`${process.env.PUBLIC_URL}/storage/bihrtday.jpg`} alt="Birthday" className="inline-image" />
      Signature
    </h1>
    <p>Where humor meets tech!</p>
  </header>
);

export default Header;
