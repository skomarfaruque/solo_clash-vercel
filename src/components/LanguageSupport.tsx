"use client";

import "./LanguageSupport.css";

import { useEffect, useState } from "react";
import getCookieLocale from "@/app/utils/get-cookie-lan";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center pt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Title */}
      <motion.div
        className="flex items-center space-x-2 mb-6"
        variants={titleVariants}
      >
        <motion.span
          className="text-white text-lg"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          🌐
        </motion.span>
        <h2 className="text-white text-xl font-semibold">{t("title")}</h2>
      </motion.div>

      {/* Buttons */}
      <motion.div className="flex flex-wrap gap-3" variants={containerVariants}>
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            variants={buttonVariants}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 20px rgba(243, 126, 44, 0.4)",
              borderColor: "rgba(243, 126, 44, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className={`language-button px-4 py-2 text-sm hover:cursor-pointer text-orange-500 transition${
              currentLang === lang.code ? " active " + lang.code : ""
            }`}
            style={{
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "62px",
              color: currentLang === lang.code ? "#F37E2C" : "#B7B7B7",
              background:
                currentLang === lang.code
                  ? "linear-gradient(135deg, rgba(243, 126, 44, 0.15) 0%, rgba(255, 163, 98, 0.1) 100%)"
                  : "transparent",
            }}
            onClick={() => {
              document.cookie = `locale=${lang.code}; path=/; max-age=31536000`;
              window.location.reload();
            }}
          >
            {lang.title}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}
