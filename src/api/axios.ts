import axios, { AxiosInstance } from 'axios'

export const api: AxiosInstance = axios.create({
  baseURL: 'https://api.threat-base.ru/api'
})
