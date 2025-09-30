import SubscriptionButton from "../SubscriptionButton";
import SubscriptionActiveButton from "../SubscriptionActiveButton";
import SubscriptionCss from "../buttons/SubscriptionCss";

interface SubscriptionCardProps {
  readonly selectedCurrency: string;
}

export default function SubscriptionSectionCardNew({
  selectedCurrency,
}: SubscriptionCardProps) {
  const currencyIcon = (() => {
    switch (selectedCurrency) {
      case "usd":
        return "$";
      case "eur":
        return "€";
      case "try":
        return "₺";
      default:
        return "$";
    }
  })();

  console.log(currencyIcon); // Temporary usage to resolve 'never used' error

  return (
    <div
      className="rounded-2xl hover:scale-105 transition relative w-full max-w-full sm:max-w-[323px] h-[498px] sm:h-[498px] bg-cover bg-center bg-no-repeat hover:!bg-[url('/new_subscription_bg-active.svg')]"
      style={{
        backgroundImage: `url('/new_subscription_bg.svg')`,
      }}
    >
      <div className="border-b border-[rgba(255,255,255,0.06)] flex px-8 pt-8 pb-6 flex-col items-start">
        <h2 className="text-3xl font-bold text-cyan-400">{currencyIcon}50K</h2>
        <p className="text-sm text-gray-400 mt-1">Buying Power</p>
      </div>

      {/* Monthly price */}
      <p className="text-xl font-semibold border-b border-[rgba(255,255,255,0.06)] flex px-8 pt-[20px] pb-[20px]">
        $45/mo{" "}
        <sup
          className="font-normal text-xs sm:text-sm leading-6"
          style={{ color: "#B7B7B7" }}
        >
          {selectedCurrency}
        </sup>
      </p>

      {/* Details */}
      <p className="border-b border-[rgba(255,255,255,0.06)] flex px-8 pt-[20px] pb-[20px]">
        $3,000
      </p>
      <p className="border-b border-[rgba(255,255,255,0.06)] flex px-8 pt-[20px] pb-[20px]">
        5 Contracts
      </p>
      <p className="flex px-8 pt-[20px] pb-[20px]">$2,000</p>

      {/* Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <SubscriptionCss className="w-[259px] px-8">Select</SubscriptionCss>
      </div>
    </div>
  );
}
