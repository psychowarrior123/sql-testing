import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { Overlay } from '@bizone/ui-bundle/esm/Overlay';
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

  if (isAuthorized === null) {
    return <Overlay fullscreen loader />;
  }

  return <Redirect to="/login" />;
});
