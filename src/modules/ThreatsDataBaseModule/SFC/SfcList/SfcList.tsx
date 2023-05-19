import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import { List, IBreadcrumb } from 'shared/components'
import { SfcSortTypes } from 'shared/constants'
import { ListLayout } from 'shared/layout'

import { useAfterFirstRender, useQuerySettings } from 'shared/hooks'
import { setLimitParam, setSearchParam } from 'shared/utils'

import { axiosAddSfc, axiosGetSfc } from 'store/SFC/actions'


const SfcList: FC = () => {
  const querySettings = useQuerySettings(SfcSortTypes)
  const { limit, search, sortType, offset } = querySettings

  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetSfc({ limit, search, ordering: sortType.value }))
    })().catch(e => console.log(e))
    setLimitParam(limit)
    setSearchParam(search)
  }, [dispatch, limit, search, sortType.value])


  const { results: sfc, next } = useAppSelector(state => state.sfc)

  const isAfterFirstRender = useAfterFirstRender()

  useEffect(() => {
    if (!isAfterFirstRender) return
    if (next) {
      (async () => {
        await dispatch(axiosAddSfc({ next }))
      })().catch(e => console.log(e))
    }
    // eslint-disable-next-line
  }, [dispatch, offset])

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
