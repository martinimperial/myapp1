// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Login',
      type: 'item',
      url: '/login',
      icon: icons.LoginOutlined,
      target: true
    },
    {
      id: 'login2',
      title: 'Login2',
      type: 'item',
      url: '/login2',
      icon: icons.LoginOutlined,
      target: true
    },    
    {
      id: 'register1',
      title: 'Register',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id:'register2',
      title: 'Register2',
      type: 'item',
      url: '/register2',
      icon: icons.ProfileOutlined,
      target: true
    }

  ]
};

export default pages;
