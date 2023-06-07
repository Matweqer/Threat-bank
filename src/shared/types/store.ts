export interface IInitialCatalogState<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
  current: T | null
  status: string | null
  error: string | null
}

export interface IInitialSfcService {
  result: string | null
  status: string | null
  error: string | null
}


export interface MyKnownError {
  errorMessage: string
}


