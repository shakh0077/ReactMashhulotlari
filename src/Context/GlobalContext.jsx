import { createContext, useEffect, useState } from "react";
import i18n from "i18next";
export const ThemeContext = createContext();

const GlobalContext = ({ children }) => {
    // useState faqat funksiyalar ichida bo‘lishi kerak
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [lang, setLang] = useState(localStorage.getItem("lang") || "uz");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    }, [lang]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, lang, setLang }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default GlobalContext;
