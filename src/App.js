// src/App.js
import React, { useState } from 'react';
import Confetti from 'react-confetti';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Jokes from './components/Jokes';
import About from './components/About';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'jokes':
        return <Jokes />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Confetti />
    </div>
  );
};

export default App;
