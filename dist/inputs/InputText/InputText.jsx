import React from 'react'
import classNames from "../../../tools/classNames";
import * as s from "../index.module.css";
import { colorToHue } from '../../../context';

const InputText = (props) => {
  const inlineStyles = {
    '--hue': colorToHue[props.color] ? colorToHue[props.color] 
              : props.hue ? props.hue 
              : 160,
  }

  return (
    <div 
    className={classNames({
      "mtui-inputtext": true,
      [s.mtui_inputnum]: true,
      [s["mtui_color_" + props.color]]: props.color,
      [props.className]: !!props.className,
    })}
    style={{...inlineStyles, ...props.style}}
    >
     {React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        onChange:props.onChange,
        value:props.value,
        placeholder: props.placeholder,
        name: props.name
      });
    })}
    </div>
  )
}

export default InputText