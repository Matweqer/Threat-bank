export interface IDomain {
  id: number
  name: string
  criticality_level: string
}

export interface ICharacteristics {
  id: number
  name: string
}

export interface IObject {
  id: number
  domain: IDomain
  characteristics: ICharacteristics[]
  name: string
  description: string
  criticality_level: string
  archetypes: string
}


