import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import { List, IBreadcrumb } from 'shared/components'
import { ISortType } from 'shared/types'
import { sortTypes } from 'shared/constants'

import { axiosGetSfc } from 'store/SFC/actions'
import { ListLayout } from 'shared/layout'


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
    <>
      <ListLayout
        breadcrumbs={breadcrumbs} sortType={sortType} search={search} limit={limit}
        setSortType={setSortType} setSearch={setSearch} setLimit={setLimit}
      >
        <List items={sfc} type={'SFC'} />
      </ListLayout>

    </>
  )
}

export { SfcList }
