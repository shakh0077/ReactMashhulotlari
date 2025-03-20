import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tarjimalar (json formatida)
const resources = {
  uz: {
    translation: {
      Salom: "Salom!",
      change_language: "Tilni o'zgartirish"
    }
  },
  en: {
    translation: {
      Salom: "Hello!",
      change_language: "Change language"
    }
  },
  ru: {
    translation: {
      Salom: "Привет!",
      change_language: "Изменить язык"
    }
  }
};

// i18n konfiguratsiyasi
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lang") || "uz", // Default til
    fallbackLng: "uz", // Agar til topilmasa
    interpolation: {
      escapeValue: false, // XSS dan himoya uchun
    },
  });

export default i18n;
