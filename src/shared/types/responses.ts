import { ISfc } from './ISfc'
import { IVulnerability } from './IVulnerability'

export interface IResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export type ISfcResponse = IResponse<ISfc>
export type IVulnerabilityResponse = IResponse<IVulnerability>
