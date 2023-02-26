interface IUser {
  pk: number
  email: string
  first_name: string
  last_name: string
}

export interface ILoginRequest {
  email: string
  password: string
}

export interface ILoginResponse {
  access_token: string
  refresh_token: string
  user: IUser
}

export interface IRefreshRequest {
  refresh: string
}

export interface IRefreshResponse {
  access: string
  refresh: string
}

export interface MyKnownError {
  errorMessage: string
}

export interface AuthState {
  status: string | null
  error: string | null
}
