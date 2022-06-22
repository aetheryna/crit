import {
  render,
  renderHook,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import axios from 'axios';
import { useRouter } from 'next/router';
import mockRouter from 'next-router-mock';
import { store } from '../../../app/store';
import LoginForm from '../../components/LoginForm';
import {
  successResponse,
  errorResponse401,
  errorResponse400,
} from '../../__mocks__/login';

jest.mock('axios');
jest.mock('next/router', () => require('next-router-mock'));
const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeEach(async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );
  });
});

afterEach(() => {
  mockedAxios.post.mockReset();
});

describe('Login form', () => {
  it('should check if the login form exists', () => {
    const form = screen.getByRole('login-form');

    expect(form).toBeInTheDocument();
  });

  it('should print out errors if fields are empty', async () => {
    fireEvent.click(screen.getByRole('submit-login'));

    expect(await screen.findAllByRole('error-message')).toHaveLength(2);
  });

  it('should redirect the user if login is successful', async () => {
    const { result } = renderHook(() => {
      return useRouter();
    });

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
      expect(screen.queryAllByRole('error-message')).toHaveLength(0);
      expect(axios.post).toHaveBeenCalledWith(
        `${process.env.BACKEND_API}/api/users/login-user`,
        testData,
      );
      expect(result.current).toMatchObject({ asPath: '/home' });
    });
  });

  it('should print out an error if password is not accepted', async () => {
    mockedAxios.post.mockRejectedValue(errorResponse401);

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
      expect(screen.queryAllByRole('error-message')).toHaveLength(1);
      expect(axios.post).toHaveBeenCalledWith(
        `${process.env.BACKEND_API}/api/users/login-user`,
        testData,
      );
      expect(
        screen.findByRole('error-message', {
          description: 'Password or Email is incorrect',
        }),
      ).toBeTruthy();
    });
  });

  it('should print out an error if email does not exist', async () => {
    mockedAxios.post.mockRejectedValue(errorResponse400);

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
      expect(screen.queryAllByRole('error-message')).toHaveLength(1);
      expect(axios.post).toHaveBeenCalledWith(
        `${process.env.BACKEND_API}/api/users/login-user`,
        testData,
      );
      expect(
        screen.findByRole('error-message', {
          description: 'testaccount@email.io does not exist',
        }),
      ).toBeTruthy();
    });
  });

  it('should toggle password visiblity', () => {
    fireEvent.click(screen.getByRole('password-invisible'));
    expect(screen.getByRole('password-visible')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('password-visible'));
    expect(screen.getByRole('password-invisible')).toBeInTheDocument();
  });
});
