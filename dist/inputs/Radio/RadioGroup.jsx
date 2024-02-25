import React from 'react'
import { colorToHue } from '../../../context';
import classNames from '../../../tools/classNames';
import s from './index.module.css';

const defaultProps = {
  value: "",
  onChange: () => { },
}

const RadioGroup = (props = defaultProps) => {
  const { onChange, value } = props;
  const defaultValue = value || props.defaultValue || "";
  const [valueLoc, setValueLoc] = React.useState(defaultValue);


  const inlineStyles = {
    '--hue': colorToHue[props.color] ? colorToHue[props.color]
      : props.hue ? props.hue
        : 160,
    ...props.style
  }

  if (props.children) return (
    <div
      className={classNames({
        "mtui-radiogroup": true,
        [s.radio]: true,
        [s["mtui_color_" + props.color]]: props.color,
        [props.className]: !!props.className,
      })}
      style={inlineStyles}
    >
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          childProps: child.props,
          value: onChange ? defaultValue : valueLoc,
          onChange: onChange ?? setValueLoc
        });
      })}
    </div>
  )
}

export default RadioGroup