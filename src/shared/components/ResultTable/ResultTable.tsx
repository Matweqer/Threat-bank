import React, { FC } from 'react'

import { IResultTableProps } from './types'

import s from './resultTable.module.scss'


const ResultTable: FC<IResultTableProps> = ({
  headers,
  items
}) => {
  return (
    <div className={s.container}>

      <div className={s.headers}>
        {headers.map((header, index) => (
            <div key={index} className={s.header}>
              {header}
            </div>
        )
        )}
      </div>

      <div className={s.items}>
        {items.map((item, index) => (
          <div key={index} className={s.item}>
            {item.map((value, cellIndex) => (
              <div key={cellIndex} className={s.cell}>
                { value }
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export { ResultTable }
