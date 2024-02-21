import React from 'react'
import * as s from "./index.module.css";

const LabelText = ({children}) => {
  return (
    <div className={s.label}>{children}</div>
  )
}

export default LabelText