import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState } from 'react';
import { sidebarItems } from './sidebarItems';
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
      default:
        return '';
    }
    return '';
  };
  return (
    <>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        mode="inline"
        inlineCollapsed={collapsed}
        items={sidebarItems()}
        className={styles.sidebar}
        onClick={props => handleClickItem(props.key)}
      />
    </>
  );
};
