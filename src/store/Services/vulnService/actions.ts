import { createAsyncThunk } from '@reduxjs/toolkit'

import { api } from 'api'
import { MyKnownError } from 'shared/types'

import { ISfcWithVulnerabilitiesResponse } from './types'


export const axiosGetResultVulnService = createAsyncThunk<
ISfcWithVulnerabilitiesResponse,
number[],
{ rejectValue: MyKnownError }
>(
  'vulnService/axiosGetResultVulnService',
  async (selectedSfc, thunkApi) => {
    const response = await api.get('sfc/characteristics/sfc-with-vulnerabilities/', {
      params: {
        id__in: selectedSfc.join(',')
      }
    })
    console.log()
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }
    return response.data as ISfcWithVulnerabilitiesResponse
  }
)

