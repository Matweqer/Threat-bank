import React, { FC } from 'react'

import { ListItem } from '../ListItem'

import s from './list.module.scss'
import { ListItemsTypes, ListTypes } from 'shared/types'


interface ListProps {
  items: ListItemsTypes[]
  type: ListTypes
}

const List: FC<ListProps> = ({ items, type }) => {
  return (
    <div className={s.container}>
      {items.map((item) =>
        <ListItem
          key={item.id} type={type} id={item.id} name={item.name} criticality_level={item.criticality_level}
        ></ListItem>
      )}
    </div>
  )
}

export { List }
