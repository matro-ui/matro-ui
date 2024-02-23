import React from 'react'
import  s from './index.module.css';
import classNames from '../../../tools/classNames';


const Stack = (props) => {
  const inlineStyles = {
    'gap': props.gap,
    'flexWrap': props.wrap === "reverse" ? "wrap-reverse" : props.wrap ? "wrap" : "nowrap",
    ...props.style
  }
  const itemProps = {...props};
  delete itemProps.children;
  delete itemProps.wrap;
  delete itemProps.column;

  if(props.children) return (
    <div 
    {...itemProps}
    className={classNames({
      ["stack"] : true,
      [s.stack]: true,
      [s.column]: props.column,
      [s.stretch]: props.stretch,
      [itemProps.className]: itemProps.className
    })}
    style={inlineStyles}
    >{props.children}</div>
  );
  return ""
}

export default Stack