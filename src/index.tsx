import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from '@/app/providers/storeProvider';
import { App } from '@/app/App';
import { ThemeProvider } from '@/app/providers/themeProvider';
import '@/shared/config/firebase/firebaseConfig';
import { SocketProvider } from '@/app/providers/socketProvider';
import { AuthProvider } from '@/shared/hooks/useAuth';

const root = createRoot(document.getElementById('root'));

root.render(
  <StoreProvider>
    <AuthProvider>
      <BrowserRouter>
        <SocketProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </SocketProvider>
      </BrowserRouter>
    </AuthProvider>
  </StoreProvider>,
);
