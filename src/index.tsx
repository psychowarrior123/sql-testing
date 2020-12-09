import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NotificationContainer } from '@bizone/notifications';

import App from 'App';
import * as i18n from 'i18n';
import GlobalStyles from 'theme/global';
import registerAsGlobal from 'utils/register-as-global';

registerAsGlobal('I18N', i18n);

render(
  <Router>
    <GlobalStyles />
    <Route component={App} />
    <NotificationContainer />
  </Router>,
  document.getElementById('root'),
);
