import React, { FC } from 'react'

import { ListItem } from '../ListItem'
import { ISfc } from 'shared/types'

import s from './list.module.scss'

type ListTypes = ISfc;

interface ListProps {
  items: ListTypes[]
}

const List: FC<ListProps> = ({ items }) => {
  return (
    <div className={s.container}>
      {items.map((item) =>
        <ListItem
          key={item.id} id={item.id} name={item.name} criticality_level={item.criticality_level}
        ></ListItem>
      )}
    </div>
  )
}

export { List }
