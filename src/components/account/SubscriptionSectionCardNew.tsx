import SubscriptionCss from "../buttons/SubscriptionCss";
import { useRouter } from "next/navigation";

interface Subscription {
  id: number;
  program_id: number;
  program_name: string;
  subscription_name: string;
  subscription_value: number;
  monthly_price: number;
  profit_target: number;
  maximum_position: number;
  maximum_loss_limit: number;
  amount: number;
}

interface SubscriptionCardProps {
  readonly selectedCurrency: string;
  readonly subscription?: Subscription;
}

export default function SubscriptionSectionCardNew({
  selectedCurrency,
  subscription,
}: SubscriptionCardProps) {
  const router = useRouter();

  const handleSelectClick = () => {
    // Save subscription data to localStorage
    if (subscription) {
      localStorage.setItem(
        "selectedSubscription",
        JSON.stringify(subscription)
      );
      console.log("Subscription saved to localStorage:", subscription);
    }

    // Check if user is logged in
    const userToken = localStorage.getItem("adminToken");

    if (userToken) {
      // User is logged in, redirect to account page
      router.push("/account");
    } else {
      // User is not logged in, redirect to signin page
      router.push("/login");
    }
  };

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

  return (
    <div
      className="rounded-2xl hover:scale-105 transition relative w-full max-w-full sm:max-w-[323px] h-[498px] sm:h-[498px] bg-cover bg-center bg-no-repeat hover:!bg-[url('/new_subscription_bg-active.svg')]"
      style={{
        backgroundImage: `url('/new_subscription_bg.svg')`,
      }}
    >
      <div className="border-b border-[rgba(255,255,255,0.06)] flex px-8 pt-8 pb-6 flex-col items-start">
        <h2 className="text-3xl font-bold text-cyan-400">
          {currencyIcon}
          {subscription?.subscription_value
            ? `${subscription.subscription_value / 1000}K`
            : "50K"}
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          {subscription?.subscription_name || "Buying Power"}
        </p>
      </div>

      {/* Monthly price */}
      <div className="border-b border-[rgba(255,255,255,0.06)] flex justify-between items-center px-8 pt-[20px] pb-[20px]">
        <p className="text-xs text-gray-500 lg:hidden">Monthly Price</p>
        <p className="text-xl font-semibold flex lg:block">
          {currencyIcon}
          {(subscription?.monthly_price ?? 45000) / 1000}k /mo{" "}
          <sup
            className="font-normal text-xs sm:text-sm leading-6"
            style={{ color: "#B7B7B7" }}
          >
            {selectedCurrency}
          </sup>
        </p>
      </div>

      {/* Details */}
      <div className="border-b border-[rgba(255,255,255,0.06)] flex justify-between items-center px-8 pt-[20px] pb-[20px]">
        <p className="text-xs text-gray-500 lg:hidden">Min Profit</p>
        <p className="lg:block">
          {currencyIcon}
          {subscription?.profit_target
            ? `${subscription.profit_target / 1000}K`
            : "3K"}
        </p>
      </div>
      <div className="border-b border-[rgba(255,255,255,0.06)] flex justify-between items-center px-8 pt-[20px] pb-[20px]">
        <p className="text-xs text-gray-500 lg:hidden">Max Contracts</p>
        <p className="lg:block">
          {subscription?.maximum_position
            ? `${subscription.maximum_position / 1000}K`
            : "5"}{" "}
          Contracts
        </p>
      </div>
      <div className="flex justify-between items-center px-8 pt-[20px] pb-[20px]">
        <p className="text-xs text-gray-500 lg:hidden">Max Loss</p>
        <p className="lg:block">
          {currencyIcon}
          {subscription?.maximum_loss_limit
            ? `${subscription.maximum_loss_limit / 1000}K`
            : "2K"}
        </p>
      </div>

      {/* Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button onClick={handleSelectClick}>
          <SubscriptionCss className="w-[259px] px-8">Select</SubscriptionCss>
        </button>
      </div>
    </div>
  );
}
