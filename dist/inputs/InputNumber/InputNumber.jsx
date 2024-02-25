import React from 'react'
import classNames from "../../../tools/classNames";
import s from "../index.module.css";
import { colorToHue } from '../../../context';

const InputNumber = (props) => {
  const inlineStyles = {
    '--hue': colorToHue[props.color] ? colorToHue[props.color]
      : props.hue ? props.hue
        : 160,
    ...props.style
  }

  return (
    <div
      className={classNames({
        "mtui-inputnum": true,
        [s.mtui_inputtype]: true,
        [s["mtui_color_" + props.color]]: props.color,
        [props.className]: !!props.className,
      })}
      style={inlineStyles}
    >
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          childProps: child.props,
          onChange: props.onChange,
          value: props.value,
          placeholder: props.placeholder,
          name: props.name
        });
      })}
    </div>
  )
}

export default InputNumber