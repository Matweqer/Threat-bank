import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ItemInfoData, ItemParams, ItemTableData } from 'shared/types'
import { Breadcrumbs, IBreadcrumb, ItemInfo, TableSkeleton } from 'shared/components'
import { useAppDispatch, useAppSelector } from 'store'

import { axiosGetIncident } from 'store/Incident/actions'


const IncidentItem: FC = () => {
  const { id } = useParams<ItemParams>()

  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetIncident(id as string))
    })().catch(e => console.log(e))
  }, [dispatch, id])

  const { status, current: incident } = useAppSelector(state => state.incident)

  const table: ItemTableData[] | null = incident && [
    // { id: 1, name: 'Описание', value: incident.description }
    // { id: 2, name: 'Тип', value: incident.  || '-' },
    // { id: 3, name: 'Источник', value: incident. || '-' },
    // { id: 4, name: 'Наличие инцидента в сторонних БД', value: incident. || '-' },
    // { id: 5, name: 'Дата публикации', value: incident. || '-' }
  ]

  const data: ItemInfoData | null = incident && {
    id: incident.id,
    name: incident.name,
    type: 'I',
    table,
    sources: [],
    articles: []
  }

  const breadcrumbs: IBreadcrumb[] | null = incident && [
    {
      name: 'База данных угроз',
      link: '/threats-data-base'
    },
    {
      name: 'Атаки',
      link: '/threats-data-base/incidents'
    },
    {
      name: incident.name,
      link: `/threats-data-base/incidents/${incident.id}`
    }
  ]

  return (
    <>
      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      {status !== 'resolved' && <TableSkeleton/>}
      {data && status === 'resolved' && <ItemInfo data={data}/> }
    </>
  )
}

export { IncidentItem }
