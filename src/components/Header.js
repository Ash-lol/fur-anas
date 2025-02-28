// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <h1>
      Happy
      <img src={`${process.env.PUBLIC_URL}/storage/bihrtday.jpg`} alt="Birthday" className="inline-image" />
       Anastasia!!
    </h1>
    <p>WOOHOOOO! Wish you an amazing year ahead!</p>
  </header>
);

export default Header;
