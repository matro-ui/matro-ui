import React from 'react'
import * as s from './index.module.css';

const AccordionButton = (props) => {
  return (
    <button onClick={props.onClick} className={s.button}>{props.children}</button>
  )
}

AccordionButton.displayName = 'AccordionButton'

export default AccordionButton