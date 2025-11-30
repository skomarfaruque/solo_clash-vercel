"use client";

import { useTranslations } from "next-intl";

import Heading from "../common/Heading";
import CurrencySelector from "../CurrencySelector";
import { useEffect, useState } from "react";
import SubscriptionSectionCardNew from "./SubscriptionSectionCardNew";

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

interface SubscriptionsSectionNewProps {
  subscriptions?: Subscription[];
}

export default function SubscriptionsSectionNew({
  subscriptions: initialSubscriptions = [],
}: SubscriptionsSectionNewProps = {}) {
  const t = useTranslations("accountPage.subscriptionsSection");
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [subscriptions, setSubscriptions] =
    useState<Subscription[]>(initialSubscriptions);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        setIsLoading(true);
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

        if (data.success && data.data?.items) {
          setSubscriptions(data.data.items);
        } else {
          console.log("No subscriptions in response");
        }
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubscriptions();
  }, []);

  useEffect(() => {
    console.log("Current subscriptions:", subscriptions);
    // Check if a currency is already set in cookies
    const match = document.cookie.match(new RegExp("(^| )currency=([^;]+)"));
    if (match) {
      setSelectedCurrency(match[2]);
    }
  }, [subscriptions]);
  const handleCurrencyChange = (currency: string) => {
    // Implement any additional logic needed when currency changes
    document.cookie = `currency=${currency}; path=/; max-age=31536000`;
    setSelectedCurrency(currency);
  };

  return (
    <section
      id="subscriptions"
      className="justify-center text-center px-4 sm:px-6 lg:px-20 py-10 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        {/* Heading */}
        <Heading>{t("heading")}</Heading>

        {/* Description */}
        <p className="font-normal text-base sm:text-lg leading-6 text-center mb-8 text-[#B7B7B7] max-w-full sm:max-w-2xl">
          {t("description")}
        </p>
        {/* Currency Selector */}
        {/*<CurrencySelector
          className="mb-8"
          selectedCurrency={selectedCurrency}
          onCurrencySelect={(currency) => handleCurrencyChange(currency)}
        />  */}

        {/* Labels and Subscriptions Container */}
        <div className="flex gap-8 w-full max-w-7xl">
          {/* Label Buttons - Left Side (Hidden on Mobile) */}
          <div className="hidden lg:flex flex-col gap-4 justify-start flex-shrink-0 mt-[130px]">
            {[
              "Monthly Price:",
              "Profit Target:",
              "Maximum Position Size:",
              "Maximum Loss Limit:",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center rounded-[12px] h-[48px] px-3 py-3"
                style={{
                  background:
                    "linear-gradient(306.21deg, #01090B 39.33%, #07252D 99.95%)",
                  backdropFilter: "blur(17px)",
                  boxSizing: "border-box",
                }}
              >
                <span className="text-sm font-medium text-gray-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Subscriptions Grid - Right Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full">
            {isLoading ? (
              // Show 3 loading skeleton cards
              Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={`skeleton-${idx}`}
                  className="rounded-[12px] overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(306.21deg, #01090B 39.33%, #07252D 99.95%)",
                    backdropFilter: "blur(17px)",
                    boxSizing: "border-box",
                  }}
                >
                  <div className="p-6 space-y-4">
                    {/* Title skeleton */}
                    <div className="h-6 bg-gray-700 rounded animate-pulse w-3/4"></div>

                    {/* Value skeleton */}
                    <div className="h-8 bg-gray-700 rounded animate-pulse w-1/2"></div>

                    {/* Details skeleton */}
                    <div className="space-y-2 pt-2">
                      <div className="h-4 bg-gray-700 rounded animate-pulse w-full"></div>
                      <div className="h-4 bg-gray-700 rounded animate-pulse w-5/6"></div>
                      <div className="h-4 bg-gray-700 rounded animate-pulse w-4/5"></div>
                    </div>

                    {/* Button skeleton */}
                    <div className="pt-4">
                      <div className="h-10 bg-gray-700 rounded animate-pulse w-full"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : Array.isArray(subscriptions) && subscriptions.length > 0 ? (
              subscriptions.map((subscription) => (
                <SubscriptionSectionCardNew
                  key={subscription.id}
                  selectedCurrency={selectedCurrency}
                  subscription={subscription}
                />
              ))
            ) : (
              <p className="text-gray-400 col-span-full">
                No subscriptions available
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
