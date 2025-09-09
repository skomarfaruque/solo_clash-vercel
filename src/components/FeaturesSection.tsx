import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section
      className="justify-center text-center px-6 lg:px-20 py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Top Badge */}
        <div className="inline-block px-4 py-1 mb-6 text-sm rounded-full border border-orange-500 text-orange-400">
          WHY CHOOSE US →
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Built for serious <br className="hidden md:block" />
          traders - simple, fair, fast.
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
