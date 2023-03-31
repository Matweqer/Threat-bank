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
          level={
          ('danger_level' in item)
            ? item.danger_level
            : ('criticality_level' in item)
                ? item.criticality_level
                : ('impact_level' in item)
                    ? item.impact_level
                    : '0'
        }

        />
      )}
    </div>
  )
}

export { List }
