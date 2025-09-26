import EarnCoinCard from "./EarnCoinCard";
import { useTranslations } from "next-intl";
export default function HowToEarnCoins() {
  const t = useTranslations();
  const section = t.raw("howToEarnCoinsSection");
  type Card = {
    title: string;
    description: string;
    priceRange: string;
  };
  const cards: Card[] = section.cards;
  const iconPaths = [
    "/icons/coins_card/coin_card_1.png",
    "/icons/coins_card/coin_card_2.png",
    "/icons/coins_card/coin_card_3.png",
    "/icons/coins_card/coin_card_4.png",
  ];

  return (
    <section
      className="justify-center text-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-[1320px] mx-auto">
        {/* Heading */}
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white max-w-xl mx-auto">
          {section.heading}
        </h2>

        {/* Description */}
        <p
          className="font-normal text-base sm:text-lg leading-6 text-center mb-8 max-w-xl mx-auto"
          style={{ color: "#B7B7B7" }}
        >
          {section.description}
        </p>

        {/* Earn Coins Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {cards.map((card: Card, idx: number) => (
            <EarnCoinCard
              key={idx}
              icon={iconPaths[idx]}
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
