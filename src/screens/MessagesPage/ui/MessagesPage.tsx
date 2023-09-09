import { Messages } from '@/features/Messages';
import { Page } from '@/widgets/Page';
import { Col, Row } from 'react-grid-system';
import styles from './MessagesPage.module.scss';

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
