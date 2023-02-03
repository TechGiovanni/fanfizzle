import { FaNewspaper, FaUsers } from 'react-icons/fa';

export const sideBarItems = [
  {
    index: 1,
    name: 'feed',
    url: '/feed',
    iconName: 'FaNewspaper',
  },
  {
    index: 3,
    name: 'people',
    url: '/people',
    iconName: 'FaUsers',
  },
];

export const fontAwesomeIcons = {
  FaNewspaper: <FaNewspaper className="icon" />,
  FaUsers: <FaUsers className="icon" />,
};
