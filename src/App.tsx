import '@bizone/ui-bundle/esm/bundle.css';
import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import { ThemeProvider, defaultLight, defaultDark } from '@combinezone/theme';

import { AuthHandler } from 'components/AuthHandler';
import { Routes } from 'routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthHandler>
        <ThemeProvider theme={defaultLight} darkTheme={defaultDark}>
          <Routes />
        </ThemeProvider>
      </AuthHandler>
    </QueryClientProvider>
  );
};

export default App;
