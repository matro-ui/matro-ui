import React from 'react'
import s from "../../index.module.css";

const InputNumberStepper = (props) => {

  const onIncrement = () => {
    props.onChange((isNaN(parseInt(props.value)) ? 0 : parseInt(props.value) + 1))
  }
  const onDecrement = () => {
    props.onChange((isNaN(parseInt(props.value)) ? 0 : parseInt(props.value) - 1))
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

const InputDecrementStepper = ({ onDecrement }) =>
  <button onClick={onDecrement}>
    <span>▼</span></button>

const InputIncrementStepper = (props) =>
  <button onClick={props.onIncrement}>
    <span>▲</span></button>


export {
  InputNumberStepper,
  InputDecrementStepper,
  InputIncrementStepper
};