import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'api'

import { ISfc } from 'shared/types'

interface IResponse {
  count: number
  next: string | null
  previous: string | null
  results: ISfc[]
}

interface MyKnownError {
  errorMessage: string
}

export const axiosGetSfc = createAsyncThunk<
IResponse,
string | null,
{ rejectValue: MyKnownError }
>(
  'sfc/axiosGetSfc',
  async (id = null, thunkApi) => {
    const response = await api.get(`/sfc/characteristics/${id ?? ''}`)
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as IResponse
  }
)
