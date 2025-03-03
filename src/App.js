// src/App.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';
import Header from './components/Header';
import Home from './components/Home';
import DynamicPage from './components/DynamicPage';
import LoadingScreen from './components/LoadingScreen';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import EndingPage from './components/EndingPage';

const App = () => {
  const location = useLocation(); // Get the current route
  const [showConfetti, setShowConfetti] = useState(location.pathname === "/");
  const [pickedOptions, setPickedOptions] = useState([]); // Track user's path
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [targetPage, setTargetPage] = useState(null);


  useEffect(() => {
    if (location.pathname === "/") {
      setShowConfetti(true);
      // setTimeout(() => setShowConfetti(false), 3000); // Stop confetti after 3 sec
    } else {
      setShowConfetti(false);
    }
  }, [location.pathname]); // Runs when route changes

  const handleNavigate = (selected) => {
    console.log("Selected option:", selected); 
    
    if (!selected) {
      console.error("Navigation error: selected option is undefined");
      return;
    }
  
    setIsLoading(true);
    setTargetPage(selected); // Uncomment this line
    
    // Update pickedOptions first
    setPickedOptions((prev) => [...prev, selected]);
    
    // Use setTimeout to simulate loading and navigate after 3 seconds
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/${selected}`); // Navigate with the correct value
    }, 3000);
  };

  return (
    <div className="App">
      <Header />
      {showConfetti && <Confetti />}
      {/* <Routes>
        <Route path="/" element={<Home setShowConfetti={setShowConfetti}></Home>} />
        <Route path="/Potter" element={<Potter />} />
        <Route path="/Dnote" element={<Dnote />} />
      </Routes> */}
      {isLoading ? (
        <LoadingScreen targetPage={targetPage}/>
      ) : (
        <Routes>
          <Route path="/" element={<Home setShowConfetti={setShowConfetti} onPick={handleNavigate} />} />
          <Route path="/ending" element={<EndingPage />} />
          {/* <Route path="/H" element={<Potter selected="H" pickedOptions={pickedOptions} onPick={handleNavigate} />} />
          <Route path="/D" element={<Dnote selected="D" pickedOptions={pickedOptions} onPick={handleNavigate} />} />
          <Route path="/U" element={<Uia selected="U" pickedOptions={pickedOptions} onPick={handleNavigate} />} />
          <Route path="/V" element={<Vicky selected="V" pickedOptions={pickedOptions} onPick={handleNavigate} />} />
          <Route path="/M" element={<Mii selected="M" pickedOptions={pickedOptions} onPick={handleNavigate} />} />
          <Route path="/T" element={<Tangled selected="T" pickedOptions={pickedOptions} onPick={handleNavigate} />} /> */}
          <Route path="/:selection" element={<DynamicPage pickedOptions={pickedOptions} onPick={handleNavigate} />} />

        </Routes>

      )}
    </div>
  );
};

export default App;
