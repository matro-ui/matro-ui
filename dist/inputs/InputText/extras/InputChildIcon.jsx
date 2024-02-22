import React from 'react'
import * as s from "../../index.module.css";


const InputChild = (props) => {
  const itemProps = { ...props };
  delete itemProps.children;

  if(props.children) return (
    <div 
    {...itemProps}
      className={s.inputChild} 
    >
      {props.children}
    </div>
  );
  return ""
}

export default InputChild