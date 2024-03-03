import React from 'react'
import s from './index.module.css';
import classNames from '../../../tools/classNames';
import { colorToHue } from '../../../context';

const Progress = (props) => {
  const {
    value,
    stripe,
    colorScheme,
    height,
    isIndeterminate,
    className
  } = props;

  const inlineStyles = {
    '--hue': (colorToHue[colorScheme] > -1) ? colorToHue[colorScheme]
      : props.hue ? props.hue
        : 220,
    ...props.style
  }

  if (height)
    inlineStyles["height"] = height.indexOf("px") !== -1 ? height : height + "px"

  return (
    <div
      className={classNames({
        "mtui-progressbar": true,
        [s.parent]: true,
        [props.className]: !!props.className,
      })}
      style={inlineStyles}
    >
      <span className={s.vis} style={{ width: (value || 0) + "%" }} />
      <span className={s.text}>Progress: {value || 0}%</span>
    </div>
  )
}

export default Progress
