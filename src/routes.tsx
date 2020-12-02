import React, { FC, lazy, memo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AppRoute, AppRoutes } from 'app-models/Routing';

export const getRoutes = (): AppRoute[] => [
  {
    key: AppRoutes.dashboard,
    path: '/dashboard',
    isDefault: true,
    component: lazy(
      () => import(/* webpackChunkName: "dashboard" */ './pages/Dashboard'),
    ),
  },
];

export const getDeafultRoute = (): AppRoute => {
  const routes = getRoutes();
  return routes.find(({ isDefault }) => isDefault) || routes[0];
};

export const Routes: FC = memo(() => {
  const defaultRoute = getDeafultRoute();
  const routesList = getRoutes();

  return (
    <Switch>
      {routesList.map((route: AppRoute) => (
        <Route
          key={route.path}
          path={route.path.substr(1)}
          component={route.component}
        />
      ))}
      <Redirect to={defaultRoute.path.substr(1)} />
    </Switch>
  );
});
