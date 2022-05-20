import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import RegistrationForm from '../../components/RegistrationForm';
import { userData, successResponseMessageRegister, errorResponseMessageRegister } from '../../__mocks__/axiosResponses';
import '@testing-library/jest-dom';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(() => {
  mockedAxios.post.mockReset()
})

describe('Registration component', () => {
  it('Check if title exists in the component', () => {
    render(<RegistrationForm />)

    const heading = screen.getByRole('title')

    expect(heading).toBeInTheDocument()
  })

  it('Display error fields when values are not input', async () => {
    render(<RegistrationForm />)

    fireEvent.submit(screen.getByRole('submit-desktop'))

    expect(await screen.findAllByRole('error-message')).toHaveLength(6)
  })

  it('Return success response from the server side', async () => {
    render(<RegistrationForm />)

    mockedAxios.post.mockResolvedValueOnce(successResponseMessageRegister)

    const testUserData = {
      username: "TestAccount",
      firstname: "Test",
      lastname: "Account",
      email: "TestAccount@crit.io",
      password: "password"
    }

    fireEvent.input(screen.getByRole("username"), {
      target: {
        value: testUserData.username
      }
    })
    fireEvent.input(screen.getByRole("firstname"), {
      target: {
        value: testUserData.firstname
      }
    })
    fireEvent.input(screen.getByRole("lastname"), {
      target: {
        value: testUserData.lastname
      }
    })
    fireEvent.input(screen.getByRole("email"), {
      target: {
        value: testUserData.email
      }
    })
    fireEvent.input(screen.getByRole("password"), {
      target: {
        value: testUserData.password
      }
    })
    fireEvent.input(screen.getByRole("confirm-password"), {
      target: {
        value: testUserData.password
      }
    })

    fireEvent.submit(screen.getByRole("submit-desktop"))

    await waitFor(() => {
      expect(screen.queryAllByRole("error-message")).toHaveLength(0)
      expect(axios.post).toHaveBeenCalledWith(`${process.env.BACKEND_API}/api/users/register-user`, testUserData)
      expect(screen.findAllByRole("success-message", {description: "You've been registered!"})).toBeTruthy()
    });
  })

  it('Catch server error on submit', async () => {
    await act(async () => {
      render(<RegistrationForm />)
    })

    mockedAxios.post.mockRejectedValueOnce(errorResponseMessageRegister)

    const testUserData = {
      username: "TestAccount",
      firstname: "Test",
      lastname: "Account",
      email: "TestAccount@crit.io",
      password: "password"
    }

    fireEvent.input(screen.getByRole("username"), {
      target: {
        value: testUserData.username
      }
    })
    fireEvent.input(screen.getByRole("firstname"), {
      target: {
        value: testUserData.firstname
      }
    })
    fireEvent.input(screen.getByRole("lastname"), {
      target: {
        value: testUserData.lastname
      }
    })
    fireEvent.input(screen.getByRole("email"), {
      target: {
        value: testUserData.email
      }
    })
    fireEvent.input(screen.getByRole("password"), {
      target: {
        value: testUserData.password
      }
    })
    fireEvent.input(screen.getByRole("confirm-password"), {
      target: {
        value: testUserData.password
      }
    })

    fireEvent.submit(screen.getByRole("submit-desktop"))

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(`${process.env.BACKEND_API}/api/users/register-user`, testUserData)
      expect(screen.findAllByRole("error-message", {description: "Error"})).toBeTruthy()
    });
  })
})
