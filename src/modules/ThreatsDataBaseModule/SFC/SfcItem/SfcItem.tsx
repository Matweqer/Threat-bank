import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ItemInfoData, ItemParams, ItemTableData } from 'shared/types'
import { Breadcrumbs, IBreadcrumb, ItemInfo } from 'shared/components'
import { useAppDispatch, useAppSelector } from 'store'
import { axiosGetSfcItem } from 'store/SFC/actions'


const SfcItem: FC = () => {
  const { id } = useParams<ItemParams>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetSfcItem(id as string))
    })().catch(e => console.log(e))
  }, [dispatch, id])

  const sfcItem = useAppSelector(state => state.sfc.current)
  // TODO CREATE BUILDER TABLE
  const table: ItemTableData[] | null = sfcItem && [
    { id: 1, name: 'Описание', value: sfcItem.description },
    { id: 2, name: 'Класс', value: sfcItem.sfc_type?.sfc_class?.name || '-' },
    { id: 3, name: 'Тип', value: sfcItem.sfc_type?.name || '-' },
    { id: 4, name: 'Наименование в системе', value: sfcItem.name_in_system },
    { id: 5, name: 'Версия', value: sfcItem.version },
    { id: 6, name: 'Уровень критичности', value: sfcItem.criticality_level },
    { id: 7, name: 'Уровень дестабилизации', value: sfcItem.destabilization_level },
    { id: 8, name: 'Архетипы', value: sfcItem.archetypes }
  ]

  const data: ItemInfoData | null = sfcItem && {
    id: sfcItem.id,
    name: sfcItem.name,
    type: 'SFC',
    table,
    sources: sfcItem.sources.filter((s) => s.type === 1),
    articles: sfcItem.sources.filter((s) => s.type === 0)
  }

  // TODO CREATE BUILDER BREADECRUMB
  const breadcrumbs: IBreadcrumb[] | null = sfcItem && [
    {
      name: 'База данных угроз',
      link: '/threats-data-base'
    },
    {
      name: 'СФХ',
      link: '/threats-data-base/SFC'
    },
    {
      name: sfcItem.name,
      link: `/threats-data-base/SFC/${sfcItem.id}`
    }
  ]

  return (
    <>
      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      {data && <ItemInfo data={data}/>}
    </>
  )
}

export { SfcItem }
