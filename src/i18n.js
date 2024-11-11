import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from '../public/locales/en/translation.json';
import translationFI from '../public/locales/fi/translation.json';
import translationJA from '../public/locales/ja/translation.json';
import translationSV from '../public/locales/sv/translation.json';

// Language configurations
const LANGUAGES = {
  en: {
    translation: translationEN,
    name: 'English',
    native: 'English',
    direction: 'ltr'
  },
  fi: {
    translation: translationFI,
    name: 'Finnish',
    native: 'Suomi',
    direction: 'ltr'
  },
  sv: {
    translation: translationSV,
    name: 'Swedish',
    native: 'Svenska',
    direction: 'ltr'
  },
  ja: {
    translation: translationJA,
    name: 'Japanese',
    native: '日本語',
    direction: 'ltr'
  }
};

// Create resources object for i18next
const resources = Object.entries(LANGUAGES).reduce((acc, [key, value]) => ({
  ...acc,
  [key]: {
    translation: value.translation
  }
}), {});

// Get user's browser language
const getBrowserLanguage = () => {
  const browserLang = navigator.language.split('-')[0];
  return Object.keys(LANGUAGES).includes(browserLang) ? browserLang : 'en';
};

// Initialize i18n
i18n
  // Load translations using http backend
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize configuration
  .init({
    resources,
    // Default language
    fallbackLng: 'en',
    // Default language if detection fails
    lng: getBrowserLanguage(),
    
    // Detection options
    detection: {
      // Order of language detection
      order: ['path', 'navigator', 'htmlTag', 'cookie', 'localStorage'],
      
      // Look for languages in the URL path
      lookupFromPathIndex: 0,
      
      // Save language preference
      caches: ['localStorage', 'cookie'],
      
      // Cookie options
      cookieMinutes: 10080, // 7 days
      cookieDomain: window.location.hostname,
      
      // Path options
      checkWhitelist: true
    },

    // Namespace configuration
    ns: ['translation'],
    defaultNS: 'translation',

    // String formatting
    interpolation: {
      escapeValue: false, // React already safes from XSS
      format: function(value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase();
        if (format === 'lowercase') return value.toLowerCase();
        return value;
      }
    },

    // React configuration
    react: {
      useSuspense: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    },

    // Debug mode (disable in production)
    debug: process.env.NODE_ENV === 'development',

    // Missing key handling
    saveMissing: process.env.NODE_ENV === 'development',
    missingKeyHandler: (lng, ns, key) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Missing translation key: ${key} for language: ${lng}`);
      }
    },

    // Loading configuration
    load: 'languageOnly', // Only load language code (en) not locale (en-US)
    preload: ['en', 'fi', 'sv', 'ja'],

    // Return key if translation is missing
    returnNull: false,
    returnEmptyString: false,
    returnObjects: true,
    
    // Join arrays with commas
    joinArrays: ', ',

    // Maximum retry attempts for loading resources
    maxRetries: 5,
    
    // Retry timeout in milliseconds
    retryTimeout: 2000
  });

// Export language utilities
export const getLanguages = () => LANGUAGES;
export const getCurrentLanguage = () => i18n.language;
export const isRTL = () => LANGUAGES[i18n.language]?.direction === 'rtl';
export const getLanguageName = (code) => LANGUAGES[code]?.name || code;
export const getNativeName = (code) => LANGUAGES[code]?.native || code;

// Handle language change errors
i18n.on('failedLoading', (lng, ns, msg) => {
  console.error(`Failed to load language: ${lng}`, msg);
});

// Log language changes in development
if (process.env.NODE_ENV === 'development') {
  i18n.on('languageChanged', (lng) => {
    console.log(`Language changed to: ${lng}`);
  });
}

export default i18n;