import Image from 'next/image';

const HeaderLobby = () => {
  const userList = [
    {
      image: 'https://picsum.photos/100',
      username: 'username',
    },
    {
      image: 'https://picsum.photos/100',
      username: 'username',
    },
    {
      image: 'https://picsum.photos/100',
      username: 'username',
    },
    {
      image: 'https://picsum.photos/100',
      username: 'username',
    },
    {
      image: 'https://picsum.photos/100',
      username: 'username',
    },
  ];

  return (
    <div className="header-lobby">
      <ul className="header-lobby__users">
        {userList.map((user, index) => (
          <li className="header-lobby__user" key={index}>
            <div className="header-lobby__user-picture">
              <Image
                src={user.image}
                width={30}
                height={30}
                objectFit={'cover'}
                alt={'username'}
              />
            </div>
            <div className="header-lobby__user-hover-name">
              <span>{user.username}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderLobby;
