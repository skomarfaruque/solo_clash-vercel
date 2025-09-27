import Banner from "../../../components/Banner";
import { useTranslations } from "next-intl";

import FaqHeroSection from "./FaqHeroSection";

import FaqPageFaq from "@/components/faq/FaqPageFaq";

export const metadata = {
  title: "Faq | Clash Shop",
  description:
    "Read the official rules and guidelines before participating in Clash Shop challenges.",
};

export default function FaqPage() {
  const t = useTranslations("faqPage");

  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      <FaqHeroSection />

      <FaqPageFaq />

      <Banner
        page="clash-shop"
        bannerIconPath="/icons/spins/shop_banner_icon.png"
        title={t("banner.title")}
        description={t("banner.description")}
      />
    </main>
  );
}
