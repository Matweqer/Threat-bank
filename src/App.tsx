import React, { FC } from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, ThreatsDataBase, Services, SfcList, SfcItem } from './modules'
import { ROUTES } from './shared/constants'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.services} element={<Services/>} />
        <Route path={ROUTES.tdo} element={<ThreatsDataBase/>} />
        <Route path={ROUTES.sfcList} element={<SfcList/>} />
        <Route path={ROUTES.sfcItem} element={<SfcItem/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
