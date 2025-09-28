import HeroSection from "../../../components/rules/HeroSection";

import Banner from "../../../components/Banner";
import RulesSection from "@/components/rules/RulesSection";

export default function RulesPage() {
  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      <HeroSection />
      <RulesSection />

      <Banner
        page="rules"
        bannerIconPath="/icons/rules/rules_banner_icon.png"
        title="Ready to accept the challenge?"
        description="By proceeding, you confirm that you have read, understood, and agree to abide by all trading rules and policies outlined above."
      />
    </main>
  );
}
