import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from '@/app/providers/storeProvider';
import { App } from '@/app/App';
import { ThemeProvider } from '@/app/providers/themeProvider';
import '@/shared/config/firebase/firebaseConfig';
import { SocketProvider } from '@/app/providers/socketProvider';

const root = createRoot(document.getElementById('root'));

root.render(
  <StoreProvider>
    <BrowserRouter>
      <SocketProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </SocketProvider>
    </BrowserRouter>
  </StoreProvider>,
);
