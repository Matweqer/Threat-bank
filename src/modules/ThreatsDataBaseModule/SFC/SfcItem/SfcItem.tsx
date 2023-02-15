import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemInfoData, ItemParams, ItemTableData } from 'shared/types'

import { Breadcrumbs, IBreadcrumb, ItemInfo } from 'shared/components'
import { useAppDispatch, useAppSelector } from 'store'
import { axiosGetSfcItem } from 'store/SFC/actions'

// import s from './SfcItem.module.scss'

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

  const data: ItemInfoData | null = sfcItem && {
    id: sfcItem.id,
    name: sfcItem.name,
    type: 'SFC',
    table,
    sources: [
      {
        name: 'lorem source lorem source lorem source // lorem source/ lorem sourcelorem source: lorem source lorem source/ lorem sourcelorem source: lorem source .. 232. ds',
        link: 'https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'
      },
      {
        name: 'lorem source lorem source lorem source // lorem source/ lorem sourcelorem source: lorem source lorem source/ lorem sourcelorem source: lorem source .. 232. ds',
        link: 'https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'
      },
      {
        name: 'lorem source lorem source lorem source // lorem source/ lorem sourcelorem source: lorem source lorem source/ lorem sourcelorem source: lorem source .. 232. ds',
        link: 'https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'
      }],
    articles: [
      {
        name: 'some lorem article some lorem article // some lorem article/ some lorem article: some lorem article',
        link: 'https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'
      }
    ]
  }

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
