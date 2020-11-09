import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { FirstPage } from 'pages/page1/page1';
import { SecondPage } from 'pages/page2/page2';
import { ThirdPage } from 'pages/page3/page3';

export const Routes = () => (
  <Switch>
    <Route path="/third">
      <ThirdPage />
    </Route>
    <Route path="/second">
      <SecondPage />
    </Route>
    <Route path="/">
      <FirstPage />
    </Route>
  </Switch>
);
