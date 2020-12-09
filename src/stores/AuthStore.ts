import { createContext } from 'react';

import { NotificationManager } from '@bizone/notifications';
import { action, makeObservable, observable, runInAction } from 'mobx';

import api from 'api';
import AuthService, { ICredentials } from 'services/AuthService';
import CookieService from 'services/Cookie';
import delay from 'utils/delay';

class AuthStore {
  constructor() {
    makeObservable(this, {
      authorize: action,
      deauthorize: action,
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

    runInAction(() => {
      this.isAuthorized = true;
    });
  };

  deauthorize = async (): Promise<void> => {
    // Уточнить проверку xsrf на беке, пока удаляю вручную перед запросом
    CookieService.deleteCookie('csrftoken');
    await AuthService.logout();
    this.isAuthorized = false;
    this.profile = {};
  };

  fetchProfile = async (): Promise<void> => {
    const profile = await AuthService.fetchProfile();

    runInAction(() => {
      this.profile = profile;

      this.isAuthorized = true;
    });
  };
}

export const AuthStoreContext = createContext(new AuthStore());
