import { createSlice } from '@reduxjs/toolkit'

import { IInitialCatalogState, IVulnerability } from 'shared/types'
import { axiosGetVulnerabilities, axiosGetVulnerability } from './actions'
import { replaceFields } from 'shared/utils'
import { vulnerabilityReplacement } from 'shared/constants'


const initialState: IInitialCatalogState<IVulnerability> = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  current: null,
  status: null,
  error: null
}

export const vulnerabilitiesSlice = createSlice({
  name: 'vulnerabilities',
  initialState,
  reducers: {
    deleteStatusAndError: (state) => {
      state.status = null
      state.error = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(axiosGetVulnerabilities.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosGetVulnerabilities.fulfilled, (state, action) => {
        const { count, next, previous, results } = action.payload
        state.results = results
        state.count = count
        state.next = next
        state.previous = previous
        state.status = 'resolved'
      })
      .addCase(axiosGetVulnerabilities.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })

    builder
      .addCase(axiosGetVulnerability.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosGetVulnerability.fulfilled, (state, action) => {
        state.current = replaceFields(action.payload, vulnerabilityReplacement)
        state.status = 'resolved'
      })
      .addCase(axiosGetVulnerability.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })
  }
})

export const vulnerabilities = vulnerabilitiesSlice.reducer
