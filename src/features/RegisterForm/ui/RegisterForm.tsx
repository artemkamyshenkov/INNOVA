import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { Col, Row } from 'react-grid-system';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row align="center" justify="center">
      <Col xl={6}>
        <Form name="loginForm" onFinish={onFinish}>
          <Form.Item
            label="Имя"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Электронная почта"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Space direction="vertical">
            <Button type="primary" htmlType="submit">
              Зарегистрироваться
            </Button>
            <Link to="/login">Уже есть аккаунт? Войти</Link>
          </Space>
        </Form>
      </Col>
    </Row>
  );
};
