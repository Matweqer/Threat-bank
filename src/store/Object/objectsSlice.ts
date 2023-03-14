import { createSlice } from '@reduxjs/toolkit'

import { IInitialState, IObject } from 'shared/types'
import { axiosGetObjects, axiosGetObject } from './actions'
import { replaceFields } from 'shared/utils'
import { objectReplacement } from 'shared/constants'


const initialState: IInitialState<IObject> = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  current: null,
  status: null,
  error: null
}

export const objectsSlice = createSlice({
  name: 'objects',
  initialState,
  reducers: {
    deleteStatusAndError: (state) => {
      state.status = null
      state.error = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(axiosGetObjects.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosGetObjects.fulfilled, (state, action) => {
        const { count, next, previous, results } = action.payload
        state.results = results
        state.count = count
        state.next = next
        state.previous = previous
        state.status = 'resolved'
      })
      .addCase(axiosGetObjects.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })

    builder
      .addCase(axiosGetObject.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosGetObject.fulfilled, (state, action) => {
        state.current = replaceFields(action.payload, objectReplacement)
        state.status = 'resolved'
      })
      .addCase(axiosGetObject.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })
  }
})

export const objects = objectsSlice.reducer
