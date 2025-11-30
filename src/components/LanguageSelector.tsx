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
    { title: t("navbar.langEnglish"), code: "en", flag: "en.png" },
    { title: t("navbar.langArabic"), code: "ar", flag: "ar.png" },
    { title: t("navbar.langTurkish"), code: "tr", flag: "tr.png" },
    { title: t("navbar.langPortuguese"), code: "pt", flag: "pt.png" },
    { title: t("navbar.langFrench"), code: "fr", flag: "fr.png" },
    { title: t("navbar.langSpanish"), code: "es", flag: "es.png" },
    { title: t("navbar.langHungarian"), code: "hu", flag: "hu.png" },
  ];

  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setLangOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setLangOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
    <div
      className={`relative ${className}`}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setLangOpen(!langOpen)}
        className="flex items-center gap-2 bg-neutral-900 h-[52px] px-4 py-1.5 rounded-full hover:cursor-pointer"
      >
        <Image
          src={`/flags/global_lang.png`}
          alt={selectedLangObj.title}
          width={16}
          height={16}
          className="rounded"
        />
        <span className="uppercase">{selectedLangObj.code}</span>
        <Image
          src={`/large_down_white.png`}
          alt={selectedLangObj.title}
          width={13}
          height={13}
          className={`rounded transition-transform duration-200 ${
            langOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {langOpen && (
        <div className="absolute mt-2 w-44 bg-neutral-800 rounded-lg shadow-lg z-20 overflow-hidden py-1">
          {languages.map((lang, index) => (
            <div key={lang.code}>
              <button
                className={`w-full px-4 py-2.5 text-left flex items-center gap-3 transition-all duration-200 hover:text-orange-400 hover:pl-5 cursor-pointer ${
                  selectedLang === lang.code
                    ? "text-orange-400 font-bold"
                    : "text-gray-300"
                }`}
                onClick={() => onLanguageChange(lang.code)}
              >
                <Image
                  src={`/flags/${lang.flag}`}
                  alt={lang.title}
                  width={20}
                  height={14}
                  className="rounded-sm object-cover"
                />
                <span className="text-sm">{lang.title}</span>
              </button>
              {index < languages.length - 1 && (
                <div className="mx-3 border-b border-neutral-700" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
