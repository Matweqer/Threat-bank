import { createAsyncThunk } from '@reduxjs/toolkit'

import { api } from 'api'
import { IParams, MyKnownError, IAttack, IAttackResponse } from 'shared/types'


export const axiosGetAttacks = createAsyncThunk<
IAttackResponse,
IParams | null,
{ rejectValue: MyKnownError }
>(
  'Attacks/axiosGetAttacks',
  async (params, thunkApi) => {
    const response = await api.get('/attacks/attacks/', {
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

    return response.data as IAttackResponse
  }
)

export const axiosGetAttack = createAsyncThunk<
IAttack,
string,
{ rejectValue: MyKnownError }
>(
  'Attacks/axiosGetAttack',
  async (id, thunkApi) => {
    const response = await api.get(`/attacks/attacks/${id}`)
    if (response.status >= 400) {
      return thunkApi.rejectWithValue((response.data) as MyKnownError)
    }

    return response.data as IAttack
  }
)
