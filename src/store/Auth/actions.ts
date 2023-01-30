import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'api'

interface IUser {
  pk: number
  email: string
  first_name: string
  last_name: string
}

interface ILoginRequest {
  email: string
  password: string
}

interface ILoginResponse {
  access_token: string
  refresh_token: string
  user: IUser
}

interface MyKnownError {
  errorMessage: string
}

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
