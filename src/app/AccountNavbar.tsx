"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "../components/LanguageSelector";
import { usePathname, useRouter } from "next/navigation";
import getLocaleFromCookie from "@/utils/getLocaleFromCookie";

export default function AccountNavBar() {
  const t = useTranslations("accountNavbar");
  const [selectedLang, setSelectedLang] = useState("en");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedLang(getLocaleFromCookie());
    // Check if user is logged in
    const adminToken = localStorage.getItem("adminToken");
    setIsLoggedIn(!!adminToken);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [dropdownOpen]);

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
        {!isLoggedIn && (
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
        )}
        {isLoggedIn && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold hover:shadow-lg transition cursor-pointer"
            >
              <User size={20} />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-neutral-900 rounded-lg shadow-lg border border-neutral-800 z-50">
                <button
                  onClick={() => {
                    localStorage.removeItem("adminToken");
                    setIsLoggedIn(false);
                    setDropdownOpen(false);
                    router.push("/login");
                  }}
                  className="w-full px-4 py-2 text-left text-red-400 hover:bg-neutral-800 rounded-lg transition cursor-pointer"
                >
                  {t("logout")}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
