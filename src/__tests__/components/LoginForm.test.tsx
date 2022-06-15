import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import axios from 'axios';
import { store } from '../../../app/store';
import LoginForm from '../../components/LoginForm';
import { successResponse } from '../../__mocks__/login';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(() => {
  mockedAxios.post.mockReset();
});

describe('Login form', () => {
  it('should check if the login form exists', () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );

    const form = screen.getByRole('login-form');

    expect(form).toBeInTheDocument();
  });

  it('should print out errors if fields are empty', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>,
      );
    });

    fireEvent.click(screen.getByRole('submit-login'));

    expect(await screen.findAllByRole('error-message')).toHaveLength(2);
  });

  it('should redirect the user if login is successful', async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );

    mockedAxios.post.mockResolvedValueOnce(successResponse);

    const testData = {
      email: 'testaccount@email.io',
      password: 'testPassword',
    };

    fireEvent.input(screen.getByRole('login-email'), {
      target: {
        value: testData.email,
      },
    });

    fireEvent.input(screen.getByRole('login-password'), {
      target: {
        value: testData.password,
      },
    });

    fireEvent.submit(screen.getByRole('submit-login'));

    await waitFor(() => {
      // expect(screen.queryAllByRole('error-message')).toHaveLength(0);
      expect(axios.post).toHaveBeenCalledWith(
        `${process.env.BACKEND_API}/api/users/login-user`,
        testData,
      );
      // expect(
      //   screen.getByText('Redirected to http://localhost:3000/home'),
      // ).toBeInTheDocument();
    });
  });
});
