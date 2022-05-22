import { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'

export const successResponse: AxiosResponse = {
  data: 'User created',
  status: 201,
  statusText: 'User created',
  headers: {},
  config: {}
}

export const errorResponse: AxiosError = {
  name: "AxiosMockError",
  message: "Error",
  response: {
    data: {
      message: "Error"
    },
    status: 400,
    statusText: 'Client side error',
    headers: {},
    config: {}   
  },
  config: {} as AxiosRequestConfig,
  isAxiosError: true,
  toJSON: () => Object,
}
