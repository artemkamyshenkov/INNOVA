import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState } from 'react';
import { SidebarItems } from './SidebarItems';
import styles from './Sidebar.module.scss';
import { useAppDispatch } from '@/shared/hooks/redux';
import { userActions } from '@/entities/User';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const dispatch = useAppDispatch();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleClickItem = (key: string) => {
    switch (key) {
      case 'logout':
        dispatch(userActions.logOut());
        break;
      case 'collapsed':
        toggleCollapsed();
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
      defaultSelectedKeys={['profile']}
    />
  );
};
