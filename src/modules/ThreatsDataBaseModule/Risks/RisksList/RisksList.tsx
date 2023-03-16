import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import { List, IBreadcrumb } from 'shared/components'
import { RisksSortTypes } from 'shared/constants'
import { ListLayout } from 'shared/layout'
import { ISortType } from 'shared/types'
import { getLimitParam, setLimitParam, setSearchParam, getSearchParam } from 'shared/utils'

import { axiosGetRisks } from 'store/Risk/actions'

const RisksList: FC = () => {
  const [sortType, setSortType] = useState<ISortType>(RisksSortTypes[0])
  const [search, setSearch] = useState<string>(getSearchParam())
  const [limit, setLimit] = useState<number>(getLimitParam())

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
        breadcrumbs={breadcrumbs} sortTypes={RisksSortTypes} search={search} limit={limit}
        setSortType={setSortType} setSearch={setSearch} setLimit={setLimit}
      >
        <List items={risks} type={'O'} />
      </ListLayout>
    </>
  )
}

export { RisksList }
