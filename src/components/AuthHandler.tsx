import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, useLocation } from 'react-router-dom';

import { Overlay } from '@bizone/ui-bundle/esm/Overlay';

import { AuthValidation } from 'components/AuthValidation';

const LazyLogin = lazy(() => import('../pages/Login'));

export const AuthHandler: React.FC<any> = ({ children }) => {
  const [pathname, setPathname] = useState<string>();
  const location = useLocation();

  useEffect(() => {
    if (!pathname) {
      setPathname(location.pathname === '/login' ? '/' : location.pathname);
    }
  }, [location.pathname, pathname]);

  return (
    <>
      <AuthValidation>{children}</AuthValidation>
      <Route
        path="/login"
        render={() => {
          return (
            <Suspense fallback={<Overlay fullscreen loader />}>
              <LazyLogin pathname={pathname} />
            </Suspense>
          );
        }}
      />
    </>
  );
};
