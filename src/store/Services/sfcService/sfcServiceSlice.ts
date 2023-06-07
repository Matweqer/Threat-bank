import { createSlice } from '@reduxjs/toolkit'

import { IInitialSfcService } from 'shared/types'
import { axiosPostResultFileSfc } from './actions'


const initialState: IInitialSfcService = {
  result: null,
  status: null,
  error: null
}

export const sfcServiceSlice = createSlice({
  name: 'sfcService',
  initialState,
  reducers: {
    deleteStatusAndError: (state) => {
      state.status = null
      state.error = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(axiosPostResultFileSfc.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosPostResultFileSfc.fulfilled, (state, action) => {
        state.result = action.payload
        state.status = 'resolved'
      })
      .addCase(axiosPostResultFileSfc.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })
  }
})

export const sfcService = sfcServiceSlice.reducer
