import React, { Dispatch, SetStateAction } from 'react';

interface User {
  active?: boolean;
  companyContact?: boolean;
  email?: string;
  fullname?: string;
  id?: number;
  phoneNumber?: string;
  role?: string;
  widgets?: string[];
}
interface AuthContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<any>>;
  isAuthorized: boolean;
  setIsAuthorized: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = React.createContext<AuthContextType>({
  user: null,
  setUser: () => undefined,
  isAuthorized: false,
  setIsAuthorized: () => undefined,
});
