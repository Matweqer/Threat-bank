import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import { List, IBreadcrumb } from 'shared/components'
import { RisksSortTypes } from 'shared/constants'
import { ListLayout } from 'shared/layout'
import { setLimitParam, setSearchParam } from 'shared/utils'
import { useQuerySettings } from 'shared/hooks'

import { axiosGetRisks } from 'store/Risk/actions'

const RisksList: FC = () => {
  const querySettings = useQuerySettings(RisksSortTypes)
  const { limit, search, sortType } = querySettings

  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetRisks({ limit, search, ordering: sortType.value }))
    })().catch(e => console.log(e))
    setLimitParam(limit)
    setSearchParam(search)
  }, [dispatch, limit, search, sortType.value])

  const risks = useAppSelector(state => state.risks.results)

  const breadcrumbs: IBreadcrumb[] = [
    {
      name: 'База данных угроз',
      link: '/threats-data-base'
    },
    {
      name: 'Риски',
      link: '/threats-data-base/risks'
    }
  ]

  return (
    <>
      <ListLayout
        breadcrumbs={breadcrumbs} querySettings={querySettings}
      >
        <List items={risks} type={'R'} />
      </ListLayout>
    </>
  )
}

export { RisksList }
