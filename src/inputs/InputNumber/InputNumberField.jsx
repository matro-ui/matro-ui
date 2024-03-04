import React from "react";
export default ({ onChange, value, placeholder, name, disabled }) => {
  const itemProps = { placeholder, name, disabled };

  if (typeof onChange === "function")
    itemProps.onChange = onChange;

  if (value || value === "" || value === 0)
    itemProps.value = value;


  return (
    <input type="number"
      {...itemProps}
    />
  );
};
