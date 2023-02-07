import React, { FC } from 'react'

import { ItemHeader, ItemTable, ItemUsefulLinks } from 'shared/components'
import { ItemInfoData } from 'shared/types'

import s from './itemInfo.module.scss'

interface ItemInfoProps {
  data: ItemInfoData
}

const ItemInfo: FC<ItemInfoProps> = ({ data: { id, name, type, table, sources, articles } }) => {
  return (
    <div className={s.container}>

      <div className={s.tableContainer}>
        <ItemHeader id={id} type={type} name={name}/>
        {table && <ItemTable table={table}/> }
      </div>

      <div className={s.sourceContainer}>
        <ItemUsefulLinks sources={sources} articles={articles}/>
      </div>

    </div>
  )
}

export { ItemInfo }