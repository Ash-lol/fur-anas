import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EndingPage.css';

const EndingPage = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Rickroll URL
  };

  return (
    <div className="ending-container">
      <h1>Thanks for Playing! 🎉</h1>
      <p>Hope you had fun! 😃</p>
      <button className="exit-button" onClick={handleExit}>Exit</button>
    </div>
  );
};

export default EndingPage;
