// assets
import { DashboardOutlined } from '@ant-design/icons';
import CategoryIcon from '@mui/icons-material/Category';

// icons
const icons = {
  DashboardOutlined,
  CategoryIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'products',
      title: 'Products',
      type: 'item',
      url: '/products',
      icon: icons.CategoryIcon,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
