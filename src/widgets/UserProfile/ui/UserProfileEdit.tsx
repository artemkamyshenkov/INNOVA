import React, { ChangeEvent } from 'react';
import cn from 'classnames';
import { Col, Row } from 'react-grid-system';
import { Button, Space } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import { useForm, Controller } from 'react-hook-form';
import TextArea from 'antd/es/input/TextArea';
import { NotificationInstance } from 'antd/es/notification/interface';
import { useAppDispatch } from '@/shared/hooks/redux';
import Avatar from '@/shared/icons/avatar.png';
import styles from './UserProfile.module.scss';
import { Input } from '@/shared/ui/Input';
import { AuthData, CurrentUser, updateUser } from '@/entities/User';
import { InputFile } from '@/shared/ui/InputFile';

interface UserProfileEditProps {
  user: CurrentUser;
  authData: AuthData;
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onEditProfile: () => void;
  notify: NotificationInstance;
}

export const UserProfileEdit: React.FC<UserProfileEditProps> = ({
  user,
  onEditProfile,
  onFileChange,
  notify,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors: formError },
  } = useForm<CurrentUser>({
    mode: 'onBlur',
    defaultValues: {
      about: user?.about,
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = async (data: CurrentUser) => {
    try {
      await dispatch(updateUser(data));
      onEditProfile();
      notify.success({ message: 'Данные успешно обновлены' });
    } catch (error) {
      console.error(error);
      notify.error({ message: error.message });
    }
  };

  return (
    <Row className={styles.profileContainer}>
      <Col xl={12}>
        <form name="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <Col className={styles.avatarContainer} xl={4}>
            <img src={user?.avatarUrl || Avatar} alt="avatar" />
          </Col>
          <Col
            className={cn([styles.nameContainer, styles.nameContainerEdit])}
            xl={8}
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
          <Col xl={4} className={styles.fieldContainer}>
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
              <InputFile onChange={onFileChange}>Обновить фото</InputFile>
              <Button onClick={onEditProfile} icon={<EditOutlined />}>
                Редактировать профиль
              </Button>
              <Button icon={<SaveOutlined />} type="primary" htmlType="submit">
                Сохранить
              </Button>
            </Space>
          </Col>
        </form>
      </Col>
    </Row>
  );
};
