import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-grid-system';
import { Button, Space, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { ref, set } from 'firebase/database';
import { userActions } from '@/entities/User';
import { useRegisterUserMutation } from '@/shared/api/authService';
import { firebaseError } from '@/shared/helpers/firebaseError';
import { useAppDispatch } from '@/shared/hooks/redux';
import { AuthError } from '@/shared/types/firebase';
import { Input } from '@/shared/ui/Input';
import { ServiceIcon } from '@/shared/ui/ServiceIcon';
import { RegisterFormData } from '../model/types';
import styles from './RegisterForm.module.scss';
import { database } from '@/shared/config/firebase/firebaseConfig';

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

  const onSubmit = async ({ email, password, name }: RegisterFormData) => {
    try {
      const user = await registerUser({
        email,
        password,
        returnSecureToken: true,
      }).unwrap();
      dispatch(
        userActions.setAuthData({ id: user.localId, email: user.email }),
      );
      await set(ref(database, `users/${user.localId}`), {
        firstName: name,
        email,
        uid: user.localId,
      });

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
              id="name"
              register={register}
              fieldName="name"
              rules={{
                required: 'Поле обязательно к заполнению',
              }}
              error={formErrors?.name?.message}
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
              }}
              error={formErrors?.confirmPassword?.message}
            />
            {password !== confirmPassword && (
              <p className={styles.passwordError}>Пароли не совпадают</p>
            )}
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
