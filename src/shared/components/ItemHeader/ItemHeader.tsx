import React, { FC } from 'react'
import { ListTypes } from 'shared/types'
import s from './itemHeader.module.scss'

interface ItemHeaderProps {
  id: number
  type: ListTypes
  name: string
}

const ItemHeader: FC<ItemHeaderProps> = ({ id, type, name }) => {
  return (
    <div className={s.header}>
      <h1 className={s.title}> {name}</h1>
      <h2 className={s.id}>ID {type}.{id} </h2>
    </div>
  )
}

export { ItemHeader }
