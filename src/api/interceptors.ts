import { AxiosError, AxiosHeaders, AxiosRequestConfig, AxiosResponse } from 'axios'
import jwt_decode from 'jwt-decode'

import { store } from 'store'
import { axiosAuthRefresh } from 'store/Auth/actions'
import Cookies from 'js-cookie'

const onRequest = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const token = store.getState().auth.access

  if (token && !(config.url?.includes('auth'))) {
    const decodedToken: { exp: number } = jwt_decode(token)
    const currentDate = new Date()

    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      const refresh = Cookies.get('refresh')
      if (refresh) await store.dispatch(axiosAuthRefresh({ refresh }))

      if (config?.headers) {
        const newToken = store.getState().auth.access
        if (newToken) {
          (config.headers as AxiosHeaders).set('Authorization', `Bearer ${newToken}`)
        }
      }
    } else {
      (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`)
    }
  }
  return config
}
// const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
//   const token = store.getState().auth.access
//   if ((config.url?.includes('auth')) === false && token !== null) {
//     (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`)
//   }
//   return config
// }

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
  return await Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response
}

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  // console.log(error)
  // if (error.status && error.status >= 400 && error.config?.method === 'GET') {
  //   error._isRetry = true
  // }
  return await Promise.reject(error)
}

export {
  onRequest,
  onRequestError,
  onResponse,
  onResponseError
}
