import React from 'react';
import './Vicky.css'; // Import CSS for styling

const Vicky = () => {
  return (
    <div className="vicky-container">
      
      <div className="row">
        <img src={`${process.env.PUBLIC_URL}/storage/vicky.jpg`} alt="Vicky 1" className="vicky-image" />
        <img src={`${process.env.PUBLIC_URL}/storage/jim-button.png`} alt="Vicky 2" className="vicky-image" />
      </div>

      <div className="center-image">
        <img src={`${process.env.PUBLIC_URL}/storage/vicky-ship.jpg`} alt="Vicky 3" className="vicky-image-large" />
      </div>

      <div className="row">
        <img src={`${process.env.PUBLIC_URL}/storage/maya.jpg`} alt="Vicky 4" className="vicky-image" />
        <img src={`${process.env.PUBLIC_URL}/storage/maya2.jpg`} alt="Vicky 5" className="vicky-image" />
      </div>

      <p className="vicky-text"> The little Anas in you must be amazed by you. Keep making her proud as always! 🌟</p>
      <p className="vicky-text"> Oh and, keep your creativity shining! It's of a rare kind XD</p>


    </div>
  );
};

export default Vicky;
