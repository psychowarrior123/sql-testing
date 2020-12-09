import '@bizone/ui-bundle/esm/bundle.css';
import React from 'react';

import { ThemeProvider, theme } from '@combinezone/theme';

import { AuthHandler } from 'components/AuthHandler';
import { Routes } from 'routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthHandler>
        <Routes />
      </AuthHandler>
    </ThemeProvider>
  );
};

export default App;
