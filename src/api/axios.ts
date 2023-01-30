import axios, { AxiosInstance } from 'axios'
import { onRequestError, onRequest } from './interceptors'

const api: AxiosInstance = axios.create({
  baseURL: 'https://api.threat-base.ru/api'
})

api.interceptors.request.use(onRequest, onRequestError)
// api.interceptors.response.use(onResponse, onResponseError)

export { api }
