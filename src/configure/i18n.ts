import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from '../../public/locales/ru/translation.json';
import eng from '../../public/locales/eng/translation.json';

// const resources = {
//   en: {
//     translation: {
//       'Welcome to React': 'Welcome to React and react-i18next',
//     },
//   },
//   fr: {
//     translation: {
//       'Welcome to React': 'Bienvenue à React et react-i18next',
//     },
//   },
// };

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: ru,
    },
    eng: {
      translation: eng,
    },
  },
  lng: 'ru',
});

export default i18n;
