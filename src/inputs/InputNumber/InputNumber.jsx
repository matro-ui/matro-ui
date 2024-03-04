import React, { useState } from 'react'
import clsx from "clsx";
import s from "../index.module.css";
import { colorToHue } from '../../../context';


const InputNumber = (props) => {
  const {
    name,
    disabled,
    value,
    onChange,
    placeholder
  } = props;
  const inlineStyles = {
    '--hue': colorToHue[props.color] ? colorToHue[props.color]
      : props.hue ? props.hue
        : 160,
    ...props.style
  }

  const [locValue, setLocValue] = useState(value);

  const handleChange = (e) => {
    console.log(e);
    setLocValue(e)
    onChange(e);
  }

  return (
    <div
      className={clsx(
        "mtui-inputnum",
        s.mtui_inputtype, {
        [s["mtui_color_" + props.color]]: props.color,
        [s.disabled]: disabled,
        [props.className]: !!props.className,
      })}
      style={inlineStyles}
    >
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          childProps: child.props,
          value: locValue,
          onChange: handleChange,
          placeholder,
          name
        });
      })}
    </div>
  )
}

InputNumber.defaultProps = {
  value: "0",
  onChange: () => { },
  name: "",
  disabled: false,
  placeholder: "0"
}


export default InputNumber