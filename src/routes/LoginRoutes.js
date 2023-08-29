import { lazy } from 'react';

// project import

import MinimalLayout from '../layout/MinimalLayout';
import Hello from '../pages/Hello';
import Greeting from '../pages/Greeting';
import RecipeReviewCard from '../components/RecipeReviewCard';

// render - login
//const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
//const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'card',
      element: <RecipeReviewCard />

    },
    {
      path: 'hello',
      element: <Hello />
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
