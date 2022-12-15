import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Footer, Header } from 'shared/components'
const DefaultLayout: FC = () => {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export { DefaultLayout }
