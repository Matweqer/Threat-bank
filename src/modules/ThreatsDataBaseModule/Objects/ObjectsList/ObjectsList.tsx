import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import { List, IBreadcrumb } from 'shared/components'
import { ObjectsSortTypes } from 'shared/constants'
import { ListLayout } from 'shared/layout'
import { setLimitParam, setSearchParam } from 'shared/utils'
import { useQuerySettings } from 'shared/hooks'

import { axiosGetObjects } from 'store/Object/actions'

const ObjectsList: FC = () => {
  const querySettings = useQuerySettings(ObjectsSortTypes)
  const { limit, search, sortType } = querySettings


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
        breadcrumbs={breadcrumbs} querySettings={querySettings}
      >
        <List items={objects} type={'O'} />
      </ListLayout>
    </>
  )
}

export { ObjectsList }
