import { useState } from 'react'
import { ISortType } from '../types'
import { getLimitParam, getSearchParam } from '../utils'


const useQuerySettings = (initialSortTypes: ISortType[]) => {
  const [sortType, setSortType] = useState<ISortType>(initialSortTypes[0])
  const [search, setSearch] = useState<string>(getSearchParam())
  const [limit, setLimit] = useState<number>(getLimitParam())
  const [offset, setOffset] = useState<number>(0)

  return {
    sortType,
    setSortType,
    sortTypes: initialSortTypes,
    search,
    setSearch,
    limit,
    setLimit,
    offset,
    setOffset
  } as const
}

export { useQuerySettings }
