import React, { useEffect, useRef, useState } from 'react';
import './Mii.css'; // Import CSS for styling

const Mii = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const imageNames = [
    "mii4.jpg", "mii2.jpg", "mii3.jpg",
    "mii1.jpg", "mii5.jpg", "mii6.jpg",
    "mii10.jpg", "mii8.jpg", "mii11.jpg",
    "mii9.jpg", "mii7.jpg"
  ];

  return (
    <div className="mii-container">
      <div className="grid">
        {imageNames.slice(0, 9).map((name, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/storage/${name}`}
            alt={`Mii ${index + 1}`}
            className="mii-image"
          />
        ))}
      </div>
      <div className="row">
        {imageNames.slice(9).map((name, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/storage/${name}`}
            alt={`Mii ${index + 10}`}
            className="mii-image"
          />
        ))}
      </div>
      <p className="mii-text">Mii Channel Vibes! 🎮</p>

      <audio ref={audioRef} loop>
        <source src={`${process.env.PUBLIC_URL}/storage/mii.mp3`} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <button onClick={toggleAudio} className="audio-button">
        {isPlaying ? 'Stop Audio' : 'Play Audio'}
      </button>
    </div>
  );
};

export default Mii;
