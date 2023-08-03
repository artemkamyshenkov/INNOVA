import cn from 'classnames';
import { Layout, Menu } from 'antd';
import { useTheme } from '@/app/providers/themeProvider';
import AppRouter from '@/app/providers/router/ui/AppRouter';
import './styles/index.scss';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Layout className={cn('app', theme)}>
      <Layout.Sider width={200} style={{ background: 'black' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={[]}
        />
      </Layout.Sider>

      <Layout.Content>
        <AppRouter />
        <Sidebar />
        <h1>App</h1>
        <button type="button" onClick={toggleTheme}>
          toggle
        </button>
      </Layout.Content>
    </Layout>
  );
};
