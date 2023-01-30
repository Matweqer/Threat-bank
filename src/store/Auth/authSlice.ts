import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { axiosAuthLogin } from './actions'


interface AuthState {
  isAuth: boolean
  access: string | null
  status: string | null
  error: string | null
}

const initialState: AuthState = {
  isAuth: false,
  access: null,
  status: null,
  error: null
}

export const sfcSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    deleteStatusAndError: (state) => {
      state.status = null
      state.error = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(axiosAuthLogin.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosAuthLogin.fulfilled, (state, action) => {
        state.access = action.payload.access_token
        Cookies.set('refresh', action.payload.refresh_token)
        state.isAuth = true
        state.status = 'resolved'
      })
      .addCase(axiosAuthLogin.rejected, (state, action) => {
        state.isAuth = false
        state.access = null
        if ((action.payload?.errorMessage) != null) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })
  }
})


export const { deleteStatusAndError } = sfcSlice.actions

export const auth = sfcSlice.reducer
