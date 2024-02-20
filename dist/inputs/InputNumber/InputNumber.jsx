import React from 'react'
import classNames from "../../../tools/classNames";
import * as s from "./index.module.css";
import { colorToHue } from '../../../context';

const InputNumber = (props) => {
  const inlineStyles = {
    '--hue': colorToHue[props.color] ? colorToHue[props.color] 
              : props.hue ? props.hue 
              : 100,
  }

  return (
    <div 
    className={classNames({
      "mtui-inputnum": true,
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
      });
    })}
    </div>
  )
}

export default InputNumber