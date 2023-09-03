import { LoadingOutlined } from '@ant-design/icons';
import { ref, set } from 'firebase/database';
import { useForm } from 'react-hook-form';
import { Button, Space, Spin } from 'antd';
import { Col, Row } from 'react-grid-system';
import { Link, useNavigate } from 'react-router-dom';
import { userActions } from '@/entities/User';
import { useRegisterUserMutation } from '@/shared/api/authService';
import { database } from '@/shared/config/firebase/firebaseConfig';
import { firebaseError } from '@/shared/helpers/firebaseError';
import { useAppDispatch } from '@/shared/hooks/redux';
import { AuthError } from '@/shared/types/firebase';
import { Input } from '@/shared/ui/Input';
import { ServiceIcon } from '@/shared/ui/ServiceIcon';
import { RegisterFormData } from '../model/types';
import styles from './RegisterForm.module.scss';
import { userService } from '@/shared/api/userService';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    watch,
  } = useForm<RegisterFormData>({ mode: 'onBlur' });
  const [registerUser, { error, isLoading }] = useRegisterUserMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const password = watch('password', '');
  const confirmPassword = watch('confirmPassword', '');

  const onSubmit = async ({
    email,
    password,
    firstName,
    lastName,
    username,
  }: RegisterFormData) => {
    try {
      const user = await registerUser({
        email,
        password,
        returnSecureToken: true,
      }).unwrap();
      dispatch(
        userActions.setAuthData({
          id: user.localId,
          email: user.email,
          inited: true,
        }),
      );
      await set(ref(database, `users/${user.localId}`), {
        firstName,
        lastName,
        username,
        email,
        uid: user.localId,
      });

      const currentUser = await userService.getCurrentUser(user.localId);
      dispatch(userActions.setCurrentUser(currentUser));

      navigate('/', { replace: true });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Row align="center" justify="center">
        <Col xl={4} className={styles.iconContainer}>
          <ServiceIcon name="telegram" />
        </Col>
      </Row>
      <Row align="center" justify="center">
        <Col xl={4}>
          <form name="loginForm" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Имя"
              id="firstName"
              register={register}
              fieldName="firstName"
              rules={{
                required: 'Поле обязательно к заполнению',
              }}
              error={formErrors?.firstName?.message}
            />
            <Input
              label="Фамилия"
              id="lastName"
              register={register}
              fieldName="lastName"
              rules={{
                required: 'Поле обязательно к заполнению',
              }}
              error={formErrors?.lastName?.message}
            />
            <Input
              label="Имя пользователя"
              id="username"
              register={register}
              fieldName="username"
              rules={{
                required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символа',
                },
              }}
              error={formErrors?.username?.message}
            />
            <Input
              label="Электронная почта"
              id="email"
              register={register}
              type="email"
              fieldName="email"
              rules={{
                required: 'Поле обязательно к заполнению',
              }}
              error={formErrors?.email?.message}
            />
            <Input
              label="Пароль"
              id="password"
              register={register}
              type="password"
              fieldName="password"
              rules={{
                required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 6,
                  message: 'Минимум 6 символов',
                },
              }}
              error={formErrors?.password?.message}
            />
            <Input
              label="Повторите пароль"
              id="confirmPassword"
              register={register}
              type="password"
              fieldName="confirmPassword"
              rules={{
                required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 6,
                  message: 'Минимум 6 символов',
                },
                validate: value => value === password || 'Пароли не совпадают',
              }}
              error={formErrors?.confirmPassword?.message}
            />
            {error && (
              <p className={styles.error}>
                {firebaseError(error as AuthError)}
              </p>
            )}
            <Space direction="vertical" className={styles.buttonsContainer}>
              {isLoading ? (
                <Button type="primary" className={styles.signinButton} disabled>
                  <Spin
                    indicator={<LoadingOutlined className={styles.spin} />}
                  />
                </Button>
              ) : (
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.signupButton}
                >
                  Зарегистрироваться
                </Button>
              )}
              <Link to="/login">Уже есть аккаунт? Войти</Link>
            </Space>
          </form>
        </Col>
      </Row>
    </>
  );
};
