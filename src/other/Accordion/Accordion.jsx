import React from 'react'
import s from './index.module.css';
import clsx from 'clsx';

const defaultProps = {
  children: null,
  setIcon: null,
  className: "",
  style: {},
}

const Accordion = (props) => {
  const inlineStyles = {
    ...props.style
  }
  const childProps = { ...props, style: inlineStyles }
  delete childProps["setIcon"];

  return (
    <section {...{
      ...childProps,
      className: clsx([
        s.accordion,
        "mtui-accordion",
        childProps.className,
        {
          [s.accordion]: s.accordion,
        }
      ])
    }}>
      {React.Children.map(childProps.children, (child) => {
        return React.cloneElement(child, {
          setIcon: props.setIcon,
          ...child.props
        });
      })}
    </section>
  )
}

Accordion.defaultProps = defaultProps;

export default Accordion