import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { observer } from 'mobx-react-lite';

import { AuthStoreContext } from 'stores/AuthStore';

export const AuthValidation: React.FC<any> = observer(({ children }) => {
  const { fetchProfile, isAuthorized } = useContext(AuthStoreContext);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (isAuthorized) {
    return children;
  }

  return <Redirect to="/login" />;
});
