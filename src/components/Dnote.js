import React from 'react';
import './Dnote.css';

const Dnote = () => {
  return (
    <div className="dnote-container">
      {/* First Row (2 images) */}
      <div className="row">
        <div className="image-container">
          <img 
            src={`${process.env.PUBLIC_URL}/storage/death-note.png`} 
            alt="Death Note Image 1" 
            className="dnote-image first-row-image" 
          />
          <p className="image-caption">Happy happy happy!</p>
        </div>
        <div className="image-container">
          <img 
            src={`${process.env.PUBLIC_URL}/storage/death-note-5.jpg`} 
            alt="Death Note Image 2" 
            className="dnote-image first-row-image second-image" 
          />
          <p className="image-caption">This page is inspired by your wall btw</p>
        </div>
      </div>

      {/* Second Row (2 images) */}
      <div className="row">
        <div className="image-container">
          <img 
            src={`${process.env.PUBLIC_URL}/storage/death-note-3.png`} 
            alt="Death Note Image 3" 
            className="dnote-image third-image" 
          />
        </div>
        <div className="image-container">
          <img 
            src={`${process.env.PUBLIC_URL}/storage/death-note-4.jpg`} 
            alt="Death Note Image 4" 
            className="dnote-image smaller-image" 
          />
        </div>
      </div>

      {/* Caption for second row */}
      <p className="row-caption">Your cool chocolate buddy and height buddy 🎉🍫</p>
    </div>
  );
};

export default Dnote;