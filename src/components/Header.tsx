import Link from 'next/link';
import HeaderLobby from './HeaderLobby';
import HeaderUtilities from './HeaderUtilities';
import useLoggedInStatus from '../hooks/useLoggedInStatus';
import CritSVG from '../../public/images/critLogo.svg';

const Header = () => {
  const { isLoggedIn, isLoading } = useLoggedInStatus();

  return (
    <header className="header">
      <div className="header__left">
        <Link href={'/home'} passHref>
          <div className="header__image">
            <CritSVG />
            <h2>Crit</h2>
          </div>
        </Link>
        <div className="header__message-of-the-day">
          <p>Your pretty awesome</p>
        </div>
      </div>
      <div className="header__right">
        {isLoggedIn ? (
          <>
            <HeaderLobby />
            <HeaderUtilities />
          </>
        ) : (
          <Link href={'/auth/sign-in'} passHref>
            <button className="header__login-button button button--primary">
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
