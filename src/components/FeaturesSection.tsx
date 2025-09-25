import FeatureCard from "./FeatureCard";
import HomeButton from "./HomeButton";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations();
  return (
    <section
      className="justify-center text-center px-4 sm:px-6 lg:px-20 py-10 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Top Badge */}
        <HomeButton>{t("accountPage.featureSection.badge")}</HomeButton>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-white">
          {t("accountPage.featureSection.heading1")}{" "}
          <br className="hidden md:block" />
          {t("accountPage.featureSection.heading2")}
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 */}
          <FeatureCard
            iconPath="/why_choose_icon_one.svg"
            title={t("accountPage.featureSection.card1Title")}
            description={t("accountPage.featureSection.card1Desc")}
          />

          {/* Card 2 */}
          <FeatureCard
            iconPath="/why_choose_icon_two.svg"
            title={t("accountPage.featureSection.card2Title")}
            description={t("accountPage.featureSection.card2Desc")}
          />

          {/* Card 3 */}
          <FeatureCard
            iconPath="/why_choose_icon_three.svg"
            title={t("accountPage.featureSection.card3Title")}
            description={t("accountPage.featureSection.card3Desc")}
          />
        </div>
      </div>
    </section>
  );
}
