import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ItemInfoData, ItemParams, ItemTableData } from 'shared/types'
import { Breadcrumbs, IBreadcrumb, ItemInfo } from 'shared/components'
import { useAppDispatch, useAppSelector } from 'store'
import { axiosGetAttack } from 'store/Attack/actions'


const AttackItem: FC = () => {
  const { id } = useParams<ItemParams>()

  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetAttack(id as string))
    })().catch(e => console.log(e))
  }, [dispatch, id])

  const attack = useAppSelector(state => state.attacks.current)

  const table: ItemTableData[] | null = attack && [
    { id: 1, name: 'Описание', value: attack.description },
    { id: 2, name: 'Цель', value: attack.purposes?.map(p => p.name).join(', ') || '-' },
    { id: 3, name: 'Характер воздействия сценария', value: attack.impact_nature || '-' },
    { id: 4, name: 'Этап', value: attack.stage || '-' },
    { id: 5, name: 'Инструментарий', value: attack.tools?.map(t => t.name).join(', ') || '-' },
    { id: 6, name: 'Последствия', value: attack.consequences?.map(c => c.name).join(', ') || '-' },
    { id: 7, name: 'Уровень влияния', value: attack.impact_level || '-' },
    { id: 8, name: 'CAPEC_ID', value: attack.capec_id || '-' },
    { id: 9, name: 'Архетипы', value: attack.archetypes },
    { id: 10, name: 'Нарушители', value: attack.intruders?.map(i => i.name).join(', ') || '-' }
  ]

  const data: ItemInfoData | null = attack && {
    id: attack.id,
    name: attack.name,
    type: 'A',
    table,
    sources: [],
    articles: [],
    images: attack.images
  }

  const breadcrumbs: IBreadcrumb[] | null = attack && [
    {
      name: 'База данных угроз',
      link: '/threats-data-base'
    },
    {
      name: 'Атаки',
      link: '/threats-data-base/attacks'
    },
    {
      name: attack.name,
      link: `/threats-data-base/attacks/${attack.id}`
    }
  ]

  return (
    <>
      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      {data && <ItemInfo data={data}/>}
    </>
  )
}

export { AttackItem }
