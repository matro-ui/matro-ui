
const InputTextField = (props) => {
  const itemProps = {
    onChange: (e) => props.onChange(e.target.value),
    value: props.value,
    placeholder: props.placeholder,
    name: props.name
  }

  return (
  <input type="text"
    {...itemProps}
  >
    {props?.children}
  </input>
  );
};

export default InputTextField;

