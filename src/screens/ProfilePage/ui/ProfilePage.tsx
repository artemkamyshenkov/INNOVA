import * as React from 'react';
import { Col, Row } from 'react-grid-system';
import { Button, Input, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useAppSelector } from '@/shared/hooks/redux';
import Avatar from '@/shared/icons/avatar.png';
import styles from './ProfilePage.module.scss';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';

const ProfilePage = () => {
  const { user } = useAppSelector(state => state.user);

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
  };

  if (!user?.email || !user?.username) {
    return <PageLoader />;
  }
  return (
    <Row className={styles.profileContainer}>
      <Col xl={12}>
        <Col className={styles.avatarContainer} xl={2}>
          <img src={user?.avatar || Avatar} alt="avatar" />
        </Col>
        <Col className={styles.nameContainer} xl={2}>
          <Typography.Title level={4}>
            {user?.firstName} {user?.lastName}
          </Typography.Title>
          <Typography.Title level={5}>
            {user?.username ? `(@${user?.username})` : ''}
          </Typography.Title>
        </Col>
        <Col xl={2} className={styles.fieldContainer}>{`Email: ${
          user?.email || 'Not email yet :('
        }`}</Col>
        <Col xl={4} className={styles.fieldContainer}>
          <Input.TextArea
            maxLength={200}
            showCount
            allowClear
            placeholder="Укажите информацию о себе"
          />
        </Col>
        <Col>
          <Button
            className={styles.avatarButton}
            icon={<UploadOutlined />}
            type="primary"
            onChange={handleFileChange}
          >
            Обновить фото
          </Button>
          <Button>Сохранить</Button>
        </Col>
      </Col>
    </Row>
  );
};

export default ProfilePage;
