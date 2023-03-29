export interface IDamageType {
  id: number
  name: string
}

export interface IRisk {
  id: number
  name: string
  criticality_level: string
  description: string
  archetypes: string
  damage_type: IDamageType[]
}
