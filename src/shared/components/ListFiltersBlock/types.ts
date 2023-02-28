import { ISortType } from 'shared/types'

export interface ListFiltersBlockProps {
  sortTypes: ISortType[]
  search: string
  limit: number

  setSortType: (value: ISortType) => void
  setSearch: (value: string) => void
  setLimit: (value: number) => void
}
