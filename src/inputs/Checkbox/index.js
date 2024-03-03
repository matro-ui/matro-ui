import React, { useEffect, useRef, useState } from 'react'
import s from './index.module.css';
import clsx from "clsx"

export default function Checkbox({
  name,
  value,
  onChange,
  disabled,
  checked,
  toggle,
  linear,
  ...props
}) {
  const [init, setInit] = React.useState(false);
  const [locValue, setLocValue] = React.useState(value || checked);

  const handleChange = (e) => {
    if (!disabled) {
      let value = e.target.checked;
      setLocValue(value);
      if (typeof onChange === "function")
        onChange(e)
    }
  }

  const itemProps = {
    type: "checkbox",
    className: s.input,
    checked: locValue,
    onChange: handleChange,
    name
  }

  // To prevent init anim
  React.useEffect(() => {
    setInterval(() => setInit(true), 200);
  })

  return (
    <label
      className={clsx([
        "mtui-checkbox",
        s.parent,
        {
          [s.disabled]: disabled,
          [s.toggle]: toggle,
          [s.linear]: linear
        },
      ])}
      style={props.style}
    >
      {/* input hidden  */}
      <input {...itemProps} />

      {/* input visible  */}
      <span className={s.checkbox}>

        {locValue && !toggle ? (
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

            {init ?
              <polyline>
                <animate
                  attributeName="points"
                  dur="150ms"
                  from="2,4 5,7 5,7"
                  to="2,5 5,8 9.5,3"
                  fill="freeze"
                  begin="0ms" />
              </polyline>
              :
              <polyline points="2,5 5,8 9.5,3" />}

          </svg>
        ) : null}
      </span>

      {/* label  */}
      {props.children ? <span className={s.label}>{props.children}</span> : ""}
    </label>
  )
}

Checkbox.defaultProps = {
  name: "",
  value: null,
  onChange: null,
  checked: false,
  toggle: false,
  linear: false,
  disabled: false
}