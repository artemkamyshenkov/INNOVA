import cn from 'classnames';
import { Layout } from 'antd';
import { Row, Col, Container } from 'react-grid-system';
import { useTheme } from '@/app/providers/themeProvider';
import AppRouter from '@/app/providers/router/ui/AppRouter';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar';
import './styles/index.scss';
import { useAppSelector } from '@/shared/hooks/redux';

export const App = () => {
  const { theme } = useTheme();
  const { authData } = useAppSelector(state => state.user);
  const isLoggedIn = !!authData.id;
  return (
    <Layout className={cn('app', theme)}>
      <Layout.Content className="content">
        {isLoggedIn && <Sidebar />}
        <AppRouter isLoggedIn={isLoggedIn} />
      </Layout.Content>
    </Layout>
  );
};
