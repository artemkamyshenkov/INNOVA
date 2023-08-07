import cn from 'classnames';
import { Layout } from 'antd';
import { Row, Col } from 'react-grid-system';
import { useTheme } from '@/app/providers/themeProvider';
import AppRouter from '@/app/providers/router/ui/AppRouter';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar';
import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Layout className={cn('app', theme)}>
      <Layout.Content>
        <Row>
          <Col xl={2}>
            <Sidebar />
          </Col>
          <Col xl={10}>
            <AppRouter />
            <button type="button" onClick={toggleTheme}>
              toggle
            </button>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};
