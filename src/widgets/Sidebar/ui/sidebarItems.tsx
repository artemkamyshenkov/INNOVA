import {
  FileImageOutlined,
  InfoCircleOutlined,
  LoginOutlined,
  MessageOutlined,
  SettingOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

import type { MenuProps } from 'antd/es/menu';

type MenuItem = Required<MenuProps>['items'][number];

export const sidebarItems = (): MenuItem[] => [
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
    label: 'Войти',
    key: 'login',
    icon: <LoginOutlined />,
  },
];
