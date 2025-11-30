"use client";

import SvgButton2 from "@/components/buttons/svgButton2";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

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

export default function ChooseAccount() {
  const t = useTranslations("chooseAccount");
  const router = useRouter();
  const [platform, setPlatform] = useState("VolSys");
  const [accountSize, setAccountSize] = useState("$100,000");
  const [profitSplit, setProfitSplit] = useState("90/10");
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [selectedSubscriptionId, setSelectedSubscriptionId] = useState<
    number | null
  >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("adminToken");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/subscriptions?limit=3`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              ...(token && { Authorization: `Bearer ${token}` }),
            },
          }
        );

        const data = await response.json();
        console.log("Subscriptions API response:", data);

        if (data.success && data.data?.items) {
          setSubscriptions(data.data.items);

          // Get selected subscription from localStorage
          const savedSubscription = localStorage.getItem(
            "selectedSubscription"
          );
          if (savedSubscription) {
            const parsed = JSON.parse(savedSubscription);
            console.log("Selected subscription from localStorage:", parsed);

            // Find matching subscription by subscription_value
            const matchedSubscription = data.data.items.find(
              (sub: Subscription) =>
                sub.subscription_value === parsed.subscription_value
            );

            if (matchedSubscription) {
              setAccountSize(
                `$${matchedSubscription.subscription_value.toLocaleString()}`
              );
              setSelectedSubscriptionId(matchedSubscription.id);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, []);

  // Generate account size options from fetched subscriptions
  const accountSizeOptions = subscriptions.map(
    (sub) => `$${sub.subscription_value.toLocaleString()}`
  );

  return (
    <section
      className="justify-center text-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 items-center flex py-20"
      style={{
        backgroundImage: "url('/payment_page_bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {/* Content container */}
      <div
        className="z-10 mx-auto mt-20 shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] h-auto"
        style={{
          background:
            "linear-gradient(306.21deg, #000000 39.33%, #1F1E1E 99.95%)",
          backdropFilter: "blur(17px)",
          borderRadius: "24px",
        }}
      >
        <div className="flex flex-col justify-between h-full gap-8">
          <div>
            <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">
              {t("chooseYourAccount")}
            </h2>

            {/* Platforms */}
            <div className="flex flex-col mb-6 sm:mb-8 text-left gap-4 sm:gap-6">
              <h3 className="font-medium text-sm sm:text-base md:text-lg">
                {t("platforms")}
              </h3>
              <div className="flex gap-2 sm:gap-3">
                {["VolSys", "VolBook"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setPlatform(item)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:cursor-pointer ${
                      platform === item
                        ? "bg-white text-black"
                        : "bg-neutral-800 text-gray-400"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Account Size */}
            <div className="flex flex-col mb-6 sm:mb-8 text-left gap-4 sm:gap-6">
              <h3 className="font-medium text-sm sm:text-base md:text-lg">
                {t("accountSize")}
              </h3>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                {loading ? (
                  // Show skeleton loaders
                  Array.from({ length: 3 }).map((_, idx) => (
                    <div
                      key={`skeleton-${idx}`}
                      className="px-3 sm:px-4 py-2 rounded-lg bg-neutral-800 animate-pulse"
                      style={{ minWidth: "100px", height: "32px" }}
                    ></div>
                  ))
                ) : subscriptions.length > 0 ? (
                  subscriptions.map((subscription) => {
                    const displayValue = `$${subscription.subscription_value.toLocaleString()}`;

                    return (
                      <button
                        key={subscription.id}
                        onClick={() => {
                          setAccountSize(displayValue);
                          setSelectedSubscriptionId(subscription.id);
                        }}
                        className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:cursor-pointer ${
                          accountSize === displayValue
                            ? "bg-white text-black"
                            : "bg-neutral-800 text-gray-400"
                        }`}
                      >
                        {`${subscription.subscription_value / 1000}k`}
                      </button>
                    );
                  })
                ) : (
                  <div className="text-gray-400">
                    No account sizes available
                  </div>
                )}
              </div>
            </div>

            {/* Profit Split */}
            <div className="flex flex-col mb-6 sm:mb-8 text-left gap-4 sm:gap-6">
              <h3 className="font-medium text-sm sm:text-base md:text-lg">
                {t("profitSplit")}
              </h3>
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={() => setProfitSplit("90/10")}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium ${
                    profitSplit === "90/10"
                      ? "bg-white text-black"
                      : "bg-neutral-800 text-gray-400"
                  }`}
                >
                  90/10
                </button>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex justify-end">
            <SvgButton2
              label={t("continue")}
              textStyle="font-medium text-sm sm:text-base"
              onClick={() => {
                const queryParams = new URLSearchParams({
                  platform,
                });
                router.push(`/payment?${queryParams.toString()}`);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
