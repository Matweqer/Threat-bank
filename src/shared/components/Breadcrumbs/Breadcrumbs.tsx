import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import s from './breadcrumbs.module.scss'

export interface IBreadcrumb {
  name: string
  link: string
}

interface BreadcrumbsProps {
  breadcrumbs: IBreadcrumb[]
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <div className={s.breadcrumbs}>
      {
        breadcrumbs.map((breadcrumb, index) => (
          <Link className={s.breadcrumb} key={index} to={breadcrumb.link}> {breadcrumb.name} </Link>
        ))
      }
    </div>
  )
}

export { Breadcrumbs }
