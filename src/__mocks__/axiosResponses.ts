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
  status: 200,
  statusText: 'User created',
  headers: {},
  config: {}
}

export const failedResponseMessageRegister: AxiosResponse = {
  data: userData,
  status: 400,
  statusText: 'Client side error',
  headers: {},
  config: {}
}
