import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { getColorByLevel } from 'shared/utils'

import { ListItemProps } from './types'
import s from './listItem.module.scss'


const ListItem: FC<ListItemProps> = ({
  id,
  name,
  type,
  level,
  linkTo,
  openNewTab
}) => {
  const getValue = (value: string) => {
    return value.length > 75 ? value.slice(0, 75) + '...' : value
  }
  return (
      <Link target={openNewTab ? '_blank' : '_self'} className={s.link} to={linkTo ?? id.toString()}>
        <div className={s.color} style={{ background: getColorByLevel(level) }}/>

        <div className={s.id}>
          {type}-{id}.
        </div>

        <div className={s.name} >
          {getValue(name)}
        </div>

      </Link>
  )
}

export { ListItem }
