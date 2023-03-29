import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ItemInfoData, ItemParams, ItemTableData } from 'shared/types'
import { Breadcrumbs, IBreadcrumb, ItemInfo } from 'shared/components'
import { useAppDispatch, useAppSelector } from 'store'
import { axiosGetThreat } from 'store/Threats/actions'


const ThreatItem: FC = () => {
  const { id } = useParams<ItemParams>()

  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetThreat(id as string))
    })().catch(e => console.log(e))
  }, [dispatch, id])

  const threat = useAppSelector(state => state.threats.current)

  const table: ItemTableData[] | null = threat && [
    { id: 1, name: 'Описание', value: threat.description },
    { id: 2, name: 'Объект', value: threat.object?.name || '-' },
    { id: 3, name: 'СФХ', value: threat.sfc?.name || '-' },
    { id: 4, name: 'Атака', value: threat.attack?.name || '-' },
    { id: 5, name: 'Уязвимость', value: threat.vulnerability?.name || '-' },
    { id: 6, name: 'Риски', value: threat.risks?.map(c => c.name).join(', ') || '-' }
  ]

  const data: ItemInfoData | null = threat && {
    id: threat.id,
    name: threat.name,
    type: 'T',
    table,
    sources: [],
    articles: []
  }

  const breadcrumbs: IBreadcrumb[] | null = threat && [
    {
      name: 'База данных угроз',
      link: '/threats-data-base'
    },
    {
      name: 'Угрозы',
      link: '/threats-data-base/threats'
    },
    {
      name: threat.name,
      link: `/threats-data-base/attacks/${threat.id}`
    }
  ]

  return (
    <>
      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      {data && <ItemInfo data={data}/>}
    </>
  )
}

export { ThreatItem }
