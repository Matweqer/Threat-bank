import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from 'shared/constants'

import s from './Header.module.scss'


const Header: FC = () => {
  return (
    <header className={s.header}>
      <Link to={ROUTES.home} />
      <Link to={ROUTES.services} />
      <Link to={ROUTES.tdo} />
    </header>
  )
}

export { Header }
