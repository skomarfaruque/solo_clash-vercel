import FeaturesSection from "../../components/FeaturesSection";
import HeroSection from "../../components/HeroSection";
import HowItWorks from "../../components/HowItWorks";
import Subscriptions from "../../components/Subscriptions";
import SpinWinTrade from "../../components/SpinWinTrade";
import Faq from "../../components/Faq";
import Banner from "../../components/Banner";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("accountPage");

  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Subscriptions />
      <SpinWinTrade />
      <Faq />
      <Banner page="account" title={t("banner.title")} />
    </main>
  );
}
