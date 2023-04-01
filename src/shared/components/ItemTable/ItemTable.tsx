import React, { FC, useState } from 'react'

import { ItemTableProps } from './types'
import s from './itemTable.module.scss'
import { ItemTableData } from '../../types'


const ItemTable: FC<ItemTableProps> = ({ table }) => {
  const [dataMaxLen] = useState<number>(190)
  const [openedRows, setOpenedRows] = useState<Record<string, boolean>>({})

  const dataIsLong = (data: string | number | undefined) => {
    if (!data) return false
    if (typeof data === 'number') return data.toString().length > dataMaxLen
    return data.length > dataMaxLen
  }

  const toggleRowView = (row: string) => {
    setOpenedRows({ ...openedRows, [row]: !openedRows[row] })
  }

  const getRowValue = (item: ItemTableData) => {
    if (!item.value) return (<p> {'-'} </p>)

    if (typeof item.value !== 'string') {
      return (<p>
        {item.value.map((v, index) => (<span key={index} className={s.valueLinkWrap}>
          <a className={s.valueLink} target='_blank' rel='noreferrer' href={v.url}>{v.value}</a>
        </span>))}
      </p>)
    }

    if (dataIsLong(item.value) && !openedRows[item.name]) {
      return (<p>
        <span>{ item.value.toString().slice(0, dataMaxLen) + '...'}</span>
        <span className={s.showMore} onClick={() => toggleRowView(item.name)} >{'Показать ещё'}</span>
      </p>)
    }
    if (openedRows[item.name]) {
      return (<p>
        <span>{item.value}</span>
        <span className={s.showMore} onClick={() => toggleRowView(item.name)} >{'Скрыть'}</span>
      </p>)
    }


    return (<p><span>{item.value}</span></p>)
  }

  return (
      <div className={s.table}>
        {
          table.map((item) =>
            <div key={item.id} className={s.row}>

              <div className={s.name}>
                {item.name}
              </div>

              <div className={s.value}>
                { getRowValue(item)}
              </div>

            </div>
          )
        }
      </div>
  )
}

export { ItemTable }
