import { ListTypes } from 'shared/types'

export interface ListItemProps {
  id: number
  name: string
  type: ListTypes
  impact_level?: number
  criticality_level?: number
  destabilization_level?: number
  danger_degree?: number
}
