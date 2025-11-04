import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Importer les ressources de traduction
import translationEN from '../public/locales/en/translation.json'
import translationFR from '../public/locales/fr/translation.json'

// Les ressources de traduction
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
}

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React échappe déjà les valeurs
    },
  })

export default i18n
