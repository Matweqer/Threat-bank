import { createSlice } from '@reduxjs/toolkit'

import { IIncident, IInitialState } from 'shared/types'
import { axiosGetIncident, axiosGetIncidents } from './actions'


const initialState: IInitialState<IIncident> = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  current: null,
  status: null,
  error: null
}

export const incidentsSlice = createSlice({
  name: 'incidents',
  initialState,
  reducers: {
    deleteStatusAndError: (state) => {
      state.status = null
      state.error = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(axiosGetIncidents.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosGetIncidents.fulfilled, (state, action) => {
        const { count, next, previous, results } = action.payload
        state.results = results
        state.count = count
        state.next = next
        state.previous = previous
        state.status = 'resolved'
      })
      .addCase(axiosGetIncidents.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })

    builder
      .addCase(axiosGetIncident.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosGetIncident.fulfilled, (state, action) => {
        state.current = action.payload
        state.status = 'resolved'
      })
      .addCase(axiosGetIncident.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })
  }
})

export const incident = incidentsSlice.reducer
