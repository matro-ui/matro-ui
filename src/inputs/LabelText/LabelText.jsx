import React from 'react'
import s from "./index.module.css";

const LabelText = ({ children }) => {
  return (
    <div className={s.label}>{children}</div>
  )
}

export default LabelText