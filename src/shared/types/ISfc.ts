import { ISourceItem } from './tdb'

interface ISfc_type {
  id: number
  name: string
  is_certified: boolean
  sfc_class: {
    id: number
    name: string
  }
}

export interface ISfc {
  id: number
  sfc_type: ISfc_type
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

