import React from 'react';
import './Dnote.css'; // Import CSS for styling

const Dnote = () => {
  return (
    <div className="dnote-container">
      {/* First Row (2 images) */}
      <div className="row">
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/storage/death-note.jpg`} alt="Placeholder 1" className="dnote-image" />
          <p>Example Text 1</p>
        </div>
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/storage/death-note-2.png`} alt="Placeholder 2" className="dnote-image" />
          <p>Example Text 2</p>
        </div>
      </div>

      {/* Second Row (2 images) */}
      <div className="row">
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/storage/death-note-3.png`} alt="Placeholder 3" className="dnote-image" />
          <p>Example Text 3</p>
        </div>
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/storage/death-note-4.jpg`} alt="Placeholder 4" className="dnote-image" />
          <p>Example Text 4</p>
        </div>
      </div>

      {/* Last Image (Centered) */}
      <div className="last-image">
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/storage/death-note-5.jpg`} alt="Placeholder 5" className="dnote-image" />
          <p>Example Text 5</p>
        </div>
      </div>
    </div>
  );
};

export default Dnote;
