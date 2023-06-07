import { createAsyncThunk } from '@reduxjs/toolkit'

import { api } from 'api'
import { ICatalogParams, IVulnerabilityResponse, MyKnownError, IVulnerability } from 'shared/types'


export const axiosGetVulnerabilities = createAsyncThunk<
IVulnerabilityResponse,
ICatalogParams | null,
{ rejectValue: MyKnownError }
>(
  'Vulnerabilities/axiosGetVulnerabilities',
  async (params, thunkApi) => {
    const response = await api.get('/vulnerabilities/vulnerabilities/', {
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

    return response.data as IVulnerabilityResponse
  }
)

export const axiosGetVulnerability = createAsyncThunk<
IVulnerability,
string,
{ rejectValue: MyKnownError }
>(
  'Vulnerabilities/axiosGetVulnerability',
  async (id, thunkApi) => {
    const response = await api.get(`/vulnerabilities/vulnerabilities/${id}`)
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as IVulnerability
  }
)
