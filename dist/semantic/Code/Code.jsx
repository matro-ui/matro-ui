import React from 'react'
import * as s from "./index.module.css";
import classNames from '../../../tools/classNames';

const Code = (props) => {
  const itemProps = {...props}
  if(!itemProps.color 
    || [
    "red", 
    "blue", 
    "yellow", 
    "cyan", 
    "purple", 
    "teal", 
    "pink",
    "green", 
    "black"].indexOf(itemProps.color) === -1) {
      itemProps.color = "gray"
    }
    
  if(props.children)
    return <span className={classNames({
      "mtui-codeblock": true,
      [s.code]: true,
      [s["code__color_" + itemProps.color]]: itemProps.color,
      [props.className]: !!props.className,
    })}
    >{props.children}</span>
  return ""
}

export default Code