import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// @ts-ignore
import { PageNotFound } from 'pages/NotFound';
// import { FirstPage } from 'pages/page1/page1';
// import { SecondPage } from 'pages/page2/page2';
// import { ThirdPage } from 'pages/page3/page3';

const FirstPage = () => <p>page1</p>;
const SecondPage = () => <p>page1</p>;
const ThirdPage = () => <p>page1</p>;

export const Routes: FC<any> = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <FirstPage />
      </Route>
      <Route path="/second" exact>
        <SecondPage />
      </Route>
      <Route path="/third" exact>
        <ThirdPage />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
      <Redirect from="/login" to="/" />
    </Switch>
  );
};
