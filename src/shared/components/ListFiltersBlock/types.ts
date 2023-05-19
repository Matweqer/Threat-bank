import { ISortType } from 'shared/types'

export interface IQuerySettings {
  sortTypes: ISortType[]
  search: string
  limit: number
  offset: number

  setSortType: (value: ISortType) => void
  setSearch: (value: string) => void
  setLimit: (value: number) => void
  setOffset: (value: number) => void

}

export interface ListFiltersBlockProps {
  querySettings: IQuerySettings
}
