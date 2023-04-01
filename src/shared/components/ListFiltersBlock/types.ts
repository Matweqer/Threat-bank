import { ISortType } from 'shared/types'

export interface IQuerySettings {
  sortTypes: ISortType[]
  search: string
  limit: number

  setSortType: (value: ISortType) => void
  setSearch: (value: string) => void
  setLimit: (value: number) => void

}

export interface ListFiltersBlockProps {
  querySettings: IQuerySettings
}
