import React, { FC } from 'react'
import { Link, useResolvedPath } from 'react-router-dom'

import s from './listItem.module.scss'

interface ListItemProps {
  id: number
  name: string
  impact_level?: number
  criticality_level?: number
  destabilization_level?: number
  danger_degree?: number
}


const ListItem: FC<ListItemProps> = ({
  id,
  name,
  impact_level,
  criticality_level,
  destabilization_level,
  danger_degree
}) => {
  const getColor = (): string => {
    const level: number | undefined =
      impact_level ??
      criticality_level ??
      destabilization_level ??
      danger_degree ?? undefined
    let color: string
    switch (level) {
      case 3:
        color = '#FF1D1D'
        break
      case 2:
        color = '#F9761D'
        break
      case 1:
        color = '#FAC712'
        break
      case 0:
        color = '#0FD100'
        break
      default:
        color = '#0FD100'
    }
    return color
  }

  return (
      <Link className={s.link} to={id.toString()}>
        <div className={s.color} style={{ background: getColor() }}>

        </div>
        <div className={s.id}>
          {id}
        </div>
        <div className={s.name} >
          {name}
        </div>
      </Link>
  )
}


export { ListItem }
