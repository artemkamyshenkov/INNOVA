import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-grid-system';
import { Button, Space, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@/shared/hooks/redux';
import { Input } from '@/shared/ui/Input';
import { ServiceIcon } from '@/shared/ui/ServiceIcon';
import { LoginFormData } from '../model/types';
import styles from './LoginForm.module.scss';
import { useLoginUserMutation } from '@/shared/api/authService';
import { userActions } from '@/entities/User';
import { firebaseError } from '@/shared/helpers/firebaseError';
import { AuthError } from '@/shared/types/firebase';

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const [loginByUsername, { isLoading, error, data }] = useLoginUserMutation();
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
              label="email"
              displayLabel="Электронная почта"
              id="email"
              register={register}
              required
              type="email"
            />
            <Input
              label="password"
              id="password"
              displayLabel="Пароль"
              register={register}
              required
              type="password"
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
