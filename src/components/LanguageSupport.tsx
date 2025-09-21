"use client";
import { get } from "http";
import "./LanguageSupport.css";
import getCookieLocale from "@/app/utils/get-cookie-lan";

export default function LanguageSupport() {
  const languages = [
    { title: "English", code: "en" },
    { title: "Arabic", code: "ar" },
    { title: "Turkish", code: "tr" },
    { title: "Portuguese", code: "pt" },
    { title: "French", code: "fr" },
    { title: "Spanish", code: "es" },
  ];
  // get the value from cookie and set the button style accordingly
  const currentLang = getCookieLocale() || "en";
  console.log("Current Language:", currentLang);

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      {/* Title */}
      <div className="flex items-center space-x-2 mb-6">
        <span className="text-white text-lg">🌐</span>
        <h2 className="text-white text-xl font-semibold">
          Multi-Language Support
        </h2>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`language-button px-4 py-2 text-sm hover:cursor-pointer transition${
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
