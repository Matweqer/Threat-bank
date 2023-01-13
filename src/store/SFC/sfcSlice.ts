import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store'

interface ISfc {
  name: string
}

interface SfcState {
  sfc: ISfc[]
}

const initialState: SfcState = {
  sfc: []
}

export const sfcSlice = createSlice({
  name: 'sfc',
  initialState,
  reducers: {

  }
})

// export const { } = sfcSlice.actions

export const selectSfc = (state: RootState): ISfc[] => state.sfc.sfc

export const sfc = sfcSlice.reducer
