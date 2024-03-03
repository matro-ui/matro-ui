import React from 'react'
import s from './index.module.css';
import clsx from 'clsx';
import { colorToHue } from '../../../context';

const Spinner = (props) => {
  const { size, colorScheme, hidden, color } = props;

  const inlineStyles = {
    '--hue': (colorToHue[colorScheme] > -1) ? colorToHue[colorScheme]
      : props.hue ? props.hue
        : 220,
    ...props.style
  }

  if (color?.indexOf("#") > -1 || color === "inherit")
    inlineStyles["--color"] = color;

  if (hidden) return "";

  else return (
    <div
      className={clsx([
        "mtui-spinner",
        s.parent,
        {
          [s.size_xs]: size === "xs" || size === "XS",
          [s.size_s]: size === "s" || size === "S",
          [s.size_m]: size === "m" || size === "M",
          [s.size_l]: size === "l" || size === "L",
          [s.size_xl]: size === "xl" || size === "XL",
          [s.isColor]: !!props.colorScheme,
          [props.className]: !!props.className,
        }
      ])}
      style={{ ...inlineStyles, ...props.styles }}
    >
      <span className={s.act} />
      <span className={s.text}>Loading...</span>
    </div>
  )
}

export default Spinner