import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import { List, IBreadcrumb } from 'shared/components'
import { ObjectsSortTypes } from 'shared/constants'
import { ListLayout } from 'shared/layout'
import { ISortType } from 'shared/types'
import { getLimitParam, setLimitParam, setSearchParam, getSearchParam } from 'shared/utils'

import { axiosGetObjects } from 'store/Object/actions'

const ObjectsList: FC = () => {
  const [sortType, setSortType] = useState<ISortType>(ObjectsSortTypes[0])
  const [search, setSearch] = useState<string>(getSearchParam())
  const [limit, setLimit] = useState<number>(getLimitParam())

  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetObjects({ limit, search, ordering: sortType.value }))
    })().catch(e => console.log(e))
    setLimitParam(limit)
    setSearchParam(search)
  }, [dispatch, limit, search, sortType.value])

  const objects = useAppSelector(state => state.objects.results)

  const breadcrumbs: IBreadcrumb[] = [
    {
      name: 'База данных угроз',
      link: '/threats-data-base'
    },
    {
      name: 'Объекты',
      link: '/threats-data-base/objects'
    }
  ]

  return (
    <>
      <ListLayout
        breadcrumbs={breadcrumbs} sortTypes={ObjectsSortTypes} search={search} limit={limit}
        setSortType={setSortType} setSearch={setSearch} setLimit={setLimit}
      >
        <List items={objects} type={'O'} />
      </ListLayout>
    </>
  )
}

export { ObjectsList }
