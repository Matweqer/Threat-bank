import { api } from './axios'

interface IUser {
  pk: number
  email: string
  first_name: string
  last_name: string
}

interface ILoginResponse {
  access_token: string
  refresh_toke: string
  user: IUser
}

interface IAuthService {
  login: (email: string, password: string) => Promise<void>
}

class AuthService implements IAuthService {
  async login (email: string, password: string): Promise<void> {
    try {
      const response = await api.post<ILoginResponse>('/auth/login/', { email, password })
      localStorage.setItem('isAuth', 'true')
      localStorage.setItem('access', response.data.access_token)
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message)
        throw e
      }
    }
  }
}

export const authService = new AuthService()
