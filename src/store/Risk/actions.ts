import { createAsyncThunk } from '@reduxjs/toolkit'

import { api } from 'api'
import { IParams, MyKnownError, IRisk, IRiskResponse } from 'shared/types'


export const axiosGetRisks = createAsyncThunk<
IRiskResponse,
IParams | null,
{ rejectValue: MyKnownError }
>(
  'Risks/axiosGetRisks',
  async (params, thunkApi) => {
    const response = await api.get('/risks/risks/', {
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

    return response.data as IRiskResponse
  }
)

export const axiosGetRisk = createAsyncThunk<
IRisk,
string,
{ rejectValue: MyKnownError }
>(
  'Risks/axiosGetRisk',
  async (id, thunkApi) => {
    const response = await api.get(`/risks/risks/${id}`)
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as IRisk
  }
)
