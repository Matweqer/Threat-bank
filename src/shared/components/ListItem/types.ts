import { ListTypes } from 'shared/types'

export interface ListItemProps {
  id: number
  name: string
  type: ListTypes
  level: string
  linkTo?: string
  openNewTab?: boolean
}
