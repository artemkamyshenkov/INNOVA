import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { Col, Row } from 'react-grid-system';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.scss';
import { ServiceIcon } from '@/shared/ui/ServiceIcon';

export const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
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
          <Form name="loginForm" onFinish={onFinish}>
            <Form.Item label="Username" name="username" labelCol={{ span: 24 }}>
              <Input />
            </Form.Item>

            <Form.Item label="Password" name="password" labelCol={{ span: 24 }}>
              <Input.Password />
            </Form.Item>

            <Space direction="vertical" className={styles.buttonsContainer}>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.signinButton}
              >
                Войти
              </Button>
              <Link to="/register">Еще не с нами? Создать аккаунт</Link>
            </Space>
          </Form>
        </Col>
      </Row>
    </>
  );
};
