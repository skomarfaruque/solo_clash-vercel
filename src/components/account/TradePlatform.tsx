"use client";
import Heading from "../common/Heading";

import TradePlatformCard from "./TradePlatformCard";
import { useTranslations } from "next-intl";

export default function TradePlatform() {
  const tPlatform = useTranslations("accountPage.tradePlatform");

  const brands = [
    {
      name: "Volumetrica",
      logo: "/icons/platform/volume.png",
      width: 229,
      height: 56,
    },
    {
      name: "Volbook",
      logo: "/icons/platform/volbook.png",
      width: 128,
      height: 56,
    },
    {
      name: "Volsys",
      logo: "/icons/platform/volys.png",
      width: 152,
      height: 55,
    },
  ];
  return (
    <section
      className="justify-center text-center px-4 sm:px-6 lg:px-20 py-10 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        {/* Heading */}
        <Heading>{tPlatform("heading")}</Heading>

        <TradePlatformCard brands={brands} />
      </div>
    </section>
  );
}
