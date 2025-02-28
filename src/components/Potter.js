// src/components/Potter.js
import React from 'react';
import './Potter.css'; // Import CSS for styling

const Potter = () => {
  return (
    <div className="potter-container">
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/storage/potter_trio.jpg`} alt="Harry Potter Trio" className="potter-image" />
        <p>Wish you a magical day, Anas!! 🪄</p>
      </div>
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/storage/expecto.jpg`} alt="Expecto Patronum" className="potter-image" />
        <p>Hope your petroleum is not expensive this year!</p>
      </div>
    </div>
  );
};

export default Potter;
