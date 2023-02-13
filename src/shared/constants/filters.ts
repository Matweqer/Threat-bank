import { IPaginationElement, ISortType } from 'shared/types'

export const sortTypes: ISortType[] = [
  {
    label: 'возрастанию',
    value: '1'
  },
  {
    label: 'убыванию',
    value: '2'
  },
  {
    label: 'критичности',
    value: '3'
  }
]

export const paginationList: IPaginationElement[] = [
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
