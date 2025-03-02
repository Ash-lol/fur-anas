import React, { useState } from 'react';
import './Uia.css'; // Import CSS for styling

const Uia = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div className="uia-container">
      {!videoEnded ? (
        <video
          className="uia-video"
          autoPlay
          onEnded={() => setVideoEnded(true)}
        >
          <source src={`${process.env.PUBLIC_URL}/storage/uia.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="uia-end-content">
            <p>(from https://youtu.be/u57HBBO1zV4?si=B61W7givJJqQzM13)</p>
          <img src={`${process.env.PUBLIC_URL}/storage/hog.png`} alt="UIA" className="uia-image" />
          <p>Happy birthday!! 🎊🎈</p>
        </div>
      )}
    </div>
  );
};

export default Uia;
