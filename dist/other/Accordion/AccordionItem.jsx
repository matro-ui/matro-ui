import React, { useState } from 'react'
import * as s from './index.module.css';

const AccordionItem = (props) => {

  const [isOpened, setOpened] = useState(props.isOpened || false)
  const toggleOpened = () => {
    setOpened(!isOpened);
  } 
  return (
    <article>
      {React.Children.map((props.children), (child, i) => {
        const childProps = {...child.props}

        if(child.type.displayName === "AccordionButton")  {
          childProps.onClick = toggleOpened;
          return React.cloneElement(child, {...childProps, isOpened});
        }
        else {
          childProps["data-visible"] = isOpened
          childProps.className = 
            `mtui-accordion__item ${s.contentitem} ${isOpened ? s.visible : s.hidden}`
        }

        return React.cloneElement(child, childProps);
      })}
    </article>
  )
}

export default AccordionItem