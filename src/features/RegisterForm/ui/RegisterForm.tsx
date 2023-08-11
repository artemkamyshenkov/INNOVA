import { Button, Space } from 'antd';
import { Col, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/shared/ui/Input';
import { ServiceIcon } from '@/shared/ui/ServiceIcon';
import styles from './RegisterForm.module.scss';
import { useAppDispatch } from '@/shared/hooks/redux';
import { RegisterFormData } from '../model/types';
import { registerUser } from '@/entities/User/model/actions/actions';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = async ({ email, password }: RegisterFormData) => {
    await dispatch(registerUser({ email, password }));
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
              <Button
                type="primary"
                htmlType="submit"
                className={styles.signupButton}
              >
                Зарегистрироваться
              </Button>
              <Link to="/login">Уже есть аккаунт? Войти</Link>
            </Space>
          </form>
        </Col>
      </Row>
    </>
  );
};
