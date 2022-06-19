import Image from 'next/image';
import NavigationBarAsideItems from './NavigationBarAsideItems';

const NavigationBarAside = () => {
  return (
    <aside className="navigation-bar-aside">
      <div className="navigation-bar-aside__wrapper">
        <div className="navigation-bar-aside__profile-picture">
          <Image
            src={'https://picsum.photos/100'}
            width={75}
            height={75}
            objectFit={'cover'}
            alt={'profile picture'}
          />
        </div>
        <NavigationBarAsideItems />
      </div>
    </aside>
  );
};

export default NavigationBarAside;
