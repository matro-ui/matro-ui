import React from 'react'
import classNames from "../../../tools/classNames";
import * as s from "./index.module.css";
import { colorToHue } from '../../../context';

const InputText = (props) => {
  const inlineStyles = {
    '--hue': colorToHue[props.color] ? colorToHue[props.color] 
              : props.hue ? props.hue 
              : 160,
  }

  return (
    <input    
      {...{ 
        onChange: (e) => props.onChange(e.target.value),
        value: props.value,
        placeholder: props.placeholder,
        name: props.name
      }}
      className={classNames({
        "mtui-inputtext": true,
        [s.mtui_inputtext]: true,
        [s["mtui_color_" + props.color]]: props.color,
        [props.className]: !!props.className,
      })}
      style={{...inlineStyles, ...props.style}}/> 
  )
}

export default InputText