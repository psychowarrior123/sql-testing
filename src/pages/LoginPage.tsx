import React, { FC, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { AuthContext } from 'context/AuthContext';

export const LoginPage: FC<any> = ({ pathname }: { pathname: string }) => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext);

  if (isUserLoggedIn) {
    return <Redirect to={pathname} />;
  }
  return (
    <div>
      <button
        onClick={() => {
          localStorage.setItem('isUserLoggedIn', 'true');
          setIsUserLoggedIn(true);
        }}
      >
        Login
      </button>
    </div>
  );
};
