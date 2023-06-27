import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'api'
import {
  IGetUserResponse,
  ILoginRequest,
  ILoginResponse,
  IRefreshRequest,
  IRefreshResponse,
  MyKnownError
} from './types'


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
    const response = await api.post('/auth/token/refresh/', { refresh })
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as IRefreshResponse
  }
)

export const axiosAuthGetUser = createAsyncThunk<
IGetUserResponse,
null,
{ rejectValue: MyKnownError }
>(
  'auth/getUser',
  async (_, thunkApi) => {
    const response = await api.get('/auth/user')
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as IGetUserResponse
  }
)

