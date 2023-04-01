import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'

import { List, IBreadcrumb } from 'shared/components'
import { VulnerabilitiesSortTypes } from 'shared/constants'
import { ListLayout } from 'shared/layout'
import { setLimitParam, setSearchParam } from 'shared/utils'
import { useQuerySettings } from 'shared/hooks'

import { axiosGetVulnerabilities } from 'store/Vulnerabilities/actions'

const VulnerabilitiesList: FC = () => {
  const querySettings = useQuerySettings(VulnerabilitiesSortTypes)
  const { limit, search, sortType } = querySettings

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
        breadcrumbs={breadcrumbs} querySettings={querySettings}
      >
        <List items={vulnerabilities} type={'V'} />
      </ListLayout>
    </>
  )
}

export { VulnerabilitiesList }
