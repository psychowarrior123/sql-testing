import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NotificationContainer } from '@bizone/notifications';

import App from 'App';
import GlobalStyles from 'theme/global';

render(
  <Router>
    <GlobalStyles />
    <Route component={App} />
    <NotificationContainer />
  </Router>,
  document.getElementById('root'),
);
