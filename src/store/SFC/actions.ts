import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'api'

import { ISfc } from 'shared/types'

interface MyKnownError {
  errorMessage: string
}

export const axiosGetSfc = createAsyncThunk<
ISfc[],
string | null,
{ rejectValue: MyKnownError }
>(
  'sfc/axiosGetSfc',
  async (id = null, thunkApi) => {
    const response = await api.get(`/sfc/characteristics/${id ?? ''}`)
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as ISfc[]
  }
)
