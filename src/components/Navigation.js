// src/components/Navigation.js
import React from 'react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav>
      <button onClick={() => handleNavClick('home')}>Home</button>
      <button onClick={() => handleNavClick('jokes')}>Jokes</button>
      <button onClick={() => handleNavClick('about')}>About</button>
    </nav>
  );
};

export default Navigation;
