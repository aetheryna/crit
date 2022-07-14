import { ChatIcon } from '@heroicons/react/outline';
import useLoggedInStatus from '../hooks/useLoggedInStatus';

const UtilityWheel = () => {
  const { isLoading, isLoggedIn } = useLoggedInStatus();

  return (
    <>
      {isLoggedIn && (
        <aside className="utility-wheel">
          <button className="utility-wheel__chat">
            <ChatIcon />
          </button>
        </aside>
      )}
    </>
  );
};

export default UtilityWheel;
