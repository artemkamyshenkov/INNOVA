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

type MenuItem = Required<MenuProps>['items'][number];

export const SidebarItems = (collapsed: boolean): MenuItem[] => [
  {
    label: '',
    key: 'collapsed',
    icon: collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
  },
  {
    label: 'Профиль',
    key: 'profile',
    icon: <UserOutlined />,
  },
  {
    label: 'Сообщения',
    key: 'messages',
    icon: <MessageOutlined />,
  },
  {
    label: 'Медиа',
    key: 'media',
    icon: <FileImageOutlined />,
  },
  {
    label: 'Настройки',
    key: 'setting',
    icon: <SettingOutlined />,
  },
  {
    label: 'Контакты',
    key: 'contsct',
    icon: <UsergroupAddOutlined />,
  },
  {
    label: 'О нас',
    key: 'about',
    icon: <InfoCircleOutlined />,
  },
  {
    label: 'Выйти',
    key: 'logout',
    icon: <LoginOutlined />,
  },
];
