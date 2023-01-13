import { configureStore } from '@reduxjs/toolkit'
import { sfc } from './SFC'

export const store = configureStore({
  reducer: {
    sfc
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
