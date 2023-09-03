import React from 'react';
import {
  FileImageOutlined,
  InfoCircleOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  SettingOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

import type { MenuProps } from 'antd/es/menu';
import { MENU_ITEMS } from '../config/constants';

type MenuItem = Required<MenuProps>['items'][number];

export const SidebarItems = (collapsed: boolean): MenuItem[] => [
  {
    label: '',
    key: MENU_ITEMS.COLLAPSED,
    icon: collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
  },
  {
    label: 'Профиль',
    key: MENU_ITEMS.PROFILE,
    icon: <UserOutlined />,
  },
  {
    label: 'Сообщения',
    key: MENU_ITEMS.MESSAGES,
    icon: <MessageOutlined />,
  },
  {
    label: 'Медиа',
    key: MENU_ITEMS.MEDIA,
    icon: <FileImageOutlined />,
  },
  {
    label: 'Настройки',
    key: MENU_ITEMS.SETTING,
    icon: <SettingOutlined />,
  },
  {
    label: 'Контакты',
    key: MENU_ITEMS.CONTACT,
    icon: <UsergroupAddOutlined />,
  },
  {
    label: 'О нас',
    key: MENU_ITEMS.ABOUT,
    icon: <InfoCircleOutlined />,
  },
  {
    label: 'Выйти',
    key: MENU_ITEMS.LOGOUT,
    icon: <LoginOutlined />,
  },
];
