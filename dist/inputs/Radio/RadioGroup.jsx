import React from 'react'
import { colorToHue } from '../../../context';
import classNames from '../../../tools/classNames';
import * as s from './index.module.css';

const defaultProps = {
  value: "",
  onChange: () => {}
}

const RadioGroup = (props = defaultProps) => {
  const {onChange, value} = props;
  const inlineStyles = {
    '--hue': colorToHue[props.color] ? colorToHue[props.color] 
              : props.hue ? props.hue 
              : 160,
    ...props.style
  }

  if(props.children) return (
    <div 
      className={classNames({
        "mtui-radio": true,
        [s.radio]: true,
        [s["mtui_color_" + props.color]]: props.color,
        [props.className]: !!props.className,
      })}
      style={inlineStyles}
    >
      {React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        childProps: child.props,
        value:props.value,
        onChange
      });
    })}
    </div>
  )
}

export default RadioGroup