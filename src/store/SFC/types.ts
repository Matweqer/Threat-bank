import { ISfc } from 'shared/types'

export interface ISfcResponse {
  count: number
  next: string | null
  previous: string | null
  results: ISfc[]
}

export interface IParams {
  search?: string
  limit?: number
  offset?: number
  ordering?: string
}

export interface MyKnownError {
  errorMessage: string
}

export interface SfcState {
  count: number
  next: string | null
  previous: string | null
  results: ISfc[]
  currentSfc: ISfc | null
  status: string | null
  error: string | null
}
