import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Col, Row } from 'react-grid-system';
import { Button, Space, Typography, notification } from 'antd';
import { EditOutlined, SaveOutlined, UploadOutlined } from '@ant-design/icons';
import { useForm, Controller } from 'react-hook-form';
import TextArea from 'antd/es/input/TextArea';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import Avatar from '@/shared/icons/avatar.png';
import styles from './ProfilePage.module.scss';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';
import { Input } from '@/shared/ui/Input';
import { userService } from '@/shared/api/userService';
import { userActions } from '@/entities/User';

type Mode = 'view' | 'edit';

export type ProfileData = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  about: string;
};

const ProfilePage = () => {
  const { user, authData } = useAppSelector(state => state.user);
  const [notify, contextHolder] = notification.useNotification();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors: formError },
  } = useForm<ProfileData>({
    mode: 'onBlur',
    defaultValues: {
      about: user?.about,
    },
  });

  const [mode, setMode] = useState<Mode>('view');
  const dispatch = useAppDispatch();

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
  };

  const handleEditProfile = () => {
    setMode(mode === 'view' ? 'edit' : 'view');
  };

  const onSubmit = async (data: ProfileData) => {
    try {
      // TODO: сделать асинхронный экшен
      await userService.updateUser(data, authData?.id);
      const currentUser = await userService.getCurrentUser(authData?.id);
      dispatch(userActions.setCurrentUser(currentUser));
      setMode('view');
      notify.success({ message: 'Данные успешно обновлены' });
    } catch (error) {
      console.error(error);
      notify.error({ message: error.message });
    }
  };

  useEffect(() => {
    if (user?.about) {
      setValue('about', user?.about);
    }
  }, [user, setValue]);

  if (!user?.email || !user?.username) {
    return <PageLoader />;
  }
  if (mode === 'edit') {
    return (
      <>
        {contextHolder}
        <Row className={styles.profileContainer}>
          <Col xl={12}>
            <form name="loginForm" onSubmit={handleSubmit(onSubmit)}>
              <Col className={styles.avatarContainer} xl={4}>
                <img src={user?.avatar || Avatar} alt="avatar" />
              </Col>

              <Col
                className={cn([styles.nameContainer, styles.nameContainerEdit])}
                xl={4}
              >
                <Input
                  defaultValue={user?.firstName || ''}
                  id="firstName"
                  fieldName="firstName"
                  register={register}
                  rules={{
                    required: 'Поле обязательно к заполнению',
                  }}
                  error={formError?.firstName?.message}
                />
                <Input
                  defaultValue={user?.lastName || ''}
                  id="lastName"
                  fieldName="lastName"
                  register={register}
                  rules={{
                    required: 'Поле обязательно к заполнению',
                  }}
                  error={formError?.lastName?.message}
                />
                <Input
                  defaultValue={user?.username || ''}
                  id="username"
                  fieldName="username"
                  register={register}
                  rules={{
                    required: 'Поле обязательно к заполнению',
                  }}
                  error={formError?.username?.message}
                />
              </Col>
              <Col xl={2} className={styles.fieldContainer}>
                <Input
                  defaultValue={user?.email || ''}
                  id="email"
                  fieldName="email"
                  register={register}
                  rules={{
                    required: 'Поле обязательно к заполнению',
                  }}
                  error={formError?.email?.message}
                />
              </Col>
              <Col xl={4} className={styles.fieldContainer}>
                <Controller
                  name="about"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      placeholder="Добавьте информацию о себе, чтобы другие пользователи больше узнали о вас (например увлечения, хобби и пр.)"
                      defaultValue={user?.about || ''}
                    />
                  )}
                />
              </Col>

              <Col>
                <Space>
                  <Button icon={<UploadOutlined />} onChange={handleFileChange}>
                    Обновить фото
                  </Button>
                  <Button onClick={handleEditProfile} icon={<EditOutlined />}>
                    Редактировать профиль
                  </Button>
                  <Button
                    icon={<SaveOutlined />}
                    type="primary"
                    htmlType="submit"
                  >
                    Сохранить
                  </Button>
                </Space>
              </Col>
            </form>
          </Col>
        </Row>
      </>
    );
  }
  return (
    <>
      {contextHolder}
      <Row className={styles.profileContainer}>
        <Col xl={12}>
          <Col className={styles.avatarContainer} xl={4}>
            <img src={user?.avatar || Avatar} alt="avatar" />
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
              <Button icon={<UploadOutlined />} onChange={handleFileChange}>
                Обновить фото
              </Button>
              <Button onClick={handleEditProfile} icon={<EditOutlined />}>
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
    </>
  );
};

export default ProfilePage;
