// locales/i18n.js
"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import language files
import commonAr from "./ar/common.json";
import commonEn from "./en/common.json";

// Function to initialize i18n
const initI18n = () => {
  const savedLanguage = localStorage.getItem("language") || "en"; // Get saved language or default to 'en'

  i18n.use(initReactI18next).init({
    resources: {
      ar: { translation: commonAr },
      en: { translation: commonEn },
    },
    lng: savedLanguage, // Set the initial language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
};

// Initialize i18n
initI18n();

export default i18n;
