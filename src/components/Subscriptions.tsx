import SubscriptionCard from "./SubscriptionCard";
import ViewFullPriceButton from "./ViewFullPriceButton";
import { useTranslations } from "next-intl";

export default function Subscriptions() {
  const t = useTranslations("accountPage.subscriptionsSection");
  const plans = t.raw("plans");
  const images = [
    "subscription_bg.svg",
    "subscription_active_bg.svg",
    "subscription_bg.svg",
  ];
  return (
    <section
      className="justify-center text-center px-4 sm:px-6 lg:px-20 py-10 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        {/* Heading */}
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-white max-w-full sm:max-w-xl">
          {t("heading")}
        </h2>

        {/* Description */}
        <p className="font-normal text-base sm:text-lg leading-6 text-center mb-8 text-[#B7B7B7] max-w-full sm:max-w-2xl">
          {t("description")}
        </p>

        {/* Subscriptions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {Array.isArray(plans) &&
            plans.map((plan, idx) => (
              <SubscriptionCard
                key={plan.title}
                backgroundImage={images[idx]}
                step={plan.step}
                title={plan.title}
                description={plan.description}
                isActive={idx === 1}
              />
            ))}
        </div>

        {/* View Full Price Button */}
        <div className="mt-10 sm:mt-14">
          <ViewFullPriceButton text={t("viewFullPricing")} />
        </div>
      </div>
    </section>
  );
}
