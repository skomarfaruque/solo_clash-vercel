import ViewFullPriceButton from "./ViewFullPriceButton";
import SpinWinTradeCard from "./SpinWinTradeCard";

export default function SpinWinTrade() {
  return (
    <section
      className="justify-center text-center px-4 sm:px-6 lg:px-20 py-10 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6 max-w-[1320px] mx-auto">
        {/* Heading */}
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-white max-w-full sm:max-w-xl self-center">
          Spin. Win. Trade
        </h2>

        {/* Description */}
        <p className="font-normal text-base sm:text-lg leading-6 text-center mb-8 text-[#B7B7B7] max-w-full sm:max-w-2xl self-center">
          Daily spins, instant rewards - win Clash Coins, free tournament
          entries, discount codes, or even a funded account.
        </p>

        {/* SpinWinTrade Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 */}
          <SpinWinTradeCard
            backgroundImage="spin_win_trade_card_bg.svg"
            icon="spin_card_icon_one.svg"
            title="Daily Spins"
            description="Free spin every day"
          />

          {/* Card 2 */}
          <SpinWinTradeCard
            backgroundImage="spin_win_trade_card_bg.svg"
            icon="spin_card_icon_two.svg"
            title="Instant Rewards"
            description="Coins, discounts & more"
          />

          {/* Card 3 */}
          <SpinWinTradeCard
            backgroundImage="spin_win_trade_card_bg.svg"
            icon="spin_card_icon_three.svg"
            title="Funded Accounts"
            description="Win complete challenges"
          />
        </div>

        <div className="mt-10 sm:mt-14">
          <ViewFullPriceButton text="Spin the Wheel" />
        </div>
      </div>
    </section>
  );
}
