import React, { FC, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Footer, Header } from 'shared/components'

import s from './DefaultLayout.module.scss'


const DefaultLayout: FC = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

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
