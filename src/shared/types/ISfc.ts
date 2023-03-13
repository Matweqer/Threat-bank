import { ISourceItem } from './tdb'

interface IEvaluation_object {
  id: number
  type: {
    id: number
    name: string
  }
  name: string
  is_certified: boolean
}

export interface ISfc {
  id: number
  evaluation_object: IEvaluation_object
  name: string
  description: string
  name_in_system: string
  version: string
  criticality_level: string
  destabilization_level: string
  archetypes: string
  certificate_validity_date: string
  sources: ISourceItem[]
}

