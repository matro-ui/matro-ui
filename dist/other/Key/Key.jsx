import React from 'react'
import s from './index.module.css';
import clsx from 'clsx';

const Key = (props) => {
  if (props.children)
    return (
      <kbd className={clsx(s.key, { [s.vintage]: props.vintage })}>{props.children}</kbd>
    )
  return ""
}

export default Key