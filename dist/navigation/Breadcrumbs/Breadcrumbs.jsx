import React from "react";
import s from "./index.module.css";
import classNames from "../../../tools/classNames";

const defaultProps = {
  divider: "/",
  showLastDivider: true,
  lastActive: false,
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
  delete itemProps.lastActive;

  return (
    <nav
      {...itemProps}
      className={classNames({
        "mtui-breadcrumbs": true,
        [s.breadcrumbs]: true,
        [s.last_visible]: props.showLastDivider,
        [s.last_inactive]: !props.lastActive,
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

