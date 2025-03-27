import React, { useContext } from "react";
import { FaMoon, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { ImSun } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import { ThemeContext } from "../Context/GlobalContext";

const translations = {
  en: {
    rooms: "Rooms",
    products: "Products",
    inspirations: "Inspirations",
    searchPlaceholder: "Search for minimalist chair",
    dark: "Dark",
    light: "Light",
  },
  uz: {
    rooms: "Xonalar",
    products: "Mahsulotlar",
    inspirations: "Ilhomlar",
    searchPlaceholder: "Minimalist stulni qidiring",
    dark: "Tungi",
    light: "Kunduzgi",
  },
};

const Home = () => {
  const { theme, setTheme, lang, setLang } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "bg-gray-800 text-white" : "bg-[#F9F1E7] text-black"}>
      <div className="mx-auto px-5 w-full lg:max-w-[1440px]">
        <div className="px-25 py-10 gap-12 justify-between items-center md:flex">
          <h1 className="flex justify-between px-1 items-center mb-2 font-bold text-2xl">
            Funiro.
          </h1>

          {/* Menyu bo‘limi */}
          <div className="hidden gap-10 items-center lg:flex">
            <a href="#rooms">{translations[lang].rooms}</a>
            <a href="#future">{translations[lang].products}</a>
            <a href="#footer">{translations[lang].inspirations}</a>
          </div>

          {/* Qidiruv qutisi */}
          <div className="relative hidden md:block">
            <IoSearch className="absolute top-3 left-2 w-5 h-5" />
            <input
              className="w-[473px] h-[45px] px-11 py-3 p"
              type="text"
              placeholder={translations[lang].searchPlaceholder}
            />
          </div>

          {/* Tema va til tanlash */}
          <div className="flex items-center gap-3">
            <button className="border px-1.5 py-1 flex items-center gap-1" onClick={() => setTheme("dark")}>
              <FaMoon />
              {translations[lang].dark}
            </button>
            <button className="border px-1.5 py-1 flex items-center gap-1" onClick={() => setTheme("light")}>
              <ImSun />
              {translations[lang].light}
            </button>
            <select
              className="bg-transparent"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option className="text-black" value="en">English</option>
              <option className="text-black" value="uz">Uzbek</option>
            </select>
          </div>

          {/* Yurak va savatcha */}
          <div className="hidden items-center gap-8 md:flex">
            <FaRegHeart />
            <FiShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
