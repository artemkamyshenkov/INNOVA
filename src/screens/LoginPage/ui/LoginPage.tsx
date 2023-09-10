import { Container } from 'react-grid-system';
import { LoginForm } from '@/features/LoginForm';
import { Page } from '@/widgets/Page';
import styles from './LoginPage.module.scss';

const LoginPage = () => (
  <Page>
    <Container className={styles.formContainer}>
      <LoginForm />
    </Container>
  </Page>
);

export default LoginPage;
