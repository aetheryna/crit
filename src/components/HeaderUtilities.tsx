import { BellIcon } from '@heroicons/react/outline';
import LogOffIcon from '../../public/icons/logoff.svg';

const HeaderUtilities = () => {
  return (
    <div className="header-utilities">
      <button className="header-utilities__notifications">
        <BellIcon />
      </button>
      <button className="header-utilities__logout">
        <LogOffIcon />
      </button>
    </div>
  );
};

export default HeaderUtilities;
