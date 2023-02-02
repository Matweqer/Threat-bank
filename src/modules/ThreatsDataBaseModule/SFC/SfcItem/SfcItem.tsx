import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemParams } from 'shared/types'

import { ItemTable, ItemHeader, ItemTableData } from 'shared/components'
import { useAppDispatch, useAppSelector } from 'store'
import { axiosGetSfcItem } from 'store/SFC/actions'

import s from './SfcItem.module.scss'

const SfcItem: FC = () => {
  const { id } = useParams<ItemParams>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetSfcItem(id as string))
    })().catch(e => console.log(e))
  }, [dispatch, id])

  const sfcItem = useAppSelector(state => state.sfc.currentSfc)

  const table: ItemTableData[] | null = sfcItem && [
    { id: 1, name: 'Описание', value: sfcItem.description },
    { id: 2, name: 'Тип', value: sfcItem.evaluation_object.type.name },
    { id: 3, name: 'Объект СФХ', value: sfcItem.evaluation_object.name },
    { id: 4, name: 'Наименование в системе', value: sfcItem.name_in_system },
    { id: 5, name: 'Версия', value: sfcItem.version },
    { id: 6, name: 'Уровень критичности', value: sfcItem.criticality_level.toString() },
    { id: 7, name: 'Уровень дестабилизации', value: sfcItem.destabilization_level.toString() },
    { id: 8, name: 'Архетипы', value: sfcItem.archetypes }
  ]

  return (
    <div className={s.container}>
      {sfcItem && <ItemHeader id={sfcItem.id} name={sfcItem.name} type={'SFC'}/>}

      {table && <ItemTable table={table}/>}
    </div>

  )
}

export { SfcItem }
