import { configureStore } from '@reduxjs/toolkit'
import { object } from './Object'

export const store = configureStore({
  reducer: {
    object
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
