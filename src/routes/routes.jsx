import { useRoutes } from 'react-router-dom';

import Navbar from '@components/navbar/Navbar';
import Login from '@pages/auth/login/Login';
import Register from '@pages/auth/register/Register';
import ForgotPassword from '@pages/auth/forgotPassword/ForgotPassword';
import Profile from '@pages/profile/Profile';
import Feed from '@pages/feed/Feed';
import Dashboard from '@pages/dashboard/Dashboard';
import Error from '@pages/error/Error';
import Followers from '@pages/followers/Followers';
import Following from '@pages/following/Following';

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
          path: 'profile/in/:username',
          element: <Profile />,
        },
      ],
    },
    {
      path: 'app/',
      element: <Dashboard />,
      children: [
        {
          path: 'feed',
          element: <Feed />,
        },
        {
          path: 'followers',
          element: <Followers />,
        },
        {
          path: 'following',
          element: <Following />,
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
