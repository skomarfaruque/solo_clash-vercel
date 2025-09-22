import FeatureCard from "./FeatureCard";
import HomeButton from "./HomeButton";

export default function FeaturesSection() {
  return (
    <section
      className="justify-center text-center px-4 sm:px-6 lg:px-20 py-10 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Top Badge */}
        <HomeButton>WHY CHOOSE US</HomeButton>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-white">
          Built for serious <br className="hidden md:block" />
          traders - simple, fair, fast.
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 */}
          <FeatureCard
            iconPath="/why_choose_icon_one.svg"
            title="90/10 Profit split"
            description="Industry-leading payouts that reward performance."
          />

          {/* Card 2 */}
          <FeatureCard
            iconPath="/why_choose_icon_two.svg"
            title="Clear risk rules with no hidden fees"
            description="Transparent by design."
          />

          {/* Card 3 */}
          <FeatureCard
            iconPath="/why_choose_icon_three.svg"
            title="Multi-language support"
            description="Content & customer care in 6 languages."
          />
        </div>
      </div>
    </section>
  );
}
