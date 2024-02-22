import React from 'react'
import * as s from "../../index.module.css";


const InputChildButton = (props) => {
  const itemProps = { ...props };
  delete itemProps.children;
  delete itemProps.childProps;

  if(props.children) return (
    <button 
    {...itemProps}
      className={s.inputChildButton} 
    >
     {props.children} 
    </button>
  );
  return ""
}

export default InputChildButton