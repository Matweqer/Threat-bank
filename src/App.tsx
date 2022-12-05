import React, { FC } from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, ThreatsDataBase, Services } from './modules'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/services'} element={<Services/>} />
        <Route path={'/threats-data-base'} element={<ThreatsDataBase/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
