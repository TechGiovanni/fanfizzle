import { useRoutes } from 'react-router-dom';

import Navbar from '@components/navbar/Navbar';
import Login from '@pages/auth/login/Login';
import Register from '@pages/auth/register/Register';
import ForgotPassword from '@pages/auth/forgotPassword/ForgotPassword';
import Profile from '@pages/profile/Profile';
import Feed from '@pages/dashboard/features/feed/Feed';
import SideBar from '@pages/dashboard/Dashboard';
import Error from '@pages/error/Error';

export const AppRouter = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: 'auth/login',
          element: <Login />,
        },
        {
          path: 'auth/register',
          element: <Register />,
        },
        {
          path: 'auth/password-reset',
          element: <ForgotPassword />,
        },
        {
          path: 'profile/:username',
          element: <Profile />,
        },
      ],
    },
    {
      path: 'app/',
      element: <SideBar />,
      children: [
        {
          path: 'foryou/feed',
          element: <Feed />,
        },
        {
          path: 'social/followers',
          element: <Feed />,
        },
        {
          path: 'social/following',
          element: <Feed />,
        },
      ],
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);

  return element;
};
