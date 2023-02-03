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
import People from '@pages/people/People';
import Home from '@pages/home/Home';

export const AppRouter = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/in/',
      element: <Navbar />, // should be protected - redirect to home
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
      ],
    },
    {
      path: '/app/',
      element: <Dashboard />,
      children: [
        {
          path: 'profile/in/:username',
          element: <Profile />,
        },
        {
          path: 'feed',
          element: <Feed />,
        },
        {
          path: 'people',
          element: <People />,
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
