import React from "react";
import s from "./index.module.css";
import clsx from "clsx";

const defaultProps = {
  divider: "/",
  showLastDivider: false,
  lastActive: false,
  children: null,
  className: ""
}

const Breadcrumbs = (props = defaultProps) => {
  const itemProps = {
    ...props
  }

  Object.keys(defaultProps).forEach(prop => delete itemProps[prop])
  return (
    <nav
      {...itemProps}
      className={clsx([
        "mtui-breadcrumbs",
        s.breadcrumbs,
        props.className,
        {
          [s.last_visible]: props.showLastDivider,
          [s.last_inactive]: !props.lastActive,
        }
      ])}
    >
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          divider: props?.divider,
          ...child.props
        });
      })}
    </nav>
  );
};

Breadcrumbs.defaultProps = defaultProps;

export default Breadcrumbs;

