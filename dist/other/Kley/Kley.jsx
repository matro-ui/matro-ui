import React from 'react'
import s from './index.module.css';

const Kley = (props) => {
  if (props.children)
    return (
      <div className={s.key}>{props.children}</div>
    )
  return ""
}

export default Kley