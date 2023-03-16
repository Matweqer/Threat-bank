import { createSlice } from '@reduxjs/toolkit'

import { IInitialState, IRisk } from 'shared/types'
import { axiosGetRisks, axiosGetRisk } from './actions'
import { replaceFields } from 'shared/utils'
import { riskReplacement } from 'shared/constants'


const initialState: IInitialState<IRisk> = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  current: null,
  status: null,
  error: null
}

export const risksSlice = createSlice({
  name: 'risks',
  initialState,
  reducers: {
    deleteStatusAndError: (state) => {
      state.status = null
      state.error = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(axiosGetRisks.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosGetRisks.fulfilled, (state, action) => {
        const { count, next, previous, results } = action.payload
        state.results = results
        state.count = count
        state.next = next
        state.previous = previous
        state.status = 'resolved'
      })
      .addCase(axiosGetRisks.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })

    builder
      .addCase(axiosGetRisk.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosGetRisk.fulfilled, (state, action) => {
        state.current = replaceFields(action.payload, riskReplacement)
        state.status = 'resolved'
      })
      .addCase(axiosGetRisk.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })
  }
})

export const risks = risksSlice.reducer
