// App.js
import React, { useState } from 'react';
import './style.css';

const steps = [
  {
    heading: 'Step 1 Heading',
    description: 'Description for Step 1',
  },
  {
    heading: 'Step 2 Heading',
    description: 'Description for Step 2',
  },
  {
    heading: 'Step 3 Heading',
    description: 'Description for Step 3',
  },
  {
    heading: 'Step 4 Heading',
    description: 'Description for Step 4',
  },
];

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = (stepIndex) => {
    setCurrentStep(stepIndex);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentStep(currentStep + 1); // Move to the next step after closing modal
  };

  return (
    <div className="App">
      {steps.map((step, index) => (
        <div key={index}>
          <h2 onClick={() => openModal(index)}>{step.heading}</h2>
        </div>
      ))}
      
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{steps[currentStep].heading}</h2>
            <p>{steps[currentStep].description}</p>
            <button onClick={closeModal}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
