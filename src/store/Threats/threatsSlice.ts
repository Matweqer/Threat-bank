import { createSlice } from '@reduxjs/toolkit'

import { IInitialCatalogState, IThreat } from 'shared/types'
import { axiosGetThreats, axiosGetThreat } from './actions'


const initialState: IInitialCatalogState<IThreat> = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  current: null,
  status: null,
  error: null
}

export const threatsSlice = createSlice({
  name: 'threats',
  initialState,
  reducers: {
    deleteStatusAndError: (state) => {
      state.status = null
      state.error = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(axiosGetThreats.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosGetThreats.fulfilled, (state, action) => {
        const { count, next, previous, results } = action.payload
        state.results = results
        state.count = count
        state.next = next
        state.previous = previous
        state.status = 'resolved'
      })
      .addCase(axiosGetThreats.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })

    builder
      .addCase(axiosGetThreat.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosGetThreat.fulfilled, (state, action) => {
        state.current = action.payload
        state.status = 'resolved'
      })
      .addCase(axiosGetThreat.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })
  }
})

export const threats = threatsSlice.reducer
