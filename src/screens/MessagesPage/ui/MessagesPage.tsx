import React from 'react';
import { Col, Row } from 'react-grid-system';
import styles from './MessagesPage.module.scss';
import { Messages } from '@/features/Messages';
import { Page } from '@/shared/ui/Page';

const MessagesPage = () => (
  <Page>
    <Row className={styles.messagesWrapper}>
      <Col className={styles.messagesContainer}>
        <Messages />
      </Col>
    </Row>
  </Page>
);

export default MessagesPage;
