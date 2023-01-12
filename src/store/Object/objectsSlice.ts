import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store'

interface IObject {
  name: string
}

interface ObjectsState {
  objects: IObject[]
}

const initialState: ObjectsState = {
  objects: []
}

export const objectsSlice = createSlice({
  name: 'objects',
  initialState,
  reducers: {

  }
})

// export const { } = objectsSlice.actions

export const selectObjects = (state: RootState): ObjectsState => state.object

export const object = objectsSlice.reducer
