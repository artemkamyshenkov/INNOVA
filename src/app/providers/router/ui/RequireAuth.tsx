import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import { RoutePath } from '@/shared/config/routerConfig';
import { useAuth } from '@/shared/hooks/useAuth';

export function RequireAuth({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
  }

  return children;
}
