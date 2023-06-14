import React, { FC } from 'react'

import { IResultTableProps } from './types'

import s from './resultTable.module.scss'


const ResultTable: FC<IResultTableProps> = ({
  headers,
  items
}) => {
  return (
    <div className={s.container}>
      <table className={s.table}>

        <thead className={s.headers}>
        <tr>
          {headers.map((header, index) => (
              <th key={index} className={s.header}>
                 <p>{header}</p>
              </th>
          )
          )}
        </tr>
        </thead>

        <tbody className={s.items}>
        {items.map((item, index) => (
          <tr key={index} className={s.item}>
            {item.map((value, cellIndex) => (
              <th key={cellIndex} className={s.cell}>
                { value }
              </th>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>

  )
}

export { ResultTable }
