import React from 'react'
import * as s from "./index.module.css";

const InputNumberStepper = (props) => {
  const onDecrement = () => {
    props.onChange(props.value - 1)
  }
  const onIncrement = () => {
    props.onChange(props.value + 1)
  }

  return (
  <div className={s.stepper}>
    {React.Children.map(props.children, (child) => {
    return React.cloneElement(child, {
      onDecrement,
      onIncrement
    });
  })}
  </div> 
  );
}

const InputDecrementStepper = ({onDecrement}) => 
 <button onClick={onDecrement}>▼</button>

const InputIncrementStepper = (props) => 
 <button onClick={props.onIncrement}>▲</button>


export {
  InputNumberStepper, 
  InputDecrementStepper, 
  InputIncrementStepper
};