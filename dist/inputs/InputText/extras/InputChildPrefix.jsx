import React from 'react'
import * as s from "../../index.module.css";


const InputChildPrefix = ({childProps}) => {

  if(childProps.value) return (
    <div className={s.inputPrefix}>{childProps.value}</div>
  )
  return ""
}

export default InputChildPrefix