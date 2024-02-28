import React from 'react'
import clsx from "clsx";
import s from "../index.module.css";
import { colorToHue } from '../../../context';

const InputText = (props) => {
  const { onChange, value, placeholder, name, hue, disabled } = props;
  const inlineStyles = {
    '--hue': colorToHue[props.color] ? colorToHue[props.color]
      : (hue ? hue : 160),

    ...props.style,
  }

  return (
    <div
      className={clsx(
        "mtui-inputtext",
        s.mtui_inputtype,
        {
          [s.disabled]: disabled,
          [s["mtui_color_" + props.color]]: props.color,
          [props.className]: !!props.className,
        })}
      style={inlineStyles}
    >
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          childProps: child.props,
          onChange,
          value,
          placeholder,
          name
        });
      })}
    </div>
  )
}

InputText.defaultProps = {
  name: "",
  disabled: false,
  placeholder: ""
}


export default InputText