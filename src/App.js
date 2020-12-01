import React from 'react';
import './App.scss';
import Stepper from './Stepper';



function App() {
  const stepsArr = ['Create an account', 'Add personal data', 'Add payment', 'Submit application']

  const direction = "horizontal"
  return (
    <div className={`stepper-container-${direction}`}>
      <Stepper direction={direction} stepsArr={stepsArr} currentStep={3} />
    </div>
  );
}

export default App;
