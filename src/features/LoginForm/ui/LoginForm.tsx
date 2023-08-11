import React from 'react';
import { Button, Space } from 'antd';
import { Col, Row } from 'react-grid-system';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import styles from './LoginForm.module.scss';
import { ServiceIcon } from '@/shared/ui/ServiceIcon';
import { Input } from '@/shared/ui/Input';
import { useAppDispatch } from '@/shared/hooks/redux';
import { userActions } from '@/entities/User';

type FormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = (data: FormData) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(userCredential => {
        const { user } = userCredential;
        dispatch(
          userActions.setAuthData({
            id: user.uid,
            email: user.email,
          }),
        );
        navigate('/', { replace: true });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  return (
    <>
      <Row align="center" justify="center">
        <Col xl={1}>
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
                className={styles.signupButton}
              >
                Войти
              </Button>
              <Link to="/login">Еще нет аккаунта? Зарегистрироваться</Link>
            </Space>
          </form>
        </Col>
      </Row>
    </>
  );
};
