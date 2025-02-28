// src/App.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';
import Header from './components/Header';
import Home from './components/Home';
import Potter from './components/Potter';
import Dnote from './components/Dnote';
import './App.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const location = useLocation(); // Get the current route
  const [showConfetti, setShowConfetti] = useState(location.pathname === "/");

  useEffect(() => {
    if (location.pathname === "/") {
      setShowConfetti(true);
      // setTimeout(() => setShowConfetti(false), 3000); // Stop confetti after 3 sec
    } else {
      setShowConfetti(false);
    }
  }, [location.pathname]); // Runs when route changes

  return (
    <div className="App">
      <Header />
      {showConfetti && <Confetti />}
      <Routes>
        <Route path="/" element={<Home setShowConfetti={setShowConfetti}></Home>} />
        <Route path="/Potter" element={<Potter />} />
        <Route path="/Dnote" element={<Dnote />} />
      </Routes>
    </div>
  );
};

export default App;
