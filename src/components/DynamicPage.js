import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Home.css'; // Use your existing CSS

// Import components safely
import Potter from './Potter';
let Dnote, Contest, Uia, Vicky, Mii, Tangled;

// Try to import each component, but don't crash if it doesn't exist
try { Dnote = require('./Dnote').default; } catch (e) { Dnote = () => <div>Dnote content coming soon!</div>; }
try { Contest = require('./Contest').default; } catch (e) { Contest = () => <div>Contest content coming soon!</div>; }
try { Uia = require('./Uia').default; } catch (e) { Uia = () => <div>Uia content coming soon!</div>; }
try { Vicky = require('./Vicky').default; } catch (e) { Vicky = () => <div>Vicky content coming soon!</div>; }
try { Mii = require('./Mii').default; } catch (e) { Mii = () => <div>Mii content coming soon!</div>; }
try { Tangled = require('./Tangled').default; } catch (e) { Tangled = () => <div>Tangled content coming soon!</div>; }

const optionsOrder = ["H", "D", "C", "U", "V", "M", "T"];

// Map of options to their respective components
const componentMap = {
  "H": Potter,
  "D": Dnote,
  "C": Contest,
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
  
  // Get the component to render, or use a fallback if it doesn't exist
  const PageComponent = componentMap[selection] || (() => (
    <div style={{textAlign: 'center', padding: '20px'}}>
      <h2>Content for "{selection}" is coming soon!</h2>
    </div>
  ));

  // Create animation classes for the options
  const getAnimationClass = (index) => {
    return index % 2 === 0 ? "potter" : "dnote";
  };

  return (
    <div className="home-container">
      {/* Render the specific component for this selection */}
      {<PageComponent />}
      
      {remainingOptions.length > 0 ? (
        <div className="options-container">
          <h3>Pick the next one:</h3>
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