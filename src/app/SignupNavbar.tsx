"use client";

import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

export default function SignupNavbar() {
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
  const steps = [
    { id: 1, label: "Welcome" },
    { id: 2, label: "Info" },
    { id: 3, label: "Verification" },
  ];

  return (
    <nav className="flex items-center justify-between bg-transparent text-white absolute left-1/2 transform -translate-x-1/2 max-w-screen-xl w-full h-[52px]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="SOLO CLASH" width={65} height={52} />
      </Link>
      <div className="flex items-center space-x-2">
        {steps.map((step, idx) => {
          const active =
            searchParams.get("step") === String(step.id) ||
            (!searchParams.get("step") && step.id === 1);
          return (
            <div key={step.id} className="flex items-center">
              {/* Step as Link */}
              <Link
                href={`/signup?step=${step.id}`}
                className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors duration-200 ${
                  active
                    ? "text-black"
                    : "text-neutral-300 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.06)] backdrop-blur-[11.2993px] hover:text-black hover:bg-[linear-gradient(94.79deg,#F37E2C_0.24%,#FFA362_100.24%)] hover:border-[rgba(225,225,225,0.3)]"
                }`}
                style={
                  active
                    ? {
                        background:
                          "linear-gradient(94.79deg, #F37E2C 0.24%, #FFA362 100.24%)",
                        border: "1px solid rgba(225, 225, 225, 0.3)",
                      }
                    : undefined
                }
              >
                {step.id}. {step.label}
              </Link>
              {/* Arrow (except last step) */}
              {idx < steps.length - 1 && (
                <div className="text-neutral-500 mx-2 text-white">{">"}</div>
              )}
            </div>
          );
        })}
      </div>

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
    </nav>
  );
}
