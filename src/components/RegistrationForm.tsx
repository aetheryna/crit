import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UploadIcon, ExclamationIcon } from '@heroicons/react/outline';
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios';
import * as Yup from 'yup';

type FormFields = {
  username: string,
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  confirmedPassword: string,
}

const RegistrationForm = () => {
  const [successful, setSuccessful] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const formSchema: Yup.SchemaOf<FormFields> = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(8, "Username length should be at least 8 characters")
      .max(24, "Username length should be at maximum of 24 characters"),
    firstname: Yup.string()
      .required("First name is required"),
    lastname: Yup.string()
      .required("Last name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password length should be at least 8 characters"),
    confirmedPassword: Yup.string()
      .required("Password is required")
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  })

  const { register, handleSubmit, formState: { errors }} = useForm<FormFields>({
    resolver: yupResolver(formSchema)
  });

  const handleUserRegister: SubmitHandler<FormFields> = async( data ) => {
    setSuccessful('')
    setErrorMsg('')

    const userData = {
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    }

    await axios
      .post(`${process.env.BACKEND_API}/api/users/register-user`, userData)
      .then(response => {
        if (response.status == 201)
          setSuccessful("You've been registered!")
      })
      .catch(error => {
        setErrorMsg(error.response.data.message)
      })
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit(handleUserRegister)}>
      <h1 role="title">Join the Family</h1>

      <div className="registration-form__wrap">
        <div className="registration-form__left">
          <div className="registration-form__field">
            <input 
              role="username"
              id="text-username" 
              type="text" 
              className="registration-form__text-input text-field" 
              placeholder="Enter a username" 
              {...register('username')}
            />
            {errors.username && (<p role="error-message" className="registration-form__error-message"><ExclamationIcon />{errors.username.message}</p>)}
          </div>
          <div className="registration-form__field">
            <input 
              role="firstname"
              id="text-firstname" 
              type="text" 
              className="registration-form__text-input text-field" 
              placeholder="Enter your first name" 
              {...register('firstname')}
            />
            {errors.firstname && (<p role="error-message" className="registration-form__error-message"><ExclamationIcon />{errors.firstname.message}</p>)}
          </div>
          <div className="registration-form__field">
            <input 
              role="lastname"
              id="text-lastname" 
              type="text" 
              className="registration-form__text-input text-field" 
              placeholder="Enter your last name"
              {...register('lastname')}
            />
            {errors.lastname && (<p role="error-message" className="registration-form__error-message"><ExclamationIcon />{errors.lastname.message}</p>)}
          </div>
          <div className="registration-form__field">
            <input 
              role="password"
              id="text-password" 
              type="password" 
              className="registration-form__text-input text-field" 
              placeholder="Enter a password"
              {...register('password')}
            />
            {errors.password && (<p role="error-message" className="registration-form__error-message"><ExclamationIcon />{errors.password.message}</p>)}
          </div>
          <div className="registration-form__field">
            <input 
              role="confirm-password"
              id="text-password-confirm" 
              type="text" 
              className="registration-form__text-input text-field" 
              placeholder="Enter your password again"
              {...register('confirmedPassword')}
            />
            {errors.confirmedPassword && (<p role="error-message" className="registration-form__error-message"><ExclamationIcon />{errors.confirmedPassword.message}</p>)}
          </div>
          <div className="registration-form__field">
            <input 
              role="email"
              id="text-email" 
              type="text" 
              className="registration-form__text-input text-field" 
              placeholder="Enter a email" 
              {...register('email')}
            />
            {errors.email && (<p role="error-message" className="registration-form__error-message"><ExclamationIcon />{errors.email.message}</p>)}
          </div>
          {successful !== '' ? <p role="success-message" className="registration-form__success-message">{successful}</p> : null}
          {errorMsg !== '' ? <p role="error-message" className="registration-form__error-message">{errorMsg}</p> : null }
          <button role="submit-desktop" className="registration-form__button registration-form__button--desktop button button--primary" type="submit"> Sign up </button>
        </div>

        <div className="registration-form__right">
          <label htmlFor="file-input" className='registration-form__profile-picture'>
            <span>
              <UploadIcon />
            </span>
          </label>
          <input id="file-input" type="file" accept="image/png, image/gif, image/jpeg" className="registration-form__text-input profile-picture" />

          <div className="registration-form__description">
            <h1>Upload an Avatar</h1>
            <p>Don't have one?<br /> We got you covered</p>
          </div>
        </div>
      </div>

      <button role="submit-mobile" className="registration-form__button registration-form__button--mobile button button--primary" type="submit"> Sign up </button>
    </form>
  )
}

export default RegistrationForm
