// src/components/LoadingScreen.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoadingScreen.css';

const LoadingScreen = ({ targetPage }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(`/${targetPage}`); // Redirect after 3 seconds
    }, 3000);
  }, [navigate, targetPage]);

  return (
    <div className="loading-screen">
      <h2>Loading...</h2>
      <div className="duck-container">
        <img src={`${process.env.PUBLIC_URL}/storage/duck.jpg`} alt="Duck 1" className="duck" />
      </div>
      <p className="you-btw">You btw</p>
    </div>
  );
};

export default LoadingScreen;
