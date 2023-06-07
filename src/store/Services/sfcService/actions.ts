import { createAsyncThunk } from '@reduxjs/toolkit'

import { api } from 'api'
import { MyKnownError } from 'shared/types'


export const axiosPostResultFileSfc = createAsyncThunk<
string,
FormData,
{ rejectValue: MyKnownError }
>(
  'sfcSrvice/axiosPostResultFileSfc',
  async (formData, thunkApi) => {
    const response = await api.post('/sfc/characteristics/upload-user-system-data/',
      formData,
      {
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    )
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as string
  }
)

