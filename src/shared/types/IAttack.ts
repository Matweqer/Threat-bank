import { IImage } from './tdb'

export interface ICommonNote {
  id: number
  name: string
}

export interface IIntruder {
  id: number
  name: string
  type: string
}


export interface IAttack {
  id: number
  tools: ICommonNote[]
  consequences: ICommonNote[]
  intruders: IIntruder[]
  motives: ICommonNote[]
  possibilities: ICommonNote[]
  purposes: ICommonNote[]
  name: string
  description: string
  stage: string
  capec_id: string
  capec_url: string
  impact_nature: string
  impact_level: string
  archetypes: string
  images: IImage[]
}
