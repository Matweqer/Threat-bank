import { ISfc } from './ISfc'
import { IVulnerability } from './IVulnerability'
import { IObject } from './IObject'
import { IRisk } from './IRisk'
import { IAttack } from './IAttack'
import { IThreat } from './IThreat'
import { IIncident } from './IIncident'

export interface ICatalogResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export type ISfcResponse = ICatalogResponse<ISfc>
export type IVulnerabilityResponse = ICatalogResponse<IVulnerability>
export type IObjectsResponse = ICatalogResponse<IObject>
export type IRiskResponse = ICatalogResponse<IRisk>
export type IAttackResponse = ICatalogResponse<IAttack>
export type IThreatResponse = ICatalogResponse<IThreat>
export type IIncidentResponse = ICatalogResponse<IIncident>

