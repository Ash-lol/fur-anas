import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoadingScreen.css';

const duckImages = [
  `${process.env.PUBLIC_URL}/storage/duck.jpg`,
  `${process.env.PUBLIC_URL}/storage/ebichu.jpg`,
  `${process.env.PUBLIC_URL}/storage/duck2.jpg`,
  `${process.env.PUBLIC_URL}/storage/rabbit.jpg`,
];

const LoadingScreen = ({ targetPage }) => {
  const navigate = useNavigate();
  const [visitCount, setVisitCount] = useState(() => {
    return parseInt(localStorage.getItem('visitCount') || '0', 10);
  });

  useEffect(() => {
    localStorage.setItem('visitCount', visitCount + 1);
    setTimeout(() => {
      navigate(`/${targetPage}`); // Redirect after 3 seconds
    }, 3000);
  }, [navigate, targetPage, visitCount]);

  // Change image every 2 visits, cycling through 4 images
  const imageIndex = Math.floor(visitCount / 2) % duckImages.length;

  return (
    <div className="loading-screen">
      <h2>Loading...</h2>
      <div className="duck-container">
        <img src={duckImages[imageIndex]} alt="Duck" className="duck" />
      </div>
      <p className="you-btw">You btw</p>
    </div>
  );
};

export default LoadingScreen;
