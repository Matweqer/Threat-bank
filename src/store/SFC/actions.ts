import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'api'

import { ISfc } from 'shared/types'

interface ISfcResponse {
  count: number
  next: string | null
  previous: string | null
  results: ISfc[]
}

interface IParams {
  search?: string
  limit?: number
  offset?: number
  ordering?: string
}

export interface MyKnownError {
  errorMessage: string
}

export const axiosGetSfc = createAsyncThunk<
ISfcResponse,
IParams | null,
{ rejectValue: MyKnownError }
>(
  'sfc/axiosGetSfc',
  async (params, thunkApi) => {
    const response = await api.get('/sfc/characteristics/', {
      ...(params && {
        params: {
          limit: params.limit
        }
      })
    })
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as ISfcResponse
  }
)

export const axiosGetSfcItem = createAsyncThunk<
ISfc,
string,
{ rejectValue: MyKnownError }
>(
  'sfc/axiosGetSfcItem',
  async (id, thunkApi) => {
    const response = await api.get(`/sfc/characteristics/${id}`)
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as ISfc
  }
)
