import React, { FC } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { Home } from './modules'

const App: FC = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Home/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
