import React, { FC } from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import s from './tableSkeleton.module.scss'


const TableSkeleton: FC = () => {
  return (
    <div className={s.container}>
      <Skeleton className={s.title}/>
      <Skeleton className={s.id}/>
      <Skeleton className={s.table}/>
    </div>
  )
}

export { TableSkeleton }
