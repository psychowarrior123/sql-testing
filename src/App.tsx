import '@bizone/ui-bundle/esm/bundle.css';
import React, { lazy } from 'react';

import { AuthHandler } from 'components/AuthHandler';
import { Navigation } from 'components/Navigation';
import { Routes } from 'components/Routes';

const App: React.FC = () => {
  return (
    <AuthHandler>
      <Navigation />
      <hr />
      <Routes />
    </AuthHandler>
  );
};

export default App;
