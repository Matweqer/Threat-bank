import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import {
  Home,
  ThreatsDataBase,
  Services,
  SfcList, SfcItem, CreateCardSfc,
  AttacksList, AttackItem,
  ObjectsList, ObjectItem,
  VulnerabilitiesList, VulnerabilityItem,
  RisksList, RiskItem,
  ThreatsList, ThreatItem,
  NotFound, Auth, AboutUs, Statistics
} from 'modules'

import { DefaultLayout, RequiredAuth } from 'shared/layout'

import { ROUTES } from 'shared/constants'
import { store } from 'store'
import { IncidentItem, IncidentsList } from './modules/ThreatsDataBaseModule/Incident'

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.auth} element={<Auth/>}> </Route>

          <Route path={'/'} element={<DefaultLayout/>} >
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.aboutUs} element={<AboutUs />} />
            <Route path={ROUTES.statistics} element={<Statistics />} />

            <Route element={<RequiredAuth/>}>
              <Route path={ROUTES.services} element={<Services/>} />

              <Route path={ROUTES.tdo} element={<ThreatsDataBase/>} />
              <Route path={ROUTES.objectsList} element={<ObjectsList/>} />
              <Route path={ROUTES.objectItem} element={<ObjectItem/>} />
              <Route path={ROUTES.attacksList} element={<AttacksList/>} />
              <Route path={ROUTES.attackItem} element={<AttackItem/>} />
              <Route path={ROUTES.sfcList} element={<SfcList/>} />
              <Route path={ROUTES.sfcItem} element={<SfcItem/>} />
              <Route path={ROUTES.createCardSfc} element={<CreateCardSfc/>} />
              <Route path={ROUTES.vulnerabilitiesList} element={<VulnerabilitiesList/>} />
              <Route path={ROUTES.vulnerabilityItem} element={<VulnerabilityItem/>} />
              <Route path={ROUTES.risksList} element={<RisksList/>} />
              <Route path={ROUTES.riskItem} element={<RiskItem/>} />
              <Route path={ROUTES.threatsList} element={<ThreatsList/>} />
              <Route path={ROUTES.threatItem} element={<ThreatItem/>} />
              <Route path={ROUTES.incidentList} element={<IncidentsList/>} />
              <Route path={ROUTES.incidentItem} element={<IncidentItem/>} />
            </Route>

          </Route>

          <Route path='*' element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
