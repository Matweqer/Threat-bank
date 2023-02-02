import React, { FC } from 'react'

import s from './itemTable.module.scss'


export interface ItemTableData {
  id: number
  name: string
  value: string
}

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
