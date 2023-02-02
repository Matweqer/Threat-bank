import { createSlice } from '@reduxjs/toolkit'

import { ISfc } from 'shared/types'
import { axiosGetSfc, axiosGetSfcItem } from './actions'


interface SfcState {
  count: number
  next: string | null
  previous: string | null
  results: ISfc[]
  currentSfc: ISfc | null
  status: string | null
  error: string | null
}

const initialState: SfcState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  currentSfc: null,
  status: null,
  error: null
}

export const sfcSlice = createSlice({
  name: 'sfc',
  initialState,
  reducers: {
    deleteStatusAndError: (state) => {
      state.status = null
      state.error = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(axiosGetSfc.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosGetSfc.fulfilled, (state, action) => {
        const { count, next, previous, results } = action.payload
        state.results = results
        state.count = count
        state.next = next
        state.previous = previous
        state.status = 'resolved'
      })
      .addCase(axiosGetSfc.rejected, (state, action) => {
        if ((action.payload?.errorMessage) != null) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })

    builder
      .addCase(axiosGetSfcItem.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosGetSfcItem.fulfilled, (state, action) => {
        state.currentSfc = action.payload
        state.status = 'resolved'
      })
      .addCase(axiosGetSfcItem.rejected, (state, action) => {
        if ((action.payload?.errorMessage) != null) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })
  }
})


export const { deleteStatusAndError } = sfcSlice.actions

export const sfc = sfcSlice.reducer
