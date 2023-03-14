import { ISfc } from './ISfc'
import { IVulnerability } from './IVulnerability'
import { IObject } from './IObject'

export type ListItemsTypes = ISfc | IVulnerability | IObject;
export type ListTypes = 'O' | 'SFC' | 'A' | 'V' | 'R' | 'T';

export interface ItemTableData {
  id: number
  name: string
  value: string
}

export interface ISourceItem {
  id: number
  name: string
  url: string
  type: number
}

export interface ItemInfoData {
  id: number
  type: ListTypes
  name: string
  table: ItemTableData[] | null
  sources: ISourceItem[]
  articles: ISourceItem[]
}
