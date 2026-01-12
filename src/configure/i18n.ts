import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from '../../public/locales/ru/translation.json';
import en from '../../public/locales/en/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: ru,
    },
    en: {
      translation: en,
    },
  },
  lng: 'en',
});

export default i18n;
