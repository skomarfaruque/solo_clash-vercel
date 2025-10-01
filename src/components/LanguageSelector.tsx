"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface LanguageSelectorProps {
  readonly className?: string;
  readonly selectedLang: string;
  readonly onLanguageChange: (lang: string) => void;
}

export default function LanguageSelector({
  className,
  selectedLang,
  onLanguageChange,
}: Readonly<Omit<LanguageSelectorProps, "languages">>) {
  const t = useTranslations();

  const languages = [
    { title: t("navbar.langEnglish"), code: "en" },
    { title: t("navbar.langArabic"), code: "ar" },
    { title: t("navbar.langTurkish"), code: "tr" },
    { title: t("navbar.langPortuguese"), code: "pt" },
    { title: t("navbar.langFrench"), code: "fr" },
    { title: t("navbar.langSpanish"), code: "es" },
    { title: t("navbar.langHungarian"), code: "hu" },
  ];

  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
    };
    if (langOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [langOpen]);

  const selectedLangObj =
    languages.find((l) => l.code === selectedLang) || languages[0];

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setLangOpen(!langOpen)}
        className="flex items-center gap-2 bg-neutral-900 h-[52px] px-4 py-1.5 rounded-full"
      >
        <Image
          src={`/flags/${selectedLang}.png`}
          alt={selectedLangObj.title}
          width={26}
          height={26}
          className="rounded"
        />
        {selectedLangObj.title}
        <span className="ml-1">
          <svg
            className="ml-1"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {langOpen && (
        <div className="absolute mt-2 w-32 bg-neutral-800 rounded-lg shadow-lg z-20">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`w-full px-4 py-2 text-left hover:bg-neutral-700 ${
                selectedLang === lang.code ? "bg-neutral-700 font-bold" : ""
              }`}
              onClick={() => onLanguageChange(lang.code)}
            >
              {lang.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
