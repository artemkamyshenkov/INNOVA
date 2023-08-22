import React from 'react';
import { Col, Row } from 'react-grid-system';
import styles from './MessagesPage.module.scss';
import { Messages } from '@/features/Messages';

const MessagesPage = () => (
  <Row>
    <Col className={styles.messagesContainer}>
      <Messages />
    </Col>
  </Row>
);

export default MessagesPage;
