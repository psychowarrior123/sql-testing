import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import intervalPlural from 'i18next-intervalplural-postprocessor';

import en from './resources/en';
import ru from './resources/ru';

const resources = {
  en,
  ru,
};

i18n
  .use(languageDetector)
  .use(intervalPlural)
  .use(initReactI18next)
  .init({
    debug: false,
    lowerCaseLng: true,
    saveMissing: true,

    resources,
    whitelist: Object.keys(resources),
    fallbackLng: webpack.IS_DEV_BUILD ? false : 'en',
    defaultNS: 'common',
    fallbackNS: false,

    interpolation: {
      escapeValue: false,
      format(value) {
        return value;
      },
    },
  });

export default i18n;

export const languageList = {
  en: 'ENG – English',
  ru: 'РУС – Русский',
};
