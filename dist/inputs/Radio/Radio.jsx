import React from 'react'
import s from './index.module.css';
import classNames from '../../../tools/classNames';
import clsx from "clsx";

const defaultProps = {
  name: "",
  onChange: () => { },
  value: false,
  disabled: false,
}

const Radio = (props = defaultProps) => {
  const { name, value, disabled, styleParent } = props;
  console.log(styleParent);


  return (
    <label
      className={clsx([
        "mtui-radioitem",
        s.parent,
        { [s.disabled]: disabled }
      ])}
      style={{ "--bg": styleParent["--bg"], ...props.childProps.style }}
    >
      {/* input hidden  */}
      < input {...{
        type: "radio",
        checked: value === props.childProps.value,
        className: s.input,
        onChange: disabled ? () => { } : (e) => props.onChange(props.childProps.value),
        name
      }
      } />

      {/* input visible  */}
      <span className={s.checkbox} />

      {/* label  */}
      {props.children ? <span className={s.label}>{props.children}</span> : ""}
    </label >
  )
}

export default Radio