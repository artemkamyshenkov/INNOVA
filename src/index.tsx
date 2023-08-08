import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from '@/app/providers/storeProvider';
import { App } from '@/app/App';
import { ThemeProvider } from '@/app/providers/themeProvider';

const root = createRoot(document.getElementById('root'));

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>,
);
