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
