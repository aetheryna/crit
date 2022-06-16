import { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

export const successResponse: AxiosResponse = {
  data: {
    access_token: '1234',
  },
  status: 201,
  statusText: 'Login accepted',
  headers: {},
  config: {},
};

export const errorResponse401: AxiosError = {
  name: 'AxiosMockError',
  message: 'Error',
  response: {
    data: {
      message: 'Error',
    },
    status: 401,
    statusText: 'Client side error',
    headers: {},
    config: {},
  },
  config: {} as AxiosRequestConfig,
  isAxiosError: true,
  toJSON: () => Object,
};

export const errorResponse400: AxiosError = {
  name: 'AxiosMockError',
  message: 'Error',
  response: {
    data: {
      message: {
        message: 'testaccount@email.io does not exist',
      },
    },
    status: 400,
    statusText: 'Client side error',
    headers: {},
    config: {},
  },
  config: {} as AxiosRequestConfig,
  isAxiosError: true,
  toJSON: () => Object,
};
