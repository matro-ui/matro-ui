import React from "react";
import * as s from "./index.module.css";
import classNames from "../../../tools/classNames";

const defaultProps = {
  divider: "/",
  showLastDivider: true,
  children: null
}

const Breadcrumbs = (props = defaultProps) => {
  const inlineStyles = {
    ...props.style
  }
  const itemProps = {
    ...props
  }
  delete itemProps.style;
  delete itemProps.divider;
  delete itemProps.showLastDivider;
  delete itemProps.className;

  return (
  <nav 
    {...itemProps} 
    className={classNames({
      "mtui-breadcrumbs": true,
      [s.breadcrumbs]: true,
      [s.last_visible] : props.showLastDivider,
      [props.className]: !!props.className,
    })}
    style={inlineStyles}
  >
    {React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        divider: props.divider,
        ...child.props
      });
    })}
  </nav>
  );
};

export default Breadcrumbs;

