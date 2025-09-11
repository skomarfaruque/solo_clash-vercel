import ViewFullPriceButton from "./ViewFullPriceButton";
import SpinWinTradeCard from "./SpinWinTradeCard";

export default function SpinWinTrade() {
  return (
    <section
      className="justify-center text-center px-6 lg:px-20 py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        {/* Heading */}
        <h2
          className="font-bold text-5xl leading-tight text-white"
          style={{ width: "495px" }}
        >
          Spin. Win. Trade
        </h2>

        {/* Description */}
        <p
          className="font-normal text-lg leading-6 text-center mb-8"
          style={{ color: "#B7B7B7", width: "538px" }}
        >
          Daily spins, instant rewards - win Clash Coins, free tournament
          entries, discount codes, or even a funded account.
        </p>

        {/* SpinWinTrade Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        <div style={{ marginTop: "56px" }}>
          <ViewFullPriceButton text="Spin the Wheel" />
        </div>
      </div>
    </section>
  );
}
