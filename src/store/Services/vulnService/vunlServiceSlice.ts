import { createSlice } from '@reduxjs/toolkit'

import { IInitialVulnService } from 'shared/types'
import { axiosGetResultVulnService } from './actions'


const initialState: IInitialVulnService = {
  result: null,
  status: null,
  error: null
}

export const vulnServiceSlice = createSlice({
  name: 'vulnService',
  initialState,
  reducers: {
    deleteStatusAndError: (state) => {
      state.status = null
      state.error = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(axiosGetResultVulnService.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosGetResultVulnService.fulfilled, (state, action) => {
        state.result = action.payload.results
        state.status = 'resolved'
      })
      .addCase(axiosGetResultVulnService.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })
  }
})

export const vulnService = vulnServiceSlice.reducer
