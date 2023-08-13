import { Col, Row } from 'react-grid-system';
import { LoadingOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Space, Spin } from 'antd';
import { useLoginUserMutation } from '@/shared/api/authService';
import { firebaseError } from '@/shared/helpers/firebaseError';
import { useAppDispatch } from '@/shared/hooks/redux';
import { AuthError } from '@/shared/types/firebase';
import { Input } from '@/shared/ui/Input';
import { ServiceIcon } from '@/shared/ui/ServiceIcon';
import { LoginFormData } from '../model/types';
import styles from './LoginForm.module.scss';
import { userActions } from '@/entities/User';
import { userService } from '@/shared/api/userService';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: formError },
  } = useForm<LoginFormData>({ mode: 'onBlur' });
  const [loginByUsername, { isLoading, error }] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }: LoginFormData) => {
    try {
      const user = await loginByUsername({
        email,
        password,
        returnSecureToken: true,
      }).unwrap();
      dispatch(
        userActions.setAuthData({ id: user.localId, email: user.email }),
      );
      const currentUser = await userService.getCurrentUser(user.localId);
      dispatch(userActions.setCurrentuser(currentUser));
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
              label="Электронная почта"
              id="email"
              type="email"
              fieldName="email"
              register={register}
              rules={{
                required: 'Поле обязательно к заполнению',
              }}
              error={formError?.email?.message}
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
              error={formError?.password?.message}
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
                  className={styles.signinButton}
                >
                  Войти
                </Button>
              )}

              <Link to="/register">Еще нет аккаунта? Зарегистрироваться</Link>
            </Space>
          </form>
        </Col>
      </Row>
    </>
  );
};
