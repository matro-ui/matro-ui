import React from "react";
import classNames from "../../../tools/classNames";
import * as s from "./index.module.css";

const Button = (props) => {
  const inlineStyles = {
    '--hue': props.hue ?? 100
  }
  return (
  <button 
    {...props} 
    className={classNames({
      "mtui-button": true,
      [s.mtui_button]: true,
      [props.className]: !!props.className,
    })}
    style={{...inlineStyles, ...props.style}}
  >
    {props?.children}
  </button>
  );
};

export default Button;

