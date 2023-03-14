import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import { List, IBreadcrumb } from 'shared/components'
import { SfcSortTypes } from 'shared/constants'
import { ListLayout } from 'shared/layout'
import { ISortType } from 'shared/types'

import { axiosGetSfc } from 'store/SFC/actions'
import { getLimitParam, setLimitParam, setSearchParam, getSearchParam } from 'shared/utils'


const SfcList: FC = () => {
  const [sortType, setSortType] = useState<ISortType>(SfcSortTypes[0])
  const [search, setSearch] = useState<string>(getSearchParam())
  const [limit, setLimit] = useState<number>(getLimitParam())

  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetSfc({ limit, search, ordering: sortType.value }))
    })().catch(e => console.log(e))
    setLimitParam(limit)
    setSearchParam(search)
  }, [dispatch, limit, search, sortType.value])

  const sfc = useAppSelector(state => state.sfc.results)

  const breadcrumbs: IBreadcrumb[] = [
    {
      name: 'База данных угроз',
      link: '/threats-data-base'
    },
    {
      name: 'СФХ',
      link: '/threats-data-base/SFC'
    }
  ]

  return (
    <>
      <ListLayout
        breadcrumbs={breadcrumbs} sortTypes={SfcSortTypes} search={search} limit={limit}
        setSortType={setSortType} setSearch={setSearch} setLimit={setLimit}
      >
        <List items={sfc} type={'SFC'} />
      </ListLayout>
    </>
  )
}

export { SfcList }
