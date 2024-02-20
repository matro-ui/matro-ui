import React from "react";

const InputNumberField = (props) => {
  const itemProps = {
    onChange: (e) => props.onChange(e.target.value),
    value: props.value,
    placeholder: props.placeholder,
    name: props.name
  }

  return (
  <input type="number"
    {...itemProps}
  >
    {props?.children}
  </input>
  );
};

export default InputNumberField;

