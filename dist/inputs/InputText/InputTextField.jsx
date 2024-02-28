
const InputTextField = ({ value, placeholder, name, onChange }) => {
  const itemProps = { type: "text", placeholder, name };

  if (typeof onChange === "function")
    itemProps.onChange = onChange;

  if (value || value === "")
    itemProps.value = value;


  return <input {...itemProps} />
};


export default InputTextField;