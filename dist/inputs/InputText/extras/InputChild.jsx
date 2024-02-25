import React from 'react'
import s from "../../index.module.css";


const InputChild = (props) => {
  const itemProps = { ...props };
  delete itemProps.children;

  if (props.children) return (
    <div
      {...itemProps}
      className={s.inputChild}
    >
      {React.Children.map(props.children, (child) => {
        const childProps = {
          ...itemProps,
          ...child.props
        }
        if (child.props.onClick)
          childProps.onClick = (e) => child.props.onClick(e, childProps)
        return React.cloneElement(child, childProps);
      })}
    </div>
  );
  return ""
}

export default InputChild