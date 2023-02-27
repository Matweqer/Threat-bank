import { ISfc } from './ISfc'

export interface IResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export type ISfcResponse = IResponse<ISfc>
