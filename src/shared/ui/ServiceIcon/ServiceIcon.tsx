import React from 'react';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Icon from '@ant-design/icons';
import cn from 'classnames';
import Telegram from '@/shared/icons/telegram.svg';
import Avatar from '@/shared/icons/avatar.png';
import styles from './ServiceIcon.module.scss';

export const iconNames = ['telegram', 'avatar'] as const;

export type IconName = (typeof iconNames)[number];

interface ServiceIconProps extends Partial<CustomIconComponentProps> {
  name: IconName;
  color?: string;
  strokeColor?: string;
}

const icons: Record<IconName, any> = {
  telegram: Telegram,
  avatar: Avatar,
};

export const ServiceIcon: React.FC<ServiceIconProps> = ({
  name,
  color,
  strokeColor,
  className,
  ...props
}) => {
  const renderIcon = () => {
    const Component = icons[name];
    const innerClassName = styles[name];
    const style = {
      fill: color,
      color,
    };

    return (
      <Component
        {...props}
        className={cn([styles.serviceIcon, innerClassName, className])}
        style={style}
      />
    );
  };

  return <Icon component={renderIcon} />;
};
