import React, { Dispatch, SetStateAction } from 'react';

interface AuthContextType {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = React.createContext<AuthContextType>({
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => undefined,
});
