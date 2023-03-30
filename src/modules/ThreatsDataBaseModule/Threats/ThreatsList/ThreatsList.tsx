import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import { List, IBreadcrumb } from 'shared/components'
import { ThreatsSortTypes } from 'shared/constants'
import { ListLayout } from 'shared/layout'
import { setLimitParam, setSearchParam } from 'shared/utils'
import { useQuerySettings } from 'shared/hooks'


import { axiosGetThreats } from 'store/Threats/actions'

const ThreatsList: FC = () => {
  const querySettings = useQuerySettings(ThreatsSortTypes)
  const { limit, search, sortType } = querySettings


  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetThreats({ limit, search, ordering: sortType.value }))
    })().catch(e => console.log(e))
    setLimitParam(limit)
    setSearchParam(search)
  }, [dispatch, limit, search, sortType.value])

  const threats = useAppSelector(state => state.threats.results)

  const breadcrumbs: IBreadcrumb[] = [
    {
      name: 'База данных угроз',
      link: '/threats-data-base'
    },
    {
      name: 'Угрозы',
      link: '/threats-data-base/threats'
    }
  ]

  return (
    <>
      <ListLayout
        breadcrumbs={breadcrumbs} querySettings={querySettings}
      >
        <List items={threats} type={'T'} />
      </ListLayout>
    </>
  )
}

export { ThreatsList }
