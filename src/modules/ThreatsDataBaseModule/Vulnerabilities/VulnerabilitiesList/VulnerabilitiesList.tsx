import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import { List, IBreadcrumb } from 'shared/components'
import { VulnerabilitiesSortTypes } from 'shared/constants'
import { ListLayout } from 'shared/layout'
import { ISortType } from 'shared/types'
import { getLimitParam, setLimitParam, setSearchParam, getSearchParam } from 'shared/utils'

import { axiosGetVulnerabilities } from 'store/Vulnerabilities/actions'

const VulnerabilitiesList: FC = () => {
  const [sortType, setSortType] = useState<ISortType>(VulnerabilitiesSortTypes[0])
  const [search, setSearch] = useState<string>(getSearchParam())
  const [limit, setLimit] = useState<number>(getLimitParam())

  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetVulnerabilities({ limit, search, ordering: sortType.value }))
    })().catch(e => console.log(e))
    setLimitParam(limit)
    setSearchParam(search)
  }, [dispatch, limit, search, sortType.value])

  const vulnerabilities = useAppSelector(state => state.vulnerabilities.results)

  const breadcrumbs: IBreadcrumb[] = [
    {
      name: 'База данных угроз',
      link: '/threats-data-base'
    },
    {
      name: 'Уязвимости',
      link: '/threats-data-base/Vulnerabilities'
    }
  ]

  return (
    <>
      <ListLayout
        breadcrumbs={breadcrumbs} sortTypes={VulnerabilitiesSortTypes} search={search} limit={limit}
        setSortType={setSortType} setSearch={setSearch} setLimit={setLimit}
      >
        <List items={vulnerabilities} type={'V'} />
      </ListLayout>
    </>
  )
}

export { VulnerabilitiesList }
