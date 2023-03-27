import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import { List, IBreadcrumb } from 'shared/components'
import { AttacksSortTypes } from 'shared/constants'
import { ListLayout } from 'shared/layout'
import { ISortType } from 'shared/types'
import { getLimitParam, setLimitParam, setSearchParam, getSearchParam } from 'shared/utils'

import { axiosGetAttacks } from 'store/Attack/actions'

const AttacksList: FC = () => {
  const [sortType, setSortType] = useState<ISortType>(AttacksSortTypes[0])
  const [search, setSearch] = useState<string>(getSearchParam())
  const [limit, setLimit] = useState<number>(getLimitParam())

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
      name: 'Аттаки',
      link: '/threats-data-base/attacks'
    }
  ]

  return (
    <>
      <ListLayout
        breadcrumbs={breadcrumbs} sortTypes={AttacksSortTypes} search={search} limit={limit}
        setSortType={setSortType} setSearch={setSearch} setLimit={setLimit}
      >
        <List items={attacks} type={'A'} />
      </ListLayout>
    </>
  )
}

export { AttacksList }
