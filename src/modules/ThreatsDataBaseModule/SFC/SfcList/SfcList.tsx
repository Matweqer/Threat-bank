import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import { List, Breadcrumbs, IBreadcrumb, ListFiltersBlock } from 'shared/components'
import { ISortType } from 'shared/types'
import { sortTypes } from 'shared/constants'

import { axiosGetSfc } from 'store/SFC/actions'


const SfcList: FC = () => {
  const [sortType, setSortType] = useState<ISortType>(sortTypes[0])
  const [search, setSearch] = useState<string>('')
  const [limit, setLimit] = useState<number>(10)

  const dispatch = useAppDispatch()


  useEffect(() => {
    (async () => {
      await dispatch(axiosGetSfc({ limit }))
    })().catch(e => console.log(e))
  }, [dispatch, limit])


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
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <ListFiltersBlock
        sortType={sortType}
        search={search}
        pagination={limit}
        setSortType={setSortType}
        setSearch={setSearch}
        setPagination={setLimit}
      />
      <List items={sfc} type={'SFC'}/>
    </div>
  )
}

export { SfcList }
