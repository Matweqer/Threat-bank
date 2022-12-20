import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Footer, Header } from 'shared/components'

import s from './DefaultLayout.module.scss'
const DefaultLayout: FC = () => {
  return (
    <div className={s.content}>
      <Header/>
      <main className={s.main}>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export { DefaultLayout }
