import '@bizone/ui-bundle/esm/bundle.css';
import React from 'react';

import { AuthHandler } from 'components/AuthHandler';
import { Routes } from 'routes';

const App: React.FC = () => {
  return (
    <AuthHandler>
      <Routes />
    </AuthHandler>
  );
};

export default App;
