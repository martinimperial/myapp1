import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import MainLayout from '../layout/MainLayout';
import Products from '../pages/Products';
import Orders from '../pages/Orders';
// ==============================

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('../pages/dashboard')));

// render - utilities
const Typography = Loadable(lazy(() => import('../pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('../pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('../pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('../pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },    
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    },
    {
      path: 'products',
      element: <Products />
    },
    {
      path: 'orders',
      element: <Orders />
    }
  ]
};
/*
const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {/home/hp/workspace/react/mantis-free-react-admin-template/src/routes
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
  ]
};
*/

export default MainRoutes;
