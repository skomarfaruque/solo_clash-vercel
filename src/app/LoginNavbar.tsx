"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "../components/LanguageSelector";
import getLocaleFromCookie from "@/utils/getLocaleFromCookie";

export default function LoginNavbar() {
  const [selectedLang, setSelectedLang] = useState("en");
  useEffect(() => {
    setSelectedLang(getLocaleFromCookie());
  }, []);

  return (
    <nav className="flex items-center justify-between bg-transparent text-white absolute left-1/2 transform -translate-x-1/2 max-w-screen-xl w-full h-[52px]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="SOLO CLASH" width={65} height={52} />
      </Link>

      {/* Language Selector */}
      <LanguageSelector
        selectedLang={selectedLang}
        onLanguageChange={(lang) => {
          document.cookie = `locale=${lang}; path=/; max-age=31536000`;
          setSelectedLang(lang);
          window.location.reload();
        }}
      />
    </nav>
  );
}
