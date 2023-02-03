import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { ActiveMenuItemElement } from './types'
import { headerMenuList } from './constants'

import LoginIcon from 'assets/images/Header/LoginIcon.png'
import Logo from 'assets/images/Header/Logo.png'
import MenuIcon from 'assets/images/Header/MenuIcon.png'
import MenuActiveIcon from 'assets/images/Header/MenuActiveItem.png'

import s from './Header.module.scss'


const Header: FC = () => {
  const [activeElement] = useState<ActiveMenuItemElement>()

  return (
    <header className={s.header}>
      <div>
        <img className={s.logo} src={Logo}></img>
      </div>
      <div className={s.menu}>
        {
          headerMenuList.map((item) => {
            return (
              <div className={s.menuItem} key={item.id}>
                <NavLink
                className={({ isActive }) => (isActive ? s.menuItemActive : '')}
                  to={item.link}>
                    {item.name}
                </NavLink>
                {
                activeElement?.link === item.link && activeElement?.status && (
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
