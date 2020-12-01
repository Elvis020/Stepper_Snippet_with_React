import React, { useState, useEffect } from 'react';
import './Stepper.scss';
import PropTypes from 'prop-types';


const Stepper = ({ stepsArr, direction,currentStep }) => {
    const [steps, setSteps] = useState([]);
    // console.log("Steps:", steps)
    // console.log("Steps Arr: ", stepsArr)
    
    
    useEffect(() => {
        const stepState = stepsArr.map((item, index) => {
            let stepObj = {}
            stepObj.description = item;
            stepObj.completed = false;
            stepObj.highlighted = index === 0 ? true : false;
            stepObj.selected = index === 0 ? true : false;
            return stepObj;
        })
        let currentStep = updateStep(currentStep,stepState) 
        setSteps(stepState)
    }, []);


    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps];
        let stepCounter = 0;
        while (stepCounter < newSteps.length) {
            // Current Step
        }

    }

    const stepsDis = steps.map((item, index) => {
        const { description, completed, selected, highlighted } = item;
        return (
            <div key={index} className="step-wrapper">
                <div className={`step-number ${selected && "step-number-active"}`} > <p>{completed ? <span>&#10003;</span> : index + 1}</p></div>
                <div className={`step-description ${highlighted && "step-description-active"}`}>{description}</div>
                <div className={index !== (steps.length - 1) ? `divider-line divider-line-${steps.length}` : undefined}></div>
            </div>
        )
    })
    return (
        <div className={`stepper-wrapper-${direction}`}>
            {stepsDis}
        </div>
    )
}


// Defining prop-types
Stepper.propTypes = {
    direction: PropTypes.string.isRequired,
    steps: PropTypes.array.isRequired
}
export default Stepper
