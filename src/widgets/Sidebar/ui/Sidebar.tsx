import { Menu } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SidebarItems } from './SidebarItems';
import styles from './Sidebar.module.scss';
import { useAppDispatch } from '@/shared/hooks/redux';
import { userActions } from '@/entities/User';
import { RoutePath } from '@/shared/config/routerConfig';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const selectedKey =
    location.pathname === '/' ? 'profile' : location.pathname.substring(1);
  const dispatch = useAppDispatch();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  // TODO: в константы
  const handleClickItem = (key: string) => {
    switch (key) {
      case 'logout':
        dispatch(userActions.logOut());
        navigate('/login');
        break;
      case 'collapsed':
        toggleCollapsed();
        break;
      case 'messages':
        navigate(RoutePath.messages);
        break;
      case 'profile':
        navigate(RoutePath.main);
        break;
      default:
        return '';
    }
    return '';
  };
  return (
    <Menu
      mode="inline"
      inlineCollapsed={collapsed}
      items={SidebarItems(collapsed)}
      className={styles.sidebar}
      onClick={props => handleClickItem(props.key)}
      defaultSelectedKeys={[selectedKey]}
    />
  );
};
