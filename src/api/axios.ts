import axios, { AxiosInstance } from 'axios'
import { onRequestError, onRequest, onResponseError, onResponse } from './interceptors'

// TODO изменить BaseURL на данные из .env
const api: AxiosInstance = axios.create({
  baseURL: 'http://172.10.0.8:8000/api'
})

api.interceptors.request.use(onRequest, onRequestError)
api.interceptors.response.use(onResponse, onResponseError)

export { api }
