import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { EyeIcon, EyeOffIcon, ExclamationIcon } from '@heroicons/react/outline';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { updateCurrentUser } from '../features/jwt/jwtSlice';

type LoginFormFields = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [processingRequest, setProcessingRequest] = useState(false);
  const dispatch = useDispatch();

  const formSchema: Yup.SchemaOf<LoginFormFields> = Yup.object().shape({
    email: Yup.string()
      .required('Email cannot be empty!')
      .email('This field must contain an email'),
    password: Yup.string().required('Password cannot be empty!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: yupResolver(formSchema),
  });

  const fetchUserDataIfLoginSuccessful = async (
    JWToken: string,
    userEmail: string,
  ) => {
    await axios
      .post(
        `${process.env.BACKEND_API}/api/users/get-user-details`,
        {
          email: userEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${JWToken}`,
          },
        },
      )
      .then((response) => {
        dispatch(updateCurrentUser(response.data));
      });
  };

  const handleUserLogin: SubmitHandler<LoginFormFields> = async (data) => {
    setErrorMsg('');
    setProcessingRequest(true);

    const userData = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post(`${process.env.BACKEND_API}/api/users/login-user`, userData)
      .then((response) => {
        if (response.status == 201) {
          setProcessingRequest(false);
          localStorage.setItem('crit_access_token', response.data.access_token);
          fetchUserDataIfLoginSuccessful(
            response.data.access_token,
            userData.email,
          );
          router.push('/home');
        }
      })
      .catch((error) => {
        setProcessingRequest(false);

        if (error.response.status == 401)
          setErrorMsg('Password or Email is incorrect');

        if (error.response.status == 400)
          setErrorMsg(error.response.data.message.message);
      });
  };

  return (
    <form
      role="login-form"
      action="POST"
      className="login-form"
      onSubmit={handleSubmit(handleUserLogin)}
    >
      <div className="login-form__wrap">
        <div className="login-form__email-wrap">
          <input
            id="login-email"
            className="login-form__text-field text-field"
            role="login-email"
            type="text"
            placeholder="Email"
            {...register('email')}
          />
          {errors.email && (
            <p role="error-message" className="login-form__error-message">
              <ExclamationIcon />
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="login-form__password-wrap">
          <div className="login-form__password-field">
            <input
              id="login-password"
              className="login-form__text-field text-field"
              role="login-password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              {...register('password')}
            />
            {passwordVisible ? (
              <div
                role="password-visible"
                className={`login-form__visible--${passwordVisible}`}
                onClick={() => setPasswordVisible(false)}
              >
                <EyeOffIcon />
              </div>
            ) : (
              <div
                role="password-invisible"
                className={`login-form__visible--${passwordVisible}`}
                onClick={() => setPasswordVisible(true)}
              >
                <EyeIcon />
              </div>
            )}
          </div>
          {errors.password && (
            <p role="error-message" className="login-form__error-message">
              <ExclamationIcon />
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="login-form__remember-me-wrap">
          <input id="remember-me" name="remember-me" type="checkbox" />
          <label htmlFor="remember-me">Remember Me</label>
        </div>
        <button
          role="submit-login"
          type="submit"
          className={`login-form__submit button button--primary login-form__submit--${
            processingRequest ? 'processing' : 'not-active'
          }`}
        >
          {processingRequest ? (
            <div className="ball-collide-loading">
              <div className="ball-collide-loading__ball"></div>
              <div className="ball-collide-loading__ball"></div>
              <div className="ball-collide-loading__ball"></div>
            </div>
          ) : (
            'Login'
          )}
        </button>
        {errorMsg.length > 0 && (
          <p role="error-message" className="login-form__error-message">
            <ExclamationIcon />
            {errorMsg}
          </p>
        )}
        <p className="login-form__sign-up">
          Not Signed up?&nbsp;
          <Link href="/auth/sign-up" passHref>
            <span>Click me</span>
          </Link>
          .
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
