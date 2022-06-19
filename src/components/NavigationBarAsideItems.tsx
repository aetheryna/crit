import Link from 'next/link';
import { useRouter } from 'next/router';
import { HomeIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';
import { ClockIcon, HashtagIcon, TagIcon } from '@heroicons/react/outline';

const NavigationBarAsideItems = () => {
  const router = useRouter();
  const navigationItems = [
    {
      href: '/home',
      svg: <HomeIcon />,
      name: 'Home',
    },
    {
      href: '/my-profile',
      svg: <UserCircleIcon />,
      name: 'My Profile',
    },
    {
      href: '/activity-feed',
      svg: <HashtagIcon />,
      name: 'Activity Feed',
    },
    {
      href: '/trending',
      svg: <TagIcon />,
      name: 'Trending',
    },
    {
      href: '/friends',
      svg: <UsersIcon />,
      name: 'Friends',
    },
    {
      href: '/lobbies',
      svg: <ClockIcon />,
      name: 'Lobbies',
    },
  ];

  return (
    <ul className="navigation-bar-aside-items">
      {navigationItems.map((item, index) => (
        <Link key={index} href={item.href} passHref>
          <li
            className={`navigation-bar-aside-items__item ${
              router.pathname.includes(item.href) ? 'active' : ''
            }`}
          >
            {item.svg}
            <span>{item.name}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavigationBarAsideItems;
