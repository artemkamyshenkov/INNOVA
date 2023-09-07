import { Tooltip, Typography, notification } from 'antd';
import React from 'react';
import { Col } from 'react-grid-system';
import { clipboardApi } from '@/shared/helpers/clipboardApi';
import Avatar from '@/shared/icons/avatar.png';
import { FriendProfileTypes } from '../types';
import styles from './FriendProfile.module.scss';

interface FriendProfileProps {
  profile: FriendProfileTypes;
}

// TODO: рандомные авы
export const FriendProfile: React.FC<FriendProfileProps> = ({ profile }) => {
  const [notify, contextHolder] = notification.useNotification();
  const copyText = async (text: string) => {
    try {
      await clipboardApi.copyText(text);
      notify.success({ message: 'Данные успешно скопированы' });
    } catch (error) {
      console.error(error);
      notify.error({ message: 'Возникла ошибка, попробуйте еще раз' });
    }
  };
  return (
    <>
      {contextHolder}
      <Col xl={16} className={styles.profileContainer}>
        <Col className={styles.avatarContainer} xl={12}>
          <img src={Avatar} alt="avatar" />
        </Col>
        <Col className={styles.nameContainer} xl={12}>
          <Tooltip title="Копировать" placement="right">
            <Typography.Title
              level={4}
              onClick={() => {
                copyText(`${profile?.firstname} ${profile?.lastname}`);
              }}
              className={styles.profileHeading}
            >
              {profile?.firstname} {profile?.lastname}
            </Typography.Title>
          </Tooltip>

          <Typography.Title
            level={5}
            onClick={() => {
              copyText(`@${profile?.username || ''}`);
            }}
            className={styles.profileHeading}
          >
            {profile?.username ? `(@${profile?.username})` : ''}
          </Typography.Title>
        </Col>
        <Col xl={12} className={styles.fieldContainer}>{`Email: ${
          profile?.email || 'Not email yet :('
        }`}</Col>
      </Col>
    </>
  );
};
