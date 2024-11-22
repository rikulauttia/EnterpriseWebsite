import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Import translation files directly
import enTranslation from "./locales/en/translation.json";
import fiTranslation from "./locales/fi/translation.json";
import svTranslation from "./locales/sv/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      fi: {
        translation: fiTranslation,
      },
      sv: {
        translation: svTranslation,
      },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "fi", "sv"],
    detection: {
      order: ["path", "navigator"],
      lookupFromPathIndex: 0,
      checkWhitelist: true,
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
