import { BellIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  updateCurrentLoggedState,
  updateCurrentUser,
} from '../features/jwt/jwtSlice';
import LogOffIcon from '../../public/icons/logoff.svg';

const HeaderUtilities = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loggedInStatusActions = () => {
    dispatch(updateCurrentLoggedState(false));
    dispatch(updateCurrentUser({}));
  };

  const handleLogOff = async () => {
    loggedInStatusActions();
    const JWToken = localStorage.getItem('crit_access_token');

    await axios
      .post(
        `${process.env.BACKEND_API}/api/users/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${JWToken}`,
          },
        },
      )
      .then(() => {
        localStorage.removeItem('crit_access_token');
        router.push('/auth/sign-in');
      });
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
