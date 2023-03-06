import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { getColorByLevel } from 'shared/utils'

import { ListItemProps } from './types'
import s from './listItem.module.scss'


const ListItem: FC<ListItemProps> = ({
  id,
  name,
  type,
  level
}) => {
  // const level: number | undefined =
  //   impact_level ??
  //   criticality_level ??
  //   destabilization_level ??
  //   danger_degree ?? undefined

  return (
      <Link className={s.link} to={id.toString()}>
        <div className={s.color} style={{ background: getColorByLevel(level) }}/>

        <div className={s.id}>
          {type}-{id}.
        </div>

        <div className={s.name} >
          {name}
        </div>

      </Link>
  )
}

export { ListItem }
