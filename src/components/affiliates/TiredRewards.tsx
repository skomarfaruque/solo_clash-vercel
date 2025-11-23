import { useTranslations } from "next-intl";

import TiredRewardCards from "./TiredRewardCards";
import Heading from "../common/Heading";

const spinDetailsCards = [
  {
    iconPath: "/icons/coins_card/coin_card_1.png",
    title: "Level 1 Starter",
    description: "Top 10 weekly rankings earn 50-200 coins",
    priceRange: "$0 - $100",
    requirements: "Sign up",
  },
  {
    iconPath: "/icons/coins_card/coin_card_2.png",
    title: "Reach Level 2",
    description: "Earn coins based on tournament performance",
    priceRange: "$0 - $200",
    requirements: "50 referred traders",
  },
  {
    iconPath: "/icons/coins_card/coin_card_3.png",
    title: "Level 3 - Pro",
    description: "Daily free spin with bonus coin rewards",
    priceRange: "$0 - $300",
    requirements: "100 referred traders",
  },
  {
    iconPath: "/icons/coins_card/coin_card_4.png",
    title: "Reach Level 4",
    description: "Bonus coins for passing evaluations",
    priceRange: "$0 - $400",
    requirements: "200 referred traders",
  },
  {
    iconPath: "/icons/coins_card/coin_card_4.png",
    title: "Level 5 - Inner Circle",
    description: "Bonus coins for passing evaluations",
    priceRange: "$0 - $400",
    requirements: "Invitation by the firm",
  },
  {
    iconPath: "/icons/coins_card/coin_card_4.png",
    title: "Legends Club",
    description: "Bonus coins for passing evaluations",
    priceRange: "$0 - $400",
    requirements: "Handpicked by founders",
  },
];
export default function TiredRewards() {
  const t = useTranslations("tiredRewards");

  return (
    <section
      className="justify-center text-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-6xl mx-auto">
        {/* Heading */}
        <Heading>{t("heading")}</Heading>

        {/* Description */}
        <p
          className="text-gray-400 text-base sm:text-lg leading-6 mt-4 max-w-xl mx-auto"
          style={{ color: "#B7B7B7" }}
        >
          {t("description")}
        </p>

        {/* SpinWinTrade Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mt-[56px]">
          {spinDetailsCards.map((card, idx) => (
            <TiredRewardCards
              key={idx}
              icon={card.iconPath}
              title={card.title}
              description="Free spin every day"
              priceRange={card.priceRange}
              requirements={card.requirements}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
