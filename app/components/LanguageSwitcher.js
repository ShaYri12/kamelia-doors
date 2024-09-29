"use client";
import { useState, useEffect } from "react";
import i18n from "../../public/locales/i18n";
import { FaGlobeAmericas, FaGlobeAsia } from "react-icons/fa"; // Import icons

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // Store the selected language in localStorage
    setCurrentLanguage(lng); // Update the current language state
    setIsOpen(false); // Close dropdown after selection

    // Update the direction based on the selected language
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  // Update the language and direction on initial render or when the language changes
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    if (savedLanguage !== currentLanguage) {
      i18n.changeLanguage(savedLanguage);
      setCurrentLanguage(savedLanguage);
    }
    document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, [currentLanguage]);

  return (
    <div className="relative inline-block text-left min-w-[110px]">
      <div className="min-h-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full rounded-md border py-3 border-gray-300 shadow-sm px-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-between"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {currentLanguage === "en" ? (
            <>
              <FaGlobeAmericas className="mr-2 min-w-[18px]" /> English
            </>
          ) : (
            <>
              <FaGlobeAsia className="mr-2" /> العربية
            </>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute text-center right-0 z-10 mt-2 w-full shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className=""
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => changeLanguage("en")}
              className={`w-full py-2 text-sm flex items-center justify-between gap-2 px-2.5 ${
                currentLanguage === "en"
                  ? "bg-primaryColor text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              role="menuitem"
            >
              <FaGlobeAmericas className="mr-2" />
              English
            </button>
            <button
              onClick={() => changeLanguage("ar")}
              className={`w-full py-2 text-sm flex items-center justify-between gap-2 px-2.5 ${
                currentLanguage === "ar"
                  ? "bg-primaryColor text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              role="menuitem"
            >
              <FaGlobeAsia className="mr-2" />
              العربية
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
