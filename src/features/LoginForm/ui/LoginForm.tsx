import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-grid-system';
import { Button, Space } from 'antd';
import { loginByUsername } from '@/entities/User/model/actions/actions';
import { useAppDispatch } from '@/shared/hooks/redux';
import { Input } from '@/shared/ui/Input';
import { ServiceIcon } from '@/shared/ui/ServiceIcon';
import { LoginFormData } from '../model/types';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = async ({ email, password }: LoginFormData) => {
    await dispatch(loginByUsername({ email, password }));
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
              <Button
                type="primary"
                htmlType="submit"
                className={styles.signinButton}
              >
                Войти
              </Button>
              <Link to="/register">Еще нет аккаунта? Зарегистрироваться</Link>
            </Space>
          </form>
        </Col>
      </Row>
    </>
  );
};
