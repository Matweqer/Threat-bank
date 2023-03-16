import { ISfc } from './ISfc'
import { IVulnerability } from './IVulnerability'
import { IObject } from './IObject'
import { IRisk } from './IRisk'

export interface IResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export type ISfcResponse = IResponse<ISfc>
export type IVulnerabilityResponse = IResponse<IVulnerability>
export type IObjectsResponse = IResponse<IObject>
export type IRiskResponse = IResponse<IRisk>
