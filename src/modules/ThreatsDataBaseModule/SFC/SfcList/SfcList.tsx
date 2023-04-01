import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import { List, IBreadcrumb } from 'shared/components'
import { SfcSortTypes } from 'shared/constants'
import { ListLayout } from 'shared/layout'

import { useQuerySettings } from 'shared/hooks'
import { setLimitParam, setSearchParam } from 'shared/utils'

import { axiosGetSfc } from 'store/SFC/actions'


const SfcList: FC = () => {
  const querySettings = useQuerySettings(SfcSortTypes)
  const { limit, search, sortType } = querySettings

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
        breadcrumbs={breadcrumbs} querySettings={querySettings}
      >
        <List items={sfc} type={'SFC'} />
      </ListLayout>
    </>
  )
}

export { SfcList }
