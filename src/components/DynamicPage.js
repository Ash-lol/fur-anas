import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Potter from './Potter';
import Dnote from './Dnote';
import Uia from './Uia';
import Vicky from './Vicky';
import Mii from './Mii';
import Tangled from './Tangled';
import './Home.css'; // Use your existing CSS

const optionsOrder = ["H", "D", "U", "V", "M", "T"];

// Map of options to their respective components
const componentMap = {
  "H": Potter,
  "D": Dnote,
  "U": Uia,
  "V": Vicky,
  "M": Mii,
  "T": Tangled
};

const DynamicPage = ({ pickedOptions, onPick }) => {
  const { selection } = useParams();
  const navigate = useNavigate();

  if (!selection || !optionsOrder.includes(selection)) {
    return <h2>Invalid selection!</h2>;
  }

  // Find remaining options
  const remainingOptions = optionsOrder.filter(opt => !pickedOptions.includes(opt));
  
  // Dynamically get the component to render
  const PageComponent = componentMap[selection];

  // Create animation classes for the options
  const getAnimationClass = (index) => {
    return index % 2 === 0 ? "potter" : "dnote";
  };

  return (
    <div className="home-container">
      {/* Render the specific component for this selection */}
      {PageComponent && <PageComponent />}
      
      {remainingOptions.length > 0 ? (
        <div className="options-container">
          <h3>Choose your next option:</h3>
          {remainingOptions.slice(0, 2).map((option, index) => (
            <button 
              key={option} 
              onClick={() => onPick(option)} 
              className={`option-button ${getAnimationClass(index)}`}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <button 
          onClick={() => navigate("/ending")} 
          className="option-button"
          style={{
            backgroundColor: "#ff6f61",
            animation: "none",
            padding: "15px 30px",
            borderRadius: "10px",
            width: "auto",
            height: "auto"
          }}
        >
          Exit the App
        </button>
      )}
    </div>
  );
};

export default DynamicPage;