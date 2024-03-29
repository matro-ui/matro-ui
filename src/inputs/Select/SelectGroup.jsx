import React from 'react'
import clsx from "clsx";
import s from './index.module.css';

const defaultProps = {
  value: "",
  onChange: () => { },
}

const SelectGroup = (props = defaultProps) => {
  const { onChange, value, fitContent } = props;
  const defaultValue = value || props.defaultValue || "";
  const [valueLoc, setValueLoc] = React.useState(defaultValue);


  const inlineStyles = {
    ...props.style
  }

  const handleChange = (e) => {
    if (onChange)
      onChange(e.target.value)
    else
      setValueLoc(e.target.value)
  }

  if (props.children) return (
    <label
      className={clsx([
        "mtui-selectgroup",
        [s.parent],
        {
          [props.className]: !!props.className,
          [s.fitContent]: !!props.fitContent
        }
      ])}
      style={inlineStyles}
    >
      <select
        {...{
          className: s.select,
          onChange: handleChange,
          value: onChange ? defaultValue : valueLoc,
        }}
      >
        {props.children}
      </select>
      <i className={s.icon}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="m112 184 144 144 144-144"></path></svg>
      </i>
    </label>
  )
}

export default SelectGroup