import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

import { sfc } from './SFC'
import { auth } from './Auth'
import { vulnerabilities } from './Vulnerabilities'
import { objects } from './Object'
import { risks } from './Risk'
import { attacks } from './Attack'
import { threats } from './Threats'
import { incident } from './Incident'

type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    auth,
    sfc,
    vulnerabilities,
    objects,
    risks,
    attacks,
    threats,
    incident
  }
})

export type RootState = ReturnType<typeof store.getState>


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
