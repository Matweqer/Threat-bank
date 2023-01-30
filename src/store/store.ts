import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

import { sfc } from './SFC'
import { auth } from './Auth'

type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    auth,
    sfc
  }
})

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
