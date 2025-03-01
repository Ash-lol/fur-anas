// src/components/DynamicPage.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const optionsOrder = ["H", "D", "U", "V", "M", "T"];

const DynamicPage = ({ pickedOptions, onPick }) => {
  const { selection } = useParams();
  const navigate = useNavigate();

  if (!selection || !optionsOrder.includes(selection)) {
    return <h2>Invalid selection!</h2>;
  }

  // Find remaining options
  const remainingOptions = optionsOrder.filter(opt => !pickedOptions.includes(opt));

  return (
    <div className="page-container">
      <h2>You selected: {selection}</h2>
      
      {remainingOptions.length > 0 ? (
        <>
          <h3>Choose your next option:</h3>
          {remainingOptions.slice(0, 2).map(option => (
            <button key={option} onClick={() => onPick(option)} className="option-button">{option}</button>
          ))}
        </>
      ) : (
        <button onClick={() => navigate("/ending")} className="exit-button">Exit the App</button>
      )}
    </div>
  );
};

export default DynamicPage;
