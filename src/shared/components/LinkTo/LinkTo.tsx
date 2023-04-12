import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { LinkToProps } from './types'

import s from './linkTo.module.scss'

const LinkTo: FC<LinkToProps> = ({ url, title }) => {
  return (
    <Link className={s.link} to={url}>
      <span>{title}</span>
      <span className={s.arrow}/>
    </Link>
  )
}

export { LinkTo }
