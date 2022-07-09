import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  updateCurrentUser,
  updateCurrentLoggedState,
} from '../features/jwt/jwtSlice';

const useLoggedInStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const JWToken = localStorage.getItem('crit_access_token');

    const dispatchEvents = (currentUser: object, state: boolean) => {
      dispatch(updateCurrentUser(currentUser));
      dispatch(updateCurrentLoggedState(state));
    };

    const fetchUserData = async () => {
      setIsLoading(true);

      if (JWToken) {
        await axios
          .get(`${process.env.BACKEND_API}/api/users/get-user-details`, {
            headers: {
              Authorization: `Bearer ${JWToken}`,
            },
          })
          .then((response) => {
            dispatchEvents(response.data, true);
            setIsLoggedIn(true);
          })
          .catch(() => {
            router.push('/auth/sign-in');
          });
      } else {
        dispatchEvents({}, false);
        setIsLoggedIn(false);
      }

      setIsLoading(false);
    };

    fetchUserData();
  }, [dispatch]);

  return {
    isLoggedIn,
    isLoading,
  };
};

export default useLoggedInStatus;
