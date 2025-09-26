import HeroSection from "../../../components/clash-shop/HeroSection";
import SpinDetailsSection from "../../../components/clash-shop/SpinDetailsSection";
import Banner from "../../../components/Banner";
import HowToEarnCoins from "@/components/clash-shop/HowToEarnCoins";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Rules & Guidelines | Clash Shop",
  description:
    "Read the official rules and guidelines before participating in Clash Shop challenges.",
};

export default function RulesPage() {
  const t = useTranslations();
  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      <HeroSection />
      <SpinDetailsSection />
      <HowToEarnCoins />

      <Banner
        page="clash-shop"
        bannerIconPath="/icons/spins/shop_banner_icon.png"
        title={t("clashShopPage.banner.title")}
        description={t("clashShopPage.banner.description")}
      />
    </main>
  );
}
