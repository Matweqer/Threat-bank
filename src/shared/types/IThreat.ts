import { IAttack } from './IAttack'
import { IRisk } from './IRisk'
import { ISfc } from './ISfc'
import { IVulnerability } from './IVulnerability'
import { IObject } from './IObject'

export interface IThreat {
  id: number
  name: string
  attack: IAttack
  risks: IRisk[]
  sfc: ISfc
  vulnerability: IVulnerability
  object: IObject
  description: string
  archetypes: string
}
