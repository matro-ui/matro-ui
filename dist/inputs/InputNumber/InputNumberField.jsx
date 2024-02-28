import React from "react";
export default ({ onChange, value, placeholder, name }) => {
  const itemProps = { placeholder, name };

  if (typeof onChange === "function")
    itemProps.onChange = onChange;

  if (value || value === "")
    itemProps.value = value;


  return (
    <input type="number"
      {...itemProps}
    />
  );
};
