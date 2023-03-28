import { ILimitElement, ISortType } from 'shared/types'


const DefaultSortTypes: ISortType[] = [
  {
    label: 'умолчанию',
    value: '-id'
  },
  {
    label: 'названию',
    value: 'name'
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

export const ObjectsSortTypes: ISortType[] = [
  ...DefaultSortTypes,
  {
    label: 'критичности',
    value: '-criticality_level'
  }
]

export const RisksSortTypes: ISortType[] = [
  ...DefaultSortTypes,
  {
    label: 'критичности',
    value: '-criticality_level'
  }
]

export const AttacksSortTypes: ISortType[] = [
  ...DefaultSortTypes,
  {
    label: 'влиянию',
    value: '-impact_level'
  }
]
export const ThreatsSortTypes: ISortType[] = [
  ...DefaultSortTypes
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
