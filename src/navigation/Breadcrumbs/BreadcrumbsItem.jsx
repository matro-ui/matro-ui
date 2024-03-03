import React from 'react'
import s from './index.module.css';
import BreadcrumbsDivider from './BreadcrumbsDivider';

const BreadcrumbsItem = (props) => {
  return (
    <div className={s.item}>
      <span className={s.link}>{props.children}</span>
      <BreadcrumbsDivider divider={props.divider} />
    </div>
  )
}

export default BreadcrumbsItem