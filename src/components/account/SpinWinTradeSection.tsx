import ViewFullPriceButton from "../ViewFullPriceButton";
import SpinWinTradeCard from "./SpinWinTradeCard";
import { useTranslations } from "next-intl";

export default function SpinWinTradeSection() {
  const t = useTranslations("accountPage.spinWinTradeSection");
  const cards = t.raw("cards");
  const icons = [
    "spin_card_icon_one.svg",
    "spin_card_icon_two.svg",
    "spin_card_icon_three.svg",
  ];
  return (
    <section
      className="justify-center text-center px-4 sm:px-6 lg:px-20 py-10 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6 max-w-[1320px] mx-auto">
        {/* Heading */}
        <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-white max-w-full sm:max-w-xl self-center">
          {t("heading")}
        </h2>

        {/* Description */}
        <p className="font-normal text-base sm:text-lg leading-6 text-center mb-8 text-[#B7B7B7] max-w-full sm:max-w-2xl self-center">
          {t("description")}
        </p>

        {/* SpinWinTrade Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {Array.isArray(cards) &&
            cards.map((card, idx) => (
              <SpinWinTradeCard
                key={card.title}
                backgroundImage="spin_win_trade_card_bg.svg"
                icon={icons[idx]}
                title={card.title}
                description={card.description}
              />
            ))}
        </div>

        <div className="mt-10 sm:mt-14">
          <ViewFullPriceButton text={t("button")} />
        </div>
      </div>
    </section>
  );
}
