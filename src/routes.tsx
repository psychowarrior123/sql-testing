import React, { FC, lazy, memo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AppRoute, AppRoutes } from 'app-models/Routing';
import Layout from 'components/Layout';
import NavigationBar from 'components/NavigationBar';

export const getRoutes = (): AppRoute[] => [
  {
    key: AppRoutes.dashboard,
    path: '/dashboard',
    isDefault: true,
    component: lazy(
      () => import(/* webpackChunkName: "dashboard" */ './pages/Dashboard'),
    ),
  },
  {
    key: AppRoutes.notfound,
    component: lazy(
      () => import(/* webpackChunkName: "dashboard" */ './pages/NotFound'),
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
    <Layout direction="column">
      <Layout.Header>
        <NavigationBar />
      </Layout.Header>
      <Layout.Page>
        <Switch>
          {routesList.map((route: AppRoute) => (
            <Route
              key={route.key}
              path={route.path}
              component={route.component}
            />
          ))}
          <Redirect exact from="/" to={defaultRoute.path} />
        </Switch>
      </Layout.Page>
    </Layout>
  );
});
