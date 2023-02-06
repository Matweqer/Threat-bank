import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'api'
import { ILoginRequest, ILoginResponse, IRefreshRequest, IRefreshResponse, MyKnownError } from './types'


export const axiosAuthLogin = createAsyncThunk<
ILoginResponse,
ILoginRequest,
{ rejectValue: MyKnownError }
>(
  'auth/login',
  async ({ email, password }, thunkApi) => {
    const response = await api.post('/auth/login/', { email, password })
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as ILoginResponse
  }
)

export const axiosAuthRefresh = createAsyncThunk<
IRefreshResponse,
IRefreshRequest,
{ rejectValue: MyKnownError }
>(
  'auth/refresh',
  async ({ refresh }, thunkApi) => {
    console.log('refresh req')
    const response = await api.post('/auth/token/refresh/', { refresh })
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as IRefreshResponse
  }
)
