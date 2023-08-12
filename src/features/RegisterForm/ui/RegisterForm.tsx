import { Button, Space, Spin } from 'antd';
import { Col, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Input } from '@/shared/ui/Input';
import { ServiceIcon } from '@/shared/ui/ServiceIcon';
import styles from './RegisterForm.module.scss';
import { useAppDispatch } from '@/shared/hooks/redux';
import { RegisterFormData } from '../model/types';
import { useRegisterUserMutation } from '@/shared/api/authService';
import { userActions } from '@/entities/User';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();
  const [registerUser, { error, data, isLoading }] = useRegisterUserMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }: RegisterFormData) => {
    const user = await registerUser({
      email,
      password,
      returnSecureToken: true,
    }).unwrap();
    dispatch(userActions.setAuthData({ id: user.localId, email: user.email }));
    navigate('/', { replace: true });
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
              label="name"
              displayLabel="Имя"
              id="name"
              register={register}
              required
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name?.type === 'required' && <p>First name is required</p>}
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
