import { createContext } from 'react';

import { action, makeObservable, observable } from 'mobx';
import moment from 'moment';

import i18n, { languageList } from 'i18n';

const availableLanguages = Object.keys(languageList);

class LocaleStore {
  constructor() {
    makeObservable(this, {
      current: observable,
      setLocale: action,
    });

    moment.locale(this.current);

    i18n.on('languageChanged', (lang) => {
      moment.locale(lang);
      this.current = lang;
    });

    i18n.on('missingKey', (langs, namespace, key) => {
      console.warn(
        `[i18n] '${namespace}:${key}' key is missing in`,
        langs,
        'langs',
      );
    });
  }

  current = i18n.language;

  setLocale = (language: string): void => {
    const lang = language.toLowerCase();

    if (!availableLanguages.includes(lang)) {
      return console.error(`[i18n] '${lang}' language is not supported`);
    }

    i18n.changeLanguage(lang);
  };
}

export const LocaleStoreContext = createContext(new LocaleStore());
