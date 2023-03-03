import { ILimitElement, ISortType } from 'shared/types'
import { VulnerabilitiesList } from '../../modules'

const DefaultSortTypes: ISortType[] = [
  {
    label: 'возрастанию',
    value: 'id'
  },
  {
    label: 'убыванию',
    value: '-id'
  }
]

export const SfcSortTypes: ISortType[] = [
  ...DefaultSortTypes,
  {
    label: 'критичности',
    value: '-criticality_level'
  }
]

export const VulnerabilitiesSortTypes: ISortType[] = [
  ...DefaultSortTypes,
  {
    label: 'степени опасности',
    value: '-danger_degree'
  }
]

export const limitList: ILimitElement[] = [
  {
    value: '10',
    isActive: true
  },
  {
    value: '20',
    isActive: false
  },
  {
    value: '50',
    isActive: false
  },
  {
    value: '100',
    isActive: false
  }]
