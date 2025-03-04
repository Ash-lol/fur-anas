import React from 'react';
import './Contest.css'; // Import CSS for styling

const Contest = () => {
  return (
    <div className="contest-container">
      <div className="images-wrapper">
        <img 
          src={`${process.env.PUBLIC_URL}/storage/contest.jpg`} 
          alt="Contest Image 1" 
          className="contest-image" 
        />
        <img 
          src={`${process.env.PUBLIC_URL}/storage/may-drew.png`} 
          alt="Contest Image 2" 
          className="contest-image" 
        />
      </div>
      <p className="contest-text">May the Drewms that you're working towards, all come true!</p>
      <p>I know you are more than capable of reaching them and beyond 😌</p>
    </div>
  );
};

export default Contest;
