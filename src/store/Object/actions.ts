import { createAsyncThunk } from '@reduxjs/toolkit'

import { api } from 'api'
import { ICatalogParams, IObjectsResponse, MyKnownError, IObject } from 'shared/types'


export const axiosGetObjects = createAsyncThunk<
IObjectsResponse,
ICatalogParams | null,
{ rejectValue: MyKnownError }
>(
  'Objects/axiosGetObjects',
  async (params, thunkApi) => {
    const response = await api.get('/objects/objects/', {
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

    return response.data as IObjectsResponse
  }
)

export const axiosGetObject = createAsyncThunk<
IObject,
string,
{ rejectValue: MyKnownError }
>(
  'Objects/axiosGetObject',
  async (id, thunkApi) => {
    const response = await api.get(`/objects/objects/${id}`)
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as IObject
  }
)
