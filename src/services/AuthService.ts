import api from 'api';

type TProfile = any;

export interface ICredentials {
  email: string;
  password: string;
}

class AuthService {
  /* LOGIN */

  login = async ({ email, password }: ICredentials): Promise<any> => {
    await api.post('login/', { email, password });
  };

  /* LOGOUT */

  /*  PROFILE  */

  fetchProfile = async (): Promise<TProfile> => {
    const profile = await api.get('users/me/');
    return profile;
  };
}

export default new AuthService();
