import React, { FC } from 'react'

import { ListItem } from 'shared/components'

import { ListProps } from './types'
import s from './list.module.scss'


const List: FC<ListProps> = ({
  items,
  type
}) => {
  return (
    <div className={s.container}>
      {items.map((item) =>
        <ListItem
          key={item.id}
          type={type}
          id={item.id}
          name={item.name}
          criticality_level={item.criticality_level}

        />
      )}
    </div>
  )
}

export { List }
