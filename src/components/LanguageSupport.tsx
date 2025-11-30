"use client";

import "./LanguageSupport.css";

import { useEffect, useState } from "react";
import getCookieLocale from "@/app/utils/get-cookie-lan";
import { useTranslations } from "next-intl";

export default function LanguageSupport() {
  const t = useTranslations("languageSupport");

  const languages = [
    { title: t("languages.english"), code: "en" },
    { title: t("languages.arabic"), code: "ar" },
    { title: t("languages.turkish"), code: "tr" },
    { title: t("languages.portuguese"), code: "pt" },
    { title: t("languages.french"), code: "fr" },
    { title: t("languages.spanish"), code: "es" },
    { title: t("languages.hungarian"), code: "hu" },
  ];

  // Use state and useEffect to avoid hydration mismatch
  const [currentLang, setCurrentLang] = useState("en");
  useEffect(() => {
    const lang = getCookieLocale() || "en";
    setCurrentLang(lang);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      {/* Title */}
      <div className="flex items-center space-x-2 mb-6">
        <span className="text-white text-lg">🌐</span>
        <h2 className="text-white text-xl font-semibold">{t("title")}</h2>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`language-button px-4 py-2 text-sm hover:cursor-pointer text-orange-500 transition${
              currentLang === lang.code ? " active " + lang.code : ""
            }`}
            style={{
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "62px",
              color: "#B7B7B7",
              background: "transparent",
            }}
            onClick={() => {
              document.cookie = `locale=${lang.code}; path=/; max-age=31536000`;
              window.location.reload();
            }}
          >
            {lang.title}
          </button>
        ))}
      </div>
    </div>
  );
}
