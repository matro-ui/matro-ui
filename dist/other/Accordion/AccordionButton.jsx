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
      {props.setIcon 
        ? props.setIcon 
        : <i className={s.icon}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 184 144 144 144-144"></path></svg>
          </i>
      }
    </button>
  )
}

AccordionButton.displayName = 'AccordionButton'

export default AccordionButton