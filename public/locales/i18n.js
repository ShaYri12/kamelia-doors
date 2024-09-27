// locales/i18n.js
'use client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language files
import commonAr from './ar/common.json';
import commonEn from './en/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: commonAr },
      en: { translation: commonEn },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
