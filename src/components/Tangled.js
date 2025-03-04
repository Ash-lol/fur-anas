import React, { useEffect, useRef, useState } from 'react';
import './Tangled.css'; // Import CSS for styling

const Tangled = () => {
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
    "encanto.jpg",
    "inside-out-3.jpg",
    "encanto2.png",
    "zootopia.jpg",
    "zootopia3.jpg",
    "zootopia4.jpg",
    "rapunzel.jpg",
    "tangled2.jpg",
    "tangled3.jpg"
  ];

  return (
    <div className="tangled-container">
      <div className="grid">
        {imageNames.map((name, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/storage/${name}`}
            alt={name.replace(/_/g, ' ').replace('.jpg', '')}
            className="tangled-image"
          />
        ))}
      </div>
      <p className="tangled-text">One of the things that I particularly admire about you is your willingness to go out of your comfort zone and try new things. I would be lying if I said it didn't rub off on me 🐰</p>
      <audio ref={audioRef} loop>
        <source src={`${process.env.PUBLIC_URL}/storage/tripledent.mp3`} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <button onClick={toggleAudio} className="audio-button">
        {isPlaying ? 'Stop Audio' : 'Play Audio'}
      </button>
    </div>
  );
};

export default Tangled;
