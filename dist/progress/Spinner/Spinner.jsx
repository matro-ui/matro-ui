import React from 'react'
import * as s from './index.module.css';
import classNames from '../../../tools/classNames';

const Spinner = (props) => {
  return (
    <div
      className={classNames({
        "mtui-spinner": true,
        [s.parent]: true,
        [props.className]: !!props.className,
      })}
      style={props.styles}
    >
      <span className={s.act}/>
      <span className={s.text}>Loading...</span>
    </div>
  )
}

export default Spinner