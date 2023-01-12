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
  login: (email: string, password: string) => Promise<ILoginResponse | undefined>
}

class AuthService implements IAuthService {
  async login (email: string, password: string): Promise<ILoginResponse | undefined> {
    try {
      const response: ILoginResponse = await api.post('auth/login/', { email, password })
      localStorage.setItem('isAuth', 'true')
      localStorage.setItem('access', response.access_token)
      return response
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message)
        throw e
      }
    }
  }
}

export const authService = new AuthService()
