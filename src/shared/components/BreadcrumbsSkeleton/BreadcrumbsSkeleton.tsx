import React, { FC } from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import s from './breadcrumbsSkeleton.module.scss'


const BreadcrumbsSkeleton: FC = () => {
  return (
    <Skeleton className={s.breadcrumbs}/>
  )
}

export { BreadcrumbsSkeleton }
