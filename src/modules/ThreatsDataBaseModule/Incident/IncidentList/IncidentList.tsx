import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import { List, IBreadcrumb } from 'shared/components'
import { IncidentsSortTypes } from 'shared/constants'
import { ListLayout } from 'shared/layout'
import { setLimitParam, setSearchParam } from 'shared/utils'
import { useQuerySettings } from 'shared/hooks'


import { axiosGetIncidents } from 'store/Incident/actions'


const IncidentsList: FC = () => {
  const querySettings = useQuerySettings(IncidentsSortTypes)
  const { limit, search, sortType } = querySettings

  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetIncidents({ limit, search, ordering: sortType.value }))
    })().catch(e => console.log(e))
    setLimitParam(limit)
    setSearchParam(search)
  }, [dispatch, limit, search, sortType.value])

  const incidents = useAppSelector(state => state.incident.results)

  const breadcrumbs: IBreadcrumb[] = [
    {
      name: 'База данных угроз',
      link: '/threats-data-base'
    },
    {
      name: 'Инциденты',
      link: '/threats-data-base/incidents'
    }
  ]

  return (
    <>
      <ListLayout
        breadcrumbs={breadcrumbs} querySettings={querySettings}
      >
        <List items={incidents} type={'I'} />
      </ListLayout>
    </>
  )
}

export { IncidentsList }
