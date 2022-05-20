import { AxiosResponse } from 'axios'

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

export const errorResponseMessageRegister: AxiosResponse = {
  data: {
    message: "error"
  },
  status: 400,
  statusText: 'Client side error',
  headers: {},
  config: {}
}
