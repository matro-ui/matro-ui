import React from "react";
import classNames from "../../../tools/classNames";
import { colorToHue } from "../../../context";
import s from "./index.module.css";

const defaultProps = {
  hue: "" | 0,
  isIcon: false,
  glossy: false,
  leftIcon: React.Component,
  rightIcon: React.Component,
  as: <button />
}

const Button = (props = defaultProps) => {
  const inlineStyles = {
    '--hue': colorToHue[props.color] ? colorToHue[props.color]
      : props.hue ? props.hue
        : 100,
    ...props.style
  }
  const childProps = { ...props }
  Object.keys(defaultProps).forEach(e => delete childProps[e])

  const className =
    classNames({
      "mtui-button": true,
      [s.mtui_button]: true,
      [s.default]: !props.hue && !props?.styles?.color,
      [s.glossy]: props.glossy,
      [s.mtui_button__icon]: props.isIcon,
      [props.className]: !!props.className,
    });

  const content = (
    <React.Fragment>
      {props.leftIcon ?? ""}
      <span className={s.content}>{props?.children}</span>
      {props.rightIcon ?? ""}
    </React.Fragment>
  );

  return React.cloneElement(props.as, {
    ...childProps,
    children: content,
    style: inlineStyles,
    className,
  });

};

export default Button;

