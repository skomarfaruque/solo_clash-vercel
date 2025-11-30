"use client";
import { useRouter } from "next/navigation";
import SvgButton2 from "../buttons/svgButton2";

import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations();
  const router = useRouter(); // Use the hook here
  return (
    <section
      className="justify-center text-center px-4 sm:px-6 lg:px-20 min-h-[70vh]"
      style={{
        backgroundImage: "url('/hero_bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto pt-32 md:pt-[180px] lg:pt-[307px] pb-20 md:pb-[200px] lg:pb-[343px]">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gray-900/80 text-xs sm:text-sm mb-4 sm:mb-6">
          <span className="text-orange-400">⚡</span>
          <span>{t("accountPage.heroSection.profitSplit")}</span>
        </div>

        <h1 className="font-playfair text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 text-white">
          {t("accountPage.heroSection.headline1")} <br />
          <span className="bg-gradient-to-r from-blue-400 via-sky-500 to-orange-500 bg-clip-text text-transparent">
            {t("accountPage.heroSection.headline2")}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 px-2">
          {t("accountPage.heroSection.description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4">
          <SvgButton2
            label={t("accountPage.heroSection.startNow")}
            iconSrc="/arrow_right.png"
            onClick={() => {
              router.push("#subscriptions");
            }}
            radius={100}
            padding="20px"
          />
          <span className="text-gray-300 hover:text-white transition cursor-pointer">
            <a href="./#subscriptions">
            {t("accountPage.heroSection.seeAccountTypes")}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
