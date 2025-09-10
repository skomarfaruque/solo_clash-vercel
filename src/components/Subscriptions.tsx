import HomeButton from "./HomeButton";
import SubscriptionCard from "./SubscriptionCard";
import SubscriptionActiveCard from "./SubscriptionActiveCard";
import ViewFullPriceButton from "./ViewFullPriceButton";

export default function Subscriptions() {
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
          Accounts built for scalable trading
        </h2>

        {/* Description */}
        <p
          className="font-normal text-lg leading-6 text-center mb-8"
          style={{ color: "#B7B7B7", width: "538px" }}
        >
          Pick the account that matches your style - every plan includes access
          to Volumetrica (VolSys & VolBook).
        </p>

        {/* Subscriptions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <SubscriptionCard
            backgroundImage="subscription_bg.svg"
            step="Basic"
            title="Starter Plan"
            description="Perfect for beginners looking to start their trading journey."
            isActive={false}
          />

          {/* Card 2 - Active */}
          <SubscriptionCard
            backgroundImage="subscription_active_bg.svg"
            step="Pro"
            title="Professional Plan"
            description="Advanced features for experienced traders who need more tools."
            isActive={true}
          />

          {/* Card 3 */}
          <SubscriptionCard
            backgroundImage="subscription_bg.svg"
            step="Elite"
            title="Elite Plan"
            description="Premium access with all features and priority support."
            isActive={false}
          />
        </div>

        {/* View Full Price Button */}
        <div style={{ marginTop: "56px" }}>
          <ViewFullPriceButton text="View full pricing" />
        </div>
      </div>
    </section>
  );
}
