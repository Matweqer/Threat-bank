import { ILimitElement, ISortType } from 'shared/types'

export const sortTypes: ISortType[] = [
  {
    label: 'возрастанию',
    value: 'id'
  },
  {
    label: 'убыванию',
    value: '-id'
  },
  {
    label: 'критичности',
    value: '-criticality_level'
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
