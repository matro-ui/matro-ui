import React from "react";
import classNames from "../../../tools/classNames";
import { colorToHue } from "../../../context";
import * as s from "./index.module.css";

const Button = (props) => {
  const inlineStyles = {
    '--hue': colorToHue[props.color] ? colorToHue[props.color] 
              : props.hue ? props.hue 
              : 100,
  }
  const childProps = {...props}
  delete childProps["isIcon"]

  return (
  <button 
    {...childProps}
    className={classNames({
      "mtui-button": true,
      [s.mtui_button]: true,
      [s.mtui_button__icon]: props.isIcon,
      [props.className]: !!props.className,
    })}
    style={{...inlineStyles, ...props.style}}
  >
    {props?.children}
  </button>
  );
};

export default Button;

