import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Space, Typography } from 'antd';
import React, { ChangeEvent } from 'react';
import { Col, Row } from 'react-grid-system';
import { CurrentUser } from '@/entities/User';
import Avatar from '@/shared/icons/avatar.png';
import { InputFile } from '@/shared/ui/InputFile';
import styles from './UserProfile.module.scss';

interface UserProfileViewProps {
  user: CurrentUser;
  mode: string;
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onEditProfile: () => void;
}

export const UserProfileView: React.FC<UserProfileViewProps> = ({
  user,
  mode,
  onFileChange,
  onEditProfile,
}) => (
  <Row className={styles.profileContainer}>
    <Col xl={12}>
      <Col className={styles.avatarContainer} xl={4}>
        <img src={user?.avatarUrl || Avatar} alt="avatar" />
      </Col>
      <Col className={styles.nameContainer} xl={4}>
        <Typography.Title level={4}>
          {user?.firstName} {user?.lastName}
        </Typography.Title>
        <Typography.Title level={5}>
          {user?.username ? `(${user?.username})` : ''}
        </Typography.Title>
      </Col>
      <Col xl={2} className={styles.fieldContainer}>{`Email: ${
        user?.email || 'Not email yet :('
      }`}</Col>
      <Col xl={4} className={styles.fieldContainer}>
        {`О себе: ${
          user?.about ||
          `Добавьте информацию о себе, чтобы другие пользователи больше узнали о вас 
        (например увлечения, хобби и пр.)`
        }`}
      </Col>
      <Col>
        <Space>
          <InputFile onChange={onFileChange}>Обновить фото</InputFile>
          <Button onClick={onEditProfile} icon={<EditOutlined />}>
            Редактировать профиль
          </Button>
          <Button
            icon={<SaveOutlined />}
            type="primary"
            disabled={mode === 'view'}
          >
            Сохранить
          </Button>
        </Space>
      </Col>
    </Col>
  </Row>
);
