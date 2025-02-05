import React, { useEffect, useRef, useState } from "react";

import { Check, ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Language options
  const languages = [
    { code: "fi", name: "Finnish", native: "Suomi", flag: "🇫🇮" },
    { code: "en", name: "English", native: "English", flag: "🇬🇧" },
    { code: "sv", name: "Swedish", native: "Svenska", flag: "🇸🇪" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Get current language from the URL
  const getCurrentLanguage = () => {
    const path = location.pathname;
    const langMatch = path.match(/^\/(en|fi|sv)/);
    return langMatch ? langMatch[1] : "en";
  };

  const currentLang = getCurrentLanguage();

  // Handle language change
  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    const pathWithoutLang = location.pathname.replace(/^\/(en|fi|sv)/, "");
    const newPath = `/${langCode}${pathWithoutLang || ""}`;
    navigate(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Current Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 
                   dark:hover:bg-gray-800 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">
          {languages.find((lang) => lang.code === currentLang)?.native}
        </span>
        <span className="sm:hidden">
          {languages
            .find((lang) => lang.code === currentLang)
            ?.code.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 
                     ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Language Dropdown */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-900 
                     rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
          role="listbox"
          aria-label="Select language"
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full px-4 py-2 text-left flex items-center gap-3 
                         hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors
                         ${
                           currentLang === language.code
                             ? "text-blue-600 dark:text-blue-400"
                             : "text-gray-700 dark:text-gray-300"
                         }`}
              role="option"
              aria-selected={currentLang === language.code}
            >
              <span className="text-lg" aria-hidden="true">
                {language.flag}
              </span>
              <span className="flex-1">{language.native}</span>
              {currentLang === language.code && (
                <Check className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
