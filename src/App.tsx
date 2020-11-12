import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthHandler } from 'components/AuthHandler';
import { Navigation } from 'components/Navigation';
import { Routes } from 'components/Routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthHandler>
        <Navigation />
        <hr />
        <Routes />
      </AuthHandler>
    </BrowserRouter>
  );
};

export default App;
