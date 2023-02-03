import { ISfc } from './ISfc'

export type ListItemsTypes = ISfc;
export type ListTypes = 'O' | 'SFC' | 'A' | 'V' | 'R' | 'T';

export interface ItemTableData {
  id: number
  name: string
  value: string
}

export interface ISourceItem {
  name: string
  link: string
}

export interface ItemInfoData {
  id: number
  type: ListTypes
  name: string
  table: ItemTableData[] | null
  sources: ISourceItem[]
  articles: ISourceItem[]
}
