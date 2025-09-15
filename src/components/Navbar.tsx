"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Account" },
    { href: "/rules", label: "Rules" },
    { href: "/clash-shop", label: "Clash Shop" },
    { href: "/affiliates", label: "Affiliates" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
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
      href: "https://instagram.com",
      src: "/instagram.png",
      alt: "instagram",
      width: 52,
      height: 52,
    },
    {
      href: "https://tiktok.com",
      src: "/tiktok.png",
      alt: "tiktok",
      width: 52,
      height: 52,
    },
    {
      href: "https://twitter.com",
      src: "/twitter.png",
      alt: "twitter",
      width: 52,
      height: 42,
    },
  ];

  const activeClass =
    "px-6 py-3 rounded-[58px] bg-[radial-gradient(50%_100%_at_50%_0%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)] shadow-[0px_2px_12px_rgba(7,5,24,0.5)]";
  const inactiveClass = "text-[#B7B7B7] hover:text-white transition";

  return (
    <nav className="flex items-center justify-between bg-transparent text-white absolute left-1/2 transform -translate-x-1/2 max-w-screen-xl w-full h-[52px]">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="SOLO CLASH" width={65} height={52} />
        </Link>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 bg-neutral-900 h-[52px] px-4 py-1.5 rounded-full"
          >
            <Image
              src="/en.png"
              alt="English"
              width={26}
              height={26}
              className="rounded"
            />
            English
            <span className="ml-1">▼</span>
          </button>
          {langOpen && (
            <div className="absolute mt-2 w-32 bg-neutral-800 rounded-lg shadow-lg">
              <button className="w-full px-4 py-2 text-left hover:bg-neutral-700">
                English
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-neutral-700">
                Spanish
              </button>
            </div>
          )}
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm ml-6">
          <div className="flex items-center gap-6">
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
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <Link
          href="/get-funded"
          className="bg-neutral-900 px-4 py-2 rounded-full font-medium h-[52px] flex items-center justify-center"
        >
          Get Funded →
        </Link>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, src, alt, width, height }) => (
            <Link key={href} href={href}>
              <Image src={src} alt={alt} width={width} height={height} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
