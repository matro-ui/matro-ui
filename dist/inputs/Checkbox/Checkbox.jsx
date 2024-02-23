import React from 'react'
import * as s from './index.module.css';

const defaultProps = {
  value: false,
  onChange: () => {},
  name: ""
}

const Checkbox = (props = defaultProps) => {
  const {name, value} = props;
  const onChange = (e) => props.onChange(!!e.target.checked);
  return (
    <label className={s.parent}>
      {/* input hidden  */}
      <input {...{
        type: "checkbox", 
        checked: value, 
        className: s.input,
        onChange, 
        name}}/>

      {/* input visible  */}
      <span className={s.checkbox}>
      {value ? (
  <svg 
    className={s.svg}
    viewBox="0 0 11 11" 
    style={{
      display: "inline-block", 
      fill: "none", 
      strokeWidth: 2, 
      stroke: "currentcolor", 
    }}
  >
    <polyline>
        <animate
        attributeName="points"
        dur="200ms"
        from="2,4 5,7 5,7"
        to="2,5 5,8 9.5,3"
        fill="freeze"
        begin="0ms"/>
    </polyline>
  </svg>
) : null}

      </span>

      {/* label  */}
      {props.children ? <span className={s.label}>{props.children}</span> : ""}
    </label>
  )
}

export default Checkbox