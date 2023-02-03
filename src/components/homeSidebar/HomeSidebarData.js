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
    url: 'app/feed',
    iconName: 'FaNewspaper',
  },
  {
    index: 3,
    name: 'People',
    url: 'app/people',
    iconName: 'FaUsers',
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
