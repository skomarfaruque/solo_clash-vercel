"use client";
import HeroSection from "@/components/account/HeroSection";
import WhyChooseUsSection from "@/components/account/WhyChooseUsSection";
import ChallengeSection from "@/components/account/ChallengeSection";
import HowItWorksSection from "@/components/account/HowItWorksSection";
import SpinWinTradeSection from "@/components/account/SpinWinTradeSection";
import FaqSection from "@/components/account/FaqSection";
import Banner from "@/components/Banner";
import SubscriptionsSectionNew from "@/components/account/SubscriptionsSectionNew";
import TradePlatform from "@/components/account/TradePlatform";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
export default function Home() {
  const router = useRouter();
  const t = useTranslations("bannerDetails");
  return (
    <main className="text-white" style={{ backgroundColor: "#030303" }}>
      <HeroSection />
      <SubscriptionsSectionNew />
      <WhyChooseUsSection />
      <ChallengeSection />

      <TradePlatform />
      <HowItWorksSection />

      <SpinWinTradeSection />
      <FaqSection />
      <Banner
        page="account"
        title={t("readyToTrade")}
        buttonTitle={t("getStarted")}
        onClick={() => {
          // scroll to /account/challenge
          router.push("#subscriptions");
        }}
      />
    </main>
  );
}
