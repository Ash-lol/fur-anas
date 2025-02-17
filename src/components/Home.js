// src/components/Home.js
import React, { useState } from 'react';

const Home = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <div>
      <h2>Welcome!</h2>
      <p>This is the funniest app on the web. Explore to find jokes and laugh away!</p>
      {!isVideoVisible ? (
        <button onClick={handleButtonClick} style={styles.button}>Click Me</button>
      ) : (
        <video
          src={`${process.env.PUBLIC_URL}/storage/video.mp4`}
          type="video/mp4"
          autoPlay
          style={styles.video}
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: '#ff6f61',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  video: {
    width: '100%',
    marginTop: '20px',
  },
};

export default Home;
