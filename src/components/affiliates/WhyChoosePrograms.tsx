import TiredRewardCards from "./TiredRewardCards";
import WhyChooseProgramCards from "./WhyChooseProgramCards";

const spinDetailsCards = [
  {
    iconPath: "/icons/rewards/why_choose_card_1.png",
    title: "Weekly Payouts",
    description:
      "Commissions paid every week with detailed tracking and reporting",
    priceRange: "$0 - $100",
  },
  {
    iconPath: "/icons/rewards/why_choose_card_2.png",
    title: "Performance Tracking",
    description:
      "Real-time dashboard showing referrals, conversions, and earnings.",
    priceRange: "$0 - $200",
  },
  {
    iconPath: "/icons/rewards/why_choose_card_3.png",
    title: "Exclusive Bonuses",
    description:
      "Free funded accounts and special perks as you advance through tiers.",
    priceRange: "$0 - $300",
  },
  {
    iconPath: "/icons/rewards/why_choose_card_4.png",
    title: "Fair & Transparent",
    description:
      "Clear terms with fraud protection and audit processes in place.",
    priceRange: "$0 - $400",
  },
];
export default function WhyChooseProgram() {
  return (
    <section
      className="justify-center text-center px-6 lg:px-20 py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        {/* Heading */}
        <h2 className="font-bold text-5xl leading-tight text-white">
          Why Choose Our Affiliate Program
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {spinDetailsCards.map((card, idx) => (
            <WhyChooseProgramCards
              key={idx}
              icon={card.iconPath}
              title={card.title}
              description={card.description}
              priceRange={card.priceRange}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
