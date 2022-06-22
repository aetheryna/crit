import { BellIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { updateLoggedInStatus, updateToken } from '../features/jwt/jwtSlice';
import LogOffIcon from '../../public/icons/logoff.svg';

const HeaderUtilities = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loggedInStatusActions = () => {
    dispatch(updateLoggedInStatus(false));
    dispatch(updateToken(''));
  };

  const handleLogOff = () => {
    loggedInStatusActions();
    localStorage.removeItem('crit_access_token');

    router.push('/auth/sign-in');
  };

  return (
    <div className="header-utilities">
      <button className="header-utilities__notifications">
        <BellIcon />
      </button>
      <button className="header-utilities__logout" onClick={handleLogOff}>
        <LogOffIcon />
      </button>
    </div>
  );
};

export default HeaderUtilities;
