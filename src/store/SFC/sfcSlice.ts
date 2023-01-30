import { createSlice } from '@reduxjs/toolkit'

import { ISfc } from 'shared/types'
import { axiosGetSfc } from './actions'


interface SfcState {
  sfc: ISfc[]
  status: string | null
  error: string | null
}

const initialState: SfcState = {
  sfc: [],
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
        state.sfc = action.payload
        state.status = 'resolved'
      })
      .addCase(axiosGetSfc.rejected, (state, action) => {
        if ((action.payload?.errorMessage) != null) {
          state.error = action.payload?.errorMessage
        }
        state.status = 'rejected'
      })
  }
})


export const { deleteStatusAndError } = sfcSlice.actions

export const sfc = sfcSlice.reducer
