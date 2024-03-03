import React from 'react'

const defaultProps = {
  value: false,
  disabled: false,
}

const Select = (props = defaultProps) => {
  const { value, disabled, defaultValue } = props;
  if (props.children) return (
    <option value={value} disabled={disabled} checked={value === defaultValue}>{props.children}</option>
  )
}

export default Select