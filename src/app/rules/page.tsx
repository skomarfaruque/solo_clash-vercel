// app/rules/page.tsx (Next.js 13+ App Router)

import FeaturesSection from "../../components/FeaturesSection";
import HeroSection from "../../components/rules/HeroSection";
import HowItWorks from "../../components/HowItWorks";
import Subscriptions from "../../components/Subscriptions";
import SpinWinTrade from "../../components/SpinWinTrade";
import Faq from "../../components/Faq";
import Banner from "../../components/Banner";

export default function RulesPage() {
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
      <Banner />
    </main>
  );
}
