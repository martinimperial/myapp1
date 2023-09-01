import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';

import MinimalLayout from '../layout/MinimalLayout';
import Hello from '../pages/Hello';
import Greeting from '../pages/Greeting';
import RecipeReviewCard from '../components/RecipeReviewCard';
import Login from '../pages/Login';

// render - login
const AuthLogin = Loadable(lazy(() => import('../pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('../pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'login',
      element: <AuthLogin />
    },
    {
      path: 'register',
      element: <AuthRegister />
    },
    {
      path: 'card',
      element: <RecipeReviewCard />

    },
    {
      path: 'login2',
      element: <Login />
    },
    {
      path: 'register2',
      element: <Greeting />
    },
    {
      path: 'greeting',
      element: <Greeting />
    },    
    {
      path: '/',
      element: <Hello />
    }
  ]
};

export default LoginRoutes;
