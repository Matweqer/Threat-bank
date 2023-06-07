import { createSlice } from '@reduxjs/toolkit'

import { IAttack, IInitialCatalogState } from 'shared/types'
import { axiosGetAttack, axiosGetAttacks } from './actions'
import { replaceFields } from 'shared/utils'
import { attackReplacement } from 'shared/constants'


const initialState: IInitialCatalogState<IAttack> = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  current: null,
  status: null,
  error: null
}

export const attacksSlice = createSlice({
  name: 'attacks',
  initialState,
  reducers: {
    deleteStatusAndError: (state) => {
      state.status = null
      state.error = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(axiosGetAttacks.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosGetAttacks.fulfilled, (state, action) => {
        const { count, next, previous, results } = action.payload
        state.results = results
        state.count = count
        state.next = next
        state.previous = previous
        state.status = 'resolved'
      })
      .addCase(axiosGetAttacks.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })

    builder
      .addCase(axiosGetAttack.pending, state => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(axiosGetAttack.fulfilled, (state, action) => {
        state.current = replaceFields(action.payload, attackReplacement)
        state.status = 'resolved'
      })
      .addCase(axiosGetAttack.rejected, (state, action) => {
        if (action.payload?.errorMessage) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })
  }
})

export const attacks = attacksSlice.reducer
