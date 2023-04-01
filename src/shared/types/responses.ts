import { ISfc } from './ISfc'
import { IVulnerability } from './IVulnerability'
import { IObject } from './IObject'
import { IRisk } from './IRisk'
import { IAttack } from './IAttack'
import { IThreat } from './IThreat'
import { IIncident } from './IIncident'

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
export type IAttackResponse = IResponse<IAttack>
export type IThreatResponse = IResponse<IThreat>
export type IIncidentResponse = IResponse<IIncident>

