import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../assets/locales/EN.json'
import id from '../assets/locales/ID.json'

const resources = {
  en: {
    translation: en 
  },
  id: {
    translation: id
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
