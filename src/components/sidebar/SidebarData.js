import {
  FaBirthdayCake,
  FaComments,
  FaHeart,
  FaImages,
  FaNewspaper,
  FaRegBell,
  FaRegUser,
  FaUserPlus,
  FaUsers,
} from 'react-icons/fa';

export const sideBarItems = [
  {
    index: 1,
    name: 'Feed',
    url: 'app/social/foryou/feed',
    iconName: 'FaNewspaper',
  },
  {
    index: 2,
    name: 'Chat',
    url: 'app/social/chat/messages',
    iconName: 'FaComments',
  },
  {
    index: 3,
    name: 'People',
    url: 'app/social/people',
    iconName: 'FaUsers',
  },
  {
    index: 4,
    name: 'Following',
    url: 'app/social/following',
    iconName: 'FaUserPlus',
  },
  {
    index: 5,
    name: 'Followers',
    url: '/app/social/followers',
    iconName: 'FaHeart',
  },
  {
    index: 6,
    name: 'Photos',
    url: '/app/social/photos',
    iconName: 'FaImages',
  },
  {
    index: 7,
    name: 'Notifications',
    url: '/app/social/notifications',
    iconName: 'FaRegBell',
  },
  {
    index: 8,
    name: 'Profile',
    url: '/app/social/profile',
    iconName: 'FaRegUser',
  },
];

export const fontAwesomeIcons = {
  FaNewspaper: <FaNewspaper className="icon" />,
  FaComments: <FaComments className="icon" />,
  FaUsers: <FaUsers className="icon" />,
  FaUserPlus: <FaUserPlus className="icon" />,
  FaHeart: <FaHeart className="icon" />,
  FaImages: <FaImages className="icon" />,
  FaRegBell: <FaRegBell className="icon" />,
  FaBirthdayCake: <FaBirthdayCake className="icon" />,
  FaRegUser: <FaRegUser className="icon" />,
};
