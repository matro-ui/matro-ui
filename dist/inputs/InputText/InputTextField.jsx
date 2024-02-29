
const InputTextField = ({ value, placeholder, name, onChange, disabled }) => {
  const itemProps = { type: "text", placeholder, name, disabled };

  if (typeof onChange === "function")
    itemProps.onChange = onChange;

  if (value || value === "")
    itemProps.value = value;


  return <input {...itemProps} />
};


export default InputTextField;