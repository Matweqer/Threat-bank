import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ItemInfoData, ItemParams, ItemTableData } from 'shared/types'
import { Breadcrumbs, BreadcrumbsSkeleton, IBreadcrumb, ItemInfo, TableSkeleton } from 'shared/components'
import { useAppDispatch, useAppSelector } from 'store'
import { axiosGetRisk } from 'store/Risk/actions'


const RiskItem: FC = () => {
  const { id } = useParams<ItemParams>()

  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetRisk(id as string))
    })().catch(e => console.log(e))
  }, [dispatch, id])

  const { status, current: risk } = useAppSelector(state => state.risks)

  const table: ItemTableData[] | null = risk && [
    { id: 1, name: 'Описание', value: risk.description },
    { id: 2, name: 'Тип ущерба', value: risk.damage_type.map(d => d.name).join(', ') || '-' },
    { id: 3, name: 'Уровень критичности', value: risk.criticality_level || '-' },
    { id: 4, name: 'Архетипы', value: risk.archetypes }
  ]

  const data: ItemInfoData | null = risk && {
    id: risk.id,
    name: risk.name,
    type: 'R',
    table,
    sources: [],
    articles: []
  }

  const breadcrumbs: IBreadcrumb[] | null = risk && [
    {
      name: 'База данных угроз',
      link: '/threats-data-base'
    },
    {
      name: 'Риски',
      link: '/threats-data-base/risks'
    },
    {
      name: risk.name,
      link: `/threats-data-base/risks/${risk.id}`
    }
  ]

  return (
    <>
      {status !== 'resolved' && <BreadcrumbsSkeleton/>}
      {status !== 'resolved' && <TableSkeleton/>}

      {breadcrumbs && status === 'resolved' && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      {data && status === 'resolved' && <ItemInfo data={data}/> }
    </>
  )
}

export { RiskItem }
