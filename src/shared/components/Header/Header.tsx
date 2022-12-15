import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from 'shared/constants'

import s from './Header.module.scss'


const Header: FC = () => {
  return (
    <header className={s.header}>
      <Link to={ROUTES.home} > Главная</Link>
      <Link to={ROUTES.services} > Сервиси</Link>
      <Link to={ROUTES.tdo}> Банк данных угроз</Link>
    </header>
  )
}

export { Header }
