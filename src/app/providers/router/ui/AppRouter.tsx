import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getRoutes } from '@/shared/config/routerConfig/routerConfig';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';

interface AppRouterProps {
  isLoggedIn: boolean;
}
const AppRouter: React.FC<AppRouterProps> = ({ isLoggedIn }) => {
  const routeConfig = getRoutes(isLoggedIn);

  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="pageWrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
