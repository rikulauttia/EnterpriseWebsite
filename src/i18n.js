import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from '../public/locales/en/translation.json';
import translationFI from '../public/locales/fi/translation.json';
import translationJA from '../public/locales/ja/translation.json';
import translationSV from '../public/locales/sv/translation.json';

// Translations object
const resources = {
  en: { translation: translationEN },
  fi: { translation: translationFI },
  sv: { translation: translationSV },
  ja: { translation: translationJA },
};

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;