import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { axiosAuthLogin, axiosAuthRefresh } from './actions'
import { AuthState } from './types'


const initialState: AuthState = {
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
        Cookies.set('refresh', action.payload.refresh_token)
        Cookies.set('access', action.payload.access_token)
        Cookies.set('isAuth', 'true')
        state.status = 'resolved'
      })
      .addCase(axiosAuthLogin.rejected, (state, action) => {
        Cookies.set('access', '')
        Cookies.set('isAuth', 'true')
        if ((action.payload?.errorMessage) != null) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })

    builder
      .addCase(axiosAuthRefresh.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosAuthRefresh.fulfilled, (state, action) => {
        Cookies.set('refresh', action.payload.refresh)
        Cookies.set('access', action.payload.access)
        Cookies.set('isAuth', 'true')
        state.status = 'resolved'
      })
      .addCase(axiosAuthRefresh.rejected, (state, action) => {
        Cookies.set('access', '')
        Cookies.set('isAuth', 'false')
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })
  }
})


export const auth = sfcSlice.reducer
