import React from 'react'
import s from "../../index.module.css";


const InputChildIcon = (props) => {
  const itemProps = { ...props };
  delete itemProps.children;

  if (props.children) return (
    <div
      {...itemProps}
      className={s.inputChildIcon}
    >
      {props.children}
    </div>
  );
  return ""
}

export default InputChildIcon