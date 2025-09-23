import CommissionCards from "./CommissionCards";
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
export default function CommissionSection() {
  return (
    <section
      className="justify-center text-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-16 md:gap-[80px] w-full max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white max-w-2xl mx-auto">
          Commission & Payout Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {spinDetailsCards.map((card, idx) => (
            <CommissionCards
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
