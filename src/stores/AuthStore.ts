import { createContext } from 'react';

import { action, makeObservable, observable } from 'mobx';

import api from 'api';
import AuthService, { ICredentials } from 'services/AuthService';
import delay from 'utils/delay';

import { NotificationManager } from '@bizone/notifications';

class AuthStore {
  constructor() {
    makeObservable(this, {
      isAuthorized: observable,
      fetchProfile: action,
      handleApiError: action,
      profile: observable,
    });
    api.on('error', this.handleApiError);
  }

  handleApiError = (error: any): any => {
    if (error.response?.status === 403) {
      this.isAuthorized = false;
    }
    if (error.response?.status === 500) {
      NotificationManager.error({
        title: 'Internal server error 500',
        message: error.response?.message,
        timeout: 4000,
      });
    }
  };

  isAuthorized: boolean | null = null;

  profile = {};

  authorize = async ({ email, password }: ICredentials): Promise<void> => {
    await AuthService.login({ email, password });
    await this.fetchProfile();
    this.isAuthorized = true;
  };

  fetchProfile = async (): Promise<void> => {
    const profile = await AuthService.fetchProfile();
    this.profile = profile;

    this.isAuthorized = true;
  };
}

export const AuthStoreContext = createContext(new AuthStore());
