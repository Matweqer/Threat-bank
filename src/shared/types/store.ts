
export interface IInitialState<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
  current: T | null
  status: string | null
  error: string | null
}


export interface MyKnownError {
  errorMessage: string
}


