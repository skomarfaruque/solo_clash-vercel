"use client";
import { useRouter } from "next/navigation";
import BlackButton from "../buttons/BlackButton";
import Heading from "../common/Heading";

import SpinWinTradeCard from "./SpinWinTradeCard";
import TradePlatformCard from "./TradePlatformCard";
import { useTranslations } from "next-intl";

export default function TradePlatform() {
  const t = useTranslations("accountPage.spinWinTradeSection");
  const cards = t.raw("cards");
  const icons = [
    "spin_card_icon_one.svg",
    "spin_card_icon_two.svg",
    "spin_card_icon_three.svg",
  ];
  const router = useRouter();
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
      width: 157,
      height: 52,
    },
    {
      name: "Volsys",
      logo: "/icons/platform/volys.png",
      width: 160,
      height: 47,
    },
  ];
  return (
    <section
      className="justify-center text-center px-4 sm:px-6 lg:px-20 py-10 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        {/* Heading */}
        <Heading>Trade with our favorite platforms</Heading>

        <TradePlatformCard brands={brands} />
      </div>
    </section>
  );
}
