// src/components/Home.js
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import './Home.css';

const Home = ({ setShowConfetti, onPick }) => { // Receive setShowConfetti as a prop
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [loadingPage, setLoadingPage] = useState(null); // Track loading page
  const navigate = useNavigate();
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const videoRef = useRef(null);

  const handleButtonClick = () => {
    setIsVideoVisible(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const changePlaybackRate = (rate) => {
    setPlaybackRate(rate);
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
  };

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };

  const handleOptionClick = (e, option) => {
    e.preventDefault();
    onPick(option);
  };

  // const navigateToPage = (page) => { 
  //   navigate(`/${page}`); // Use react-router's history to navigate
  // };

  // const navigateToPage = (page) => {
  //   setLoadingPage(page); // Show loading screen
  //   setTimeout(() => {
  //     onPick(page); // Navigate after loading
  //   }, 3000);
  // };
  

  if (loadingPage) {
    return <LoadingScreen targetPage={loadingPage} />;
  }

  return (
    <div className="home-container">
      {!isVideoVisible && !isVideoEnded && (
        <div className="button-container">
          <button onClick={handleButtonClick} className="click-me-button">
            Click Here 🐹
          </button>
          {/* <div className="pointer left-pointer">👉</div>
          <div className="pointer right-pointer">👈</div> */}
        </div>
      )}
      {isVideoVisible && !isVideoEnded && (
        <div className="video-container">
        <video
          ref={videoRef}
          src={`${process.env.PUBLIC_URL}/storage/video.mp4`}
          type="video/mp4"
          autoPlay
          onEnded={handleVideoEnd}
          className="video-player"
        >
          Your browser does not support the video tag.
        </video>
        <div className="video-controls">
          <button 
            onClick={() => changePlaybackRate(1.0)} 
            className={`speed-button ${playbackRate === 1.0 ? 'active' : ''}`}
          >
            1x
          </button>
          <button 
            onClick={() => changePlaybackRate(1.5)} 
            className={`speed-button ${playbackRate === 1.5 ? 'active' : ''}`}
          >
            1.5x
          </button>
          <button 
            onClick={() => changePlaybackRate(2.0)} 
            className={`speed-button ${playbackRate === 2.0 ? 'active' : ''}`}
          >
            2x
          </button>
          <button onClick={handleVideoEnd} className="skip-button">
            Skip The Video
          </button>
        </div>
      </div>
      )}
      {isVideoEnded && (
        <div className="options-container">
          (Yes, I didn't make that video, I got it from here https://youtu.be/Vi5Wi3BWX7Q?si=PnSuwSPCTwJWbG3m)
          <h3>But choose one of these thingies below!</h3>
          <button onClick={(e) => handleOptionClick(e, 'H')} className="option-button potter">
            H
          </button>
          <button onClick={(e) => handleOptionClick(e, 'D')} className="option-button dnote">
            D
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
