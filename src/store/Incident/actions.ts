import { createAsyncThunk } from '@reduxjs/toolkit'

import { api } from 'api'
import { IParams, MyKnownError, IIncident, IIncidentResponse } from 'shared/types'


export const axiosGetIncidents = createAsyncThunk<
IIncidentResponse,
IParams | null,
{ rejectValue: MyKnownError }
>(
  'Incident/axiosGetIncidents',
  async (params, thunkApi) => {
    const response = await api.get('/incidents/incidents/', {
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

    return response.data as IIncidentResponse
  }
)

export const axiosGetIncident = createAsyncThunk<
IIncident,
string,
{ rejectValue: MyKnownError }
>(
  'Incidents/axiosGetIncident',
  async (id, thunkApi) => {
    const response = await api.get(`/incidents/incidents/${id}`)
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as IIncident
  }
)
