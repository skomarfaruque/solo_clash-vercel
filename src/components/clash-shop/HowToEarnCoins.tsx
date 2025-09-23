import EarnCoinCard from "./EarnCoinCard";

const spinDetailsCards = [
  {
    iconPath: "/icons/coins_card/coin_card_1.png",
    title: "Leaderboard Placements",
    description: "Top 10 weekly rankings earn 50-200 coins",
    priceRange: "$0 - $100",
  },
  {
    iconPath: "/icons/coins_card/coin_card_2.png",
    title: "Tournament Points",
    description: "Earn coins based on tournament performance",
    priceRange: "$0 - $200",
  },
  {
    iconPath: "/icons/coins_card/coin_card_3.png",
    title: "Lucky Wheel",
    description: "Daily free spin with bonus coin rewards",
    priceRange: "$0 - $300",
  },
  {
    iconPath: "/icons/coins_card/coin_card_4.png",
    title: "Challenge Completion",
    description: "Bonus coins for passing evaluations",
    priceRange: "$0 - $400",
  },
];
export default function HowToEarnCoins() {
  return (
    <section
      className="justify-center text-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-[1320px] mx-auto">
        {/* Heading */}
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white max-w-xl mx-auto">
          How to Earn Coins
        </h2>

        {/* Description */}
        <p
          className="font-normal text-base sm:text-lg leading-6 text-center mb-8 max-w-xl mx-auto"
          style={{ color: "#B7B7B7" }}
        >
          Multiple ways to earn Clash Coins and unlock rewards.
        </p>

        {/* SpinWinTrade Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {spinDetailsCards.map((card, idx) => (
            <EarnCoinCard
              key={idx}
              icon={card.iconPath}
              title={card.title}
              description="Free spin every day"
              priceRange={card.priceRange}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
