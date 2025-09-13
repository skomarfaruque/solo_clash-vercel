import RulesCard from "./RulesCard";
import HomeButton from "../HomeButton";

export default function RulesSection() {
  return (
    <section
      className="justify-center text-center px-6 lg:px-20 py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <RulesCard
            iconPath="/rules_card_svg.svg"
            title="90/10 Profit split"
            description="Industry-leading payouts that reward performance."
          />

          {/* Card 2 */}
          <RulesCard
            iconPath="/why_choose_icon_two.svg"
            title="Clear risk rules with no hidden fees"
            description="Transparent by design."
          />

          {/* Card 3 */}
          <RulesCard
            iconPath="/why_choose_icon_three.svg"
            title="Multi-language support"
            description="Content & customer care in 6 languages."
          />
        </div>
      </div>
    </section>
  );
}
