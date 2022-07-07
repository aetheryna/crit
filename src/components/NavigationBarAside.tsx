import Image from 'next/image';
import Link from 'next/link';
import useLoggedInStatus from '../hooks/useLoggedInStatus';
import NavigationBarAsideItems from './NavigationBarAsideItems';

const NavigationBarAside = () => {
  const { isLoading, isLoggedIn } = useLoggedInStatus();

  return (
    <aside className="navigation-bar-aside">
      <div className="navigation-bar-aside__wrapper">
        <div
          className={`navigation-bar-aside__profile-block ${
            isLoggedIn ? 'logged-in' : 'logged-out'
          }`}
        >
          {isLoggedIn ? (
            <>
              <div className="navigation-bar-aside__profile-picture">
                <Image
                  src={'https://picsum.photos/100'}
                  width={50}
                  height={50}
                  objectFit={'cover'}
                  alt={'profile picture'}
                />
              </div>
              <Link href={'/home'} passHref>
                <h3>Aethery</h3>
              </Link>
            </>
          ) : null}
        </div>
        <NavigationBarAsideItems />
      </div>
    </aside>
  );
};

export default NavigationBarAside;
