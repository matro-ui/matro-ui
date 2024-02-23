import React from 'react'
import * as s from './index.module.css';
import classNames from '../../../tools/classNames';

const AccordionButton = (props) => {
  return (
    <button onClick={props.onClick} className={classNames({
      [s.button]: true,
      [s.button_opened]: props.isOpened,
    })}>
      <span className={s.children}>{props.children}</span>
      {typeof props.setIcon === "function"
        ? props.setIcon(props)
        : <i className={s.icon}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="m112 184 144 144 144-144"></path></svg>
          </i>
      }
    </button>
  )
}

AccordionButton.displayName = 'AccordionButton'

export default AccordionButton