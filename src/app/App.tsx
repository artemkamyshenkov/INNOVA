import { useTheme } from '@/app/providers/themeProvider';
import cn from 'classnames';
import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', theme)}>
      <h1>App</h1>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
};
