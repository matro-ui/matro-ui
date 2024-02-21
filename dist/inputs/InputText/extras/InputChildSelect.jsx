import React from 'react'
import * as s from "../../index.module.css";


const InputChildSelect = (props) => {
  console.log(props);
  if(props.children) return (
    <select 
      className={s.inputSelect} 
      name={props.childProps.name} 
      defaultValue={props.childProps.defaultValue}
    >
      {props.children}
    </select>
  );
  return ""
}

export default InputChildSelect