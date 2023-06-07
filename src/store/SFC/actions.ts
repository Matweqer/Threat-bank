import { createAsyncThunk } from '@reduxjs/toolkit'

import { api } from 'api'
import { ICatalogParams, ISfcResponse, MyKnownError, ISfc } from 'shared/types'


export const axiosGetSfc = createAsyncThunk<
ISfcResponse,
ICatalogParams | null,
{ rejectValue: MyKnownError }
>(
  'sfc/axiosGetSfc',
  async (params, thunkApi) => {
    const response = await api.get('/sfc/characteristics/', {
      ...(params && {
        params: {
          limit: params.limit,
          ordering: params.ordering,
          search: params.search,
          ...(params.my ? { related_to_user: true } : {})
        }
      })
    })
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as ISfcResponse
  }
)


export const axiosAddSfc = createAsyncThunk<
ISfcResponse,
ICatalogParams,
{ rejectValue: MyKnownError }
>(
  'sfc/axiosAddSfc',
  async ({ next }, thunkApi) => {
    let response
    if (next) {
      const index = (next.match(/api/)?.index ?? 23) + 3
      const url = next.slice(index)
      response = await api.get(url)
    }

    if (!response || response.status >= 400) {
      return thunkApi.rejectWithValue((response?.data) as MyKnownError)
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
