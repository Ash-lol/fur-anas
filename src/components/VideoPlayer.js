import React, { useState } from 'react';

const VideoPlayer = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVideoVisible(true);
    const videoElement = document.getElementById('videoElement');
    if (videoElement) {
      videoElement.play();
    }
  };

  return (
    <div>
      {!isVideoVisible ? (
        <button onClick={handleButtonClick} className="play-button">
          Click Me
        </button>
      ) : (
        <video
          id="videoElement"
          controls
          autoPlay
          src="/path-to-your-video/video.mp4"
          className="video-player"
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
