"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "../components/LanguageSelector";
import { usePathname } from "next/navigation";
import getLocaleFromCookie from "@/utils/getLocaleFromCookie";

export default function AccountNavBar() {
  const t = useTranslations("accountNavbar");
  const [selectedLang, setSelectedLang] = useState("en");
  const pathname = usePathname();

  useEffect(() => {
    setSelectedLang(getLocaleFromCookie());
  }, []);

  const activeClass =
    "px-6 py-3 rounded-[58px] bg-[radial-gradient(50%_100%_at_50%_0%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)] shadow-[0px_2px_12px_rgba(7,5,24,0.5)]";
  const inactiveClass = "text-[#B7B7B7] hover:text-white transition";

  return (
    <nav className="flex items-center justify-between bg-transparent text-white absolute left-1/2 transform -translate-x-1/2 max-w-screen-xl w-full h-[52px]">
      {/* Logo */}
      <div className="flex items-center gap-[50px]">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="SOLO CLASH" width={65} height={52} />
        </Link>
        <h1
          className="text-white font-bold text-lg ml-4"
          style={{
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "110%",
            letterSpacing: "0.005em",
          }}
        >
          {t("yourChallenge")}
        </h1>
      </div>

      {/* Language Selector */}
      <div className="flex items-center gap-4">
        <LanguageSelector
          selectedLang={selectedLang}
          onLanguageChange={(lang) => {
            document.cookie = `locale=${lang}; path=/; max-age=31536000`;
            setSelectedLang(lang);
            window.location.reload();
          }}
        />
        <Link
          href="/login"
          className={
            pathname === "/payment" || pathname === "/account"
              ? activeClass
              : inactiveClass
          }
        >
          {t("login")}
        </Link>
      </div>
    </nav>
  );
}
