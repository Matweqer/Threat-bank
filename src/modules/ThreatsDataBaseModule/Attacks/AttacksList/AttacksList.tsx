import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import { List, IBreadcrumb } from 'shared/components'
import { AttacksSortTypes } from 'shared/constants'
import { ListLayout } from 'shared/layout'
import { useQuerySettings } from 'shared/hooks'
import { setLimitParam, setSearchParam } from 'shared/utils'

import { axiosGetAttacks } from 'store/Attack/actions'

const AttacksList: FC = () => {
  const querySettings = useQuerySettings(AttacksSortTypes)
  const { limit, search, sortType } = querySettings

  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetAttacks({ limit, search, ordering: sortType.value }))
    })().catch(e => console.log(e))
    setLimitParam(limit)
    setSearchParam(search)
  }, [dispatch, limit, search, sortType.value])

  const attacks = useAppSelector(state => state.attacks.results)

  const breadcrumbs: IBreadcrumb[] = [
    {
      name: 'База данных угроз',
      link: '/threats-data-base'
    },
    {
      name: 'Атаки',
      link: '/threats-data-base/attacks'
    }
  ]

  return (
    <>
      <ListLayout
        breadcrumbs={breadcrumbs} querySettings={querySettings}
      >
        <List items={attacks} type={'A'} />
      </ListLayout>
    </>
  )
}

export { AttacksList }
