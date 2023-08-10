import { Button, Space } from 'antd';
import { Col, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Input } from '@/shared/ui/Input';
import { ServiceIcon } from '@/shared/ui/ServiceIcon';
import styles from './RegisterForm.module.scss';
import { firebaseConfig } from '@/shared/config/firebase/firebaseConfig';

type FormData = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(data => console.log(data));
  console.log(firebaseConfig);
  return (
    <>
      <Row align="center" justify="center">
        <Col xl={1}>
          <ServiceIcon name="telegram" />
        </Col>
      </Row>
      <Row align="center" justify="center">
        <Col xl={4}>
          <form name="loginForm" onSubmit={onSubmit}>
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
            />
            <Input
              label="password"
              id="password"
              displayLabel="Пароль"
              register={register}
              required
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
