import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ItemInfoData, ItemParams, ItemTableData } from 'shared/types'
import { Breadcrumbs, IBreadcrumb, ItemInfo } from 'shared/components'
import { useAppDispatch, useAppSelector } from 'store'
import { axiosGetObject } from 'store/Object/actions'


const ObjectItem: FC = () => {
  const { id } = useParams<ItemParams>()

  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetObject(id as string))
    })().catch(e => console.log(e))
  }, [dispatch, id])

  const object = useAppSelector(state => state.objects.current)

  const table: ItemTableData[] | null = object && [
    { id: 1, name: 'Описание', value: object.description },
    { id: 2, name: 'Домен', value: object.domain?.name || '-' },
    { id: 3, name: 'Характеристики', value: object.characteristics.map(c => c.name).join(', ') || '-' },
    { id: 4, name: 'Уровень критичности', value: object.criticality_level || '-' },
    { id: 7, name: 'Архетипы', value: object.archetypes }
  ]

  const data: ItemInfoData | null = object && {
    id: object.id,
    name: object.name,
    type: 'O',
    table,
    sources: [],
    articles: []
  }

  const breadcrumbs: IBreadcrumb[] | null = object && [
    {
      name: 'База данных угроз',
      link: '/threats-data-base'
    },
    {
      name: 'Объекты',
      link: '/threats-data-base/objects'
    },
    {
      name: object.name,
      link: `/threats-data-base/objects/${object.id}`
    }
  ]

  return (
    <>
      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      {data && <ItemInfo data={data}/>}
    </>
  )
}

export { ObjectItem }
