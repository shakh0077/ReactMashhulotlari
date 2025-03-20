import React from "react";
import { useTranslation } from "react-i18next";

const Lang = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div>
      <h1>{t("Salom ")}</h1>
      <button onClick={() => changeLanguage("uz")}>O'zbek</button>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ru")}>Русский</button>
    </div>
  );
};

export default Lang;
