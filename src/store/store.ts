import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

import { sfc } from './SFC'
import { auth } from './Auth'
import { vulnerabilities } from './Vulnerabilities'

type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    auth,
    sfc,
    vulnerabilities
  }
})

export type RootState = ReturnType<typeof store.getState>


// TODO replace to folder hooks
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
