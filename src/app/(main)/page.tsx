import HeroSection from "@/components/account/HeroSection";
import WhyChooseUsSection from "@/components/account/WhyChooseUsSection";
import HowItWorksSection from "@/components/account/HowItWorksSection";
import SpinWinTradeSection from "@/components/account/SpinWinTradeSection";
import FaqSection from "@/components/account/FaqSection";
import Banner from "@/components/Banner";
import { useTranslations } from "next-intl";
import SubscriptionsSectionNew from "@/components/account/SubscriptionsSectionNew";

export default function Home() {
  const t = useTranslations("accountPage");

  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      <HeroSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <SubscriptionsSectionNew />
      <SpinWinTradeSection />
      <FaqSection />
      <Banner page="account" title={t("banner.title")} />
    </main>
  );
}
