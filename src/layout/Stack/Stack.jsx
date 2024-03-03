import React from 'react'
import s from './index.module.css';
import { v4 as uuid } from "uuid";
import clsx from 'clsx';


const Stack = (props) => {
  const component_id = "mtstack__" + uuid();
  const { flex, justify, align, margin, padding } = props;
  const inlineStyles = {
    'gap': isNaN(props.gap) ? props.gap : props.gap + "px",
    'flexWrap': props.wrap === "reverse" ? "wrap-reverse" : props.wrap ? "wrap" : "nowrap",
    ...props.style
  }

  if (typeof margin === "string")
    inlineStyles["margin"] = isNaN(margin) ? margin : margin + "px";
  if (typeof padding === "string")
    inlineStyles["padding"] = isNaN(padding) ? padding : padding + "px";

  const itemProps = { ...props };
  delete itemProps.children;
  delete itemProps.wrap;
  delete itemProps.column;
  delete itemProps.justify;
  delete itemProps.flex;
  delete itemProps.margin;
  delete itemProps.padding;
  delete itemProps.align;

  if (props.children) return (
    <div
      {...itemProps}
      className={clsx([
        "mtui-stack",
        component_id,
        s.stack,
        {
          [s.column]: props.column,
          [s.flex]: typeof flex === "boolean" && flex,

          [s.js_end]: justify === "end",
          [s.js_center]: justify === "center",
          [s.js_start]: justify === "start",
          [s.js_spaceBetween]: justify === "spaceBetween",
          [s.js_spaceAround]: justify === "spaceAround",

          [s.al_start]: align === "start",
          [s.al_end]: align === "end",
          [s.al_center]: align === "center",
          [s.al_stretch]: align === "stretch",

          [s.stretch]: props.stretch,
          [props.className]: props.className
        }
      ])}
      style={inlineStyles}
    >{props.children}
      <style>
        {`.${component_id} > * {
          flex: ${typeof flex === "string" ? flex : "0 1 auto"}
      }`}
      </style>
    </div>
  );
  return ""
}

export default Stack