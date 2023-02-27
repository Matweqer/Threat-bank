import { createAsyncThunk } from '@reduxjs/toolkit'

import { api } from 'api'
import { IParams, ISfcResponse, MyKnownError, ISfc } from 'shared/types'


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
          limit: params.limit,
          ordering: params.ordering,
          offset: params.offset,
          search: params.search
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
