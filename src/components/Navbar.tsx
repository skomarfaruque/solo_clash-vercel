"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import LanguageSelector from "./LanguageSelector";

function getLocaleFromCookie() {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|; )locale=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : "en";
}
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const t = useTranslations();
  const navLinks = [
    { href: "/", label: t("navbar.account") },
    { href: "/rules", label: t("navbar.rules") },
    { href: "/clash-shop", label: t("navbar.clashShop") },
    { href: "/affiliates", label: t("navbar.affiliates") },
    { href: "/faq", label: t("navbar.faq") },
    { href: "/contact", label: t("navbar.contactUs") },
  ];

  const socialLinks = [
    {
      href: "https://discord.com",
      src: "/reddit.png",
      alt: "discord",
      width: 52,
      height: 42,
    },
    {
      href: "https://www.instagram.com/soloclashofficial",
      src: "/instagram.png",
      alt: "instagram",
      width: 52,
      height: 52,
    },
    {
      href: "hhttps://www.tiktok.com/@soloclashofficial",
      src: "/tiktok.png",
      alt: "tiktok",
      width: 52,
      height: 52,
    },
    {
      href: "https://www.twitch.tv/soloclashofficial",
      src: "/twitch.png",
      alt: "twitch",
      width: 52,
      height: 42,
    },
  ];

  const activeClass =
    "px-6 py-3 rounded-[58px] bg-[radial-gradient(50%_100%_at_50%_0%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)] shadow-[0px_2px_12px_rgba(7,5,24,0.5)]";
  const inactiveClass = "text-[#B7B7B7] hover:text-white transition";

  const languages = [
    { title: t("navbar.langEnglish"), code: "en" },
    { title: t("navbar.langArabic"), code: "ar" },
    { title: t("navbar.langTurkish"), code: "tr" },
    { title: t("navbar.langPortuguese"), code: "pt" },
    { title: t("navbar.langFrench"), code: "fr" },
    { title: t("navbar.langSpanish"), code: "es" },
  ];

  const [selectedLang, setSelectedLang] = useState("en");
  // Separate refs for desktop and mobile dropdowns
  const desktopLangDropdownRef = useRef<HTMLDivElement>(null);
  const mobileLangDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedLang(getLocaleFromCookie());
  }, []);

  // Close desktop language dropdown when clicking outside
  useEffect(() => {
    if (!langOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        desktopLangDropdownRef.current &&
        !desktopLangDropdownRef.current.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [langOpen]);

  // Close mobile language dropdown when clicking outside (when drawer is open)
  useEffect(() => {
    if (!drawerOpen || !langOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        mobileLangDropdownRef.current &&
        !mobileLangDropdownRef.current.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [drawerOpen, langOpen]);

  const selectedLangObj =
    languages.find((l) => l.code === selectedLang) || languages[0];

  return (
    <>
      <nav className="flex items-center justify-between bg-transparent text-white absolute left-1/2 transform -translate-x-1/2 max-w-screen-2xl w-full h-[52px] px-2 sm:px-4">
        {/* Left Section */}
        <div className="flex items-center gap-2 sm:gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="SOLO CLASH" width={65} height={52} />
          </Link>

          {/* Language Dropdown */}
          <LanguageSelector
            selectedLang={selectedLang}
            onLanguageChange={(lang) => {
              document.cookie = `locale=${lang}; path=/; max-age=31536000`;
              setSelectedLang(lang);
              window.location.reload();
            }}
          />

          {/* Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm ml-6">
            <div className="flex items-center gap-10">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={pathname === href ? activeClass : inactiveClass}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="lg:hidden flex flex-col items-center justify-center ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/get-funded"
            className="bg-neutral-900 px-4 py-2 rounded-full font-medium h-[52px] flex items-center justify-center"
          >
            {t("navbar.getFunded")} →
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, src, alt, width, height }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={src} alt={alt} width={width} height={height} />
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* Responsive Drawer Menu */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-60"
            onClick={() => setDrawerOpen(false)}
            tabIndex={0}
            aria-label="Close menu"
            role="button"
            onKeyDown={(e) =>
              (e.key === "Escape" || e.key === "Enter" || e.key === " ") &&
              setDrawerOpen(false)
            }
          />
          {/* Drawer */}
          <div className="relative bg-neutral-900 w-4/5 max-w-xs h-full p-6 flex flex-col gap-6 shadow-2xl animate-slide-in-left">
            <button
              className="self-end mb-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              onClick={() => setDrawerOpen(false)}
              aria-label={t("navbar.closeMenu")}
            >
              <span className="block w-6 h-0.5 bg-white mb-1 rotate-45 translate-y-1.5"></span>
              <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-1.5"></span>
            </button>
            {/* Mobile Language Dropdown */}
            <div className="relative" ref={mobileLangDropdownRef}>
              <button
                type="button"
                onClick={() => setLangOpen((open) => !open)}
                className="flex items-center gap-2 bg-neutral-900 h-[52px] px-4 py-1.5 rounded-full"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                <Image
                  src={`/flags/en.png`}
                  alt={selectedLangObj.title}
                  width={26}
                  height={26}
                  className="rounded"
                />
                {selectedLangObj.title}
                <svg
                  className="ml-1"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M6 9l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute mt-2 w-32 bg-neutral-800 rounded-lg shadow-lg z-20">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`w-full px-4 py-2 text-left hover:bg-neutral-700 ${
                        selectedLang === lang.code
                          ? "bg-neutral-700 font-bold"
                          : ""
                      }`}
                      onClick={() => {
                        document.cookie = `locale=${lang.code}; path=/; max-age=31536000`;
                        setSelectedLang(lang.code);
                        window.location.reload();
                      }}
                    >
                      {lang.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={pathname === href ? activeClass : inactiveClass}
                  onClick={() => setDrawerOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link
              href="/get-funded"
              className="bg-neutral-800 px-4 py-2 rounded-full font-medium h-[40px] flex items-center justify-center mt-4"
              onClick={() => setDrawerOpen(false)}
            >
              {t("navbar.getFunded")} →
            </Link>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map(({ href, src, alt, width, height }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={src} alt={alt} width={width} height={height} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
