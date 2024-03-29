import { createSlice } from '@reduxjs/toolkit'

import { IInitialCatalogState, ISfc } from 'shared/types'
import { axiosAddSfc, axiosGetSfc, axiosGetSfcItem } from './actions'
import { replaceFields } from 'shared/utils'
import { sfcReplacement } from 'shared/constants'



const initialState: IInitialCatalogState<ISfc> = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  current: null,
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
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })

    builder
      .addCase(axiosAddSfc.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosAddSfc.fulfilled, (state, action) => {
        const { count, next, previous, results } = action.payload
        state.results.push(...results)
        state.count = count
        state.next = next
        state.previous = previous
        state.status = 'resolved'
      })
      .addCase(axiosAddSfc.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
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
        state.current = replaceFields(action.payload, sfcReplacement)
        state.status = 'resolved'
      })
      .addCase(axiosGetSfcItem.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })
  }
})

export const sfc = sfcSlice.reducer
