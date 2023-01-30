import { AxiosError, AxiosHeaders, AxiosRequestConfig, AxiosResponse } from 'axios'

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token: string | null = localStorage.getItem('access')
  if ((config.url?.includes('auth')) === false && token !== null) {
    (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`)
  }
  return config
}

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
  console.log(error)
  return await Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response
}

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  return await Promise.reject(error)
}

export {
  onRequest,
  onRequestError,
  onResponse,
  onResponseError
}
