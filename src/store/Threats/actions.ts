import { createAsyncThunk } from '@reduxjs/toolkit'

import { api } from 'api'
import { ICatalogParams, MyKnownError, IThreat, IThreatResponse } from 'shared/types'


export const axiosGetThreats = createAsyncThunk<
IThreatResponse,
ICatalogParams | null,
{ rejectValue: MyKnownError }
>(
  'Threats/axiosGetThreats',
  async (params, thunkApi) => {
    const response = await api.get('/threats/threats/', {
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

    return response.data as IThreatResponse
  }
)

export const axiosGetThreat = createAsyncThunk<
IThreat,
string,
{ rejectValue: MyKnownError }
>(
  'Threats/axiosGetThreat',
  async (id, thunkApi) => {
    const response = await api.get(`/threats/threats/${id}`)
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as IThreat
  }
)
