import React, { FC } from 'react'
import { ItemTableData } from 'shared/types'

import s from './itemTable.module.scss'


interface ItemTableProps {
  table: ItemTableData[]
}

const ItemTable: FC<ItemTableProps> = ({ table }) => {
  return (
      <div className={s.table}>
        {
          table.map(item =>
            <div key={item.id} className={s.row}>
              <div className={s.name}>{item.name}</div>
              <div className={s.value}>{item.value}</div>
            </div>
          )
        }
      </div>

  )
}

export { ItemTable }
