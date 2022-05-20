import { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'

export let userData:object = {
  username: 'test',
  firstname: 'testfn',
  lastname: 'testln',
  email: 'testemail',
  password: 'testpass',
}

export const successResponseMessageRegister: AxiosResponse = {
  data: userData,
  status: 201,
  statusText: 'User created',
  headers: {},
  config: {}
}

export const errorResponseMessageRegister: AxiosError = {
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
