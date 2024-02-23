import React from 'react'
import * as s from './index.module.css';
import classNames from '../../../tools/classNames';

const Accordion = (props) => {
  const inlineStyles = {
    ...props.style
  }

  const childProps = {...props, style: inlineStyles}

  return (
    <section {...{
      ...childProps, 
      className: classNames({
        ["mtui-accordion"]: true,
        [s.accordion]: s.accordion,
        ...childProps.className?.map(e => ({[e]: e})),
        })
      }}>
    {childProps.children}
    </section>
  )
}

export default Accordion