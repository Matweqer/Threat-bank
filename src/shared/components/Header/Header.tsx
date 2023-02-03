import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { ROUTES } from 'shared/constants'

import LoginIcon from 'assets/images/Header/LoginIcon.png'
import Logo from 'assets/images/Header/Logo.png'
import MenuIcon from 'assets/images/Header/MenuIcon.png'
import MenuActiveIcon from 'assets/images/Header/MenuActiveItem.png'

import s from './Header.module.scss'

type HeaderMenuItem = {
  link: string
  name: string
}

const HeaderMenuList: HeaderMenuItem[] = [
  {
    link: ROUTES.home,
    name: 'Главная'
  },
  {
    link: ROUTES.services,
    name: 'Сервисы'
  },
  {
    link: ROUTES.tdo,
    name: 'Банк данных угроз'
  }
]

type ActiveMenuItemElement = HeaderMenuItem & {
  status: boolean
}

const Header: FC = () => {
  const [activeElement, setActiveElement] = useState<ActiveMenuItemElement>()

  const selectActiveElement = (element: HeaderMenuItem, status: boolean) => {
    setActiveElement({
      name: element.name,
      link: element.link,
      status
    })
  }

  return (
    <header className={s.header}>
      <div>
        <img className={s.logo} src={Logo}></img>
      </div>
      <div className={s.menu}>
        {
          HeaderMenuList.map((item, index) => {
            return (
              <div className={s.menuItem} key={index}>
                <NavLink
                  className={({ isActive }) => {
                    if (isActive) {
                      selectActiveElement(item, true)
                      return s.menuItemActive
                    } else {
                      return ''
                    }
                  }}
                  to={item.link}>
                    {item.name}
                </NavLink>
                {
                activeElement?.status && (
                  <div>
                    <img className={s.menuItemActiveIcon} src={MenuActiveIcon} />
                  </div>
                )
              }
             </div>
            )
          })
        }

      </div>
      <div className={s.iconsHeader}>
        <div>
          <img className={s.iconsHeaderItem} src={LoginIcon}></img>
        </div>
        <div>
          <img className={s.iconsHeaderItem} src={MenuIcon}></img>
        </div>
      </div>
    </header>
  )
}

export { Header }
