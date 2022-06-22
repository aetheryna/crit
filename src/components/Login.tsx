import CritLogo from '../../public/images/critLogo.svg';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <section className="login">
      <div className="login__wrapper">
        <div className="login__top">
          <CritLogo />
          <h1>Welcome</h1>
          <h1>Sign in to Continue</h1>
        </div>
        <div className="login__bottom">
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
