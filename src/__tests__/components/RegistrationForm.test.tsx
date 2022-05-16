import { render, screen } from '@testing-library/react';
import axios from 'axios';
import RegistrationForm from '../../components/RegistrationForm';
import { userData, successResponseMessageRegister, failedResponseMessageRegister } from '../../__mocks__/axiosResponses';
import '@testing-library/jest-dom';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Registration component', () => {
  it('Check if title exists in the component', () => {
    render(<RegistrationForm />)

    const heading = screen.getByRole('title')

    expect(heading).toBeInTheDocument()
  })

  it('Should hit the API', async () => {
    mockedAxios.post.mockResolvedValue(successResponseMessageRegister)

    expect(await axios.post(`${process.env.BACKEND_API}/api/users/register-user`)).toEqual(successResponseMessageRegister)
  })

  it('Return success response', async () => {
    mockedAxios.post.mockResolvedValueOnce(successResponseMessageRegister)

    const registerUser = async () => {axios.post(`${process.env.BACKEND_API}/api/users/register-user`, userData)}
    await registerUser()

    expect(axios.get).not.toHaveBeenCalled()
    expect(axios.post).toHaveBeenCalled()
  })

  it('Return a failed response', async () => {
    const error = new Error('Client side error')
    mockedAxios.post.mockRejectedValue(error)

    const registerUser = async () => {
      await axios.post(`${process.env.BACKEND_API}/api/users/register-user`, {})
        .catch(error => {
          console.log(error);
        })
    }

    await registerUser()

    expect(axios.post).toHaveBeenCalledWith(error)
  })
})
