import React from 'react'
import * as s from './index.module.css';

const BreadcrumbsDivider = (props) => {
  if(props.divider) return <div className={`${s.divider} ${s.divider_child}`}>{props.divider}</div>
  return <div className={s.divider}>/</div>
}

export default BreadcrumbsDivider