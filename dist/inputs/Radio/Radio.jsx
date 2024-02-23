import React from 'react'
import * as s from './index.module.css';
import classNames from '../../../tools/classNames';

const defaultProps = {
  name: "",
  onChange: () => {},
  value: false,
  disabled: false,
}

const Radio = (props = defaultProps) => {
  const {name, value, disabled} = props;


  return (
    <label 
      className={classNames({
        ["mtui-radioitem"]: true,
        [s.parent]: true,
        [s.disabled]: disabled
      })}
    >
      {/* input hidden  */}
      <input {...{
        type: "radio", 
        checked: value === props.childProps.value, 
        className: s.input,
        onChange: disabled ? () => {} : (e) => props.onChange(props.childProps.value), 
        name}}/>

      {/* input visible  */}
      <span className={s.checkbox}/>

      {/* label  */}
      {props.children ? <span className={s.label}>{props.children}</span> : ""}
    </label>
  )
}

export default Radio