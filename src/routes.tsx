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
      {/* @ts-ignore */}
      <Layout.Header>
        <NavigationBar />
        {/* @ts-ignore */}
      </Layout.Header>
      {/* @ts-ignore */}
      <Layout.Page>
        <Switch>
          {routesList.map((route: AppRoute) => (
            <Route
              exact
              key={route.key}
              path={route.path}
              component={route.component}
            />
          ))}
          <Redirect exact from="/" to={defaultRoute.path} />
          <Route
            key="notfound"
            component={lazy(
              () =>
                import(/* webpackChunkName: "dashboard" */ './pages/NotFound'),
            )}
          />
        </Switch>
        {/* @ts-ignore */}
      </Layout.Page>
    </Layout>
  );
});
